<script setup>
import { computed } from 'vue';
import { ref } from 'vue';
    let tareaspendientes = computed(() => {
    return nota.value.filter((tarea) => !tarea.acabada).length;
    });
    const emit = defineEmits(['nuevaNota']);
    tareaspendientes = (e) => {
        emit('nuevaNota', e.target.value);
    };
</script>

<template>
     <p> {{ tareaspendientes }} tareas sin acabar </p> 
</template>

<style scoped>

</style>