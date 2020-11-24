<template>
  <ul>
    <li v-for="(item, index) in array" :key="index">
      {{ item.name }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "selection-view",
  props: ['array']
}
</script>

<style>

</style>