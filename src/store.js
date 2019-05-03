import Vue from 'vue';
import Vuex from 'vuex';
import http from '../http';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
  },

  getters: {
    users: state => state.users,
  },

  mutations: {
    fetchUsers: (state, users) => {
      state.users = users;
    },
  },

  actions: {
    fetchUsers: ({ commit }) => {
      http.get('users')
        .then(({ data: users }) => {
          commit('fetchUsers', users);
        });
    },
  },
});
