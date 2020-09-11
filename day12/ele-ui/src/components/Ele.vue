<template>
  <div>
    <h1>Element-UI</h1>
    <h3>按钮</h3>
    <div>
      <el-button>默认按钮</el-button>
      <el-button type="success" @click="show">成功按钮</el-button>
      <el-button type="success" icon="el-icon-check" circle></el-button>
    </div>
    <h4>Select</h4>
    <div>
      <el-select v-model="num">
        <el-option v-for="(i,idx) in arr" :key="idx" :value="i">{{i}}</el-option>
      </el-select>
    </div>
    <h4>消息框</h4>
    <el-button @click="msg">弹出消息框</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 1,
      arr: [1, 2, 3, 4, 5, 6, 7],
    };
  },
  methods: {
    show() {
      alert("show");
    },
    msg() {
      this.$alert("这是一段内容", "标题名称", {
        confirmButtonText: "确定"      
      });
    }
  }
};
</script>