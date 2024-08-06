import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const HomePage = () => import(/* webpackChunkName: "home-page" */  '../components/HomePage.vue');
const ImagensDiversas = () => import(/* webpackChunkName: "home-page" */ '../components/ImagensDiversas.vue');
const TextoPrincipal = () => import(/* webpackChunkName: "home-page" */ '../components/TextoPrincipal.vue');
export default new Router({
  mode: 'history',
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
})
