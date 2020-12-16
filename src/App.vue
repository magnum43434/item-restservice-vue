<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <GetAllItems />
      </div>
      <div class="col">
        <GetItemById
          @openmodal="changeModalState"
          @selecteditem="changeSelectedItem"
        />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <PostItem />
      </div>
      <div class="col">
        <DeleteItem />
      </div>
    </div>
  </div>
  <ItemModal
    id="modal"
    :ModalShowStateProp="modalState"
    :SelectedItemProp="selctedItem"
  />
</template>

//TODO: Remove link
<!--
https://blog.logrocket.com/how-to-write-a-vue-js-app-completely-in-typescript/
-->

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import GetAllItems from "./Components/GetAllItems.vue";
import GetItemById from "./Components/GetItemById.vue";
import PostItem from "./Components/PostItem.vue";
import DeleteItem from "./Components/DeleteItem.vue";
import ItemModal from "./Components/ItemModal.vue";

@Options({
  components: {
    GetAllItems,
    GetItemById,
    PostItem,
    DeleteItem,
    ItemModal
  }
})
export default class App extends Vue {
  private modalState = false;
  private selctedItem: any;

  private changeModalState(state: any): void {
    this.modalState = state;
  }

  private changeSelctedItem(item: any): void {
    this.selctedItem = item;
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  justify-content: center;
  justify-items: center;
  color: #2c3e50;
}

#modal {
  height: 100vh;
  width: 100vw;
  position: absolute;
  z-index: 10;
}

.container {
  position: absolute;
  left: 50%;
  top: 25%;
  transform: translate(-50%, -25%);
}

.col {
  border: 1px solid black;
  min-height: 200px;
}

button {
  margin-top: 5px;
  margin-bottom: 25px;
  width: 100%;
}

input {
  margin-top: 5px;
  margin-bottom: 5px;
  height: 52px;
}

label {
  margin-top: 5px;
  margin-bottom: 5px;
  padding: 0px;
}
</style>
