<template>
  <div class="background">
    <div class="content">
      <h1>whaoo</h1>
      <div>1996-12-08</div>
      <div>c++、robotics、python</div>

      <div class="mt-16">
        <v-icon color="blue darken-2">mdi-qqchat</v-icon> 863264962
      </div>

      <v-divider></v-divider>
      <div class="mt-2">
        <v-icon color="blue darken-2">mdi-wechat</v-icon> wahaoo-wx
      </div>
      <v-divider></v-divider>
      <div class="mt-2">
        <v-icon color="blue darken-2">mdi-github</v-icon> GitWaHa
      </div>
      <v-divider></v-divider>
      <div class="mt-2">
        <v-icon color="blue darken-2">mdi-mail</v-icon>
        wa.haoo@foxmail.com
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>


<style scoped>
.background {
  background: url("https://waha-img.oss-cn-beijing.aliyuncs.com/blog/Fantasy.png")
    no-repeat;
  background-color: rgb(58, 48, 151);
  background-size: 100% 100%;
  height: 100vh;

  background-attachment: fixed;
  /* position: absolute; */
}

.content {
  color: white;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>