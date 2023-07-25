import "./public-path.js";
import { createApp } from 'vue'
import App from './App.vue'
import store from "./store";
import router  from "./router/index.js";
import "@/assets";

let instance = null;
function render(props = {}) {
  const { container } = props;
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
  props.onGlobalStateChange((state, prev) => {
    // state: 变更后的状态; prev 变更前的状态
    console.log('子应用-----', state, state.getters);
    sessionStorage.setItem("token", "从主应用共享的token" + JSON.stringify(state.getters))
  });

  props.setGlobalState(store);
  render(props);
  console.error("子应用进来了----", props, instance)
} 

export async function unmount(props) {
  console.error("子应用离开了-----", 'props:', props, 'instance:', instance, instance.$el)
  // instance.$destroy();
  // instance.unmount();
  // instance.$el = null;
  router = null;
}
export async function update(props) {
    //   console.log('update props', props);
}