import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPost: []
    },

    getters: {
      loadedPost(state) {
        return state.loadedPost
      }
    },

    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      }
    },

    actions: {
      setPosts({ commit }, posts) {
        commit('setPosts', posts)
      }
    }
  })
}

export default createStore
