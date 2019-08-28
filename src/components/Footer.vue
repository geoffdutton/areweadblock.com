<template>
    <footer class="container">
        <div>Text generated from <a href="http://officeipsum.com/index.php">Office Ipsum</a></div>
        <div>Layout by <a href="https://github.com/philipwalton/solved-by-flexbox">Solved by Flexbox</a></div>
        <div>Version: {{ version }}</div>
        <div>Build Time: {{ buildTime }}</div>
        <a href="https://www.viglink.com/legal/disclosures/users?vgtag=badge"><img alt="VigLink badge" height="31" src="https://www.viglink.com/images/badges/88x31.png" title="Links monetized by VigLink" width="120" /></a>
    </footer>
</template>

<script>
  export default {
    name: 'Footer',
    data () {
      return {
        version: process.env.PACKAGE_VERSION,
        buildTime: process.env.BUILD_TIME
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    footer {
        min-height: 150px;
        text-align: right;
        padding: 1rem;
        margin-top: 2rem;
        border-top: 3px solid #e76255;
    }
</style>
