import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Hello from '../components/hello/Hello.vue'
import Hello1 from '../components/hello/Hello1.vue'
import Hello2 from '../components/hello/Hello2.vue'
import Father from '../components/child/Father.vue'
import Son1 from '../components/child/Son1.vue'
import Son2 from '../components/child/Son2.vue'
import Photo from '../components/photo/Photo.vue'
import mkdir from '../components/photo/mkdir.vue'
import upload from '../components/photo/upload.vue'
import show from '../components/photo/show.vue'
import Singer from '../components/singer/singer.vue'
import SingerInfo from '../components/singer/singerInfo.vue'

Vue.use(VueRouter)

// 配置路由 创建路由对象并导出
let router = new VueRouter({
  mode:'history',
  routes:[//配置路由的匹配规则
    {
      path:'/',//路由路径(这里表示根路由)
      name:'home',//路由名称
      component:Home
    },
    {
      path:'/about',
      component:About,
      alias:'/x',
      meta:{ax:true},
      beforeEnter(to,from,next){
        // if(to.matched[0].meta.ax){
        //   alert('需要登录')
        //   next(false)
        // }else{
        //   alert('已经登录了')
        //   next()
        // }
        next()
      }
    },
    {
      path:'/hello',
      components:{
        default:Hello,
        a:Hello1,
        b:Hello2
      }
    },
    // 路由的嵌套
    {
      path:'/father',
      name:'father',
      component:Father,
      // 配置子路由
      children:[
        {
          path:'son1',
          component:Son1
        },
        {
          path:'son2',
          component:Son2
        }
      ]
    },
    // photo练习
    {
      path:'/photo',
      component:Photo,
      redirect:'photo/show',
      children:[
        {
          path:'show',
          component:show
        },
        {
          path:'mkdir',
          component:mkdir
        },
        {
          path:'upload',
          component:upload
        }
      ]
    },
    // 动态路由
    {
      path:'/singer',
      component:Singer,
      children:[
        {
          path:':url',
          component:SingerInfo
        }
      ]
    }
  ]
})

// router.beforeEach(function(to,from,next){
//   console.log('====beforeEach=====');
//   console.log(to);
//   console.log(from);
//   next();
//   console.log('====beforeEach=====');
// })
export default router;