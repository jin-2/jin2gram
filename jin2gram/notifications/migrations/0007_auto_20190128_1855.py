# Generated by Django 2.0.5 on 2019-01-28 09:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('notifications', '0006_auto_20190128_1850'),
    ]

    operations = [
        migrations.AlterField(
            model_name='notification',
            name='notification_type',
            field=models.CharField(choices=[('follow', 'Follow'), ('like', 'Like'), ('comment', 'Comment')], max_length=20),
        ),
    ]
