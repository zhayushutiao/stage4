<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about?aaa=1&bbb=2">About</router-link> |
      <router-link to="/hello">Hello</router-link> |
      <router-link :to='{name:"father",params:{num:2}}'>Father</router-link> |
      <router-link to="/photo">在线相册</router-link> |
      <router-link to="/singer">歌手列表</router-link>
    </div>
    <transition name=slide>
      <router-view/>
    </transition>
    
    <router-view name="a"/>
    <router-view name="b"/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
