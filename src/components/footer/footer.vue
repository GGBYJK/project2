<template>
  <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o" dot to="/">{{home}}</van-tabbar-item>
    <van-tabbar-item icon="search" dot to="/vuex/2/3">{{serach}}</van-tabbar-item>
    <van-tabbar-item icon="friends-o" badge="5" to="/hi">{{personal}}</van-tabbar-item>
    <van-tabbar-item icon="setting-o" badge="20">{{setting}}</van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {
      active: 0,
    };
  },
  computed:{
    ...mapState({
      home:state=>state.footerList[0],
      serach:state=>state.footerList[1],
      personal:state=>state.footerList[2],
      setting:state=>state.footerList[3]
    })
  },
  methods:{
    onChange(index) {
      console.log(index);
    },
  }
}
</script>

<style>

</style>