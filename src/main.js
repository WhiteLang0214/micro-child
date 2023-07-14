import "./public-path.js";
import { createApp } from 'vue'
import App from './App.vue'
import {
  createRouter, 
  createWebHistory
} from 'vue-router';

let instance = null;
let router = null;
function render(props = {}) {
  const { container } = props;

  router = createRouter({
    history: createWebHistory(),
    base: 'microChild', // window.__POWERED_BY_QIANKUN__ ? '/microChild' : '',
    routes: [
      {
        path: "/microChild",
        children: [
          {
            path: "home",
            component: () => import("./pages/home.vue")
          },
          {
            path: "about",
            component: () => import("./pages/about.vue")
          }
        ]
      }
    ]
  })

  instance = createApp(App).use(router).mount(container ? container.querySelector("#app") : "#app");
}

//如果是独立运行window.__POWERED_BY_QIANKUN__=undefined
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

//最后暴露的三个方法是固定的，加载渲染以及销毁
export async function bootstrap() {
  console.error('子应用挂载了-------vue app bootstraped', instance);
}

export async function mount(props) {
  render(props);
  console.error("子应用进来了----", props, instance)
} 

export async function unmount(props) {
  console.error("子应用离开了-----", 'props:', props, 'instance:', instance, instance.$el)
  // instance.$destroy();
  // instance.unmount();
  // instance.$el = null;
}
export async function update(props) {
    //   console.log('update props', props);
}
