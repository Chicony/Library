from django.db import models


class Book(models.Model):
    name = models.CharField('Название книги', max_length=50)
    author = models.CharField('Автор', max_length=50)
    description = models.TextField('Описание')
    image = models.ImageField(null=True, blank=True, upload_to="images_books")

