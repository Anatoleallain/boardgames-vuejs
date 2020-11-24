<template>
  <nav-bar />
  <router-view></router-view>
</template>

<script>

import NavBar from './components/nav/NavBar'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>
<style>

</style>
