<template>
  
  <div 
    class="border border-black m-2 text-left rounded px-4 py-2 md:flex justify-between"
    :class="healthStyle"
    >

    <div>
      <h2 class="font-bold text-xl">{{ firstname }}</h2>
      <p>({{ positionUp }})</p>
    </div>
    
    <base-button
      text="Sélectionner"
      class="w-full md:w-32"
      :disabled="isInjured"
      @click="addToSelection"    
    />

  </div>
  
</template>

<script>

export default {
  name: "player-card",
  props: ['player-data'],
  data(){
    return {
      player: this.playerData,
    }
  },
  computed: {
    firstname() {
      return (this.player.name.split('.').length > 1)? this.player.name.split('.')[1] : this.player.name
    },
    positionUp() {
      return this.player.position.toUpperCase()
    },
    isInjured() {
      return (this.playerData.health == 'out')? true : false
    },
    healthStyle() {
      return { 'bg-gray-500': this.isInjured, 'bg-green-500': !this.isInjured }
    },
  },
  methods: {
    addToSelection() {
      this.$emit('add-player', this.player)
      //this.$store.state.selections.push(this.player)
      this.$store.dispatch({
        type: 'add',
        value: this.player
      })
    }
  }
 
}
</script>

<style>

</style>