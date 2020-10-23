<template>
  <div class="text-center">
    <h3>Post new item</h3>
    <div class="input-group mb3">
      <div class="input-group-prepend">
        <label class="input-group-text" for="PostItemInputName">Name</label>
      </div>
      <input v-model="name" type="text" id="PostItemInputName" class="form-control" placeholder="Name">
    </div>
    <div class="input-group mb3">
      <div class="input-group-prepend">
        <label class="input-group-text" for="PostItemInputQuality">Quality</label>
      </div>
      <input v-model="quality" type="text" id="PostItemInputQuality" class="form-control" placeholder="Quality">
    </div>
    <div class="input-group mb3">
      <div class="input-group-prepend">
        <label class="input-group-text" for="PostItemInputQuantity">Quantity</label>
      </div>
      <input v-model="quantity" type="number" id="PostItemInputQuantity" class="form-control" placeholder="Quantity">
    </div>
    <button v-on:click="PostItem" class="btn btn-primary">Post new item</button>
    <div v-html="div" class="d-flex justify-content-center"></div>
  </div>
</template>

<script lang="ts">
import {Vue} from "vue-class-component";
import {getItems, postItem} from './Functions/APIFunctionsItem';
import item from "@/components/Models/item";
import {AxiosError} from "axios";

export default class PostItem extends Vue {
  private uri = "https://itemrestservice.azurewebsites.net/api/items";
  private name = "";
  private quality = "";
  private quantity = 0;
  private div = "";

  private async PostItem(): Promise<void> {
    const ItemListCount = await getItems(this.uri);
    const item: item = {
      Id: ItemListCount.data.length + 1,
      Name: this.name,
      Quality: this.quality,
      Quantity: this.quantity
    };
    console.log(item)
    const response = await postItem(this.uri, item).catch((error: AxiosError) => {
      this.div = `<div class="card text-center text-white bg-dark border-danger" style="width: 18rem;"><div class="card-header">Error</div><div class="card-body"><h5 class="card-title">${error.name}</h5><p class="card-text">${error.message}</p></div></div>`;
    });
    console.log(response)
    this.div = `<div class="card text-center text-white bg-dark border-success" style="width: 18rem;"><div class="card-header">Success</div><div class="card-body"><p class="card-text">ID: ${item.Id}</p><p class="card-text">Name: ${item.Name}</p><p class="card-text">Quality: ${item.Quality}</p><p class="card-text">Quantity: ${item.Quantity}</p></div></div>`;
  }
}
</script>

<style scoped>

</style>