from django.urls import re_path
from . import views

# urls/named groups: (?P<name>pattern)

app_name = "images"
urlpatterns = [
    re_path(r'^', view=views.Images.as_view(), name="images"),
    re_path(r'^(?P<image_id>[0-9]+)/$', view=views.DetailImage.as_view(), name="detail_image"),
    re_path(r'^(?P<image_id>[0-9]+)/likes/$', view=views.LikeImage.as_view(), name="like_image"),
    re_path(r'^(?P<image_id>[0-9]+)/unlikes/$', view=views.UnLikeImage.as_view(), name="unlike_image"),
    re_path(r'^(?P<image_id>[0-9]+)/comments/$', view=views.CommentImage.as_view(), name="comment_image"),
    re_path(r'^comments/(?P<comment_id>[0-9]+)/$', view=views.Comment.as_view(), name="comment"),
    re_path(r'^(?P<image_id>[0-9]+)/comment/(?P<comment_id>[0-9]+)/$',
            view=views.ModerateComment.as_view(), name="moderate_comment"),
    re_path(r'^search/$', view=views.Search.as_view(), name="search"),
]
