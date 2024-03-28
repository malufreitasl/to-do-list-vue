<template>
  <div class="to-do-input">
    <form class="to-do-form" @submit.prevent="onSubmit">
      <div class="title">      
        <input 
          class="title-input" 
          type="text" 
          placeholder="New item..." 
          v-model="title"
          maxlength="50"
          required>
          <div class="title-counter">
            <p class="length-counter">{{ title.length }}/50</p>
          </div>
      </div>

      <div class="description">
        <textarea 
          class="description-input" 
          v-model="description"
          placeholder="Description..."
          maxlength="500"
          required>
        </textarea>
        <div class="description-counter">
          <p class="length-counter">{{ description.length }}/500</p>
        </div>
          
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
      description: '',
    }
  },
  methods: {
    ...mapActions(["addItem"]),
    onSubmit () {
      this.addItem ({
        id: uuidv4(),
        title: this.title,
        description: this.description,
        favorite: false,
        completed: false,
        edit: false, 
        showDescription: false
      })
      this.title = '';
      this.description = '';
  }}
}
</script>


<style scoped>
.to-do-form {
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  gap: 8px;
  padding-top: 25px;
}
.title {
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
  gap: 2px;
}
.title-input {
  width: 400px;
  padding: 7px 10px;
  border: 1px solid var(--terciary-color);
  border-radius: 5px;
  font-size: 18px;
}
.title-input:focus {
    outline-color: var(--gray-focus-color);
}
.text-counter .description-counter{
  display: flex;
}
.length-counter {
  text-align: end;
  padding-top: 5px;
  padding-right: 5px;
  font-size: 12px;
  font-weight: 600;
  margin: 0%;
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
  border: 1px solid var(--terciary-color);
  border-radius: 5px;
  padding: 10px 12px;
  font-size: 12px;
}
.description-input:focus {
  outline-color: var(--gray-focus-color);
}
textarea {
  resize: none;
}
.submit-button {
  background-color: var(--primary-color);
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
@media (max-width: 1000px) {
  .description-input {
    width: 350px;
  }
  .title-input {
    width: 350px;
  }
}
</style>
