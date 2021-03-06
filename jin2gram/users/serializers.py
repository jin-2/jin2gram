from rest_framework import serializers
from . import models
from jin2gram.images import serializers as image_serializer


class ListUserSerializer(serializers.ModelSerializer):

    following = serializers.SerializerMethodField()

    class Meta:
        model = models.User
        fields = (
            'id',
            'name',
            'profile_image',
            'username',
            'following'
        )

    def get_following(self, obj):
        if 'request' in self.context:
            request = self.context['request']
            if obj in request.user.following.all():
                return True
        return False


class UserProfileSerializer(serializers.ModelSerializer):

    images = image_serializer.UserProfileImageSerializer(many=True, read_only=True)
    post_count = serializers.ReadOnlyField()
    follower_count = serializers.ReadOnlyField()
    following_count = serializers.ReadOnlyField()

    class Meta:
        model = models.User
        fields = (
            'username',
            'name',
            'profile_image',
            'website',
            'bio',
            'post_count',
            'follower_count',
            'following_count',
            'images'
        )
