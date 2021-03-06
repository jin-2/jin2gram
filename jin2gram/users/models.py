from django.contrib.auth.models import AbstractUser
from django.db import models
from django.urls import reverse
from django.utils.translation import ugettext_lazy as _


class User(AbstractUser):

    """User Model"""

    GENDER_CHOICE = {
        ('male', 'Male'),
        ('female', 'Female'),
        ('not-specified', 'Not-specified')
    }
    
    # First Name and Last Name do not cover name patterns
    # around the globe.
    
    # blank=True 필수값이 아니게 설정한다
    # null=True DB에 새로운 컬럼을 추가할 때 이미 있었던 데이터들은 빈값으로 채운다
    name = models.CharField(_("Name of User"), blank=True, max_length=255)
    profile_image = models.ImageField(blank=True, null=True)
    website = models.URLField(null=True)
    bio = models.TextField(null=True)
    phone = models.CharField(max_length=140, null=True)
    gender = models.CharField(max_length=80, choices=GENDER_CHOICE, null=True)
    followers = models.ManyToManyField("self", blank=True)
    following = models.ManyToManyField("self", blank=True)

    @property
    def post_count(self):
        return self.images.all().count()

    @property
    def follower_count(self):
        return self.followers.all().count()

    @property
    def following_count(self):
        return self.following.all().count()

    def __str__(self):
        return self.username