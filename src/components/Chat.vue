<script setup lang="ts">

import ChatInput from './ChatInput.vue';
import ChatMessage from './ChatMessage.vue';

import { useChatStore } from '../stores/chat';

const chatStore = useChatStore()

</script>

<template>
   <ChatMessage v-for="message in chatStore.messages" v-bind="message" />

   <ChatInput />
</template>

<style lang="scss"></style>
