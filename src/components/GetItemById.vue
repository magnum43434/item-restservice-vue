<template>
  <div class="text-center">
    <h3>Get item by id</h3>
    <div class="input-group mb3">
      <div class="input-group-prepend">
        <label for="GetItemInput" class="input-group-text">ID</label>
      </div>
      <input v-model="userInput" type="number" id="GetItemInput" class="form-control" placeholder="ID">
      <button v-on:click="GetItem" id="GetItemButton" class="btn btn-primary">Get
        item by id
      </button>
      <div v-html="div" class="text-center"></div>
    </div>
  </div>
</template>

<script lang="ts">
import {getItem} from "@/components/Functions/APIFunctionsItem";
import json2list from "@/components/Functions/JsonToList";
import {Vue} from "vue-class-component";


export default class GetItemById extends Vue {
  private uri = "https://itemrestservice.azurewebsites.net/api/items"
  private userInput = 1
  private div = ""

  private async GetItem(): Promise<void> {
    const response = await getItem(this.uri, Number(this.userInput));
    this.div = `<h1>Item with id: ${this.userInput}</h1>${json2list(response.data)}`;
  }
}
</script>

<style scoped>

</style>