<template>
  <div class="cart-row">
    <h3>This is a user's cartrow component</h3>
    {{ cart.ProductId }}
    <button @click="changeQuantity(1)">+</button>
    <!-- bind ke props quantity -->
    {{ cart.quantity  }}
    <button @click="changeQuantity(-1)">-</button>
    <button>Delete</button>
  </div>
</template>

<script>
export default {
  name: 'CartRow',

  props: ['cart']
}
</script>

<style>

</style>
