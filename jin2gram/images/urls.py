from django.urls import path
from . import views

# urls/named groups: (?P<name>pattern)

app_name = "images"
urlpatterns = [
    path('', view=views.Images.as_view(), name="images"),
    path('<int:image_id>', view=views.DetailImage.as_view(), name="detail_image"),
    path('<int:image_id>/likes', view=views.LikeImage.as_view(), name="like_image"),
    path('<int:image_id>/unlikes', view=views.UnLikeImage.as_view(), name="unlike_image"),
    path('<int:image_id>/comments', view=views.CommentImage.as_view(), name="comment_image"),
    path('comments/<int:comment_id>', view=views.Comment.as_view(), name="comment"),
    path('<int:image_id>/comment/<int:comment_id>', view=views.ModerateComment.as_view(), name="moderate_comment"),
    path('search/', view=views.Search.as_view(), name="search"),
]
