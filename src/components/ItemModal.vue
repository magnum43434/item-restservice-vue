<template>
  <div id="container" v-show="state">
    <div id="background" class="text-center">
      <div id="modal-container">
        <div>
          <!-- Modal body -->
          <div id="modalBodyData">

          </div>
          <div>
            <h3>Delete item</h3>
            <button type="button" class="btn btn-primary" id="ModalDeleteItemButton">Delete</button>
            <h3>Update item</h3>
            <div class="input-group mb3">
              <div class="input-group-prepend">
                <label class="input-group-text" for="UpdateItemInputName">Name</label>
              </div>
              <input type="text" id="UpdateItemInputName" class="form-control" placeholder="Name">
            </div>
            <div class="input-group mb3">
              <div class="input-group-prepend">
                <label class="input-group-text" for="UpdateItemInputQuality">Quality</label>
              </div>
              <input type="text" id="UpdateItemInputQuality" class="form-control" placeholder="Quality">
            </div>
            <div class="input-group mb3">
              <div class="input-group-prepend">
                <label class="input-group-text" for="UpdateItemInputQuantity">Quantity</label>
              </div>
              <input type="number" id="UpdateItemInputQuantity" class="form-control" placeholder="Quantity">
            </div>
            <button type="button" class="btn btn-primary" id="ModalUpdateItemButton">Update</button>
          </div>
          <!-- Modal Footer -->
          <div class="modal-footer">
            <button v-on:click="CloseModal" type="button" class="close btn">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Vue} from "vue-class-component";
import {Prop, Watch} from "vue-property-decorator"

export default class ItemModal extends Vue {
  private state = false

  @Prop({default: false})
  propState: any

  @Watch('propState')
  onPropertyChanged(value: string, oldValue: string) {
    // Do stuff with the watcher here.
    console.log(value, oldValue)
    this.state = Boolean(value)
  }

  CloseModal() {
    this.state = !this.state
  }
}



</script>

<style scoped>
#background {
  backdrop-filter: blur(6px);
  height: 100vh;
}

#modalBodyData {
  min-height: 200px;
}

#modal-container {
  border: 2px solid black;
  background: white;
  width: 35%;
  height: 75%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 1px 2%;
}
</style>