<template>
<h1>Game View</h1>
<div v-for="game in games" :key="game.id" :game="game">
  <div v-if="game" class="p-20 flex flex-wrap">
      <div  class="flex justify-center">
            <BasketButton :game="game" />
            </div><br/>
            <div  class=" flex justify-center">
        <img :src="game.image_url">
        </div>
        <div class="container mx-auto">
        <p class=" flex justify-center">
        {{game.name}}
        </p>
        <p class=" flex justify-center">
        {{game.price}}€
        </p>
        <p class=" flex justify-center">
        De {{game.min_players}} à {{game.max_players}} joueurs
        </p>
        <p class=" flex justify-center">
        De {{game.min_playtime}} à {{game.max_playtime}} minutes
        </p>
        <p class=" flex justify-center">A partir de {{game.min_age}}ans</p>
      <p>Description: {{game.description_preview}}</p>
      </div>
  </div>
</div>
</template>

<script>
import BasketButton from "../components/global/BasketButton";
export default {
name: "GameView",
components:{BasketButton},
data(){
    return{
        games: []
    }
},
mounted(){
    this.retrieveGame()
},
methods:{
    retrieveGame(){
        fetch('https://api.boardgameatlas.com/api/search?ids=' + this.$route.params.id + '&client_id=0jPoCsXTlG')
      .then((response) => response.json())
      .then((json) => {
        this.games = json.games;
      })
      .catch((error) => {
        console.error(error);
      });
    }
}
}
</script>

<style>

</style>