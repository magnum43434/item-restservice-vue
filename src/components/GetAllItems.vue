<template>
  <div class="text-center" id="container">
    <h3>Get all items</h3>
    <button v-on:click="GetItems" class="btn btn-primary">Get all items</button>
    <div v-html="div" class="text-center"></div>
  </div>
</template>

<script lang="ts">
import item from "./Models/item";
import {getItems} from './Functions/APIFunctionsItem'
import json2table from './Functions/JsonToTable'
import {Vue} from "vue-class-component";



export default class GetAllItems extends Vue {
  private uri = "https://itemrestservice.azurewebsites.net/api/items"
  private item: Array<item> = []
  private div = ""

  private async GetItems(): Promise<void> {
    this.div = '<div class="spinner-border text-dark" role="status"><span class="sr-only">Loading...</span></div>'
    const response = await getItems(this.uri);
    this.div = json2table(response.data, "table table-striped table-dark"); //table-hover
  }
}
</script>

<style scoped lang="scss">

</style>
