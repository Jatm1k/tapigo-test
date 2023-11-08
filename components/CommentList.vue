<template>
<div class="container d-flex flex-column gap-3">
  <template v-for="comment in postComments" :key="comment.id">
    <CommentItem v-if="!comment.isAnswer" :comment="comment"/>
    <CommentItem v-for="com in comments.filter(c => c.parentId === comment.id)" :key="com.id" :comment="com" type="answer"/>
  </template>
</div>
</template>

<script setup>
import { comments } from '~/store/comments.store.ts'
import {updateComments} from '~/store/comments.store.ts'

const route = useRoute()

const postComments = computed(() => {
  return comments.value.filter(c => c.postId === route.params.id)
})

onMounted(() => {
  updateComments()
})
</script>