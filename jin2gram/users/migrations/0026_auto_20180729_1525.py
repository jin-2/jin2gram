# Generated by Django 2.0.5 on 2018-07-29 06:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0025_auto_20180621_1355'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='gender',
            field=models.CharField(choices=[('not-specified', 'Not-specified'), ('male', 'Male'), ('female', 'Female')], max_length=80, null=True),
        ),
    ]