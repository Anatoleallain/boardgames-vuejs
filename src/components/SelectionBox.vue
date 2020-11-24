<template>
  <div 
    class="border border-gray-300 px-4 py-2 m-2"
    :class="{ 'bg-green-500': isComplet }"
    >
    Sélection : {{ selections.length }} 
    <span v-if="!isPlural">joueur</span> 
    <span v-else>joueurs</span> 

    <p v-if="isComplet" >
      <base-button 
        class="w-2/6 mr-4"
        text="Recommencer"
        v-if="isComplet"
        @click="resetSelection" 
      />
      <base-button 
        class="w-3/6"
        text="Consulter"
        @click="$emit('show-selection')" 
      />
    </p>
    
  </div>
 
</template>

<script>
export default {
  name: "selection-box",
  props: {
    selections: Object,
    isComplet: Boolean,
  },
  computed: {
    isPlural() {
      return (this.selections.length <= 1)? false : true
    },
  },
  methods: {
    resetSelection() {
      this.$emit('reset-selection')
    }
  }
}
</script>

<style>

</style>