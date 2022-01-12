<template>
  <div class="columns columns-comments">
    <div class="column is-offset-2 is-7 px-6">
      <p>Оставить отзыв</p>
      <div class="field-body">
        <div class="field">
          <p class="control">
            <input class="input is-small" type="text" placeholder="Имя" v-model="name">
          </p>
        </div>
        <div class="field">
          <p class="control">
            <input class="input is-small" type="email" placeholder="Email" v-model="email">
          </p>
        </div>
      </div>
      <div class="field-body">
        <div class="field">
          <div class="control">
            <textarea class="textarea is-small" placeholder="Коментарии..." v-model="body"></textarea>
            <input class="button is-rounded is-small is-success is-outlined my-4" type="submit" value="Добавить" 
              @click="addComment({ book: id, name: name, email: email, body: body })">
          </div>
        </div>
      </div>
      <p v-if="comments.length === 0">Отзывов нет</p>
      <div class="comment-item" v-for="(comment, index) in sortedComments" :key="index">
        <span class="comment-name">{{ comment.name }}</span>
        <span class="comment-email">{{ comment.email }}</span>
        <div class="comment-text">{{ comment.body }}</div>
        <input class="button is-rounded is-small is-danger is-outlined comment-button" 
               type="submit" @click="deleteComment(id)" value="Удалить"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Comments',
  props: ['id'],
  computed: {
    ...mapState({
      comments: state => state.comments.comments
    }),
    sortedComments: function(){
      return [...this.comments].filter(obj => {
        return obj.book === this.id
      }) 
    },
  },
  methods: mapActions('comments', [
    'addComment',
    'deleteComment'
  ]),
  created() {
    this.$store.dispatch('comments/getComments')
  }
}
</script>

<style scoped>
.columns-comments
{
  margin-top: 16px;
}

.field
{
  margin: 8px 0;
}

.input,
.textarea,
.button
{
  color: #fff;
  background-color: transparent;
}

::placeholder
{
  color: #fff;
}

textarea
{
  resize: none;
}

.comment-item
{
  border-top: 1px solid #fff;
  padding: 8px;
  margin-bottom: 10px;
}

.comment-email {
  font-size: 12px;
  margin-left: 16px;
}

.comment-text
{
  margin: 20px 0 10px;
}

.comment-button
{
  display: block;
  margin-left: auto;
}

.comment-date
{
  float: right;
  font-size: 12px;
}
</style>