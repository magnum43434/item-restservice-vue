<template>
  <div class="text-center" id="container">
    <h3>Get all items</h3>
    <button v-on:click="GetItems" class="btn btn-primary mb-2">
      Get all items
    </button>
    <div class="mb-2 table-wrapper-scroll-y my-custom-scrollbar">
      <table
        v-if="items"
        class="table table-bordered table-striped table-dark"
        cellspacing="0"
      >
        <thead>
          <tr>
            <th><h5>Id</h5></th>
            <th><h5>Name</h5></th>
            <th><h5>Quality</h5></th>
            <th><h5>Quantity</h5></th>
            <th><h5>Actions</h5></th>
          </tr>
        </thead>
        <tbody>
          <ItemComp
            v-for="item in items"
            :key="item.id"
            :item="item"
            @refresh-items="GetItems"
            @to-parent="onClickChild"
          />
        </tbody>
        <tfoot>
          <tr>
            <th><h5>Id</h5></th>
            <th><h5>Name</h5></th>
            <th><h5>Quality</h5></th>
            <th><h5>Quantity</h5></th>
            <th><h5>Actions</h5></th>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import ItemComp from "./ItemComp.vue";
import ItemModal from "./ItemModal.vue";
import { getItems } from "@/Functions/APIFunctionsItem";
import { ref } from "vue";
import ItemModel from "@/Models/ItemModel";

export default {
  components: { ItemComp },
  setup(props: any, ctx: any) {
    const uri = "https://itemrestservice.azurewebsites.net/api/items";
    const items = ref<ItemModel[]>();

    const GetItems = async (): Promise<void> => {
      const response = await getItems(uri);
      items.value = response.data;
    };
    const onClickChild = (value: any) => {
      ctx.emit("show-modal", value);
    };

    return {
      GetItems,
      items,
      onClickChild,
    };
  },
};
</script>

<style scoped>
th > h5 {
  color: rgb(219, 219, 219);
}
.my-custom-scrollbar {
  position: relative;
  height: 400px;
  overflow: auto;
}
.table-wrapper-scroll-y {
  display: block;
}
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
