from django.contrib import admin

# Register your models here.

from .models import User, ProductImg,Product,Store,FileUpload

admin.site.register(User)
admin.site.register(Product)
admin.site.register(ProductImg)
admin.site.register(Store)
admin.site.register(FileUpload)
