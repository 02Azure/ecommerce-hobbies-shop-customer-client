<template>
  <div class="cart-row">
    <h3>This is a user's cartrow component</h3>
    {{ item.name }}
    {{ item.price }}
    <form @submit.prevent="updateUserCarts({ ProductId: item.id, quantity: item.Cart.quantity })">
      <button class="action-button" @click="changeQuantity(1)">+</button>
      <input
        min="1"
        :max="item.stock"
        type="number"
        v-model="item.Cart.quantity"
      >
      <button class="action-button" @click="changeQuantity(-1)">-</button>
      <!-- karena server tidak punya kemampuan untuk bulk update ( hanya bisa update 1 per satu, maka perlu save individual ) -->
      <input class="action-button" type="submit" value="Save">
      <button class="action-button" @click="deleteUserCarts({ ProductId: item.id })">Delete</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'CartRow',

  props: ['item', 'index'],

  methods: {
    ...mapActions([
      'updateUserCarts',
      'deleteUserCarts'
    ]),

    changeQuantity (increment) {
      this.item.Cart.quantity = +this.item.Cart.quantity + increment
    }

  }
}
</script>

<style scoped>
.cart-row:hover form .action-button {
  visibility:visible;
}

.action-button {
  visibility: hidden;
}

input[type="number"]{
  width: 40%;
  background-color:azure;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>
