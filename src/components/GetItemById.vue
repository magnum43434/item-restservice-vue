<template>
  <div class="text-center">
    <h3>Get item by id</h3>
    <div class="input-group mb3">
      <div class="input-group-prepend">
        <label for="GetItemInput" class="input-group-text">ID</label>
      </div>
      <input
        v-model="userInput"
        type="number"
        id="GetItemInput"
        class="form-control"
        placeholder="ID"
        @wheel="InputScroll($event)"
      />
      <button
        v-on:click="GetItem"
        id="GetItemButton"
        class="btn btn-primary mb-2 mt-2"
      >
        Get item by id
      </button>
      <div v-if="item" class="mb-1">
        <ItemComp :item="item" :deleteButton="false" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import ItemComp from "./ItemComp.vue";
import { getItem } from "@/Functions/APIFunctionsItem";
import json2list from "@/Functions/JsonToList";
import { ref } from "vue";

export default {
  components: {
    ItemComp,
  },
  setup() {
    const uri = "https://itemrestservice.azurewebsites.net/api/items";
    const userInput = ref(0);
    const item = ref();

    const GetItem = async (): Promise<void> => {
      const response = await getItem(uri, Number(userInput.value));
      item.value = response.data;
    };
    const InputScroll = (event: any) => {
      if (event.deltaY == -100) {
        userInput.value = Number(userInput.value) + 1;
      } else if (event.deltaY == 100 && userInput.value > 0) {
        userInput.value = Number(userInput.value) - 1;
      }
    };

    return {
      GetItem,
      InputScroll,
      userInput,
      item,
    };
  },
};
</script>

<style scoped>
</style>