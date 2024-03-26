import { createStore } from 'vuex';

const store = createStore({
  state () {
    return {
        items: [
            { title: "Challenge for Azitek", description: "Two challenges, one in front-end and one in back-end", id: "e2eq", favorite:true},
            { title: "Malu", description: "hey213", id: "fsanod",  favorite:false}
        ]
    }
  },
  getters: {
    allItems: (state) => state.items
  },
  actions: {
    addItem({ commit }, item ) {
        commit("add_item", item);
    }, 
    changeFavoriteStatus({ commit }, itemID) {
        commit("change_favorite_status", itemID)
    },
    removeItem({ commit }, itemID ) {
        commit("remove_item", itemID)
    }
  },
  mutations: {
    add_item (state, item) {
        state.items.push(item)
    },
    change_favorite_status(state, itemId) {
        const index = state.items.findIndex(item => item.id === itemId);
        if (index !== -1) {
          state.items[index].favorite = !state.items[index].favorite;
        }
    },
    remove_item (state, itemId) {
        const index = state.items.findIndex(item => item.id === itemId);
        if (index !== -1) {
            state.items.splice(index, 1)
        }
    } 
  }

});

export default store;