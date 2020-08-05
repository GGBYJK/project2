<template>
  <div id="app">
    <to-header style="z-index:10000;"></to-header>
    <div class="content">
      <router-view></router-view>
    </div>
    <to-footer style="z-index:10000;"></to-footer>
  </div>
</template>

<script>
// import vuex from './page/vuexdemo/Vuex'
import toHeader from "./components/header/head";
import toFooter from "./components/footer/footer";

export default {
  name: "App",
  components: {
    toHeader,
    toFooter
  }
};
</script>


<style lang="less">
::-webkit-scrollbar {
  display: none;
}
#app {
  height: 100%;
  width: 100%;
  text-align: center;
  .content {
    height: calc(100% - 96px);
    position: relative;
    top: 46px;
    padding-bottom: 50px;
  }
}
</style>
