<template>
<nav class="bg-purple-500">
  <h1 class="font-mono">Gameboards</h1>
  <div class="flex justify-end">
  <router-link class="px-2 font-mono" to="/">Home Page</router-link> 
  <router-link class="px-2 font-mono" to="/team-creation">Créer mon équipe</router-link>
  <router-link class="px-2 font-mono" to="/store-view">Store</router-link>
  <router-link class="px-2 font-mono" to="/basket">Mon Panier</router-link>
  </div>
  </nav>
</template>

<script>
export default {
  name: "nav-bar"
}
</script>

<style>
</style>