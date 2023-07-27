import { createStore } from 'vuex';
import { state } from './state';
import { getters } from './getters';
import { mutations } from './mutations';
import { base } from "./modules/base";

export default createStore({
  state,
  getters,
  mutations,
  modules: {
    base
  }
})