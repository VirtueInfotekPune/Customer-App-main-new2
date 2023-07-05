from rest_framework import serializers
from .models import *

class ProductsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class SubCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = SubCategory
        fields = '__all__'

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = '__all__'

class DelivpartSerializer(serializers.ModelSerializer):
    class Meta:
        model = DelivPart
        fields = '__all__'

class InvmanSerializer(serializers.ModelSerializer):
    class Meta:
        model = Invman
        fields = '__all__'
