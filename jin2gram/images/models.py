from django.db import models
from taggit.managers import TaggableManager
from jin2gram.users import models as user_models
from django.contrib.humanize.templatetags.humanize import naturaltime


class TimeStampModel(models.Model):

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class Image(TimeStampModel):

    """Image Model"""

    file = models.ImageField()
    location = models.CharField(max_length=140)
    caption = models.TextField()
    creator = models.ForeignKey(user_models.User, on_delete=models.CASCADE, null=True, related_name='images')
    tags = TaggableManager()

    # Like 모델에 대한 attribute
    @property
    def likes_count(self):
        return self.likes.all().count()

    @property
    def comments_count(self):
        return self.comments.all().count()

    @property
    def natural_time(self):
        return naturaltime(self.created_at)

    def __str__(self):
        return '{} - {}'.format(self.location, self.caption)

    # Meta 클래스는 모델의 설정을 위해서 사용
    class Meta:

        # DB에서 얻은 리스트를 생성된 날짜로 정렬할 수 있게
        ordering = ['-created_at']


class Comment(TimeStampModel):

    """Comment Model"""

    message = models.TextField()
    creator = models.ForeignKey(user_models.User, on_delete=models.CASCADE, null=True)
    img = models.ForeignKey(Image, on_delete=models.CASCADE, null=True, related_name='comments')

    def __str__(self):
        return self.message


class Like(TimeStampModel):

    """ Like Model"""

    creator = models.ForeignKey(user_models.User, on_delete=models.CASCADE, null=True)
    img = models.ForeignKey(Image, on_delete=models.CASCADE, null=True, related_name='likes')

    def __str__(self):
        return '{} - {}'.format(self.creator.username, self.img.caption)
