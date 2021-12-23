import Vue from 'vue'
import Router from 'vue-router'

import Main from './components/Main.vue'
import ListBooks from './components/ListBooks.vue'
import Book from './components/Book.vue'
import NotFound from './components/404.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Main
    },
    {
      path: '/list',
      name: 'list',
      component: ListBooks
    },
    {
      path: '/list/:id',
      name: 'book',
      component: Book
    },
    {
      path: '*',
      name: 'notfound',
      component: NotFound
    }
  ]
})