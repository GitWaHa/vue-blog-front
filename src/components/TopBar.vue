<template>
  <v-app-bar app color="red darken-1" dense hide-on-scroll>
    <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

    <v-avatar class="mr-5" color="cyan darken-1" size="36"
      ><span class="white--text text-h7">WH</span>
    </v-avatar>
    <v-toolbar-title>WaHaoo's Blog</v-toolbar-title>

    <v-spacer></v-spacer>
    <v-btn plain class="white--text" @click="onClickHome">
      <v-icon color="white">mdi-home</v-icon>
      Home
    </v-btn>
    <v-btn plain class="white--text" @click="onClickArticle">Article</v-btn>
    <v-btn plain class="white--text" @click="onClickTags">Tags</v-btn>
    <v-btn plain class="white--text" @click="onClickAbout">About</v-btn>

    <v-spacer></v-spacer>

    <v-responsive max-width="300">
      <v-text-field
        label="Search"
        placeholder="查找文章"
        background-color="white"
        append-icon="mdi-text-box-search-outline"
        v-model="textValue"
        @click:append="onSearchIcon"
        @keydown="onSearchKeyDown"
        @click:clear="onSearchClear"
        hide-details
        clearable
        rounded
      ></v-text-field>
    </v-responsive>
  </v-app-bar>
</template>


<script>
export default {
  data() {
    return {
      textValue: "",
    };
  },
  methods: {
    // tags
    onClickTags() {
      this.$router.push(`/tags`).catch(() => {});
    },
    // about me
    onClickAbout() {
      this.$router.push(`/about`).catch(() => {});
    },
    // article
    onClickArticle() {
      this.$router.push(`/articles`).catch(() => {});
    },
    // home
    onClickHome() {
      this.$router.push(`/`).catch(() => {});
    },
    // 搜索框
    onSearchIcon() {
      if (this.textValue == "" || this.textValue == null) {
        return this.$router.push(`/`).catch(() => {});
      }
      this.$router.push(`/articlelist/${this.textValue}`).catch(() => {});
    },
    onSearchClear() {
      this.$router.push(`/`).catch(() => {});
    },
    onSearchKeyDown(event) {
      console.log("event", event);
      if (event.key == "Enter") {
        if (this.textValue == "" || this.textValue == null) {
          return this.$router.push(`/`).catch(() => {});
        }
        this.$router.push(`/articlelist/${this.textValue}`).catch(() => {});
      }
    },
  },
};
</script>

<style scoped>
.v-btn {
  text-transform: none;
}
</style>