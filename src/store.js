import Vue from 'vue';
import Vuex from 'vuex';

Vue.config.productionTip = false;
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    count: 0,
  },
});
