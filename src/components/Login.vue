<script setup>
import { GoogleAuthProvider } from 'firebase/auth';
import { signOut } from 'firebase/auth';
import { useCurrentUser, useFirebaseAuth } from 'vuefire'; 
import { useRouter } from 'vue-router';

const googleAuthProvider = new GoogleAuthProvider();
const user = useCurrentUser();
const auth = useFirebaseAuth();
const router = useRouter();



function cerrarSesion() {
  signOut(auth)
    .then(() => {
      router.push('/');
    })
}
</script>


<template>
  <div class="auth-container">
    <button v-if="user" @click="cerrarSesion" class="auth-btn logout-btn">Cerrar Sesión</button>
    <router-link v-else to="/login" class="auth-btn login-btn" tag="button">Iniciar Sesion</router-link>

  </div>
</template>

<style scoped>
/* General Auth Container */
.auth-container {
  position: absolute; 
  top: 1rem; 
  right: 1rem;
  display: flex;
  gap: 0.5rem;
}

/* Auth Button Styles */
.auth-btn {
  font-size: 0.85rem;
  padding: 0.4rem 1rem;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
  font-weight: 500;
}

/* Iniciar sesión button */
.login-btn {
  background-color: #4C9F70;
  color: #fff;
}

.login-btn:hover {
  background-color: #38A15D;
  transform: scale(1.05);
}

/* Cerrar sesión button */
.logout-btn {
  background-color: #E53E3E;
  color: #fff;
}

.logout-btn:hover {
  background-color: #C53030;
  transform: scale(1.05);
}
</style>
