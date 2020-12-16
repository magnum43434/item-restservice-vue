
<template>
  <tr>
    <td>
      <h5>{{ item.id }}</h5>
    </td>
    <td>
      <h5>{{ item.name }}</h5>
    </td>
    <td>
      <h5>{{ item.quality }}</h5>
    </td>
    <td>
      <h5>{{ item.quantity }}</h5>
    </td>
    <td>
      <button
        v-on:click="DeleteItem"
        v-if="deleteButton == null"
        class="btn btn-primary"
      >
        Delete
      </button>
      <button
        v-on:click="UpdateItem"
        class="btn btn-primary"
        data-toggle="modal"
        data-target="#modal"
      >
        Update
      </button>
    </td>
  </tr>
</template>
<script lang="ts">
import { deleteItem } from "@/Functions/APIFunctionsItem";
import { ref } from "vue";

export default {
  props: {
    item: null,
    deleteButton: null,
  },
  setup(props: any, ctx: any) {
    const uri = "https://itemrestservice.azurewebsites.net/api/items";

    const DeleteItem = async (): Promise<void> => {
      await deleteItem(uri, props.item.id);
      ctx.emit("refresh-items");
    };
    const UpdateItem = () => {
      ctx.emit("to-parent", props.item);
    };
    return {
      DeleteItem,
      UpdateItem,
    };
  },
};
</script>
<style scoped>
</style>