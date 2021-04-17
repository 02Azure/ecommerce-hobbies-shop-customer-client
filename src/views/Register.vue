<template>
  <div id="register-page" class="page row">
    <div class="form-container offset-1 col-10 sm-offset-1 col-sm-6 md-offset-1 col-md-5">
      <h2>Register</h2>
      <UserForm
        :formAction = "'register'"
        @submitForm = "register"
      />
      <p>Already have an account? <router-link :to="{ name: 'Login' }">Login here!</router-link> </p>
    </div>
  </div>
</template>

<script>
import UserForm from '../components/UserForm'
import { mapActions } from 'vuex'

export default {
  name: 'Register',

  components: { UserForm },

  methods: {
    ...mapActions([
      'register'
    ])
  }
}
</script>

<style scoped>
  #register-page {
    margin-top: 90px;
  }

  .form-container {
        border: solid black 1px;
  }
</style>
