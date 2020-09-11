<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!-- {{getA}},{{str}} -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      str:'区分一下'
    }
  },
  computed: {
    getA(){
      return this.$route.query.aaa
    }
  },
  created() {
    // console.log(this.str);
    console.log(this.$route.query.aaa);
    console.log('$route:',this.$route);
    console.log('$router:',this.$router);
  },
}
</script>

<style scoped>

</style>
