<template>
  <div class="container mt-5 bg-light rounded px-5 py-3">
    <h1 class="text-center">{{ post.title }}</h1>
    <img src="~/assets/images/image.jpg" :alt="post.title" class="rounded d-block w-50 mx-auto mb-3">
    <p>{{ post.content }}</p>
    <span class="text-muted">{{ post.date }}</span>
    <h3 class="mt-3">Комментарии</h3>
    <CommentForm/>
    <CommentList/>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import postsData from '~/assets/posts.json'

const route = useRoute()
const post = ref({})

onMounted(() => {
  post.value = postsData.posts.find(p => p.id == route.params.id)
})
</script>
