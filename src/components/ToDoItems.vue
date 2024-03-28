<template>
  <div class="lists">
      <div>
          <h2>TO-DO'S</h2>
          <div v-if="items.length === 0">
                <p>No items yet 😊</p>
            </div>
          <li v-for="item in items" :key="item.id" class="items" >
            <Item :item="item"/>
          </li>
      </div>
      <div>       
          <h2>Favorites</h2>
          <div v-if="items.findIndex(item => item.favorite) === -1">
              <p>No favorite items yet. Add a favorite item</p>
          </div>
          <div v-if="filteredFavorites.length > 0">
            <li v-for="item in filteredFavorites" :key="item.id" class="items">
              <Item :item="item" />
            </li>
          </div>
      </div>
  </div>
</template>

<script>
import Item from './Item.vue'
import { mapState } from 'vuex';

export default {
  name: 'App',
  components: {
    Item,
  },
  computed: {
    ...mapState(["items"]),
    filteredItems() {
      return this.items.filter(item => !item.favorite && !item.edit);
    },
    filteredFavorites() {
      return this.items.filter(item => item.favorite && !item.edit);
    }
    }
}
</script>

<style>
.lists {
    width: 40%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 20px;
}
.items {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-right: 10px;
  padding-bottom: 20px;
}
@media (max-width: 1000px) {
  .lists {
    width: 80%;
  }
  .items {
    padding-right: 0%;
  }
}
</style>
