<script setup>

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password, nombre, apellidos)
  .then((userCredential) => {
    const user = userCredential.user;
  });

</script>
<template>

    <div class="register">
        <h2>Registrarse</h2>
        <form>
            <div class="register-input">
                <input type="nombre" required>
                <label>Nombre</label>
            </div>
            <div class="register-input">
                <input type="apellidos" required>
                <label>apellidos</label>
            </div>
            <div class="register-input">
                <input type="email" required>
                <label>Email</label>
            </div>
            <div class="register-input">
                <input type="password" required>
                <label>Contraseña</label>
            </div>

            <button class="register-submit" type="submit">Registrarse</button>
            {{createUserWithEmailAndPassword(email, password, nombre, apellidos)}}
        </form>
    </div>

</template>
<style scoped></style>