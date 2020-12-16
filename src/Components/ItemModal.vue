<template>
  <div
    class="modal fade"
    id="modal"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title">Update item</h3>
        </div>
        <div class="modal-body">
          <div>
            <div class="input-group mb3">
              <div class="input-group-prepend">
                <label class="input-group-text" for="UpdateItemInputName"
                  >Name</label
                >
              </div>
              <input
                type="text"
                id="UpdateItemInputName"
                class="form-control"
                placeholder="Name"
                v-model="name"
              />
            </div>
            <div class="input-group mb3">
              <div class="input-group-prepend">
                <label class="input-group-text" for="UpdateItemInputQuality"
                  >Quality</label
                >
              </div>
              <input
                type="text"
                id="UpdateItemInputQuality"
                class="form-control"
                placeholder="Quality"
                v-model="quality"
              />
            </div>
            <div class="input-group mb3">
              <div class="input-group-prepend">
                <label class="input-group-text" for="UpdateItemInputQuantity"
                  >Quantity</label
                >
              </div>
              <input
                type="number"
                id="UpdateItemInputQuantity"
                class="form-control"
                placeholder="Quantity"
                v-model="quantity"
              />
            </div>
            <button type="button" class="btn btn-primary mt-2">Update</button>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";

export default {
  props: {
    item: null,
  },
  setup(props: any) {
    // const name = ref(props.item.name);
    // const quality = ref(props.item.quality);
    // const quantity = ref(props.item.quantity);

    return {
      // name,
      // quality,
      // quantity,
    };
  },
};
</script>

<style scoped>
</style>