# Generated by Django 2.0.5 on 2018-06-18 12:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0014_auto_20180618_2111'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='gender',
            field=models.CharField(choices=[('female', 'Female'), ('male', 'Male'), ('not-specified', 'Not-specified')], max_length=80, null=True),
        ),
    ]
