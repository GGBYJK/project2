<template>
  <div id="app">
    <to-header></to-header>
    <router-view></router-view>
    <to-footer></to-footer>
  </div>
</template>

<script>
// import vuex from './page/vuexdemo/Vuex'
import toHeader from './components/header/head'
import toFooter from './components/footer/footer'

export default {
  name: 'App',
  components: {
    toHeader,
    toFooter,
  },
}
</script>

<style>
#app {
  height: 100%;
  width: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
