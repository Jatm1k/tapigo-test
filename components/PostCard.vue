<template>
<div class="card" style="width: 18rem;">
  <img src="~/assets/images/image.jpg" class="card-img-top" alt="image">
  <div class="card-body">
    <h5 class="card-title">{{ post.title }}</h5>
    <p class="card-text text-truncate">{{ post.content }}</p>
    <NuxtLink :to="`/posts/${post.id}`" class="btn btn-primary">Подробнее</NuxtLink>
  </div>
</div>
</template>

<script setup>
  const props = defineProps({
    post: {
      type: Object,
      required: true
    }
  })
</script>