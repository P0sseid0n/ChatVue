<script setup lang="ts">

import SignoutIcon from './icons/Signout.vue';
import ChatInput from './ChatInput.vue';
import ChatMessage from './ChatMessage.vue';

import { useChatStore } from '../stores/chat';
import { useUserStore } from '../stores/user';

const chatStore = useChatStore()
const userStore = useUserStore()

</script>

<template>
   <div id="Chat">
      <ChatMessage v-for="message in chatStore.messages" v-bind="message" />

      <ChatInput />

      <div>
         <button id="Signout" type="button" @click="userStore.signOut">
            <SignoutIcon />
            <span>Sair</span>
         </button>
      </div>
   </div>
</template>

<style lang="scss">
#Chat {
   width: 512px;
   padding: 0 16px;
}

button#Signout {
   background: transparent;
   border: none;
   outline: none;
   font-size: 18px;
   cursor: pointer;

   display: flex;
   justify-content: center;
   gap: 8px;

   color: var(--items-inactive);

   &:hover {
      color: var(--items-active);
   }

}
</style>
