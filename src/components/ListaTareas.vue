<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  tareas: Array,
});

const emit = defineEmits(['borrar-tarea']);

function borrarLista(pos) {
  emit('borrar-tarea', pos);
  console.log("Borrar elemento en posición: " + pos);
}
</script>

<template>
    <ol>
      <li v-for="(tarea, index) in tareas" :key="index">
        {{ tarea.nombre }}
        <button v-on:click="borrarLista(index)">Borrar</button>
      </li>
    </ol>
  </template>
