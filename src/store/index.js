import { createStore } from 'vuex';

const store = createStore({
  state () {
    return {
        items: []
    }
  },
  getters: {
    allItems: (state) => state.items
  },
  actions: {
    addItem({ commit }, item ) {
        commit("add_item", item);
    }, 
    changeDescriptionStatus({ commit }, itemID ) {
        commit("chage_description_status", itemID);
    }, 
    changeEditStatus({ commit }, itemID) {
        commit("change_edit_status", itemID)
    },
    changeFavoriteStatus({ commit }, itemID) {
        commit("change_favorite_status", itemID)
    },
    changeCompletedStatus({ commit }, itemID) {
        commit("change_completed_status", itemID)
    },
    removeItem({ commit }, itemID ) {
        commit("remove_item", itemID)
    }
  },
  mutations: {
    add_item (state, item) {
        state.items.push(item)
    },
    chage_description_status(state, itemId) {
        const index = state.items.findIndex(item => item.id === itemId);
        if (index !== -1) {
          state.items[index].showDescription = !state.items[index].showDescription;
        }
    },
    change_edit_status(state, itemId) {
        const index = state.items.findIndex(item => item.id === itemId);
        if (index !== -1) {
          state.items[index].edit = !state.items[index].edit;
        }
    },
    change_favorite_status(state, itemId) {
        const index = state.items.findIndex(item => item.id === itemId);
        if (index !== -1) {
          state.items[index].favorite = !state.items[index].favorite;
        }
    },
    change_completed_status(state, itemId) {
        const index = state.items.findIndex(item => item.id === itemId);
        if (index !== -1) {
          state.items[index].completed = !state.items[index].completed;
          if(state.items[index].completed) {
            const [item] = state.items.splice(index, 1);
            state.items.push(item);
          }
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