<template>
  <van-nav-bar
    title="标题"
    left-text="返回"
    right-text="按钮"
    fixed
    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight"
  />
</template>

<script>


export default {
  methods: {
    onClickLeft() {
      this.$router.go(-1)
      console.log(123)
    },
    onClickRight() {
      console.log(456)
    },
  },
}
</script>

<style>

</style>