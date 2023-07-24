import "./public-path.js";
import { createApp } from 'vue'
import App from './App.vue'
import {
  createRouter, 
  createWebHistory
} from 'vue-router';
import store from "./store";

const base = process.env.VUE_APP_BASE_URL || "/";
let instance = null;
let router = null;
function render(props = {}) {
  const { container } = props;
  console.log("microChild-----", "/portal/microChild")
  router = createRouter({
    history: createWebHistory(),
    base:  window.__POWERED_BY_QIANKUN__ ?  "/portal/microChild/" : "/microChild",
    routes: [
      // {
      //   path: "/",
      //   redirect: "/microChild/login"
      // },
      {
        path: "/",
        name: "login",
        component: () => import("./pages/login.vue")
      },
      {
        path: "/home",
        name: "home",
        component: () => import("./pages/home.vue"),
      },
      {
        path: "/portal/microChild/about",
        name: "about",
        component: () => import("./pages/about.vue"),
      }
    ]
  })

  console.log("子应用----container-------", container)
  instance = createApp(App).use(router).mount(container ? container.querySelector("#app") : "#app");
}

//如果是独立运行window.__POWERED_BY_QIANKUN__=undefined
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

//最后暴露的三个方法是固定的，加载渲染以及销毁
// export async function bootstrap() {
//   console.error('子应用挂载了-------vue app bootstraped', instance);
// }

// export async function mount(props) {
//   props.onGlobalStateChange((state, prev) => {
//     // state: 变更后的状态; prev 变更前的状态
//     console.log('子应用-----', state, state.getters);
//     sessionStorage.setItem("token", "从主应用共享的token" + JSON.stringify(state.getters))
//   });

//   props.setGlobalState(store);
//   render(props);
//   console.error("子应用进来了----", props, instance)
// } 

// export async function unmount(props) {
//   console.error("子应用离开了-----", 'props:', props, 'instance:', instance, instance.$el)
//   // instance.$destroy();
//   // instance.unmount();
//   // instance.$el = null;
//   router = null;
// }
// export async function update(props) {
//     //   console.log('update props', props);
// }


export async function bootstrap() {}
export async function mount(props) {
  render(props);
}
export async function unmount() {}
export async function update() {}