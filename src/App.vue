<template>
  <div class="container mt-2">
    <div class="row">
      <div class="col">
        <GetAllItems @show-modal="onClickChild" />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <GetItemById />
      </div>
      <div class="col">
        <PostItem />
      </div>
      <div class="col">
        <DeleteItem />
      </div>
    </div>
    <ItemModal :item="item" />
  </div>
</template>

<!--
https://blog.logrocket.com/how-to-write-a-vue-js-app-completely-in-typescript/
-->

<script lang="ts">
import GetAllItems from "./components/GetAllItems.vue";
import GetItemById from "./components/GetItemById.vue";
import PostItem from "./components/PostItem.vue";
import DeleteItem from "./components/DeleteItem.vue";
import ItemModal from "./components/ItemModal.vue";
import { ref } from "vue";

export default {
  components: {
    GetAllItems,
    GetItemById,
    PostItem,
    DeleteItem,
    ItemModal,
  },
  setup() {
    const item = ref();
    const onClickChild = (value: any) => {
      item.value = value;
    };
    return {
      item,
      onClickChild,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  justify-content: center;
  justify-items: center;
  color: #2c3e50;
}

.col {
  border: 1px solid black;
  min-height: 200px;
}

button {
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
h5 {
  color: white;
}
</style>
