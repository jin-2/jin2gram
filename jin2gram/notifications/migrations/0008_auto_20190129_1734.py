# Generated by Django 2.0.5 on 2019-01-29 08:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('notifications', '0007_auto_20190128_1855'),
    ]

    operations = [
        migrations.AlterField(
            model_name='notification',
            name='notification_type',
            field=models.CharField(choices=[('comment', 'Comment'), ('follow', 'Follow'), ('like', 'Like')], max_length=20),
        ),
    ]
