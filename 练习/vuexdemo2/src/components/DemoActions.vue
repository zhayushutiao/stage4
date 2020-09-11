<template>
    <div>
        <h1>Action</h1>
        <button @click="add">增加</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    // methods:mapActions(['increase'])
    methods:{
        ...mapActions(['increase']),
        add(){
            // actions派发事件给mutation执行
            // 派发的是actions中定义的方法名
            // 在该方法中再提交给mutation
            // this.$store.dispatch('increase')
            this.increase()
        }
    }
}
</script>