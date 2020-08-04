import Vue from "vue"
import Vuex from 'vuex'
Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    count:0,
    changeShowCol:true,
  },

  getters:{
    getCount(state){
      return state.count
    },

    isShow(state){
      return state.changeShowCol
    }
  },

  mutations:{
    addCount(state,num){
      state.count = state.count + num
    },

    delCount(state,num){
      state.count = state.count - num
    },

    show(state){
      state.changeShowCol = true
    },

    hide(state){
      state.changeShowCol = false
    }
  },

  actions:{
    getAddCount(context,num){
      context.commit('addCount',num)
    },

    getDelCount(context,num){
      context.commit('delCount',num)
    },

    hideCom(context){
      context.commit('hide')
    },

    showCom(context){
      context.commit('show')
    }
  }

})