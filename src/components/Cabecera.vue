<script setup>
import { ref } from 'vue';

let textoinput = ref("");

const emit = defineEmits(['nota-creada']);

function nuevaNota() {
  if (textoinput.value !== "") {
    emit('nota-creada', textoinput.value);
    console.log(textoinput.value);
    textoinput.value = "";
  }
}
</script>

<template>
  <div class="input-container">
    <input
      v-model="textoinput"
      class="note-input"
      placeholder="Escribe una nueva nota y presiona Enter"
      v-on:keydown.enter="nuevaNota"
    />
  </div>
</template>

<style scoped>
/* Container for input */
.input-container {
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
}

/* Input Field Styles */
.note-input {
  width: 100%;
  max-width: 600px;
  padding: 0.8rem 1rem;
  border: 2px solid #c3dafe;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  background-color: #f7fafc;
  color: #1a202c;
  transition: border-color 0.3s, box-shadow 0.3s;
}

.note-input::placeholder {
  color: #a0aec0;
}

.note-input:focus {
  border-color: #667eea;
  box-shadow: 0 0 5px rgba(102, 126, 234, 0.5);
}
</style>
