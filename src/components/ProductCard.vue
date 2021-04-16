<template>
  <div @click="toProductDetail(product.id)" class="product-card">
    This is product card component
    {{ product.id }} {{ product.name }}
  </div>
</template>

<script>
export default {
  name: 'ProductCard',

  props: ['product'],

  methods: {
    toProductDetail (productId) {
      this.$router.push({ name: 'ProductDetail', params: { id: productId } })
    }
  }
}
</script>

<style>

</style>
