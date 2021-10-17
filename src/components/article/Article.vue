<template>
  <div class="ma-6">
    <v-row>
      <v-col cols="2">
        <AboutAuthor />
      </v-col>
      <v-col>
        <v-timeline reverse>
          <v-timeline-item
            v-for="(item, index) in articleList"
            :key="item.ID"
            :color="Color[index % Color.length]"
            small
          >
            <span slot="opposite">
              {{ item.CreatedAt.substr(0, 16).replace(/T/, " ") }}
            </span>
            <v-card>
              <v-card-title :class="Color[index % Color.length]">
                <h2 class="text-h4 white--text font-weight-light">
                  {{ item.title }}
                </h2>
              </v-card-title>
              <v-container>
                <v-row>
                  <v-col cols="12" md="10"> {{ item.desc }} </v-col>
                  <v-col class="hidden-sm-and-down text-right" md="2">
                    <v-btn plain @click="onClickView(item.ID)">
                      <v-icon> mdi-calendar-text </v-icon>
                      查看
                    </v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-timeline-item>
        </v-timeline>

        <v-pagination
          v-model="paginationOpts.pageNum"
          :length="paginationOpts.pageLen"
          total-visible="5"
          prev-icon="mdi-menu-left"
          next-icon="mdi-menu-right"
          @input="onPageChange"
        ></v-pagination>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import AboutAuthor from "../content/AboutAuthor.vue";
// const Color = ["purple lighten-2", "red", "blue", "green"];
export default {
  components: { AboutAuthor },
  data() {
    return {
      Color: ["purple lighten-2", "red", "blue", "green"],
      articleList: [],
      tagList: [],
      queryParams: {
        title: "",
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
    //分页改变
    onPageChange() {
      // console.log("value", value);
      this.getArticleList();
    },
    onClickView(id) {
      this.$router.push(`/article/${id}`);
    },
    async getArticleList() {
      this.queryParams.pagenum = this.paginationOpts.pageNum;
      this.queryParams.pagesize = this.paginationOpts.pageSize;
      const res = await this.$http.get("articles", {
        params: this.queryParams,
      });
      console.log("res", res);

      const data = res.data;

      if (res.status !== 200 || data.status !== 200) {
        window.alert(res.message);
        return;
      }
      this.articleList = data.articles;
      this.tagList = data.tags;
      this.paginationOpts.pageLen = Math.ceil(
        data.count / this.paginationOpts.pageSize
      );
    },
  },
};
</script>