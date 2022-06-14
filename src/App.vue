<template>
  <MainView></MainView>
</template>

<script>
  import { Options, Vue } from 'vue-class-component';
  import MainView from './components/MainView';

  @Options({
    components: {MainView},
    props: {},
    emits: [],
    watch: {},
  })
  export default class App extends Vue{


  }
</script>

<style lang="scss">

  html body{
    margin: 0;
  }

  #app {
    display: flex;
    width: 100vw;
    height: 100vh;
    margin: 0;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

</style>
