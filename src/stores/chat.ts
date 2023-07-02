import { ref, onUnmounted } from 'vue'
import { defineStore } from 'pinia'
import {
  getFirestore,
  Timestamp,
  collection,
  getDocs,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  limit
} from 'firebase/firestore'
import { useUserStore } from './user'

import { app } from '../firebaseConfig'

import type { IMessage } from '../types'

const db = getFirestore(app)

const messagesCollection = collection(db, 'messages')
const messagesQuery = query(messagesCollection, orderBy('createdAt', 'asc'), limit(100))

export const useChatStore = defineStore('chat', () => {
  const messages = ref<IMessage[]>([])

  const userStore = useUserStore()

  const unsubscribe = onSnapshot(messagesQuery, (docs) => {
    messages.value = []
    docs.forEach((doc) => {
      messages.value.push({ id: doc.id, ...doc.data() } as IMessage)
    })
  })
  onUnmounted(unsubscribe)

  const sendMessage = async (text: string) => {
    const newMessage: Omit<IMessage, 'id'> = {
      author: {
        name: userStore.user!.displayName || undefined,
        photoURL: userStore.user!.photoURL || undefined,
        email: userStore.user!.email || undefined,
        uid: userStore.user!.uid
      },
      content: text,
      createdAt: Timestamp.now()
    }

    await addDoc(messagesCollection, newMessage)
  }

  return { messages, sendMessage }
})
