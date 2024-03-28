<template>
      <div class="buttons">
            <div class="edit-button" @click="onClickEdit" v-if="!item.edit">
                <PencilIcon />
            </div>
            <div class="edit-button" @click="onClickEdit" v-else>
                <ArrowUpIcon />
            </div>
            <div>
                <div class="favorite-button" @click="onClickFavorite" v-if="!item.favorite">
                    <StarIcon/>
                </div>
                <div class="favorite-button" @click="onClickFavorite" v-else>
                    <FilledStarIcon/>
                </div>
            </div>
            
            <div class="delete-button" @click="confirmRemoveItem">
                <TrashIcon />   
            </div>
        </div>
</template>

<script>
import { mapActions } from 'vuex';
import PencilIcon from './PencilIcon.vue'
import ArrowUpIcon from './ArrowUpIcon.vue'
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
    ArrowUpIcon,
    StarIcon,
    FilledStarIcon,
    TrashIcon
  },
  methods: {
    ...mapActions(["changeDescriptionStatus","changeEditStatus" ,"changeFavoriteStatus", "removeItem"]),
    
    showContent() {
        this.changeDescriptionStatus(this.item.id);
    },
    onClickEdit() {
        this.changeEditStatus(this.item.id);
        !this.item.showDescription && this.showContent()
    },
    onClickFavorite () {
        this.changeFavoriteStatus(this.item.id);
    },
    confirmRemoveItem() {
      if (confirm("Are you sure you want to remove this item? This action is not reversible")) {
        this.removeItem(this.item.id);
      }
    }
    }
}
</script>


<style scoped>
.buttons {
    display: flex;
    justify-self: center;
    align-self: center;
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

</style>
