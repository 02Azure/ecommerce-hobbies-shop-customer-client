<template>
  <header>
    <nav class="navbar fixed-top navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <h1 class="navbar-brand">Lilynano Hobbies Shop</h1>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div class=".navbar-nav-scroll navbar-nav me-auto mb-2 mb-lg-0">
            <router-link :to="{ name: 'Home' }" class="nav-link" aria-current="page"><i class="fa fa-home"></i></router-link>
            <router-link v-if="isLoggedIn" :to="{ name: 'Carts' }" class="nav-link"><i class="fa fa-shopping-cart"></i></router-link>
            <router-link v-if="isLoggedIn" :to="{ name: 'Transactions' }" class="nav-link"><i class="fa fa-history"></i></router-link>
          </div>
          <div class="navbar-nav mb-2 mb-lg-0">
            <span id="loggedInUser">{{ username }}</span>
            <button v-if="isLoggedIn" @click="logout()" id="logout-button" class="btn btn-outline-danger">Logout</button>
            <router-link v-else :to="{ name: 'Login' }"><button id="login-button" class="btn btn-outline-success">Login</button></router-link>

          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Navbar',

  computed: {
    ...mapState([
      'username',
      'isLoggedIn'
    ])
  },

  methods: {
    ...mapActions([
      'logout'
    ])
  }
}
</script>

<style scoped>
  h1{
    margin: 0;
    padding-left: 1em;
  }

  nav{
    background-color: palegoldenrod;
  }

  .nav-link {
    margin-left: 0.5em;
  }

  .nav-link:hover {
    background-color:darkkhaki
  }

  i{
    font-size:1.2em;
  }

  #logout-button{
    width: 120px;
    text-align:center;
    margin:auto;
  }

  #loggedInUser{
    margin: auto;
    padding-bottom: 0;
    padding-right: 10px;
    font-weight: bold;
  }

  @media only screen and (max-width: 990px) {
    #loggedInUser{
      padding-right:0;
      padding-bottom: 15px;
    }
  }
</style>
