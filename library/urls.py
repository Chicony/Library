from django.contrib import admin
from django.urls import path, include
from rest_framework import routers

from .views import BookList, Comments

router = routers.DefaultRouter()
router.register('books', BookList)
router.register('comments', Comments)

urlpatterns = [
    path('api/', include(router.urls)),
    path('api/admin', admin.site.urls),
]
