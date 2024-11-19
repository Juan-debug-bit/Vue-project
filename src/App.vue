<script setup lang="ts">
  import { ref } from 'vue';
  import Calendar from './components/calendar/Calendar.vue';
  import PizzaList from './components/carrito/PizzaList.vue';
  import Carrito from './components/carrito/Carrito.vue';
  const name = "Luis";
  const user = "";
  const numbers = ref([7, 8, 21, 32, 323]);

  function change() {
    numbers.value[2] = 0
  }
</script>

<template>
  <!-- <Calendar /> -->
   <div>
    <PizzaList />
    <Carrito />
   </div>

  <!-- Interpolación 
  <div>
    Hello {{ name }}
  </div> -->
  <!-- If-Else -->
  <!-- <div v-if="user">
    {{ user }}
  </div>
  <div v-else>
    <button>Login</button>
  </div> -->
  <!-- For -->
  <!-- <div v-for="number in numbers" :key="number">
    <span>{{ number }}</span>
  </div> -->
    <!-- Events -->
  <!-- <button v-on:click="change()">
    Change Number 3
  </button> -->
</template>

