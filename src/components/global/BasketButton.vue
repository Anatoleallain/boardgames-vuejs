<template>
  <button
        
        :class="{'text-gray-300 hover:text-gray-400 text-2xl': !isInBasket, 'text-red-400 hover:text-red-500': isInBasket}"
        @click="toggleInBasket"
    >
        Ajouter
    </button>
</template>

<script>
export default {
        name: "basket-button",
        props:  {
            game: {
                type: Object,
                required: true
            }
        },
        computed: {
            isInBasket () {
                return this.$store.getters.isInBasket(JSON.stringify(this.gamePreview))
            },
            gamePreview(){
                return{
                    id: this.game.id,
                    name: this.game.name,
                    image_url: this.game.image_url,
                    price: this.game.price,
                }
            }
        },
        methods: {
            toggleInBasket () {
                if (this.isInBasket) {
                    this.$store.dispatch({
                        type: 'removeGame',
                        value: JSON.stringify(this.gamePreview)
                    });
                    this.on("remove-InBasket");
                } else {
                    this.$store.dispatch({
                        type: 'addGame',
                        value: JSON.stringify(this.gamePreview)
                    })
                }
            }
        }
    }
</script>

<style>

</style>