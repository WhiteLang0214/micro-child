
import {
  createRouter, 
  createWebHistory
} from 'vue-router';

import routes from "./routes"
const base = process.env.VUE_APP_BASE_URL || "/";

export default createRouter({
  history: createWebHistory(),
  base, // window.__POWERED_BY_QIANKUN__ ?  "/portal/microChild/" : "/microChild",
  routes
})