<template>
  <div class="text-center">
    <h3>Delete item by id</h3>
    <div class="input-group mb3">
      <div class="input-group-prepend">
        <label class="input-group-text" id="basic-addon1" for="DeleteItemInput"
          >ID</label
        >
      </div>
      <input
        v-model="userInput"
        type="number"
        id="DeleteItemInput"
        class="form-control"
        placeholder="ID"
        @wheel="InputScroll($event)"
      />
      <button v-on:click="DeleteItem" class="btn btn-primary mb-2 mt-2">
        Delete item by id
      </button>
    </div>
    <div v-if="status" class="mb-1 text-left">
      <h2>Status: {{ status }}</h2>
    </div>
  </div>
</template>

<script lang="ts">
import { deleteItem, getItem } from "@/Functions/APIFunctionsItem";
import { AxiosError } from "axios";
import { ref } from "vue";

export default {
  setup() {
    const uri = "https://itemrestservice.azurewebsites.net/api/items";
    const userInput = ref(0);
    const status = ref();

    const DeleteItem = async (): Promise<void> => {
      const responseDelete = await deleteItem(uri, userInput.value);
      status.value = responseDelete.statusText == "OK" ? "Deleted" : "Error";
    };

    const InputScroll = (event: any) => {
      if (event.deltaY == -100) {
        userInput.value = Number(userInput.value) + 1;
      } else if (event.deltaY == 100 && userInput.value > 0) {
        userInput.value = Number(userInput.value) - 1;
      }
    };

    return {
      userInput,
      DeleteItem,
      InputScroll,
      status,
    };
  },
};
</script>

<style scoped>
</style>