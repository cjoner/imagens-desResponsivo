<!-- <template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/texto">Texto</router-link>
      <router-link to="/imagens">Imagens</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.links{
  margin-right: 15px;
  
}
</style>
 -->

 <template>
  <div id="app">
    <nav>
      <button @click="loadComponent('ImagensDiversas')">Imagens Diversas</button> |
      <button @click="loadComponent('TextoPrincipal')">Texto Principal</button>
    </nav>
    <router-view></router-view>
    <HomePage />
    <component :is="currentComponent" v-if="currentComponent"></component>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
  data() {
    return {
      currentComponent: null
    };
  },
  methods: {
    loadComponent(componentName) {
      this.currentComponent = defineAsyncComponent(() => import(`./components/${componentName}.vue`));
    }
  }
};
</script>


<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.links {
  margin-right: 15px;

}
</style>

