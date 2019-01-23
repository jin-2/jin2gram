from django.urls import re_path
from . import views


app_name = "notifications"
urlpatterns = [
    re_path(r'^', view=views.Notifications.as_view(), name="notifications"),
]
