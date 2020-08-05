import Vue from 'vue'   //引入Vue
import Router from 'vue-router'  //引入vue-router
import Hello from '../components/HelloWorld'  //引入根目录下的Hello.vue组件
import Hi from '../components/Hi'
import Vuex from '../page/vuexdemo/Vuex.vue'
 
Vue.use(Router)  //Vue全局使用Router
 
export default new Router({
  routes: [              //配置路由，这里是个数组
    {                    //每一个链接都是一个对象
      path: '/',         //链接路径
      name: 'Hello',     //路由名称，
      component: Hello,  //对应的组件模板
      beforeEnter:(to,from,next)=>{
        // console.log('我进入了params模板');
        // console.log(to);
        // console.log(from);
        next();
      },
    },{
      path:'/hi',
      name:'Hi',
      component:Hi
    },{
      path:'/Vuex/:userName/:userId',
      name:'vuex',
      component:Vuex
    },
    {
      path:'/back',
      redirect:'/'
    },
    {
      path:'/hi',
      component: Hi,
      alias:'/test'
    }
  ]
})