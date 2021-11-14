<template>
  <div id="app">
    <Header />
    <!-- <Main msg="Welcome to Your Vue.js App"/> -->
    <div class="container">
      <div class="row">
        <div class="col-md-5">
          <Inputs />
        </div>
        <div class="col-md-2">
          <Actions />
        </div>
        <div class="col-md-5">
          <Database />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
// import Main from './components/Main.vue'
import Inputs from "./components/inputs/Inputs.vue";
import Actions from "./components/actions/Actions.vue";
import Database from "./components/database/Database.vue";

export default {
  name: "App",
  components: {
    // Main,
    Header,
    Inputs,
    Actions,
    Database,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #181c20;
  /* margin-top: 60px; */
}
</style>
