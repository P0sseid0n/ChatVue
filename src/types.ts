import { Timestamp } from 'firebase/firestore'

export interface IMessage {
  id: string
  author: {
    name?: string
    photoURL?: string
    email?: string
    uid: string
  }
  content: string
  createdAt: Timestamp
}
