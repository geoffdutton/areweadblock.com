<template>
  <aside class="container">
    <h1>{{ msg }}</h1>
    <div class="ad">
        <ins class="adsbygoogle"
             style="display:block"
             data-ad-client="ca-pub-6809672140606258"
             data-ad-slot="9634368559"
             data-ad-format="auto"></ins>
    </div>
      <div class="ad">
          <ins class="adsbygoogle"
               style="display:block"
               data-ad-client="ca-pub-6809672140606258"
               data-ad-slot="9634368559"
               data-ad-format="auto"></ins>
      </div>
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
        padding: 1rem;
    }
</style>
