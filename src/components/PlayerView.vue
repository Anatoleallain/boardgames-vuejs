<template>
  <h1>{{ teamName }}</h1>

  
  <selection-box 
    :selections="selections"
    :isComplet="isComplet"
    @reset-selection="selections = []"
    @show-selection="handleClick" 
  />

  <selection-view
    v-show="showSelection"
    :array="selections"
  />

  <player-card
    v-for="(player, index) in players" 
    :key="index"
    :player-data="player"
    @add-player="addPlayer"
    v-show="!isComplet"
   />



</template>

<script>
import teamData from '../data/players.json'
import PlayerCard from './PlayerCard'
import SelectionBox from './SelectionBox.vue'
import SelectionView from './SelectionView'

export default {
  name: "player-view",
  props: ["team"],
  components: {
    PlayerCard,
    SelectionBox,
    SelectionView
  },
  data() {
    return {
      teamData: teamData.players,
      selections: [],
      showSelection: false
    }
  },
  computed: {
    teamName() {
      return teamData.name
    },
    players() {
      return teamData.players
    },
    isComplet() {
      return (this.selections.length > 4)? true : false
    }
  },
  methods: {
    addPlayer(payload) {
      this.selections.push(payload)
    },
    handleClick() {
      this.showSelection = true
    }
  }
}
</script>

<style scoped>

</style>