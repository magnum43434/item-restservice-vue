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
      />
      <button v-on:click="GetItem" id="GetItemButton" class="btn btn-primary">
        Get item by id
      </button>
      <div v-html="div" class="text-center"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { getItem } from "@/Functions/APIFunctionsItem";
import json2list from "@/Functions/JsonToList";
import item from "../Models/item";
import { Vue } from "vue-class-component";
import { Watch } from "vue-property-decorator";

export default class GetItemById extends Vue {
  private uri = "https://itemrestservice.azurewebsites.net/api/items";
  private userInput = 1;
  private div = "";
  private modalstate = false;
  private selecteditem: any;

  @Watch("modalstate")
  private openModal(): void {
    this.$emit("openmodal", this.modalstate);
  }

  @Watch("selcteditem")
  private setSelectedItem(): void {
    console.log(`selecteditem sent`);
    this.$emit("selecteditem", this.selecteditem);
  }

  private async GetItem(): Promise<void> {
    const response = await getItem(this.uri, Number(this.userInput));
    this.div = `<h1>Item with id: ${this.userInput}</h1>${json2list(
      response.data
    )}`;
    this.modalstate = true;
    this.selecteditem = response.data;
  }
}
</script>

<style scoped>
</style>