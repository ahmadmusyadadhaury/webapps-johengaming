import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMainStore = defineStore('main', () => {
  const user = ref(null)
  const cart = ref([])

  const setUser = (userData) => {
    user.value = userData
  }

  const clearUser = () => {
    user.value = null
  }

  return {
    user,
    cart,
    setUser,
    clearUser
  }
})
