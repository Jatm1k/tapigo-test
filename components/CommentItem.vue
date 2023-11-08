<template>
<div :class="'card' + (type === 'answer' ? ' w-75 ms-auto' : '')">
    <div class="card-header">
      {{ comment.name }}
    </div>
    <div class="card-body">
      <blockquote class="blockquote mb-0">
        <p>{{ comment.text }}</p>
          <button class="btn btn-secondary btn-sm" @click="() => showForm = !showForm">Ответить</button>
      </blockquote>
    </div>
    <CommentForm v-if="showForm" :is-answer="true" :comment="comment"/>
  </div>
</template>

<script setup>
  const showForm = ref(false)
  const props = defineProps({
    comment: {
      type: Object,
      required: true
    },
    type: {
      type: String,
    }
  })
</script>