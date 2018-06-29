<template>
    <header class="container"></header>
</template>

<script>
  export default {
    name: 'Header',
    props: {
      title: String
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    header {
        background-repeat: no-repeat;
        background-image: url(../assets/cover.jpg);
        background-size: contain;
        height: 225px;
        margin-top: 2rem;
    }
</style>
