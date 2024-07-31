// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import PaginaInicial from '../src/components/PaginaInicial.vue';
import babyComponent from '../src/components/babyComponent.vue';

const routes = [
  { path: '/', name: 'Home', component: PaginaInicial },
  { path: '/Bercario', name: 'Baby', component: babyComponent},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;