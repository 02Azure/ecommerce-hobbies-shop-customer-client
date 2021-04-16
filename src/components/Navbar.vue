<template>
  <header>
    This is navbar component
    <router-link :to="{ name: 'Home' }">Home</router-link>
    <router-link :to="{ name: 'Login' }">Login</router-link>
    <router-link :to="{ name: 'Register' }">Register</router-link>
    <router-link :to="{ name: 'ProductDetail', params: { id: 1 } }">Product detail</router-link>
    <router-link :to="{ name: 'Carts' }">My Cart</router-link>
    <button>Logout</button>
  </header>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style>

</style>
