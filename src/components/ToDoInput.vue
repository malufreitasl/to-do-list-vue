<template>
  <div class="to-do-input">
    <form class="to-do-form" @submit.prevent="onSubmit">
      <div class="title">      
        <input 
          class="title-input" 
          type="text" 
          placeholder="New item..." 
          v-model="title"
          required>
      </div>

      <div class="description">
        <textarea 
          class="description-input" 
          v-model="description"
          placeholder="Description..."
          required></textarea>
      </div>

      <input type="submit" value="Add new item" class="submit-button"/>
    </form>

  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { v4 as uuidv4 } from 'uuid';

export default {
  name: 'ToDoInput',
  data () {
    return {
      title: '',
      description: ''
    }
  },
  methods: {
    ...mapActions(["addItem"]),
    onSubmit () {
      this.addItem ({
        id: uuidv4(),
        title: this.title,
        description: this.description,
        favorite: false
      })
      this.title = '';
      this.description = '';
  }}
}
</script>


<style scoped>
.to-do-input {
  padding-bottom: 40px;
}
.to-do-form {
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  gap: 25px;
  padding-top: 25px;
}
.title {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.title-input {
  width: 400px;
  padding: 7px 10px;
  border: 1px solid rgb(244, 244, 244);
  border-radius: 5px;
  font-size: 18px;
}
.title-input:focus {
    outline-color: rgb(223, 223, 223);
}
.description-text {
  font-size: 15px;
  align-self: flex-start;
  padding-left: 5px;
}
.description-input {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 400px;
  height: 100px;
  border: 1px solid rgb(244, 244, 244);
  border-radius: 5px;
  padding: 10px 12px;
  font-size: 12px;
}
.description-input:focus {
  outline-color: rgb(223, 223, 223);
}
textarea {
  resize: none;
}
.submit-button {
  background-color: #EEB038;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
}
.submit-button:hover {
  background-color: #ac7d20;
}
</style>
