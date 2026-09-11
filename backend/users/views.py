from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import User
from .serializers import UserSerializer

@api_view(["GET"])
def get_users(request):
    user = User.objects.all()

    serializer = UserSerializer(user, many=True)

    return Response(serializer.data)

@api_view(["POST"])
def add_user(request):
    user = User.objects.create(
        name=request.data["name"]
    )

    serializer = UserSerializer(user)

    return Response(serializer.data)





