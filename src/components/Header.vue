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
        background-image: url(../assets/cover-header.jpg);
        background-size: contain;
        min-height: 150px;
    }
    @media (min-width: 768px) {
        header {
            margin-top: 2rem;
            height: 225px;
        }
    }

</style>
