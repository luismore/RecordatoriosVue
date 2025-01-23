<script setup>
import { GoogleAuthProvider } from 'firebase/auth';
import { signInWithPopup } from 'firebase/auth';
import { useFirebaseAuth } from 'vuefire'; 
import { useRouter } from 'vue-router';


const googleAuthProvider = new GoogleAuthProvider();
const auth = useFirebaseAuth();
const router = useRouter();

 

function iniciarSesion() {
  signInWithPopup(auth, googleAuthProvider)
  .then(() => {
      router.push('/recordatorios');
    })}

    
</script>
<template>

    <div>
        <h1>Iniciar Sesion</h1>

        

        <img src="../assets/images/googleIco.png" width="30vh" height="30vh" @click="iniciarSesion()" >
        <router-link to="/register" tag="h3">Registrate ahora</router-link>
    </div>

</template>
<style scoped>

img:hover{
    cursor: pointer;
    transform: scale(1.1);
    transition: all 0.5s ease-in-out;
}

</style>