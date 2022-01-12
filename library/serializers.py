from rest_framework import serializers
from library.models import Book, Comment


class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ['name', 'author', 'description', 'image', 'file']


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['book', 'name', 'email', 'body']

