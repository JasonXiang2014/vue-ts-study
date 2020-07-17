<template>
  <div class="hello">
    <span>{{msg}}</span>
    <ul>
      <li
        v-for="feature in features"
        :key="feature.id"
        :class="{selected: feature.selected}"
      >{{feature.name}}</li>
      <li>total: {{total}}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { FeatureSelect } from "@/types";
import axios from "axios";

//正常写法是export default { }
@Component
export default class Test extends Vue {
  @Prop() private msg!: string;

  features: FeatureSelect[] = [];

  //   created() {
  //     this.features = [
  //       { id: 1, name: "vue", selected: false },
  //       { id: 2, name: "ts", selected: true }
  //     ];
  //   }

  async mounted() {
    console.log("HelloWorld");
    const resp = await axios.get<FeatureSelect[]>("/api/list");
    this.features = resp.data;
  }

  //存取器作为计算属性
  get total() {
    return this.features.length;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
a {
  color: #42b983;
}
.selected {
  background-color: rgb(187, 240, 244);
}
</style>
