<template>
  <div class="container mt-3">
    <h1 class="text-center mb-3">Посты</h1>
    <div class="d-flex flex-wrap gap-3">
      <PostCard v-for="post in posts" :key="post.id" :post="post" />
  </div>
</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import postsData from '~/assets/posts.json'

const posts = ref([])

onMounted(() => {
posts.value = postsData.posts
})
</script>