from rest_framework import serializers
from . import models

class ImageSerializer(serializers.Serializer):
    
    class Meta:
        models = models.Image
        fields = '__all__'


class CommentSerializer(serializers.Serializer):

    class Meta:
        models = models.Comment
        fields = '__all__'


class LikeSerializer(serializers.Serializer):

    class Meta:
        models = models.Like
        fields = '__all__'
