from django.contrib import admin
from . import models

@admin.register(models.Notification)
class notificationAdmin(admin.ModelAdmin):
    
    list_display = (
        'creator',
        'to',
        'notification_type',
    )
