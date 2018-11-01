<template>
  <div id="app">

    <router-view/>
    <syheader/>

  </div>
</template>

<script>
import syheader from './components/syheader'

export default {
  name: 'App',
  components: {
    syheader
  },
  data() {
    return {};
  },
  methods: {
    btn() { }
  }
}
</script>

<style lang="css">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
