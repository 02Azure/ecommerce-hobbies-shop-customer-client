<template>
  <div id= "app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  name: 'App',

  components: { Navbar },

  created () {
    if (localStorage.access_token) {
      this.$store.commit('setLoggedIn', { status: true })
      this.$store.commit('setUsername', { username: localStorage.username })
    }
  }
}
</script>

<style>
html {
  background-image: url('https://i.imgur.com/iX1MCAG.png');
  background-repeat:no-repeat;
  background-size:cover;
  background-attachment:fixed;
}

body{
  background-color: transparent !important;
}

#app {
  text-align: center;
}

.page {
  margin-top: 70px;
}
</style>
