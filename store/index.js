import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },

    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      }
    },

    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
        console.log(state.loadedPosts)
      }
    },

    actions: {
      nuxtServerInit(vuexContext, context) {
        return new Promise((resolve, _) => {
          setTimeout(() => {
            vuexContext.commit("setPosts", mockPosts);
            resolve();
          }, 1000);
        });
      },

      setPosts(vuexContext, posts) {
        vuexContext.commit("setPosts", posts);
      }
    }
  });
};

export default createStore;

const mockPosts = [
  {
    id: "1",
    title: "First",
    previewText: "lorem ipsum dolor cadit",
    thumbnail:
      "https://static6.depositphotos.com/1003229/609/v/450/depositphotos_6096843-stock-illustration-circuit-board-vector-background.jpg"
  },
  {
    id: "2",
    title: "Second",
    previewText: "lorem ipsum dolor cadit",
    thumbnail:
      "https://cdn.cjr.org/wp-content/uploads/2019/07/AdobeStock_100000042-e1563305717660-686x371.jpeg"
  }
];
