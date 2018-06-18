from django.contrib import admin
from . import models

@admin.register(models.Image)
class ImageAdmin(admin.ModelAdmin):

    search_fields = (
        'location',
        'caption'
    )

    list_filter = (
        'location',
        'creator'
    )

    list_display_links = [
        'location',
        'caption'
    ]
    
    list_display = (
        'file',
        'location',
        'caption',
        'creator',
        'created_at',
        'updated_at'
    )

@admin.register(models.Like)
class LikeAdmin(admin.ModelAdmin):
    
    list_display = (
        'img',
        'creator',
        'created_at',
        'updated_at'
    )

@admin.register(models.Comment)
class CommentAdmin(admin.ModelAdmin):
    
    list_display = (
        'message',
        'creator',
        'img',
        'created_at',
        'updated_at'
    )
