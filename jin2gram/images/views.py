from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from . import models, serializers

class Feed(APIView):
    
    def get(self, request, format=None):

        user = request.user
        following_users = user.following.all()

        image_list = []

        for following_users in following_users:

            # 2개의 이미지만 가져온다
            user_image = following_users.images.all()[:2]

            for image in user_image:
                image_list.append(image)

        # sorted_list = sorted(image_list, key=get_key, reverse=True)

        # 람다식
        sorted_list = sorted(image_list, key=lambda image: image.created_at, reverse=True)

        serializer = serializers.ImageSerializer(sorted_list, many=True)

        return Response(serializer.data)

def get_key(image):
    return image.created_at

class LikeImage(APIView):
    
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
            print('OK!! COOL!!')
            serializer.save(
                creator=user,
                img=found_image
            )
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


class Search(APIView):

    def get(self, request, format=None):

        hashtags = request.query_params.get('hashtags', None)
        print(hashtags)