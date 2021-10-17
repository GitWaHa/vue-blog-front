<template>
  <v-card class="my-3">
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <v-card-title>WaHaoo</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">About Me </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>1996-12-08</div>
      <div>c++、robotics、python</div>
    </v-card-text>

    <v-divider></v-divider>
    <v-card-subtitle class="pb-0"> 联系方式 </v-card-subtitle>

    <v-card-text>
      <div class="mt-2">
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
    </v-card-text>

    <!-- <v-card-actions>
      <v-btn color="orange" text> Share </v-btn>
    </v-card-actions> -->
  </v-card>
</template>


<script>
export default {
  data() {
    return {};
  },
};
</script>