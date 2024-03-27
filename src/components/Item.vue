<template>
    <div class="item-card" >
        <div class="item">
            <div class="item-info">
                <div class="main-info">           
                    <input type="checkbox" class="checkbox">
                    <label @click="onClickShow">{{ item.title }}</label>
                </div>
            </div>
            <div class="buttons">
                <div class="edit-button">
                    <PencilIcon />
                </div>
                <div class="favorite-button" @click="onClickFavorite" v-if="item.favorite">
                    <StarIcon/>
                </div>
                <div class="favorite-button" @click="onClickFavorite" v-else>
                    <FilledStarIcon/>
                </div>
                <div class="delete-button" @click="onClickRemove">
                    <TrashIcon />   
                </div>
            </div>
        </div>
        <div v-if="showContent">
            <div class="description">Description: {{ item.description }} </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import PencilIcon from './PencilIcon.vue'
import StarIcon from './StarIcon.vue'
import FilledStarIcon from './FilledStarIcon.vue'
import TrashIcon from './TrashIcon.vue'

export default {
  name: 'ToDoList',
  props: {
    item: Object
  },
  components: {
    PencilIcon, 
    StarIcon,
    FilledStarIcon,
    TrashIcon
  },
  data () {
    return {
      showContent: false,
      description: this.item.description
    }
  },
  methods: {
    ...mapActions(["changeFavoriteStatus", "removeItem"]),
    onClickFavorite () {
        this.changeFavoriteStatus(this.item.id);
    },
    onClickRemove () {
        this.removeItem(this.item.id);
    }, 
    onClickShow() {
        this.showContent =  !this.showContent
        console.log(this.showContent)
    }, 
    updateDescription: function(event) {
      let value = event.target.value;
      this.description = value;
    }
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
  padding: 15px;
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
    flex-direction: column;
    gap: 10px;
}
.main-info {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 10px;
}
.item-title {
    cursor: pointer;
    width: 100%;
    justify-self: start;
}
.description {
    text-align: justify;
    font-size: 12px;
    padding-left: 10px;
    padding-bottom: 0%;
}
.buttons {
    display: flex;
    justify-self: end;
    align-self: flex-end;
    padding-top: 5px;
    gap: 10px;
}
button {
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    color: white;
    font-weight: 600;
    cursor: pointer;
    font-size: 12px;
}
.favorite-button {
    cursor: pointer;
}
.edit-button {
    cursor: pointer;
}
.delete-button {
    cursor: pointer;
}
input[type="checkbox"] {
  width: 1.2em;
  height: 1.2rem;
  accent-color: #EEB038;
  transition: background-color 0.3s;
}

</style>
