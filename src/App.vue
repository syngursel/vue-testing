<template>
  <div id="app">
    <search v-on:SearchRequested="handleSearch"></search>
    <p class="loading" v-if="isLoading">Loading...</p>
    <preview v-bind:gifs=gifs></preview>
  </div>
</template>

<script>
  import Search from './components/Search.vue'
  import Preview from "./components/Preview.vue"
  export default {
    name: 'app',
    components: {Search, Preview},
    data() {
      return {
        isLoading: true,
        gifs: []
      }
    },
    methods: {
      doQueary(url) {
          fetch(url)
            .then((res) => { return res.json() })
            .then((res) => { 
              this.gifs = res.data; 
              this.isLoading = false;
          });
      },
      handleSearch(query) {
        this.gifs = [];
        this.isLoading = true;

        const url = `https://api.giphy.com/v1/gifs/search?api_key=uC9cGfo8vvcJGZEvbtnUMdHQSMjpw8Us&q=${query}&limit=25&offset=0&rating=G&lang=en`;
        this.doQueary(url);
      }
    },
    created() {
      const url = 'https://api.giphy.com/v1/gifs/trending?api_key=uC9cGfo8vvcJGZEvbtnUMdHQSMjpw8Us&limit=25&rating=R';
      this.doQueary(url);
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
