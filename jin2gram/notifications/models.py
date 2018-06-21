from django.db import models
from jin2gram.users import models as user_models
from jin2gram.images import models as image_models


class Notification(image_models.TimeStampModel):

    NOTIFICATION_TYPE = {
        # 첫번째는 데이터베이스, 두번째는 어드민 패널을 위해 쓰임
        ('like', 'Like'),
        ('comment', 'Comment'),
        ('follow', 'Follow')
    }

    creator = models.ForeignKey(user_models.User, related_name='creator', on_delete=models.CASCADE)
    to = models.ForeignKey(user_models.User, related_name='to', on_delete=models.CASCADE)
    notification_type = models.CharField(max_length=20, choices=NOTIFICATION_TYPE)
    img = models.ForeignKey(image_models.Image, on_delete=models.CASCADE, blank=True, null=True)
    comment = models.TextField(blank=True, null=True)