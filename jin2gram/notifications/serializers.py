from rest_framework import serializers
from . import models
from jin2gram.users import serializers as user_serializers
from jin2gram.images import serializers as image_serializers


class NotificationSerializer(serializers.ModelSerializer):

    creator = user_serializers.ListUserSerializer()
    img = image_serializers.SmallImage()

    class Meta:
        model = models.Notification
        fields = '__all__'
