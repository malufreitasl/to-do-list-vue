<template>
  <h1>Welcome to your TO-DO's list app</h1>
  <div class="container">
    <div>
      <ToDoInput />
      <ToDoCatFacts />
    </div>
    <ToDoItems />
  </div>
</template>

<script>
import ToDoInput from './components/ToDoInput.vue'
import ToDoCatFacts from './components/ToDoCatFacts.vue'
import ToDoItems from './components/ToDoItems.vue'
import { mapState } from 'vuex';

export default {
  name: 'App',
  components: {
    ToDoInput,
    ToDoCatFacts,
    ToDoItems
  },
  computed: {
    ...mapState(["items"])
  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
  display: flex;
  justify-content: center;
  gap: 100px;
  margin-top: 30px;
}
</style>
