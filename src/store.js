import Vue from 'vue';
import Vuex from 'vuex';

// import axios from 'axios';

Vue.config.productionTip = false;
Vue.use(Vuex);

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
    asyncIncrement: function(context, payload) {
      return setTimeout(() => {
        context.commit('syncIncrement', payload);
      }, 2000);
    },
  },
});
