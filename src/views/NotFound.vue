<template>
  <div id="not-found-page" class="page">
    <h2 class= "not-found-message">Error 404 not found</h2>
    <div class="image-container">
      <img src="https://i.imgur.com/qjIemZX.png" alt="immunity lily">
    </div>
    <p class="error-msg">Lily protected you from getting lost. The link you are navigated to is not found on this site</p>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style scoped>
  #not-found-page {
    background-color: rgba(240, 255, 255, 0.7);
  }

  h2{
    font-size: 2.5em;
    font-weight: bolder;
    color: red;
  }

  img{
    margin:2em auto;
    text-align:center;
    max-height:250px;
  }

  .error-msg {
    font-size:1.5em;
  }
</style>
