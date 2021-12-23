<template>
  <div class="container my-4">
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
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Book',
  props: ['book'],
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
</style>