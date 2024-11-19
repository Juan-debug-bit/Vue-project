<script setup lang="ts">
 import { defineProps } from 'vue';
 
 const {day} = defineProps<{
    day: number
 }>();

</script>
<template>
    <div :data-day="day" class="day">
        {{ day }}
    </div>
</template>
<style scoped>
.day {
  display: flex;
  width: 1.25rem;
  height: 1.25rem;
  justify-content: center;
  align-items: center;
}
.day:hover {
  outline: 1px solid blue;
}
</style>