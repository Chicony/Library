<template>
  <div class="container">
    <div class="list-filter">
      Сортировка по:
      <span class="filter-link" @click="sort('name')" :class="[sortBy === 'name' ? sortDirection : '']">
        названию
      </span>
      <span class="filter-link" @click="sort('author')" :class="[sortBy === 'author' ? sortDirection : '']">
        автору
      </span>
    </div>
    <div class="column">
      <div v-if="books.length === 0">Список пуст</div>
      <div class="columns is-multiline mt-3">
        <div class="column is-2" v-for="(book, index) in sortedBooks" :key="index">
          <div class="card-book">
            <router-link :to="{ name: 'book', params: { id: index + 1, book: book } }">
              <img class="card-image" :src="book.image" alt="">
              <span class="card-title">{{ book.name }}</span>
            </router-link>
            <div class="card-author">{{ book.author }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'List',
  data: function() {
    return {
      sortBy: 'name',
      sortDirection: 'asc',
    }
  },
  computed: { 
    ...mapState({
      books: state => state.books.books
    }),
    sortedBooks: function(){
      return [...this.books].sort((p1,p2) => {
        let modifier = 1;
        if(this.sortDirection === 'desc') modifier = -1;
        if(p1[this.sortBy] < p2[this.sortBy]) return -1 * modifier; if(p1[this.sortBy] > p2[this.sortBy]) return 1 * modifier;
        return 0;
      });
    },
  },
  methods: {
    sort: function (s) {
      if(s === this.sortBy) {
        this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
      }
      this.sortBy = s;
    },
  },
  created() {
    this.$store.dispatch('books/getBooks')
  }
  
}
</script>

<style scoped>
.list-filter
{
  color: #fff;
}

.filter-link
{
  cursor: pointer;
  margin: 0 6px;
}

.asc::after
{
  content: '🠕';
}

.desc::after
{
  content: '🠗';
}

.filter-link.asc
{
  border-bottom: 1px dotted rgb(206, 206, 206);
}

.filter-link.desc
{
  border-bottom: 1px dotted rgb(206, 206, 206);
}

.filter-link:hover
{
  color: rgb(206, 206, 206);
}

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