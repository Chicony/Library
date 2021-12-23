from rest_framework import viewsets
from . import serializers
from library.models import Book


class BookList(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = serializers.BookSerializer


