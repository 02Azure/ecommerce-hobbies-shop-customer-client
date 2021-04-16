<template>
  <div id="register-page" class="page">
    <h2>This is the register Page</h2>
    <form @submit.prevent="register({ username, email, password })">

    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Register',

  data () {
    return {
      username: '',
      password: ''
    }
  },
  
  methods: {
    ...mapActions([
      'register'
    ])
  }
}
</script>

<style>

</style>
