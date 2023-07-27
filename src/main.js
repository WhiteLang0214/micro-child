import "./public-path.js";
import { createApp } from 'vue'
import App from './App.vue'
import store from "./store";
import router from "./router/index.js";
import "@/assets";

let instance = null;
function render(props = {}) {
  const { container } = props;
  instance = createApp(App);
  instance.use(router).use(store).mount(container ? container.querySelector("#app") : "#app");

  // if (window.__POWERED_BY_QIANKUN__ && process.env.NODE_ENV === 'development') {
  //   // 全局挂载子应用vm
  //   window.__QIANKUN_MICROCHILD_VM__ = instance;
  // }
}

//如果是独立运行window.__POWERED_BY_QIANKUN__=undefined
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

// 监听全局数据变化
function globalStateChange(state, props) {
  // state: 变更后的状态; prev 变更前的状态
  console.log('子应用接收数据props-----', props);
  console.log('子应用接收数据state-----', state);
  // 从主应用接收过来的store实例
  const parentStore = props.store.getters.getLoginInfo;
  store.commit("SAVE_LOGIN_INFO", parentStore)
}

//最后暴露的三个方法是固定的，加载渲染以及销毁
export async function bootstrap() { }
export async function mount(props) {
  props.onGlobalStateChange(state => globalStateChange(state, props), true);
  render(props);
}
export async function unmount() {
  console.log("离开子应用了")
  instance.unmount();
}
export async function update() { }