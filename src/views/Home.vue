<template>
  <div id='home-page' class='page'>
    <h2 class="home-title">Show Case</h2>
    <div class="product-container">
      <ProductCard
        v-for = "product in products"
        :key = "product.id"
        :product = "product"
        class = "product-card card border-primary"
      />
    </div>
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

<style scoped>
  .product-container{
    padding: 2em;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    grid-gap: 4em 1.5em;
  }

  .product-card:hover {
    outline: solid blue 2px;
  }

  .home-title {
    background-color:rgba(255, 255, 255, 0.6);
    font-size: 2.6em;
    font-weight:bolder;
  }

</style>
