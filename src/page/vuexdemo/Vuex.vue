<template>
  <div class="mobile">
    <h1 style="font-size:20px;">{{msg}}</h1>
    <h1 style="font-size:20px;">我是从state上获得的{{this.$store.state.count}}</h1>
    <h1 style="font-size:20px;">我是从getters上获得的{{this.$store.getters.getCount}}</h1>
    <h1 style="font-size:20px;">我是从...mapState拓展上获得的{{count1}}</h1>
    <h1 style="font-size:20px;">我是从...mapGetter{{getCount}}</h1>
    <h1 style="font-size:20px;">{{$route.params.userId}}</h1>
    <h1 style="font-size:20px;">{{$route.params.userName}}</h1>

    <button @click="add">+</button>
    <button @click="del">-</button>

    <div v-show="isShow">{{count}}222</div>
  </div>
</template>

<script>
import { mapState , mapGetters } from "vuex";
export default {
  
  data(){
    return {
      msg:"hello",
      count:'',
    }
  },

  methods:{
    add(){
      //this.$store.commit('addCount', 1)
      this.$store.dispatch('getAddCount', 1)
    },

    del(){
      //this.$store.commit('delCount', 1)
      this.$store.dispatch('getDelCount', 1)
    }
  },

  computed:{
    ...mapState({
      count1:state=>state.count
    }),

    ...mapGetters([
      'getCount',
      'isShow',
    ])
  }
}
</script>

<style>

</style>