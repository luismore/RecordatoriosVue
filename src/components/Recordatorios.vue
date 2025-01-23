<script setup>
import Cabecera from './Cabecera.vue';

import { ref, computed } from 'vue';
import { useCollection } from 'vuefire';
import { collection, addDoc, deleteDoc, doc, query, where, updateDoc, count } from 'firebase/firestore';
import { useFirestore } from 'vuefire';
import { useCurrentUser } from 'vuefire';

const db = useFirestore();
const user = useCurrentUser();


const queryRef = query(
  collection(db, 'Recordatorios'),
  where('user', '==', user.value.uid)
);

const recordatoriosRef = useCollection(queryRef);

const PRIORIDADES = ['alta', 'normal', 'baja'];

const recordatoriosOrdenados = computed(() => {
  return [...recordatoriosRef.value].sort((a, b) => {
    return PRIORIDADES.indexOf(a.prioridad) - PRIORIDADES.indexOf(b.prioridad);
  });
});

async function recepcionNota(textoinput, prioridad) {
  if (textoinput && textoinput.trim() !== '') {
    const nuevaTarea = {
      nombre: textoinput,
      prioridad: prioridad || "normal",
      fechacreacion: Date.now(),
      completado: false,
      user: user.value.uid
    };

    const docRef = await addDoc(collection(db, 'Recordatorios'), nuevaTarea);
    console.log('Documento escrito con ID', docRef.id);
  }
}

async function eliminarTarea(id) {
  const docRef = doc(db, 'Recordatorios', id);
  await deleteDoc(docRef);
  console.log('Documento eliminado con ID', id);
}

async function eliminarTareasCompletadas() {
  const tareasCompletadas = recordatoriosRef.value.filter(tarea => tarea.completado);

  for (const tarea of tareasCompletadas) {
    const docRef = doc(db, 'Recordatorios', tarea.id);
    await deleteDoc(docRef);
    console.log('Tarea completada eliminada con ID', tarea.id);
  }
}

async function completarTarea(id, completado) {
  const docRef = doc(db, 'Recordatorios', id);
}

async function actualizarPrioridad(id, nuevaPrioridad) {
  const docRef = doc(db, 'Recordatorios', id);
  await updateDoc(docRef, { prioridad: nuevaPrioridad });
}

function contarTareas(){
  const tareasCompletadas = recordatoriosRef.value.filter(tarea => tarea.completado);
  return tareasCompletadas.length;
}

const numeroDeTareasCompletadas = computed(() => contarTareas());</script>

<template>
  <div class="page-container">
    <Cabecera @nota-creada="recepcionNota" />
    <h1 class="title">Mis Recordatorios</h1>
    <h4>{{numeroDeTareasCompletadas}} tareas completadas.</h4>
    <button 
      class="delete-all-btn"
      @click="eliminarTareasCompletadas"
    >
      Eliminar todas las tareas completadas
    </button>
    <ol class="notes-list">
      <li v-for="tarea in recordatoriosOrdenados" :key="tarea.id" class="note-item">
        <div class="note-content">
          <p :class="{'strikethrough': tarea.completado}" class="note-text">{{ tarea.nombre }}</p>
          <div class="note-actions">
            <button class="delete-btn" @click="eliminarTarea(tarea.id)">Eliminar</button>
            <select v-model="tarea.prioridad" @change="actualizarPrioridad(tarea.id, tarea.prioridad)" class="priority-select">
              <option value="alta">Alta</option>
              <option value="normal">Normal</option>
              <option value="baja">Baja</option>
            </select>
            <input type="checkbox" v-model="tarea.completado" @change="completarTarea(tarea.id, tarea.completado)"/>
          </div>
        </div>
      </li>
    </ol>
  </div>
</template>


<style scoped>
/* General Styles */
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f9;
  color: #333;
}

.page-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.title {
  font-size: 2rem;
  text-align: center;
  color: #333;
  margin-bottom: 1.5rem;
}

/* Notes List Styles */
.notes-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.note-item {
  background-color: #eef2ff;
  border: 1px solid #c3dafe;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: transform 0.2s, box-shadow 0.2s;
}

.note-item:hover {
  transform: scale(1.02);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.note-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.note-text {
  font-size: 1rem;
  margin: 0;
  color: #1a202c;
}

/* Note Actions */
.note-actions {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.delete-btn {
  background-color: #e53e3e;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.delete-btn:hover {
  background-color: #c53030;
}

/* Priority Select */
.priority-select {
  font-size: 0.9rem;
  padding: 0.3rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.priority-select:focus {
  outline: none;
  border-color: #4c9f70;
}

/* Checkboxes */
input[type="checkbox"] {
  width: 20px;
  height: 20px;
  cursor: pointer;
}

/* Strikethrough Style */
.strikethrough {
  text-decoration: line-through;
  color: #aaa; /* Color para el texto tachado */
}

/* Media Queries */
@media (max-width: 768px) {
  .page-container {
    padding: 1rem;
  }

  .title {
    font-size: 1.5rem;
  }

  .note-text {
    font-size: 0.9rem;
  }

  .delete-btn {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
  }

  .priority-select {
    font-size: 0.8rem;
  }
}

/* Botón para eliminar todas las tareas completadas */
.delete-all-btn {
  background-color: #f56565;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 1rem 2rem;
  font-size: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.delete-all-btn:hover {
  background-color: #c53030;
}
</style>