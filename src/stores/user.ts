import { computed, onUnmounted, ref, watch } from 'vue'
import { defineStore } from 'pinia'
import { GoogleAuthProvider, getAuth, signInWithPopup, type User } from 'firebase/auth'
import { app } from '../firebaseConfig'

const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export const useUserStore = defineStore('user', () => {
  const user = ref<User>()

  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider)
    console.log(result)
    user.value = result.user
    console.log(user.value)
  }

  const signOut = async () => {
    await auth.signOut()
    user.value = undefined
  }

  const isLoggedIn = computed(() => user.value !== undefined)

  return { user, isLoggedIn, signInWithGoogle, signOut }
})
