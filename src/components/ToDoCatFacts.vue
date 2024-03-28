<template>
  <div class="to-do-cats">
    <h4>Add cat facts to your TO-DO's list</h4>
    <form class="cat-form" @submit.prevent="onSubmit">
      <div>
        <input 
          type="number"
          placeholder="Number of facts..." 
          v-model.number="amount"
          required>
      </div>
      <input type="submit" value="Add cat facts" class="submit-button"/>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { v4 as uuidv4 } from 'uuid';

export default {
  name: 'ToDoInput',
  data() {
    return {
      amount: 0,
      catsData: [],
    }
  },
  methods: {
    ...mapActions(["addItem"]),
    async fetchData() {
      try {
        const response = (
        this.amount === 1 ?
          await fetch(`https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount`)
          : await fetch(`https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=${this.amount}`)
        );
        if (!response.ok) {
          throw new Error('Fail to fetch cat data');
        }
        this.catsData = await response.json();
      } catch (error) {
        console.error('Fail to fetch cat data:', error);
      }
    },
    async onSubmit() {
      await this.fetchData();
      for (let i = 0; i < this.catsData.length - 1; i++) {
        this.addItem({
          id: uuidv4(),
          title: `#${i + 1} Cat Fact`,
          description: this.catsData[i].text,
          favorite: false,
          completed: false,
          edit: false,
          showDescription: false
        });
      }
      this.amount = 0;
    }
  }
}
</script>


<style scoped>
.to-do-cats {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
}
h4 {
  padding-left: 8px;
  align-self: start;
}
.cat-form {
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  gap: 25px;
}
.title {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
input[type="number"] {
  width: 400px;
  padding: 7px 10px;
  border: 1px solid var(--terciary-color);
  border-radius: 5px;
  font-size: 18px;
}
input[type="number"]:focus {
    outline-color: var(--gray-focus-color);
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
  input[type="number"] {
    width: 350px;
  }
}
</style>
