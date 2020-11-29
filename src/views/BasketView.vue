<template>
  <h1 class="text-purple-500 font-bold text-2xl pt-16 text-center">Votre Panier</h1>
    <div v-if="games.length > 0" class="flex flex-wrap justify-center p-16">
        <StoreCard v-for="game in games"  :key="game.id" :game="game"/>
    </div>
</template>

<script>
import StoreCard from "../components/StoreCard.vue";
export default {
        name: "GamesView",
        components: {StoreCard},
        data () {
            return {
                games: this.$store.getters.games
            }
        },
        mounted () {
            this.on("remove-InBasket", () => {
                this.games = this.$store.getters.games
            });
        }
}
</script>

<style>

</style>