
const base = process.env.VUE_APP_BASE_URL || "/";
export default [
  {
    path: "/",
    redirect: base + "/login"
  },
  {
    path: base + "/home",
    name: "home",
    component: () => import("@/pages/home.vue"),
    children: [
      {
        path: base + "/setting",
        name: "setting",
        component: () => import("@/pages/setting.vue"),
      }
    ]
  },
  {
    path: base + "/login",
    name: "login",
    component: () => import("@/pages/login.vue")
  },
  {
    path: base + "/about",
    name: "about",
    component: () => import("@/pages/about.vue"),
  }
]