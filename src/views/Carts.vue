<template>
  <div id="carts-page" class="page">
    <h2>My Cart</h2>
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Image</th>
          <th scope="col">Price</th>
          <th scope="col">Quantity</th>
        </tr>
      </thead>

      <tbody>
        <CartRow
          v-for = "(item, i) in carts"
          :key = "item.id"
          :item = "item"
          :number = i+1
        />
      </tbody>
    </table>
    <div v-if="total">
      <p id="total-price">Total: {{ total }}</p>
      <button>Check out!</button>
    </div>

    <p v-else>You don't have anything in your cart yet...</p>

  </div>
</template>

<script>
import CartRow from '../components/CartRow'

export default {
  name: 'Carts',

  components: { CartRow },

  created () {
    this.$store.dispatch('getUserCarts')
  },

  computed: {
    carts () {
      return this.$store.state.carts
    },

    total () {
      return this.$store.state.carts.reduce((total, item) => total + (item.price * item.Cart.quantity), 0)
    }
  }
}
</script>

<style scoped>
  #total-price {
    font-weight: bolder;
    text-align: right;
    font-size:1em;
  }
  .page {
    padding: 0 2em;
  }

</style>
