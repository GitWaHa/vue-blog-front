import Vue from "vue";
import axios from "axios";

axios.defaults.baseURL = "http://172.81.210.52:3000/api/v1/"
// axios.defaults.baseURL = 'http://localhost:3000/api/v1/' //本地调试

Vue.prototype.$http = axios