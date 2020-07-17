<template>
  <div class="hello">
    <span>{{msg}}</span>
    <!-- 新增特性 -->
    <div>
      <input type="text" @keyup.enter="addFeature" />
    </div>
    <!-- 特性列表 -->
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
import { Component, Prop, Vue, Emit, Watch } from "vue-property-decorator";
import { FeatureSelect } from "@/types";

//正常写法是export default { }
@Component
export default class Test extends Vue {
  @Prop({ type: String, required: true })
  private msg!: string;

  // 属性将成为data中数据
  features: FeatureSelect[] = [];
  watchedString: string = 'defaultWatchedString'
  //   created() {
  //     this.features = [
  //       { id: 1, name: "vue", selected: false },
  //       { id: 2, name: "ts", selected: true }
  //     ];
  //   }

  async mounted() {
    console.log("HelloWorld");
    const resp = await this.$http.get<FeatureSelect[]>("/api/list");
    this.features = resp.data;
  }

  @Emit()
  addFeature(e: KeyboardEvent) {
    // 类型断言
    const inp = e.target as HTMLInputElement;
    const feature: FeatureSelect = {
      id: this.features.length + 1,
      name: inp.value,
      selected: false
    };
    this.features.push(feature);
    this.watchedString = feature.name
    inp.value = "";

    // 告诉老爹添加了一个Feature
    // 相当于this.$emit('add-feature', feature)
    return feature;
  }

  @Watch("watchedString")
  onMsgChange(val: string, oldVal: any) {
    console.log(val, oldVal);
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
