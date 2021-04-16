<template>
  <header>
    This is navbar component
    <router-link :to="{ name: 'Home' }">Home</router-link>
    <router-link :to="{ name: 'Login' }">Login</router-link>
    <router-link :to="{ name: 'Register' }">Register</router-link>
    <router-link :to="{ name: 'ProductDetail', params: { id: 1 } }">Product detail</router-link>
    <router-link :to="{ name: 'Carts' }">My Cart</router-link>
    <button @click="logout">Logout</button>
  </header>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Navbar',

  methods: {
    ...mapActions([
      'logout'
    ])
  }
}
</script>

<style>

</style>
