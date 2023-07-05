from django.shortcuts import render,redirect
from django.http import HttpResponse, JsonResponse
from .products import products
from rest_framework.decorators import api_view
from rest_framework.response import Response
from client_app.models import *

# Create your views here.
@api_view(['GET'])
def getRoutes(request):
    return Response('Hello',safe=False)

@api_view(['GET'])
def getProducts(request):
    return Response(products, safe=False)

def index(request):
    return render(request,'index.html')

def inx(request):
    return render(request,'base.html')


 

from django.contrib.auth.hashers import check_password

from django.views import View

@api_view(['GET', 'POST'])
class CheckOut(View):
    def post(self, request):
        
        

        #api k link daln hau get wale  
        customer = request.session.get('customer')
        phone = request.POST.get('phone')
        address = request.POST.get('address')

        #ism terko serializer banan padenge models k objects ko store kar then uska serializer daal define kar then get for same

        data = Cart.objects.all()
        serializer = CartSerializer(data, context={'request': request}, many=True)

        cart = request.session.get('cart')
        products = Product.get_products_by_id(list(cart.keys()))
        print(address, phone, customer, cart, products)

        for product in products:
            print(cart.get(str(product.id)))
            #order ka model banan k baad idhar daal d

            order = Order(customer=Customer(id=customer),
                          product=product,
                          price=product.price,
                          address=address,
                          phone=phone,
                          quantity=cart.get(str(product.id)))
            order.save()
        request.session['cart'] = {}

        return redirect('cart')
