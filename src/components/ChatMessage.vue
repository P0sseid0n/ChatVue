<script setup lang="ts">
import { ref } from 'vue';
import type { IMessage } from '@/types';
import { useUserStore } from '../stores/user';
const userStore = useUserStore()

const props = defineProps<IMessage>()

const isAuthor = props.author.uid === userStore.user!.uid

</script>
<template>
   <div :id="'Message-' + props.id" class="message">
      <img :src="props.author.photoURL" alt="User Photo">
      <div :class="[isAuthor ? 'authorBallon' : 'otherBallon', 'ballon']">
         <h4>{{ props.author.name || props.author.uid }}</h4>
         <p>{{ props.content }}</p>
         <h6>09:16</h6>
      </div>
   </div>
</template>

<style lang="scss" scoped>
.message {
   display: flex;
   flex-direction: row;
   align-items: flex-end;
   justify-content: flex-end;

   &:has(.authorBallon) {
      flex-direction: row-reverse;
   }

   img {
      width: 48px;
      height: 48px;
      border-radius: 16px;
   }
}

.ballon {
   --r: 24px;
   --t: 16px;

   -webkit-mask:
      radial-gradient(var(--t) at var(--_d) 0, #0000 98%, #000 102%) var(--_d) 100%/calc(100% - var(--r)) var(--t) no-repeat,
      conic-gradient(at var(--r) var(--r), #000 75%, #0000 0) calc(var(--r)/-2) calc(var(--r)/-2) padding-box,
      radial-gradient(50% 50%, #000 98%, #0000 101%) 0 0/var(--r) var(--r) space padding-box;
   mask:
      radial-gradient(var(--t) at var(--_d) 0, #0000 98%, #000 102%) var(--_d) 100%/calc(100% - var(--r)) var(--t) no-repeat,
      conic-gradient(at var(--r) var(--r), #000 75%, #0000 0) calc(var(--r)/-2) calc(var(--r)/-2) padding-box,
      radial-gradient(50% 50%, #000 98%, #0000 101%) 0 0/var(--r) var(--r) space padding-box;

   color: white;
   border-radius: 10px;
   padding: 10px;
   margin-top: 32px;
   // box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

   padding: 12px 16px;
   max-width: 320px;
}


.authorBallon {
   background: #6b8afd;

   --_d: 100%;
   border-right: var(--t) solid #0000;
}

.otherBallon {
   background: #2e343d;

   --_d: 0%;
   border-left: var(--t) solid #0000;
}



h4 {
   font-weight: 300;
   font-size: 14px;
}

p {
   font-weight: 300;
   font-size: 16px;

   margin-top: 12px;
   margin-bottom: 8px;
}

h6 {
   font-weight: 300;
   text-align: right;
   width: 100%;
}
</style>
