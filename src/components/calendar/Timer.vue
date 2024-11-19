<script setup lang="ts">
import userTimer from './userTimer';
const timeFormat = userTimer();

</script>

<template>
    <div class="timer">
        <span> {{ timeFormat }}</span>
    </div>
</template>

<style scoped>
    .timer {
        display: flex;
        justify-content: center;
        padding: 2.5rem;
    }
</style>