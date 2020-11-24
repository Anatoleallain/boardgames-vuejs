<template>
 <ul>
    <li><a href="#" @click.prevent="currentComponent = 'player-view'">Tous les joueurs</a></li>
    <li><a href="#" @click.prevent="currentComponent = 'parameter-view'">Paramètres</a></li>
  </ul>
  <keep-alive>
    <component 
      :is="currentComponent"
      v-bind="currentProps"
    >
    </component>
  </keep-alive>
</template>

<script>
import PlayerView from '../components/PlayerView.vue'
import ParameterView from '../components/ParameterView.vue'

export default {
  name: "team-view",
   components: {
    PlayerView,
    ParameterView
  },
  data() {
    return {
      currentComponent: "player-view",
      teamSelected: "PSG"
    }
  },
  computed: {
    currentProps() {
      if(this.currentComponent == 'player-view') {
        return { team: this.teamSelected }
      }
      return false
    }
  }
}
</script>

<style>

</style>