from django.db import models
from jin2gram.users import models as user_models

# Create your models here.
class TimeStampModel(models.Model):

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class meta:
        abstract = True


class Image(TimeStampModel):

    """Image Model"""

    file = models.ImageField()
    location = models.CharField(max_length=140)
    caption = models.TextField()
    creator = models.ForeignKey(user_models.User, on_delete=models.CASCADE, null=True, related_name='images')

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
