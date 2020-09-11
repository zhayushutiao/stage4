<template>
    <div>
        <span @click="mkdir">新建相册</span> |
        <span @click="upload">上传图片</span>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    methods: {
        mkdir(){
            this.$router.push('mkdir')
        },
        upload(){
            let route = this.$route;
            if(route.path=='/photo/upload'){
                alert('相同路由')
                return ;
            }
            // this.$router.push({
            //     name:'home',
            //     params:{a:1,b:2,c:3}
            // })
            this.$router.push({
                path:'/',
                query:{a:1,b:2,c:3}
            })
        }
    },
    beforeRouteEnter (to, from, next) {
        console.log('====Enter====');
        console.log(this);//undefined
        next(vm=>{
            // 使用回调的方式获取当前组件
            console.log(vm);
        })
    },
    beforeRouteUpdate(to,from,next){
        console.log('====Update====');
        console.log(this);//当前组件
        next()
    },
    beforeRouteLeave (to, from, next) {
        console.log('====Leave====');
        console.log(this);//当前组件
        next()
    }
}
</script>

<style scoped>
span:hover{
    cursor: pointer;
    color: blue;
    text-decoration: underline;
}
</style>