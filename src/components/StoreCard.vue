<template>
  <div class="p-2 m-2 border border-grey bg-white bg-opacity-100 rounded-md shadow-md">
      <BasketButton :game="game"/>
        <div class="flex flex-wrap justify-center">
          <img class="flex place-self-center" :src="game.image_url"></div>
        <div @click="showDetails">
      <h3 class="flex justify-center">{{ game.name }}</h3>
       <p class="flex justify-center">{{game.price}}€</p>
       </div>
    </div>
</template>

<script>
import BasketButton from './global/BasketButton.vue'
export default {
  components: { BasketButton },
name: "StoreCard",
props: {
    game: {
        type: Object,
        required: true
    }
},
methods: {
            showDetails () {
                this.$router.push('/store-view/' + this.game.id)
            }
}
}
</script>

<style>

</style>