<template>
  <div class="container mt-4">
    <div class="columns">
      <div class="column is-2">
        <figure class="image is-2by3">
          <img :src="book.image" alt="">
        </figure>
      </div>
      <div class="column is-10 px-6 pt-5">
        <h1 class="book-title">{{ book.name }}</h1>
        <div class="book-author">{{ book.author }}</div>
        <div class="book-description">{{ book.description }}</div>
        <a v-if="book.file != null" :href="book.file" download class="book-link">Скачать</a>
      </div>
    </div>
    <comments :id='id'></comments>
  </div>
</template>

<script>
import Comments from './Comments.vue'

export default {
  name: 'Book',
  props: ['id', 'book'],
  components: { Comments },
}
</script>

<style scoped>
.container
{
  color: #fff;
}

.book-title
{
  font-size: 36px;
  font-weight: 500;
}

.book-author
{
  font-style: italic;
}

.book-description
{
  margin: 30px 0;
  text-align: justify;
}

.book-link
{
  color: #fff;
  border: 1px solid #fff;
  border-radius: 6px;
  padding: 3px 6px;
}
</style>