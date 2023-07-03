<script setup lang="ts">
import { ref } from 'vue';
import { useChatStore } from '../stores/chat'

import SendIcon from './icons/SendIcon.vue'
import MicrophoneIcon from './icons/MicrophoneIcon.vue';

const { sendMessage } = useChatStore()

const message = ref('');


function submit(event: Event) {
   if (!message.value) return

   sendMessage(message.value)
   message.value = ''
}
</script>

<template>
   <form id="ChatInput" @submit.prevent="submit">
      <input type="text" placeholder="Your Message" v-model="message">
      <button v-if="message" type="submit">
         <SendIcon />
      </button>
      <button v-else type="button">
         <MicrophoneIcon />
      </button>
   </form>
</template>

<style lang="scss" scoped>
#ChatInput {
   height: 64px;
   width: 100%;

   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: row;

   margin-top: 32px;
}

input {
   background: transparent;
   border: none;
   outline: none;
   font-size: 18px;
   flex: 1;

   color: var(--items-active);

   ::placeholder {
      color: var(--items-inactive);
   }
}

button {
   background: transparent;
   border: none;
   outline: none;

   cursor: pointer;

   margin-left: 16px;
   color: var(--items-inactive);
   font-size: 24px;

   :hover {
      color: var(--items-active);
   }
}
</style>
