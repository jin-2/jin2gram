# Generated by Django 2.0.5 on 2018-06-19 12:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0023_auto_20180619_2105'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='gender',
            field=models.CharField(choices=[('not-specified', 'Not-specified'), ('female', 'Female'), ('male', 'Male')], max_length=80, null=True),
        ),
    ]
