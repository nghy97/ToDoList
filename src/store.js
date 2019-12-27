import Vue from 'vue';
import Vuex from 'vuex';

import axios from 'axios';

Vue.config.productionTip = false;
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    count: 0,
  },
  getters: {
    getDoubleCount(state) {
      state.count *= 2;
      return state.count;
    },
  },
  mutations: {
    syncIncrement(state, payload) {
      state.count = payload;
    },
  },
  actions: {
    asyncIncrement: function(context, payload) {
      alert(payload);
      return axios.get('api', function(res) {
        context.commit('increment', res);
      });
    },
  },
});
