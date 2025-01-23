<script setup>
import Login from './components/Login.vue'
import {useRouter} from 'vue-router';
import {getCurrentUser} from 'vuefire';

const router = useRouter();

router.beforeEach(async (to, from) => {
  if(to.fullPath=='/recordatorios'){
  const user = await getCurrentUser()
    if (!user){
      return false;

    }else{
      return true;
    }
}})
</script>

<template>
    <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/recordatorios">Recordatorios</RouterLink>
    <Login></Login>
  </nav>
  <RouterView></RouterView>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
