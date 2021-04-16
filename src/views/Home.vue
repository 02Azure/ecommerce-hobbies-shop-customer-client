<template>
  <div id='home-page' class='page'>
    <h2>This is home's page</h2>
    <ProductCard
      v-for = "product in products"
      :key = "product.id"
      :product = "product"
    />
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard'

export default {
  name: 'Home',

  components: { ProductCard },

  created () {
    this.$store.dispatch('getAllProducts')
  },

  computed: {
    products () {
      return this.$store.state.products
    }
  }
}
</script>
