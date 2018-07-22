from rest_framework import serializers
from taggit_serializer.serializers import (TagListSerializerField,
                                           TaggitSerializer)
from . import models
from jin2gram.users import models as users_model


class FeedUserSerializer(serializers.ModelSerializer):

    class Meta:
        model = users_model.User
        fields = (
            'name',
            'profile_image'
        )

class CommentSerializer(serializers.ModelSerializer):

    creator = FeedUserSerializer(read_only=True)

    class Meta:
        model = models.Comment
        fields = (
            'id',
            'message',
            'creator',
        )


class LikeSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Like
        fields = '__all__'


class ImageSerializer(TaggitSerializer, serializers.ModelSerializer):

    comments = CommentSerializer(many=True)
    creator = FeedUserSerializer()
    tags = TagListSerializerField()

    class Meta:
        model = models.Image
        fields = (
            'id',
            'file',
            'location',
            'caption',
            'comments',
            'likes_count',
            'creator',
            'tags',
            'created_at'
        )


class UserProfileImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Image
        fields = (
            'id',
            'file',
            'likes_count',
            'comments_count',
        )


class SmallImage(serializers.ModelSerializer):

    class Meta:
        model = models.Image
        fields = (
            'id',
            'file'
        )

class InputImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Image
        fields = (
            'file',
            'location',
            'caption',
        )
