<template>
  <div>
    <v-container :fluid="true" class="pa-auto">
      <v-row>
        <!-- <v-col cols="3">
          <AboutAuthor></AboutAuthor>
        </v-col> -->
        <v-col cols="12">
          <v-sheet class="mx-0" elevation="10">
            <v-subheader>
              <h2>文章列表</h2>
            </v-subheader>

            <h2 class="text-center" v-if="!isHaveData">未搜索到相关文章</h2>

            <v-row dense v-for="(item, i) in articleList" :key="i">
              <v-col>
                <v-card class="mx-0" elevation="10">
                  <v-img
                    class="white--text align-end"
                    max-height="250"
                    :src="item.img ? item.img : defaultImg"
                  >
                  </v-img>

                  <v-card-title class="text-h4 red--text">{{
                    item.title
                  }}</v-card-title>

                  <v-chip
                    v-for="tag in tagList[i]"
                    :key="tag"
                    class="ml-4"
                    color="primary"
                    small
                  >
                    <v-icon left> mdi-label </v-icon>
                    {{ tag }}
                  </v-chip>

                  <v-card-text class="text--primary">
                    <div style="color: blue">简要描述：{{ item.desc }}</div>
                    <div class="multi-line-text-truncation">
                      正文内容：{{ item.content }}
                    </div>
                    <div style="color: green; font-size: 10px">
                      创建于: {{ item.CreatedAt }} <br />
                      修改于: {{ item.UpdatedAt }}
                    </div>
                  </v-card-text>

                  <v-card-actions class="mt-0 pt-0 justify-end">
                    <v-btn color="orange" text @click="onClickView(item.ID)">
                      查看文章
                    </v-btn>

                    <!-- <v-btn color="orange" text> Explore </v-btn> -->
                  </v-card-actions>
                </v-card>
                <br />
              </v-col>
            </v-row>

            <v-pagination
              v-model="paginationOpts.pageNum"
              :length="paginationOpts.pageLen"
              total-visible="5"
              prev-icon="mdi-menu-left"
              next-icon="mdi-menu-right"
              @input="onPageChange"
            ></v-pagination>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>


<script>
// import AboutAuthor from "./AboutAuthor.vue";

export default {
  // components: { AboutAuthor },
  props: {
    id: String,
  },
  data() {
    return {
      isHaveData: true,
      defaultImg: "http://img.wahaoo.online/blog/default.png",
      articleList: [],
      tagList: [],
      queryParams: {
        pagesize: 5,
        pagenum: 1,
      },
      paginationOpts: {
        pageNum: 1,
        pageSize: 5,
        pageLen: 1,
      },
    };
  },
  created() {
    this.queryParams.title = this.$route.params.title;
    this.getArticleList();
  },

  methods: {
    onClickView(id) {
      console.log("id", id);
      this.$router.push(`/article/${id}`);
    },
    onClickCard(id) {
      console.log("id", id);
      this.$router.push(`/article/${id}`);
    },
    //分页改变
    onPageChange() {
      this.getArticleList();
    },
    // 标签列表
    async getArticleList() {
      this.queryParams.pagenum = this.paginationOpts.pageNum;
      this.queryParams.pagesize = this.paginationOpts.pageSize;
      const { data: res } = await this.$http.get(`articles/tag/${this.id}`, {
        params: this.queryParams,
      });

      if (res.status !== 200) {
        window.alert(res.message);
        return;
      }
      console.log(res);
      this.articleList = res.articles;
      this.tagList = res.tags;
      this.paginationOpts.pageLen = Math.ceil(
        res.count / this.paginationOpts.pageSize
      );
      if (!this.articleList.length) this.isHaveData = false;
    },
  },
};
</script>

<style scoped>
.multi-line-text-truncation {
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>