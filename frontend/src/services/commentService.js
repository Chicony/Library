import api from '@/services/api'

export default {
  getComments() {
    return api.get(`comments/`)
              .then(response => response.data)
  },
  postComment(payload) {
    return api.post(`comments/`, payload)
              .then(response => response.data)
  },
  deleteComment(commentId) {
    return api.delete(`comments/${commentId}`)
              .then(response => response.data)
  }
}