import { createStore } from 'vuex';

const users = [
  { username: 'admin@clever.dk', password: '1234' },
];

export default createStore({
  state: {
    user: null,
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
      localStorage.setItem('user', JSON.stringify(user));
    },
    LOGOUT(state) {
      state.user = null;
      localStorage.removeItem('user');
    },
  },
  actions: {
    login({ commit }, { username, password }) {
      const user = users.find(u => u.username === username && u.password === password);
      if (user) {
        commit('SET_USER', user);
        return true;
      }
      return false;
    },
    logout({ commit }) {
      commit('LOGOUT');
    },
  },
  getters: {
    isAuthenticated(state) {
      return !!state.user;
    },
    currentUser(state) {
      return state.user;
    },
  },
});
