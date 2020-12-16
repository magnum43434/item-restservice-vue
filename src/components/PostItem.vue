<template>
  <div class="text-center">
    <h3>Post new item</h3>
    <div class="input-group mb3">
      <div class="input-group-prepend">
        <label class="input-group-text" for="PostItemInputName">Name</label>
      </div>
      <input
        v-model="name"
        type="text"
        id="PostItemInputName"
        class="form-control"
        placeholder="Name"
      />
    </div>
    <div class="input-group mb3">
      <div class="input-group-prepend">
        <label class="input-group-text" for="PostItemInputQuality"
          >Quality</label
        >
      </div>
      <input
        v-model="quality"
        type="text"
        id="PostItemInputQuality"
        class="form-control"
        placeholder="Quality"
      />
    </div>
    <div class="input-group mb3">
      <div class="input-group-prepend">
        <label class="input-group-text" for="PostItemInputQuantity"
          >Quantity</label
        >
      </div>
      <input
        v-model="quantity"
        type="number"
        id="PostItemInputQuantity"
        class="form-control"
        placeholder="Quantity"
        @wheel="InputScroll($event)"
      />
    </div>
    <button v-on:click="PostItem" class="btn btn-primary mb-2 mt-2">
      Post new item
    </button>
    <div v-if="status" class="mb-1 text-left">
      <h2>Status: {{ status }}</h2>
    </div>
  </div>
</template>

<script lang="ts">
import { getItems, postItem } from "@/Functions/APIFunctionsItem";
import ItemModel from "@/Models/ItemModel";
import { ref } from "vue";

export default {
  setup() {
    const uri = "https://itemrestservice.azurewebsites.net/api/items";
    const name = ref("");
    const quality = ref("");
    const quantity = ref(0);
    const status = ref();

    const PostItem = async (): Promise<void> => {
      const ItemListCount = await getItems(uri);
      const item = new ItemModel(
        ItemListCount.data.length + 1,
        name.value,
        quality.value,
        quantity.value
      );
      const response = await postItem(uri, item);
      status.value = response.statusText == "OK" ? "Created" : "Error";
      name.value = "";
      quality.value = "";
      quantity.value = 0;
    };
    const InputScroll = (event: any) => {
      if (event.deltaY == -100) {
        quantity.value = Number(quantity.value) + 1;
      } else if (event.deltaY == 100 && quantity.value > 0) {
        quantity.value = Number(quantity.value) - 1;
      }
    };

    return {
      name,
      quality,
      quantity,
      PostItem,
      InputScroll,
      status,
    };
  },
};
</script>
