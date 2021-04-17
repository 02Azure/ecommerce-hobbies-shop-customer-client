<template>
  <div id="not-found-page" class="page">
    <h2 class= "not-found-message">Error 404 not found</h2>
    <div class="image-container">
      <img src="https://i.imgur.com/qjIemZX.png" alt="immunity lily">
    </div>
    <p>The link you are navigated to is not found on this site</p>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style scoped>
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
</style>
