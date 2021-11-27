<template>
  <div
    id="collapseExample"
    class="collapse show no-mostrar-en-movil col-md-2 mt-1 "
    style="height: calc(100vh - 110px);
                overflow-y: scroll;
              "
  >
    <div class="row">
      <div class="container">
        <div class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            id="flexSwitchCheckChecked"
            checked="checked"
          />
          <label class="form-check-label" for="flexSwitchCheckChecked"
            >Nuevo</label
          >
        </div>
      </div>
    </div>
    <div class="row">
      <div class="container">
        <div
          class="card"
          style="width: 15rem; margin-bottom: 10px; margin-top: 10px;"
        >
          <div class="card-body">
            <h5 class="card-title">Marca</h5>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Samsung
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
                checked="checked"
              />
              <label class="form-check-label" for="flexCheckChecked">
                Huawei
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
                checked="checked"
              />
              <label class="form-check-label" for="flexCheckChecked">
                Nokia
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
                checked="checked"
              />
              <label class="form-check-label" for="flexCheckChecked">
                iPhone
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
                checked="checked"
              />
              <label class="form-check-label" for="flexCheckChecked">
                Xiaomi
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="container">
        <div
          class="card"
          style="width: 15rem; margin-bottom: 10px; margin-top: 10px;"
        >
          <div class="card-body">
            <h5 class="card-title">Sistema</h5>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Android
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
                checked="checked"
              />
              <label class="form-check-label" for="flexCheckChecked">
                Windows
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
                checked="checked"
              />
              <label class="form-check-label" for="flexCheckChecked">
                iOS
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="container">
        <div
          class="card"
          style="width: 15rem; margin-bottom: 10px; margin-top: 10px;"
        >
          <div class="card-body">
            <h5 class="card-title">Pantalla</h5>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                6.0
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
                checked="checked"
              />
              <label class="form-check-label" for="flexCheckChecked">
                5.5
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
                checked="checked"
              />
              <label class="form-check-label" for="flexCheckChecked">
                5
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
//import AnuncioCard from "@/components/anuncioCard.vue";
//import { mapGetters } from "vuex";

export default {
  name: "sideBar",
  async mounted() {
    //this.getRecords();
  },
  data() {
    return { currentPage: 1, perPage: 8 };
  },
  components: {
    // AnuncioCard
  },
  computed: {
    // ...mapGetters(["getRows", "getAnunciosVisibles"])
  },
  methods: {
    // paginate(currentPage) {
    //   this.$store.dispatch("paginate", { currentPage, perPage: this.perPage });
    // },
    // async getRecords() {
    //   await this.$store.dispatch("fetchAnuncios");
    // }
  }
};
</script>
<style lang="scss" scoped="scoped">
// b-card {
// padding: 10px;
// }
</style>
