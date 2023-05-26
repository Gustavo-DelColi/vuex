<template>
  <img alt="Vue logo" src="./assets/logo.png">
    <button @click="updateUser()">
      Atualizar perfil
    </button>
  <HelloWorld
    user=""
    msg="Welcome to Your Vue.js App"/>
    <AppHeader user=""></AppHeader>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data(){
    return {
    }
  },

  methods:{
    updateUser(){
      const newUser = {
        first_name: 'Guts',
        last_name:'Solo',
        email: 'han@solo.com'
      }
      this.$store.commit('storeUser', newUser)

    }
  },

  created(){
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
