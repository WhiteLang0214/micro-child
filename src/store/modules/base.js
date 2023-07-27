
// 从主应用传递的公共数据，不可修改
export const base = {
  state: {
    loginInfo: {}
  },
  getters: {
    getLoginInfo(state) {
      return state.loginInfo
    }
  },
  mutations: {
    SAVE_LOGIN_INFO(state, val) {
      state.loginInfo = val;
    }
  }
}