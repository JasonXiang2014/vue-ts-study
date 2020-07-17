<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <Test msg="Welcome to vue &ts" @add-feature="addFeature"></Test>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";
import Test from "./components/Test.vue";
import { FeatureSelect } from "@/types";

@Component({
  components: {
    HelloWorld,
    Test
  }
})
export default class App extends Vue {
  addFeature(feature: FeatureSelect) {
    console.log("添加了一个新特性：", feature.name);
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
