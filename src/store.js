import Vue from 'vue';
import Vuex from 'vuex';

// import axios from 'axios';

Vue.config.productionTip = false;
Vue.use(Vuex);

function getAsyncData() {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve(1);
    }, 2000);
  });
}

export const store = new Vuex.Store({
  state: {
    count: 0,
  },
  getters: {
    getCount(state) {
      return state.count;
    },
  },
  mutations: {
    syncIncrement(state, payload) {
      state.count += payload;
    },
  },
  actions: {
    async asyncIncrement(context) {
      const data = await getAsyncData();
      context.commit('syncIncrement', data);
    },
  },
});
