import Vue from 'vue'
import { AxiosInstance } from "axios";

declare module '*.vue' {
  export default Vue
}

declare module "vue/types/vue" {
  export interface Vue {
    $http : AxiosInstance
  }
}