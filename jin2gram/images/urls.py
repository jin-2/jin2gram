from django.urls import path
from . import views

# urls/named groups: (?P<name>pattern)

app_name = "images"
urlpatterns = [
    path('', view=views.Feed.as_view(), name="feed"),
    path('<int:image_id>/likes', view=views.LikeImage.as_view(), name="like_image"),
    path('<int:image_id>/unlikes', view=views.UnLikeImage.as_view(), name="unlike_image"),
    path('<int:image_id>/comments', view=views.CommentImage.as_view(), name="comment_image"),
    path('comments/<int:comment_id>', view=views.Comment.as_view(), name="comment"),
]
