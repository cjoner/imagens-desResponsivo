// import Vue from 'vue'
// import App from './App.vue'
// import router from './router/router'

// Vue.config.productionTip = false

// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app')

import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router'; // ajuste o caminho conforme necessário

const app = createApp(App);

app.use(router);

app.mount('#app');
