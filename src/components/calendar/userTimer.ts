import { onMounted, onUnmounted, ref, computed } from 'vue';

function getTime(date: Date) {
    let options: Intl.DateTimeFormatOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
    return new Intl.DateTimeFormat('es-ES', options).format(date);
}

export default function userTimer() {
    let handlerTimer: any;
    const date = ref(new Date);
    onMounted(() => handlerTimer = setInterval(() => date.value = new Date, 1000))
    onUnmounted(() => clearInterval(handlerTimer));

    const dateFormat = computed(() => getTime(date.value))

    return dateFormat;
}