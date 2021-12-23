<template>
  <div class="container">
    <h1 class="has-text-white">Boot item</h1>
    <p class="has-text-white">{{ book.name }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Book',
  computed: mapState({
    book: state => state.books.books[3]
  }),
  created() {
    this.$store.dispatch('books/getBooks')
  }
}
</script>