# Generated by Django 2.1.5 on 2019-01-21 06:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0027_auto_20180729_1721'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='gender',
            field=models.CharField(choices=[('not-specified', 'Not-specified'), ('male', 'Male'), ('female', 'Female')], max_length=80, null=True),
        ),
    ]