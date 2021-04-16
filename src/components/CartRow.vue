<template>
  <div class="cart-row">
    <h3>This is a user's cartrow component</h3>
    {{ item.name }}
    {{ item.price }}
    <button @click="changeQuantity(1)">+</button>
    <!-- bind ke props quantity -->
    {{ item.Cart.quantity  }}
    <button @click="changeQuantity(-1)">-</button>
    <button>Delete</button>
  </div>
</template>

<script>
export default {
  name: 'CartRow',

  props: ['item']
}
</script>

<style>

</style>
