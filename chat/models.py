# from django.db import models

# # Create your models here.
# TOPIC=(
#         ('food', 'Food'),
#         ('sports', 'Sports'),
#         ('movies', 'Movies'),
#         ('music','Music'),
#         ('comedy','Comedy'),
#         ('photography','Photography'),
#         ('travel','Travel'),
#         ('books','Books'),
#         ('random','Random'),
#     )
# class Topic(models.Model):
#     name = models.CharField(max_length=10, choices=TOPIC)

# class RoomModel(models.Model):
#     room_name=models.CharField(max_length=255,null=True,blank=True)
#     topic=models.ForeignKey(Topic, on_delete=models.CASCADE)
