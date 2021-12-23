<template>
  <div class="container">
    <div v-if="books.lenght === 0">Список пуст</div>
    <div class="columns is-multiline mt-3">
      <div class="column is-2" v-for="(book, index) in books" :key="index">
        <div class="card-book">
          <router-link :to="{ name: 'book', params: { id: index + 1 } }">
            <img class="card-image" :src="book.image" alt="">
            <span class="card-title">{{ book.name }}</span>
          </router-link>
          <div class="card-author">{{ book.author }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ListBooks',
  computed: mapState({
    books: state => state.books.books
  }),
  created() {
    this.$store.dispatch('books/getBooks')
  }
}
</script>

<style scoped>
.card-book {
    margin: 0 auto 20px;
}

.card-image {
    width: 100%;
    height: 308px;
}

.card-title {
    font-size: 18px;
    margin-top: 10px;
    color: #fff;
    font-weight: 600;
    display: inline-block;
}

.card-author {
    font-size: 14px;
    color: #d2d2d2;
}
</style>