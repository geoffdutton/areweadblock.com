<template>
  <div id="app">
      <Header title="Are We Ad Block?"/>
      <div class="content-container">
          <Content msg="Main Content"/>
          <Sidebar msg="Sidebar"/>
      </div>
      <Footer></Footer>
  </div>
</template>

<script>
    import Header from './components/Header'
    import Content from './components/Content.vue'
    import Sidebar from './components/Sidebar'
    import Footer from './components/Footer'

    export default {
      name: 'app',
      components: {
        Footer,
        Content,
        Sidebar,
        Header
      }
}
</script>

<style>
    body {
        margin: 0;
        padding: 0;
    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        margin: 0 auto;
        max-width: 900px;
        display: flex;
        min-height: 100vh;
        flex-direction: column;
    }
    .content-container {
        display: flex;
        flex: 1;
    }
</style>
