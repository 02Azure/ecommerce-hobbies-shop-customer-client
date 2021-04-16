<template>
  <div id="login-page" class="page">
    <h2>This is the login Page</h2>
    <form @submit.prevent="login({ username, password })">

    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Login',

  data () {
    return {
      username: '',
      password: ''
    }
  },

  methods: {
    ...mapActions([
      'login'
    ])
  }
}
</script>

<style>

</style>
