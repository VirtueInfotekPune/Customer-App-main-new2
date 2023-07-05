from django.contrib import admin

from django.contrib import admin
from  .models  import *
# class AdminProduct(admin.ModelAdmin):
#     list_display = ['name', 'price', 'category']


class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name']


admin.site.register(Product)
admin.site.register(Category)
admin.site.register(Customer)
admin.site.register(SubCategory)

admin.site.register(DelivPart)
admin.site.register(Invman)

# Register your models here.
