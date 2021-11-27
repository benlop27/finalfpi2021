<template>
  <div class="container-fluid" style="margin-top: 10px;">
    <div class="row">
      <SideBar />
      <div class="col-md-1"></div>
      <div class="col-md-8">
        <div class="container" style="margin-top: 10px;">
          <div class="row">
            <div class="col-md-5 col-xs-3">
             <filtro-precios />
            </div>
            <div class="col-md-5 ">
              <FiltroOrdenarPor />
            </div>
          </div>
          <div class="row mt-2">
            <AnuncioCard
              :titulo="anuncio.titulo"
              :precio="anuncio.precio"
              :id="anuncio.id"
              :imagenes="anuncio.imagenes"
              v-for="anuncio in getAnunciosVisibles"
              :key="anuncio.id"
            />
          </div>
        </div>
        <div class="row" style="margin-top: 70px;">
          <div class="col-md-2"></div>

          <div class="col-md-4">
            <!--navegador-->
            <b-pagination
              v-model="currentPage"
              :total-rows="getRows"
              :per-page="perPage"
              first-text="Primero"
              prev-text="<"
              next-text=">"
              last-text="Ultimo"
              @input="paginate(currentPage)"
            ></b-pagination>
          </div>

          <div class="col-md-1"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { mapGetters } from "vuex";
import SideBar from "@/components/sideBar.vue";
import AnuncioCard from "@/components/anuncioCard.vue";
import { PaginationPlugin } from "bootstrap-vue";
import FiltroPrecios from "../components/filtroPrecios.vue";
import FiltroOrdenarPor from "../components/filtroOrdernarPor.vue"; 
Vue.use(PaginationPlugin);
export default {
  name: "home",
  async mounted() {
    this.getRecords();
  },
  data() {
    return { currentPage: 1, perPage: 8 };
  },
  components: {
    SideBar,
    AnuncioCard,
    FiltroPrecios,
    FiltroOrdenarPor
  },
  computed: {
    ...mapGetters(["getRows", "getAnunciosVisibles"])
  },
  methods: {
    paginate(currentPage) {
      this.$store.dispatch("paginate", { currentPage, perPage: this.perPage });
    },
    async getRecords() {
      await this.$store.dispatch("fetchAnuncios");
    }
  }
};
</script>
<style lang="scss" scoped="scoped">

</style>
