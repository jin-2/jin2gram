from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from . import models, serializers


class ExploreUsers(APIView):

    def get(self, request, format=None):


        last_five = models.User.objects.all().order_by('-date_joined')[:5]

        # many_to_many가 serializer에서 왜 필요한가?
        serializer = serializers.ExploreUserSerializer(last_five, many=True)
        return Response(data=serializer.data, status=status.HTTP_200_OK)
