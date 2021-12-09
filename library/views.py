from rest_framework import generics
from . import serializers
from library.models import Book


class BookList(generics.ListAPIView):
    queryset = Book.objects.all()
    serializer_class = serializers.BookSerializer


class BookDetails(generics.RetrieveAPIView):
    queryset = Book.objects.all()
    serializer_class = serializers.BookSerializer

