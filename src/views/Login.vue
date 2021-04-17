<template>
  <div id="login-page" class="page row align-items-center">
    <div class="form-container offset-1 col-10 sm-offset-1 col-sm-6 md-offset-1 col-md-5">
      <h2>Login</h2>
      <UserForm
        :formAction = "'login'"
        @submitForm = "login"
      />
      <p>First time in Lilynano? <router-link :to="{ name: 'Register' }">register here!</router-link></p>
    </div>
    <div class="sm-offset-1 col-sm-4 md-offset-1 col-md-5 jargon">
      <h2>It's More Than Just a Hobby!</h2>
      <h2>Make the full use of your interest!</h2>
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

<style scoped>
  .jargon {
    background-color: rgba(245, 245, 245, 0.5);
    margin-left: 20px;
    text-align: center;

  }

  .jargon h2 {
    color: navy;
    font-size: 2.3em;
    font-weight: bolder;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: navy;
  }

  #login-page {
    margin-top: 90px;
  }

  .form-container {
    min-height: 450px;
    border: solid maroon 2px;
    border-radius: 5px;
    background-color: whitesmoke;
  }
</style>
