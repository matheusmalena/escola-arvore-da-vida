// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import PaginaInicial from '../src/components/PaginaInicial.vue';
import babyComponent from '../src/components/babyComponent.vue';
import Infant from '../src/components/Infant.vue';
import EnsinoFundamentalI from '../src/components/EnsinoFundamentalI.vue';
import ExtraComponent from './components/ExtraComponent.vue';

const routes = [
  { path: '/', name: 'Home', component: PaginaInicial },
  { path: '/Bercario', name: 'Bercario', component: babyComponent},
  { path: '/EducacaoInfantil', name: 'Infant', component: Infant},
  { path: '/EnsinoFundamentalI', name: 'EnsinoFundamentalI', component: EnsinoFundamentalI},
  { path: '/Atividades', name: 'Atividades', component: ExtraComponent},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;