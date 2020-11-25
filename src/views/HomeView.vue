<template>
  <h1>Home page</h1>

  <p>selections {{ $store.getters.selectionCount }}</p>

  <base-button
    text="Charger les films"
    @click="retrieveData"
  />
  <ul>
    <li v-for="movie in movies" :key="movie.id">
      {{ movie.title }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "home-view",
  data() {
    return {
      movies: []
    }
  },
  mounted() {
    this.retrieveData()
  },
  methods: {
    retrieveData() {
      fetch('https://reactnative.dev/movies.json')
      .then((response) => response.json())
      .then((json) => {
        this.movies = json.movies;
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