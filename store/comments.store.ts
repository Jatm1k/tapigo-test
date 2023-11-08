import { ref } from 'vue'

export const comments = ref<object[]>([])

export const updateComments = () => {
    comments.value = JSON.parse(localStorage.getItem('comments') || '[]')
}
