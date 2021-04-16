<template>
  <div id="product-detail-page" class="page">
    <h2>This is product detail Page</h2>
    {{ product.id }}
    {{ product.name }}
    {{ product.stock }}
    {{ product.price }}
    {{ product.category }}
    {{ product.detail }}
  </div>
</template>

<script>
export default {
  name: 'ProductDetail',

  created () {
    this.$store.dispatch('getOneProduct')
  },

  computed: {
    product () {
      return this.$store.state.product
    }
  }
}
</script>

<style>

</style>
