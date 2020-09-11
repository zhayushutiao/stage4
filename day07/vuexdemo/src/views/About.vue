<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>{{num}}</h1>
    <button @click="add">增加num</button>
    <button @click="add2">有载荷</button>
    <button @click="test">异步</button>
  </div>
</template>

<script>
import {mapState,mapGetters,mapMutations} from 'vuex'
import {ADD,REDUCE} from '../store/event'

export default {
  computed: {
    ...mapState(['num','stus']),
    ...mapGetters(['getStuNames','getStuById'])
  },
  methods: {
    ...mapMutations(['increase','inc2',ADD,REDUCE,'testAsync']),
    add(){
      // this.$store.state.num++ // 没用
      // 提交increase事件(定义在mutation中的方法)
      // this.$store.commit('increase')
      // console.log(this);
      this.increase()
      // this[ADD]()
    },
    add2(){
      // 提交事件，mutation自动调用对应的事件函数
      // this.$store.commit('inc2',{a:5})
      // this.$store.commit({
      //   type:'inc2',
      //   a:5
      // })
      this.inc2({a:5})
    },
    test(){
      this.testAsync()
    }
  },
}
</script>

