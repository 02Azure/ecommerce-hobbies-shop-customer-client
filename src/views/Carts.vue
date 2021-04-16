<template>
  <div id="carts-page" class="page">
    <h2>This is user cart's Page</h2>

    <CartRow
      v-for = "cart in carts"
      :key = "cart.id"
      :cart = "cart"
    />

    <button>Check out!</button>
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
    }
  }
}
</script>

<style>

</style>
