import api from '@/services/api'

export default {
  getBooks() {
    return api.get(`books/`)
              .then(response => response.data)
  }
}