<script setup lang="ts">
import { useCarrito } from './useCarrito'
    const price = useCarrito()
</script>
<template>
    <div>
        Total: {{ price }}
    </div>
</template>