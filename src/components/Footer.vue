<template>
    <footer class="container">
        <div>Text generated from <a href="http://officeipsum.com/index.php">Office Ipsum</a></div>
        <div>Layout by <a href="https://github.com/philipwalton/solved-by-flexbox">Solved by Flexbox</a></div>
    </footer>
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    footer {
        min-height: 150px;
    }
    a {
        color: #42b983;
    }
    .container {
        border: 1px solid grey;
        padding: 1rem;
    }
</style>
