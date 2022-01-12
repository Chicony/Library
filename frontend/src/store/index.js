import Vue from 'vue'
import Vuex from 'vuex'
import books from './modules/books'
import comments from './modules/comments'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    books,
    comments
  }
})