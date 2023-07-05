from django.urls import path, include
from client_app import views

urlpatterns = [
    path('', views.getRoutes, name="getRoutes"),
    path('product/', views.getProducts, name="getProducts"),
]