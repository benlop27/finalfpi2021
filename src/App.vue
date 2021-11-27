<template>
  <div id="app">
    <div class="page" v-if="getSpinner">
      <b-spinner
        class="spinner"
        :variant="'primary'"
        :key="'primary'"
      ></b-spinner>
    </div>
    <top-header style="padding-bottom: 30px;"></top-header>

    <router-view />
  </div>
</template>
<script>
import Vue from "vue";
import TopHeader from "@/components/top-header.vue";
import { mapGetters } from "vuex";
import { SpinnerPlugin } from "bootstrap-vue";
Vue.use(SpinnerPlugin);
export default {
  components: { "top-header": TopHeader },
  computed: {
    ...mapGetters(["getSpinner"])
  }
};
</script>

<style lang="scss">
.page {
  text-align: center;
  position: absolute;
  background: rgba(0, 0, 0, 0.3);
  z-index: 25;
  width: 100%;
  height: 100%;
}
.spinner {
  z-index: 26;
  position: relative;
  top: 50%;
}
</style>
