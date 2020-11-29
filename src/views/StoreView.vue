<template>
<div class="bg-white-600 bg-opacity-50">
  <h1>Store View</h1>
  
  <div class="container mx-auto px-4 grid lg:grid-cols-4 flex flex-wrap gap-2 bg-opacity-0">
    <StoreCard v-for="game in games" :key="game.id" :game="game"/>
        
  </div>
</div>
</template>

<script>
import StoreCard from "../components/StoreCard.vue";

export default {
name: "store-view",
components: {
  StoreCard,
},
data(){
    return{
        games: []
    }
},
mounted () {
            this.retrievetheData()
        },
  methods: {
    retrievetheData() {
      fetch('https://api.boardgameatlas.com/api/search?&client_id=0jPoCsXTlG')
      .then((response) => response.json())
      .then((json) => {
        this.games = json.games;
      })
      .catch((error) => {
        console.error(error);
      });
    }
  }
}/*0jPoCsXTlG
*/
</script>

<style>

</style>