from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from . import models, serializers
from jin2gram.users import models as user_models
from jin2gram.users import serializers as user_serializers
from jin2gram.notifications import views as notification_views

class Feed(APIView):
    
    def get(self, request, format=None):

        user = request.user
        following_users = user.following.all()

        image_list = []

        # 내가 follow하는 사람들의 이미지
        for following_users in following_users:

            # 2개의 이미지만 가져온다
            user_image = following_users.images.all()[:2]

            for image in user_image:
                image_list.append(image)

        # 내가 올린 이미지
        my_images = user.images.all()[:2]

        for image in my_images:
            image_list.append(image)

        # sorted_list = sorted(image_list, key=get_key, reverse=True)

        # 람다식
        sorted_list = sorted(image_list, key=lambda image: image.created_at, reverse=True)

        serializer = serializers.ImageSerializer(sorted_list, many=True)

        return Response(serializer.data)

def get_key(image):
    return image.created_at

class LikeImage(APIView):

    def get(self, request, image_id, format=None):

        likes = models.Like.objects.filter(img__id=image_id)
        like_creator_ids = likes.values('creator_id')
        users = user_models.User.objects.filter(id__in=like_creator_ids)

        serializer = user_serializers.ListUserSerializer(users, many=True)

        return Response(data=serializer.data, status=status.HTTP_200_OK)


    def post(self, request, image_id, format=None):

        user = request.user

        try:
            found_image = models.Image.objects.get(id=image_id)
        except models.Image.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        try:
            preexisiting_like = models.Like.objects.get(
                creator=user,
                img=found_image
            )
            return Response(status=status.HTTP_304_NOT_MODIFIED)

        except models.Like.DoesNotExist:
            new_like = models.Like.objects.create(
                creator=user,
                img=found_image
            )
            new_like.save()
            notification_views.create_notification(user, found_image.creator, 'like', found_image)
            
            return Response(status=status.HTTP_201_CREATED)


class UnLikeImage(APIView):

    def delete(self, request, image_id, format=None):

        user = request.user

        try:
            found_image = models.Image.objects.get(id=image_id)
        except models.Image.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        try:
            preexisiting_like = models.Like.objects.get(
                creator=user,
                img=found_image
            )
            preexisiting_like.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)

        except models.Like.DoesNotExist:
            new_like = models.Like.objects.create(
                creator=user,
                img=found_image
            )
            return Response(status=status.HTTP_304_NOT_MODIFIED)

class CommentImage(APIView):
    
    def post(self, request, image_id, format=None):
        
        user = request.user

        try:
            found_image = models.Image.objects.get(id=image_id)
        except models.Image.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = serializers.CommentSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save(
                creator=user,
                img=found_image
            )
            # notification_views.create_notification(user, found_image.creator, 'comment', found_image, request.data['message'])
            notification_views.create_notification(user, found_image.creator, 'comment', found_image, serializer.data['message'])
            return Response(data=serializer.data, status=status.HTTP_201_CREATED)

        else:
            return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class Comment(APIView):

    def delete(self, request, comment_id, format=None):

        user = request.user
        
        try:
            commnet = models.Comment.objects.get(id=comment_id, creator=user)
            commnet.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)

        except models.Comment.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)


class ModerateComment(APIView):
    
    # 내가 업로드한 이미지에 달린 댓글을 삭제할 때
    def delete(self, request, image_id, comment_id, format=None):

        user = request.user
        
        try:
            delete_comment = models.Comment.objects.get(id=comment_id, img__id=image_id, img__creator=user)
            delete_comment.delete()

        except models.Comment.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        return Response(status=status.HTTP_204_NO_CONTENT)


class Search(APIView):

    def get(self, request, format=None):

        hashtags = request.query_params.get('hashtags', None)

        if hashtags is not None:
            
            hashtags = hashtags.split(',')
            images = models.Image.objects.filter(tags__name__in=hashtags).distinct()
            serializer = serializers.UserProfileImageSerializer(images, many=True)

            return Response(data=serializer.data, status=status.HTTP_200_OK)

        else:
            
            return Response(status=status.HTTP_400_BAD_REQUEST)


class DetailImage(APIView):

    def found_own_image(self, image_id, user):

        try:
            image = models.Image.objects.get(id=image_id, creator=user)
            return image

        except models.Image.DoesNotExist:
            return None

    def get(self, request, image_id, format=None):

        try:
            image = models.Image.objects.get(id=image_id)
            serializer = serializers.ImageSerializer(image)
            
            return Response(data=serializer.data, status=status.HTTP_200_OK)

        except models.Image.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def put(self, requeset, image_id, format=None):

        user = requeset.user

        image = self.found_own_image(image_id, user)

        if image is None:
            return Response(status=status.HTTP_401_UNAUTHORIZED)

        serializer = serializers.InputImageSerializer(image, data=requeset.data, partial=True)

        if serializer.is_valid():
            serializer.save(creator=user)
            return Response(data=serializer.data, status=status.HTTP_200_OK)
        
        else:
            return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, image_id, format=None):
        
        user = request.user

        image = self.found_own_image(image_id, user)

        if image is None:
            return Response(status=status.HTTP_401_UNAUTHORIZED)

        image.delete()

        return Response(status=status.HTTP_204_NO_CONTENT)
