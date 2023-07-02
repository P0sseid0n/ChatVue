<script setup lang="ts">
import GoogleIcon from './icons/GoogleIcon.vue';
import { useUserStore } from '../stores/user';

const userStore = useUserStore()

</script>

<template>
   <h3>Seja bem-vindo(a) ao</h3>
   <h1>ChatVue</h1>
   <p>Para continuar faça login</p>
   <div id="Buttons">

      <button class="googleLogin" @click="userStore.signInWithGoogle">
         <GoogleIcon />
         <span>
            Entrar com Google
         </span>
      </button>
   </div>
</template>

<style>
h1 {
   font-size: 48px;
   font-weight: 600;

   margin-top: 8px;
   margin-bottom: 64px;
}

#Buttons {
   margin-top: 16px;
   width: 240px;
}

#Buttons button {
   height: 48px;
   width: 100%;

   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: row;
   gap: 16px;

   border-radius: 8px;
   border: none;
   outline: none;

   font-size: 16px;
   font-weight: 600;

   box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
   cursor: pointer;
}

.googleLogin {
   background-color: #fff;
   color: #757575;
}
</style>