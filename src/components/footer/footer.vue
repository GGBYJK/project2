<template>
  <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o" dot to="/">标签</van-tabbar-item>
    <van-tabbar-item icon="search" dot to="/vuex/2/3">标签</van-tabbar-item>
    <van-tabbar-item icon="friends-o" badge="5" to="/hi">标签</van-tabbar-item>
    <van-tabbar-item icon="setting-o" badge="20">标签</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
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