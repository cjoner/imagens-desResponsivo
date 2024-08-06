import { createRouter, createWebHistory } from 'vue-router';

// Componentes carregados de forma assíncrona
const HomePage = () => import(/* webpackChunkName: "home-page" */ '../components/HomePage.vue');
const ImagensDiversas = () => import(/* webpackChunkName: "imagens-diversas" */ '../components/ImagensDiversas.vue');
const TextoPrincipal = () => import(/* webpackChunkName: "texto-principal" */ '../components/TextoPrincipal.vue');

// Criação do roteador
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/texto',
      name: 'TextoPrincipal',
      component: TextoPrincipal
    },
    {
      path: '/imagens',
      name: 'ImagensDiversas',
      component: ImagensDiversas
    }
  ]
});

export default router;
