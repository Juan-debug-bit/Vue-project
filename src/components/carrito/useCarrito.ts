import { onMounted, onUnmounted, ref, computed } from "vue";
import type { Pizza } from "./pizza";
export function useCarrito() {
    
    const pizzas = ref<Pizza[]>([])
    const price = computed(() => pizzas.value.map(p => p.price).reduce((acc, p) => acc + p, 0))

    function addPizza(ev: Event) {
        ev.stopPropagation();
        const event: CustomEvent = ev as CustomEvent
        const pizza = event.detail as Pizza
        pizzas.value.push(pizza)
        // pizzas.value = [...pizzas.value]
    }

    onMounted(() => document.addEventListener('add-carrito', addPizza))
    onUnmounted(() => document.removeEventListener('add-carrito', addPizza))

    return price;
}