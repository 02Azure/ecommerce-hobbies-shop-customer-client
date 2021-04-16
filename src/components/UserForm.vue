<template>
  <div id="user-form-container">
    <form @submit.prevent = "submitForm({ username, email, password })">
      <div class="form-group">
        <label for="username-input">Username</label>
        <input
          v-model="username"
          type="text"
          class="form-control"
          id="username-input"
          placeholder="Enter your username"
          pattern="^[a-zA-Z0-9]+$"
          title="Alphanumeric characters only"
          required>
        <small>Only alphanumeric characters are valid for username</small>
      </div>
      <div v-if= "formAction === 'register'" class="form-group">
        <label for="email-input">Email</label>
        <input v-model="email" type="email" class="form-control" id="email-input" placeholder="Enter your email" required>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" required>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'UserForm',

  props: ['formAction'],

  data () {
    return {
      username: '',
      email: '',
      password: ''
    }
  },

  methods: {
    submitForm (input) {
      console.log(input)
      this.$emit('submitForm', input)
    }
  }
}
</script>

<style>

</style>
