# Generated by Django 2.0.5 on 2018-06-12 08:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0007_auto_20180612_1621'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='gender',
            field=models.CharField(choices=[('Not-specified', 'not-specified'), ('Female', 'female'), ('Male', 'male')], max_length=80, null=True),
        ),
    ]
