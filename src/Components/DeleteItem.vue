<template>
  <div class="text-center">
    <h3>Delete item by id</h3>
    <div class="input-group mb3">
      <div class="input-group-prepend">
        <label class="input-group-text" id="basic-addon1" for="DeleteItemInput">ID</label>
      </div>
      <input v-model="id" type="number" id="DeleteItemInput" class="form-control" placeholder="ID">
      <button v-on:click="DeleteItem" class="btn btn-primary">Delete item by id</button>
    </div>
    <div v-html="div" class="d-flex justify-content-center"></div>
  </div>
</template>

<script lang="ts">
import {Vue} from "vue-class-component";
import {deleteItem} from "@/Functions/APIFunctionsItem";
import {AxiosError} from "axios";

export default class DeleteItem extends Vue {
  private uri = "https://itemrestservice.azurewebsites.net/api/items"
  private id = 1
  private div = ""

  private async DeleteItem(): Promise<void> {
    await deleteItem(this.uri, this.id).catch((error: AxiosError) => {
      this.div = `<div class="card text-center text-white bg-dark border-danger" style="width: 18rem;"><div class="card-header">Error</div><div class="card-body"><h5 class="card-title">${error.name}</h5><p class="card-text">${error.message}</p></div></div>`
    })
    this.div = `<div class="card text-center text-white bg-dark border-success" style="width: 18rem;"><div class="card-header">Success</div><div class="card-body"><p class="card-text">Item with ID ${this.id} has been deleted</p></div></div>`
  }
}
</script>

<style scoped>

</style>