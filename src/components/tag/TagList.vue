<template>
  <div class="content">
    <v-container fill-height>
      <v-row>
        <v-col class="text-center">
          <v-text-field
            class="mx-auto"
            style="max-width: 70%"
            v-model="searchTagName"
            label="tag name"
            placeholder="请输入查找信息"
            outlined
            dense
            rounded
            clearable
            @keydown="onKeyDown"
            @click:clear="onClickClear"
          ></v-text-field>

          <v-chip
            class="ma-1"
            v-for="(item, index) in this.tagsList"
            :key="item[0]"
            :color="Color[index % Color.length]"
            @click="onClickChip(item[0])"
          >
            {{ item[1] }}({{ item[2] }})
          </v-chip>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Color: ["purple lighten-2", "red", "blue", "green"],
      tagsList: [],
      searchTagName: "",
    };
  },
  created() {
    this.getTagsList();
  },
  methods: {
    onClickClear() {
      this.searchTagName = "";
      this.getTagsList();
    },
    onKeyDown(event) {
      if (event.key == "Enter") {
        console.log(this.searchTagName);
        this.getTagsList();
      }
    },
    onClickChip(id) {
      console.log(id);
      this.$router.push(`articlelist/tag/${id}`);
    },
    async getTagsList() {
      const { data: res } = await this.$http.get("used-tags");
      if (res.status !== 200) {
        return window.alert(res.message);
      }
      this.tagsList = res.data;

      console.log("getTagsList", this.tagsList);
    },
  },
};
</script>

<style scoped>
.content {
  background: url("https://waha-img.oss-cn-beijing.aliyuncs.com/blog/default.png")
    no-repeat;
  background-color: rgb(138, 235, 82);
  background-size: 100% 100%;
  height: 100vh;

  background-attachment: fixed;
  /* position: absolute; */
}
</style>