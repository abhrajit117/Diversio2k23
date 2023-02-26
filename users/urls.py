from django.urls import path
from . import views
from django.contrib.auth.decorators import login_required
from django.contrib.auth import views as auth_views
from django.contrib.staticfiles.urls import staticfiles_urlpatterns


urlpatterns = [
    path('',views.home,name='home'),
    path('home',views.home,name='home'),
    path('register/',views.register,name='register'),
    path('login/',views.custom_login,name='login'),
    path('logout/',views.custom_logout,name='logout'),
    #path('login/',auth_views.LoginView.as_view(template_name='registration/login.html'),name='login'),
    #path('logout/',auth_views.LogoutView.as_view(template_name='registration/logout.html'),name='logout'),
    path('profile/<username>',views.profile,name='profile'),
    path('activate/<uidb64>/<token>',views.activate,name='activate'),
    # path('password_change',views.password_change,name='password_change'),
    path('password_reset/',auth_views.PasswordResetView.as_view(),name='password_reset'),
    path('password_reset/done/',auth_views.PasswordResetDoneView.as_view(),name='password_reset_Done'),
    path('reset/<uidb64>/<token>/',auth_views.PasswordResetConfirmView.as_view(),name='password_reset_confirm'),
    path('reset/done',auth_views.PasswordResetCompleteView.as_view(),name='password_reset_complete'),
    path('social/signup/',views.signup_redirect,name='signup_redirect'),
]
urlpatterns += staticfiles_urlpatterns()