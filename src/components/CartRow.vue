<template>
    <tr class="cart-row">
      <th class="align-middle" scope="row">{{ number }}</th>
      <td class="align-middle"><router-link :to="{ name: 'ProductDetail', params: { id: item.id } }">{{ item.name }}</router-link></td>
      <td class="align-middle">
        <router-link class="product-name-cart" :to="{ name: 'ProductDetail', params: { id: item.id } }">
          <img
            :src="item.image_url"
            onerror="this.src = 'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg'"
            alt="product's image"
          >
        </router-link>
      </td>
      <td class="align-middle">Rp. {{ item.price }}</td>

      <td class="align-middle quantity-col">
        <input
          min="1"
          :max="item.stock"
          type="number"
          v-model="item.Cart.quantity"
        >
        <button @click.prevent="updateUserCarts({ ProductId: item.id, quantity: item.Cart.quantity })"  class="action-button btn btn-success">Save</button>
        <i @click="deleteUserCarts({ ProductId: item.id })" class="fa fa-times action-button"></i>
      </td>
    </tr>
</template>
<!-- karena server tidak punya kemampuan untuk bulk update ( hanya bisa update 1 per satu, maka perlu save individual ) -->
<script>
import { mapActions } from 'vuex'

export default {
  name: 'CartRow',

  props: ['item', 'number'],

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
img {
  max-height: 80px;
}

.action-button:hover {
  cursor: pointer
}

input{
  margin: 0 0.8em;
  text-align: center;
  width: 4em;
  border: none;
  background-color: none;
}

tr:hover td input{
  background-color:transparent
}

.quantity-col {
  position:relative;
}

.fa-times {
  font-size: 1.2em;
  color:tomato;
  position:absolute;
  top:2%;
  right:5%;
}

a {
  font-weight: bold;
}
</style>
