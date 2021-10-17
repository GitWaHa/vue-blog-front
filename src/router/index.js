import Vue from 'vue'
import Home from '../views/Home.vue'
import ArticleList from '../components/content/ArticleList.vue'
import ArticleInfo from '../components/content/ArticleInfo.vue'
import Article from '../components/article/Article.vue'
import TagList from '../components/tag/TagList.vue'
import TagArticleList from '../components/tag/TagArticleList.vue'
import AboutMe from '../components/about/AboutMe.vue'

import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      { path: '', component: ArticleList },
      { path: 'articlelist/:title', name: 'ArticleList', component: ArticleList, props: true },
      { path: 'articlelist/tag/:id', name: 'ArticleList', component: TagArticleList, props: true },
      { path: 'article/:id', component: ArticleInfo, props: true },
      { path: 'articles', component: Article },
      { path: 'about', component: AboutMe },
      { path: 'tags', component: TagList },
    ]
  },
]

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
