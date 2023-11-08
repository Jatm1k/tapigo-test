<template>
<div class="container mb-5">
    <div class="mb-3">
    <label for="name" class="form-label">Имя</label>
    <input v-model="name" type="text" class="form-control" id="name" placeholder="Ваше имя">
  </div>
  <div class="mb-3">
    <label for="text" class="form-label">Текст</label>
    <textarea v-model="text" class="form-control" id="text" rows="3" placeholder="Ваш комментарий"></textarea>
  </div>
  <button class="btn btn-primary" @click.prevent="saveComment">Отправить</button>
</div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { comments, updateComments } from '~/store/comments.store.ts'

const props = defineProps({
    isAnswer: {
      type: Boolean,
      default: false
    },
    comment: {
      type: Object,
    }
  })

const route = useRoute()
const name = ref('')
const text = ref('')

const saveComment = () => {
  if(name.value && text.value) {
    const comment = {
      id: Date.now(),
      isAnswer: props.isAnswer,
      parentId: props.isAnswer ? props.comment.id : null,
      postId: route.params.id,
      name: name.value,
      text: text.value
    }
    localStorage.setItem('comments', JSON.stringify([
      ...JSON.parse(localStorage.getItem('comments') || '[]'), comment]))
    updateComments()
    name.value = ''
    text.value = ''
  }
}
</script>