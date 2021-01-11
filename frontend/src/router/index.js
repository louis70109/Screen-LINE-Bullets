import { createRouter, createWebHistory } from 'vue-router';
import Barrage from '../components/Barrage.vue';
const routerHistory = createWebHistory();

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: Barrage,
    },
  ],
});

export default router;
