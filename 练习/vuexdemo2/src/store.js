import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        num:1,
        arr:['apple','orange','banana','strawberry','peach'],
        stus:[
            {id:1,name:'jim',age:22},
            {id:2,name:'mike',age:23},
            {id:3,name:'lucy',age:21},
            {id:4,name:'lily',age:24},
            {id:5,name:'tom',age:23},
            {id:6,name:'jerry',age:22},
            {id:7,name:'rose',age:24},
            {id:8,name:'jack',age:21}
        ]
    },
    // 过滤数据
    getters:{
        // 取num的平方值
        square(state){
            return Math.pow(state.num,2)
        },
        // 获取名字
        getNames(state){
            return state.stus.map(val=>{
                return val.name
            })
        },
        // 获取带p的水果
        getPs(state){
            let arr =[]
            state.arr.forEach(val=>{
                if(val.indexOf('p')!=-1){
                    arr.push(val)
                }
            })
            return arr
        }
    },
    mutations:{
        addNum(state){
            state.num++
        },
        addFruit(state,payload){
            state.arr.push(payload.fruit)
        }
    },
    actions:{
        increase(context){
            // 提交事件给mutation
            context.commit('addNum')
        }
    }
})