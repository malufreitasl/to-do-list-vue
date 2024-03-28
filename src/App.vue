<template>
  <h1>Welcome to your TO-DO's list app</h1>
  <div class="container">
    <div class="to-do-inputs">
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
:root {
  --primary-color: #EEB038;
  --secondary-color: #2c3e50;
  --terciary-color: #f4f4f4;
  --gray-focus-color: #dfdfdf;
  --shadow-color: #cccccc;
  --light-background-color: #fafafa;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--secondary-color);
  margin-top: 60px;
}
.container {
  display: flex;
  justify-content: center;
  gap: 100px;
  margin-top: 30px;
  margin-bottom: 80px;
  flex-wrap: wrap;
}
.to-do-inputs {
  display: flex;
  flex-direction: column;
  gap: 50px;
}
@media (max-width: 1000px) {
  .container {
    gap: 30px;
  }
  .to-do-inputs {
    gap: 30px;
  }
}
</style>
