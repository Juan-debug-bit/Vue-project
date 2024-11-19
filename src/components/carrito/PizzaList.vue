<script setup lang="ts">
const pizzas = [
    {
        id: "1",
        name: "Carbonara",
        price: 10,
    },
    {
        id: "2",
        name: "Hawaiana",
        price: 20,
    },
    {
        id: "3",
        name: "Peperonni",
        price: 30,
    }

]

function añadirAlCarrito(ev: Event) {
    ev.stopPropagation();
    const node = (ev.composedPath() as HTMLElement[]).find(n => n.dataset && 'id' in n.dataset);
    if (node) {
        const { id } = node.dataset;
        const pizza = pizzas.find(p => p.id === id);
        if (pizza) {
            console.log(pizza);
            document.dispatchEvent(createEvent(pizza))
        }
    }
}

function createEvent(pizza: any): CustomEvent {
    return new CustomEvent(
        "add-carrito",
        {
            bubbles: true,
            composed: true,
            detail: structuredClone(pizza)
        }
    )
}
</script>
<template>
    <div class="list" @click="añadirAlCarrito($event)">
        <div v-for="pizza in pizzas" :key="pizza.id">
            <div>{{ pizza.id }}</div>
            <div>{{ pizza.name }}</div>
            <div>{{ pizza.price }}</div>
            <button :data-id="pizza.id">Añadir al carrito</button>
        </div>
    </div>
</template>
<style scoped>
.list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}
</style>