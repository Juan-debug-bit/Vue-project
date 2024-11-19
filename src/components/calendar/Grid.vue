<script setup lang="ts">
import Day from './day.vue';

function* getDays() {
  for (let i = 0; i < 31; i++) {
    yield i + 1;
  }
}

function printDay(ev: Event) {
  ev.stopPropagation()
    const node = (ev.composedPath() as HTMLElement[]).find(n=>n.dataset && 'day' in n.dataset)
    if(node){
      const {day} =node.dataset
      console.log(Number(day)) 
    }
}
const days = [...getDays()];
</script>

<template>
  <div @click="printDay($event)" class="calendar">
    <Day v-for="day in days" :key="day" :day="day" />
  </div>
</template>

<style scoped>
.calendar {
  display: grid;
  grid-template-columns: repeat(7, 3.5rem);
  gap: 2.5rem;
}
</style>