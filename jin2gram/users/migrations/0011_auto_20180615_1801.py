# Generated by Django 2.0.5 on 2018-06-15 09:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0010_auto_20180615_1701'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='gender',
            field=models.CharField(choices=[('Not-specified', 'not-specified'), ('Female', 'female'), ('Male', 'male')], max_length=80, null=True),
        ),
    ]