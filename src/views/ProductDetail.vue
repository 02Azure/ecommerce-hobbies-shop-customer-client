<template>
  <div id="product-detail-page" class="page">
    <div class="detail-container row">
      <img class="image-container offset-1 col-10 offset-md-1 col-md-3 offset-lg-1 col-lg-4" :src="product.image_url" onerror="this.src = 'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg'" alt="product's image">
      <div class="detail-container offset-1 col-10 offset-md-1 col-md-6 offset-lg-1 col-lg-5">
        <h2>{{ product.name }}</h2>
        <p>Stock: {{ product.stock }}</p>
        <p>Price: Rp. {{ product.price }}</p>
        <p>Category: {{ product.category }}</p>
        <p class="product-detail">{{ product.detail }}</p>
        <input
          v-if="product.stock"
          v-model="quantity"
          min="1"
          :max="product.stock"
          type="number"
        >
      </div>
    </div>
    <router-link :to="{ name: 'Home' }"><button class="btn btn-danger">Cancel</button></router-link>
    <button v-if="isLoggedIn" :disabled="product.stock === 0" @click="addUserCarts({ ProductId: product.id, name: product.name, quantity })" class="btn btn-primary"><i class="fa fa-shopping-cart"></i> Add to cart</button>
    <router-link v-else :to="{ name: 'Login' }"><button @click="askLogin()" :disabled="product.stock === 0" class="btn btn-primary"><i class="fa fa-shopping-cart"></i> Add to cart</button></router-link>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import swalert from '../API/swal'

export default {
  data () {
    return {
      quantity: 1
    }
  },

  created () {
    this.$store.dispatch('getOneProduct')
  },

  computed: {
    ...mapState([
      'product',
      'isLoggedIn'
    ])
  },

  methods: {
    ...mapActions([
      'addUserCarts'
    ]),

    askLogin () {
      swalert.fire({
        icon: 'warning',
        title: 'Please login first!'
      })
    }
  }
}
</script>

<style scoped>
  .detail-container{
    padding:1em 0;
    background-color:rgba(255, 255, 255, 0.7);
  }

  img {
    object-fit: contain;
    max-height: 300px;
    margin-bottom: 20px;
  }
  .product-detail {
    font-weight: bold;
  }

  button{
    margin: 30px 10px;
    width: 40%
  }
</style>
