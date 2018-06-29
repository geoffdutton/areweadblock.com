<template>
  <div id="app">
      <Header title="Are We Ad Block?"/>
      <!-- are we adblock -->
      <ins class="adsbygoogle"
           style="display:block"
           data-ad-client="ca-pub-6809672140606258"
           data-ad-slot="9634368559"
           data-ad-format="auto"></ins>

      <div class="content-container">
          <Content msg="Main Content"/>
          <Sidebar msg="Sidebar"/>
      </div>

      <!-- are we adblock -->
      <ins class="adsbygoogle"
           style="display:block"
           data-ad-client="ca-pub-6809672140606258"
           data-ad-slot="9634368559"
           data-ad-format="auto"></ins>
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
        color: rgba(0,0,0,.84);
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
    a {
        color: #e76255;
    }
    h1, h2, h3 {
        color: #1a4c59;
    }
</style>
