<template>
  <aside class="container">
    <h1>{{ msg }}</h1>
    <div class="ad"></div>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    aside {
        flex: 0 12rem;
    }
.container {
    border: 1px solid grey;
    padding: 1rem;
}
</style>
