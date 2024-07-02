<template>
  <Header/>
  <PaginaInicial></PaginaInicial>
</template>

<script>
import Header from './components/Header.vue'
import PaginaInicial from './components/PaginaInicial.vue';

export default {
  name: 'App',
  components: {
    Header,
    PaginaInicial,
  }
}
</script>

<style>
#app {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin: 0;
  padding: 0;
}

:root {
  --verde-escuro: #0c4f3d;
  --branco: #fff;
  --preto: #0f0f0f;
  --verde-claro: #6c9087;
  --verde-suave: #a8e2d4;
  --laranja: #fa7015;
  --laranja-claro: #ffa263;
}
</style>
