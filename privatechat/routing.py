from django.urls import re_path
from privatechat.consumers import PersonalChatConsumer


websocket_urlpatterns = [
    re_path(r'ws/privatechat/(?P<username>\w+)/$', PersonalChatConsumer.as_asgi())

]