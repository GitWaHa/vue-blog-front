<template>
  <v-app class="" style="height: 100%; min-width: 1300px">
    <TopBar> </TopBar>

    <v-main><MainContent></MainContent></v-main>

    <Footer> </Footer>
  </v-app>
</template>

<script>
import TopBar from "../components/TopBar.vue";
import Footer from "../components/Footer.vue";
import MainContent from "../components/MainContent.vue";

export default {
  name: "Home",

  components: { TopBar, Footer, MainContent },
  data() {
    return {
      // topBarValue: "",
    };
  },
  created() {},
};
</script>
