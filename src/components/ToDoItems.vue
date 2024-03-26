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
            <li v-for="item in items" :key="item.id" class="items">
                <Item :item="item" v-if="item.favorite"/>
            </li>
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
      ...mapState(["items"])
    }
    
  }
  </script>
  
  <style>
    .lists {
        width: 40%;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
  .items {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 20px;
  }
  </style>
  