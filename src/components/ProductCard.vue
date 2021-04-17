<template>
  <div>
    <router-link :to="{ name: 'ProductDetail', params: { id: product.id } }" class="image-container d-flex align-items-center">
      <img class="product-image-card" :src="product.image_url" alt="product-image">
    </router-link>
      <button @click="addUserCarts({ ProductId: product.id, name: product.name, quantity: 1 })" class="btn btn-primary">Add to cart</button>
      <p class="card-text">Rp {{ product.price }}</p>
      <router-link :to="{ name: 'ProductDetail', params: { id: product.id } }">
        <h5 class="card-title">{{ product.name }}</h5>
      </router-link>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ProductCard',

  props: ['product'],

  methods: {
    ...mapActions([
      'addUserCarts'
    ])
  }
}
</script>

<style scoped>
  .image-container {
    height: 200px;
    cursor: pointer;
  }

  h5 {
    cursor: pointer
  }

  img {
    max-height:200px;
    width: 100%;
    object-fit: contain;
  }

  .card-text {
    margin-top: 0.5em;
  }

  button{
    margin:0 auto;
    width:75%
  }

  a{
    color: black;
    text-decoration: none;
  }

  a:hover{
    color: black;
  }

</style>
