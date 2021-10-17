<template>
  <div class="content" style="height: 100%">
    <router-view :key="$route.path"></router-view>
  </div>
</template>


<script>
export default {
  components: {},
  data() {
    return {};
  },
};
</script>

<style scoped>
.content {
  /* background: url("https://waha-share.oss-cn-beijing.aliyuncs.com/image/WLOP.png")
    no-repeat; */
  background-size: 100% 100%;
  height: 100vh;

  background-attachment: fixed;
  /* position: absolute; */
}
</style>