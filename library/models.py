from django.db import models


class Book(models.Model):
    name = models.CharField('Название книги', max_length=50)
    author = models.CharField('Автор', max_length=50)
    description = models.TextField('Описание')
    image = models.ImageField(null=True, blank=True, upload_to="images_books")
    file = models.FileField(null=True, upload_to="file_books")


class Comment(models.Model):
    book = models.ForeignKey(Book, related_name='comments', on_delete=models.CASCADE)
    name = models.CharField(max_length=80)
    email = models.EmailField()
    body = models.TextField()

