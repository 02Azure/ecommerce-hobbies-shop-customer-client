<template>
  <div id="login-page" class="page row">
    <div class="form-container offset-1 col-10 md-offset-1 col-md-4">
      <h2>Login</h2>
      <UserForm
        :formAction = "'login'"
        @submitForm = "login"
      />
      <p>First time in Lilynano? <router-link :to="{ name: 'Register' }">register here!</router-link></p>
    </div>
  </div>
</template>

<script>
import UserForm from '../components/UserForm'
import { mapActions } from 'vuex'

export default {
  name: 'Login',

  components: { UserForm },

  methods: {
    ...mapActions([
      'login'
    ])
  }
}
</script>

<style>

</style>
