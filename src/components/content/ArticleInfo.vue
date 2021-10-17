<template>
  <div>
    <v-sheet elevation="10">
      <v-container>
        <v-subheader>
          <h2>文章详情-{{ id }}</h2>
        </v-subheader>
        <!-- defaultOpen="preview" -->
        <!-- navigation -->
        <mavon-editor
          style="width: 100%; z-index: 0; min-height: 1000px"
          v-model="articleInfo.content"
          :externalLink="externalLink"
          :editable="false"
          :toolbarsFlag="false"
          defaultOpen="preview"
          :subfield="false"
        />
      </v-container>
    </v-sheet>
    <v-btn class="red" fab large bottom right fixed @click="onClickGoTop">
      <v-icon>mdi-navigation</v-icon>
    </v-btn>
  </div>
</template>


<script>
export default {
  props: ["id"],
  data() {
    return {
      articleTags: [],
      articleInfo: {
        id: 0,
        title: "",
        desc: "",
        content: "",
        img: "",
      },
      categoryInfo: {
        id: 0,
        name: "",
      },
      externalLink: {
        markdown_css: false,
        katex_css: false,
        katex_js: function () {
          return "https://cdn.jsdelivr.net/npm/katex@0.13.18/dist/katex.min.js";
        },
      },
    };
  },
  created() {
    this.articleInfo.id = this.id;
    this.getArticleInfo();
  },

  methods: {
    onClickGoTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
    // 获得单个文章信息
    async getArticleInfo() {
      const { data: res } = await this.$http.get(
        `article/${this.articleInfo.id}`
      );
      if (res.status !== 200) {
        window.alert(res.message);
        return;
      }
      console.log("getArticleInfo  res", res);
      this.articleInfo.id = res.article.ID;
      this.articleInfo.title = res.article.title;
      this.articleInfo.desc = res.article.desc;
      this.articleInfo.content = res.article.content;
      this.articleInfo.img = res.article.img;

      this.articleTags = res.tags;
    },
  },
};
</script>