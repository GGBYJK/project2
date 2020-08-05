<template>
  <div class="hello">
    <swipe />
  </div>
</template>

<script>
import Swipe from "./swipe";
import { getCategory } from "../network/home";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {

    };
  },
  components: {
    Swipe
  },
  created() {
    this._getCategory();
  },
  mounted() {
    let obj = { name: "jjj", age: { y: 18, a: "123" } };
    console.log(obj);

    let str = this.$qs.stringify(obj);
    console.log(str);
    let obj2 = {};
    obj2 = this.$qs.parse(str);
    console.log(obj2);
  },
  methods: {
    _getCategory() {
      let that = this
      getCategory().then(res => {
        console.log(res);
        for(let index in res){
          that.$store.state.footerList[index] = res[index]
        }
        console.log(this.$store);
        
        //that.$route.state.footerList
        // 1.获取分类数据
        // this.categories = res.data.category.list;
        // // 2.初始化每个类别的子数据
        // for (let i = 0; i < this.categories.length; i++) {
        //   this.categoryData[i] = {
        //     subcategories: {},
        //     categoryDetail: {
        //       pop: [],
        //       new: [],
        //       sell: []
        //     }
        //   };
        // }
        // 3.请求第一个分类的数据
        //this._getSubcategories(0);
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
