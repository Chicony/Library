import bookService from '../../services/bookService'

const state = {
  books: []
}

const getters = {
  books: state => {
    return state.books
  }
}

const actions = {
  getBooks ({ commit }) {
    bookService.getBooks()
    .then(books => {
      commit('setBooks', books)
    })
  }
}

const mutations = {
  setBooks (state, books) {
    state.books = books
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}