from os import stat
from django.urls import path
from . import views


urlpatterns = [
    path('', views.private_chat_home, name='home'),
    path('<str:username>/', views.chatPage, name='chatpage'),


]