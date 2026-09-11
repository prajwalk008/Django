from django.urls import path
from .views import get_users, add_user


urlpatterns = [
    path('get_users/', get_users),
    path('create_user/', add_user)
]