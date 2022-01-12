import commentService from '../../services/commentService'

const state = {
  comments: []
}
  
const getters = {
  comments: state => {
    return state.comments
  }
}
  
const actions = {
  getComments({ commit }) {
    commentService.getComments()
    .then(comments => {
    commit('setComments', comments)
    })
  },
  addComment({ commit }, comment) {
    commentService.postComment(comment)
    .then(() => {
    commit('addComment', comment)
    })
  },
  deleteComment({ commit }, commentId) {
    commentService.deleteComment(commentId)
    commit('deleteComment', commentId)
  }
}
  
const mutations = {
  setComments (state, comments) {
    state.comments = comments
  },
  addComment(state, comment) {
    state.comments.push(comment)
  },
  deleteComment(state, msgId) {
    state.comments = state.comments.filter(obj => obj.pk !== msgId)
  }
}
  
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}