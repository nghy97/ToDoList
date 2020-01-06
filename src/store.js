import Vue from 'vue';
import Vuex from 'vuex';

import axios from 'axios';

Vue.config.productionTip = false;
Vue.use(Vuex);

// function isEmptyObject(object) {
//   return Object.keys(object).length === 0;
// }

async function getAsync() {
  try {
    const { data } = await axios.get('https://randomuser.me/api');
    const [results] = data.results;
    const {
      registered: { age },
    } = results;

    return age;
  } catch (error) {
    return 3;
  }
}

export const store = new Vuex.Store({
  state: {
    count: 0,
  },
  // computed처럼 캐싱이 가능하다.
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
      context.commit('syncIncrement', await getAsync());
    },
  },
});
