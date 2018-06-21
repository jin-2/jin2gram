from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from . import models, serializers
from jin2gram.notifications import views as notification_views


class ExploreUsers(APIView):

    def get(self, request, format=None):

        last_five = models.User.objects.all().order_by('-date_joined')[:5]

        # many_to_many가 serializer에서 왜 필요한가?
        serializer = serializers.ListUserSerializer(last_five, many=True)
        return Response(data=serializer.data, status=status.HTTP_200_OK)


class FollowUsers(APIView):

    def post(self, request, user_id, format=None):

        user = request.user

        try:
            follow_to_user = models.User.objects.get(id=user_id)
            user.following.add(follow_to_user)
            user.save()

            notification_views.create_notification(user, follow_to_user, 'follow')

            return Response(status=status.HTTP_201_CREATED)
        
        except models.User.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)


class UnFollowUsers(APIView):

    def post(self, request, user_id, format=None):

        user = request.user

        try:
            follow_to_user = models.User.objects.get(id=user_id)
            user.following.remove(follow_to_user)
            user.save()
            return Response(status=status.HTTP_200_OK)

        except models.User.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)


class UserProfile(APIView):

    def get(self, request, username, format=None):
        
        try: 
            found_user = models.User.objects.get(username=username)

        except models.User.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = serializers.UserProfileSerializer(found_user)

        return Response(data=serializer.data, status=status.HTTP_200_OK)


class UserFollowers(APIView):

    def get(self, request, username, format=None):
        
        try:
            found_user = models.User.objects.get(username=username)
        except models.User.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        user_followers = found_user.followers.all()
        serializer = serializers.ListUserSerializer(user_followers, many=True)

        return Response(data=serializer.data, status=status.HTTP_200_OK)


class UserFollowing(APIView):

    def get(self, request, username, format=None):

        try:
            found_user = models.User.objects.get(username=username)
        except models.User.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        user_following = found_user.following.all()
        serializer = serializers.ListUserSerializer(user_following, many=True)

        return Response(data=serializer.data, status=status.HTTP_200_OK)


class Search(APIView):

    def get(self, request, format=None):

        username = request.query_params.get('username', None)
        
        if username is not None:
            
            user = models.User.objects.filter(username__icontains=username)
            serializer = serializers.ListUserSerializer(user, many=True)
            
            return Response(data=serializer.data, status=status.HTTP_200_OK)
        
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)

