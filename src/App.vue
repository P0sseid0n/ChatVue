<script setup lang="ts">
import { ref } from 'vue';

import Chat from './components/Chat.vue';
import SigningScreen from './components/SigningScreen.vue';
import { useUserStore } from './stores/user';

const userStore = useUserStore()

</script>

<template>
   <Chat v-if="userStore.isLoggedIn" />
   <SigningScreen v-else />
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Archivo:wght@300;400;600&display=swap');

:root {
   --primary: #6b8afd;
   --background-depth-1: #2e343d;
   --background-depth-2: #202329;
   --background-depth-3: #131313;

   --items-active: #ffffff;
   --items-inactive: #a9aeba;
}

* {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   font-family: 'Archivo', sans-serif;

   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;

}

#app {
   height: 100vh;
   width: 100vw;

   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;

   background-color: var(--background-depth-2);

   color: white;
}
</style>
