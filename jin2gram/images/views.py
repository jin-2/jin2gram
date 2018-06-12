from rest_framework.views import APIView
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
