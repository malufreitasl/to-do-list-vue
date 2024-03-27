<template>
    <div class="item-card" >
        <div class="item">
            <div class="item-info" v-if="!item.edit">      
                <button 
                    class="checkbox" 
                    @click="onClickComplete">
                    <CheckIcon v-if="item.completed"/>
                </button>
                <p 
                    class="item-title" 
                    @click="showContent" 
                    v-if="!todoItem.completed">{{ todoItem.title }}
                </p>
                <p 
                    class="item-title-completed" 
                    @click="showContent" 
                    v-else>{{ todoItem.title }}
                </p>
            </div>
            <div class="item-info" v-else>      
                <input 
                    type="text" 
                    class="item-title" 
                    v-model="todoItem.title" 
                    v-on:keyup.enter="onClickEdit"/>
            </div>
            <Buttons :item="item"/>
        </div>
        <div class="description">
            <div 
                class="description-info" 
                v-if="item.showDescription && !item.edit">
                Description: {{ todoItem.description }} 
            </div>
            <textarea 
                class="description-info"  
                v-else-if="item.showDescription && item.edit" 
                v-model="todoItem.description" 
                v-on:keyup.enter="onClickEdit">
            </textarea>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import Buttons from './Buttons.vue';
import CheckIcon from './CheckIcon.vue';

export default {
  name: 'ToDoList',
  props: {
    item: Object
  },
  components: {
    Buttons,
    CheckIcon
  },
  data () {
    return {
      todoItem: this.item,
    }
  },
  methods: {
    ...mapActions(["changeDescriptionStatus", "changeEditStatus", "changeCompletedStatus"]),
    showContent() {
        this.changeDescriptionStatus(this.item.id);
    },
    onClickEdit() {
        this.changeEditStatus(this.item.id);
        !this.item.showDescription && this.showContent()
    },
    onClickComplete() {
        this.changeCompletedStatus(this.item.id);
    },
    }
}
</script>


<style scoped>
.item-card {
    display: flex;
    overflow-y: scroll;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 5px;
    width: 100%;
    padding: 5px 15px;
    border-radius: 5px;
    background-color: #fafafa;
    box-shadow: rgb(204, 204, 204) 0px 0px 1em;
}
.item-card:hover {
    box-shadow: rgb(204, 204, 204) 0px 0px 2em;
}
.item {
    display: flex;
    overflow-y: scroll;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}
.item-info {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
}
.checkbox {
    padding: 0.5px 2px;
    height: 18px;
    width: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    border: 1px solid #c5c5c5;
    border-radius: 5px;
}
.checkbox:hover {
    background-color: #EEB038;
}
.item-title {
    cursor: pointer;
    text-align: start;
    width: 100%;
}
.item-title-completed {
    cursor: pointer;
    text-align: start;
    width: 100%;
    text-decoration-line: line-through;
}
.description {
    width: 95%;
}
.description-info {
    text-align: justify;
    font-size: 12px;
    padding-left: 10px;
    padding-bottom: 10px;
}
input[type="checkbox"] {
    width: 1.2em;
    height: 1.2rem;
    accent-color: #EEB038;
    transition: background-color 0.3s;
}
input[type="text"] {
    width: 90%;
    border: none;
    border-radius: 5px;
    border: 1px solid rgb(244, 244, 244);
    padding: 8px ;
}
input[type="text"]:focus {
    outline-color: rgb(223, 223, 223);
}
textarea {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
    height: 50px;
    border: 1px solid rgb(244, 244, 244);
    border-radius: 5px;
    padding: 10px 12px;
    margin-right: 15px;
    resize: none
}
textarea:focus {
    outline-color: rgb(223, 223, 223);
}

</style>
