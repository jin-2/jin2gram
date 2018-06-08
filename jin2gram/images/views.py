from rest_framework import APIView
from rest_framework import Response
from . import models, serializers

class ListAllImage(APIView):
    
    def get(self, request, format=None):

        all_image = models.Image.objects.all()
        serializer = serializers.ImageSerializer(all_image, many=True)
        return Response(data=serializer.data) 