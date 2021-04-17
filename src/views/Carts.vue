<template>
  <div id="carts-page" class="page">
    <h2>This is a user cart's Page</h2>

    <CartRow
      v-for = "(item, i) in carts"
      :key = "item.id"
      :item = "item"
      :index = i
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
