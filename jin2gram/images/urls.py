from django.urls import path
from . import views

# urls/named groups: (?P<name>pattern)

app_name = "images"
urlpatterns = [
    path('', view=views.Feed.as_view(), name="feed"),
    path('<image_id>/like', view=views.LikeImage.as_view(), name="like"),
]
