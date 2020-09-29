import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [{
      username: "ilya",
      telegramID: "1231232183912",
    },
    {
      username: "daria",
      telegramID: "12301239102",
    },]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters: {
    allUsers: (state) => state.users,
  }
})
