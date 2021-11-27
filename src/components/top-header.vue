<template>
  <div>
    <nav
      class="navbar navbar-expand-lg navbar-light "
      style="background-color: brown;"
    >
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <!-- Arregla esto -->
        <div class="navbar-nav d-block d-sm-none">
          <input
            type="text"
            class="form-control"
            placeholder="Buscar..."
            aria-label=""
            arsearchia-describedby="basic-addon1"
            v-model="searchText"
            v-on:keyup="search"
          />
        </div>
        <div class="d-block d-sm-none">
          <button
            class="btn btn-success"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-funnel"
              viewbox="0 0 16 16"
            >
              <path
                d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z"
              />
            </svg>
          </button>
        </div>
        <!-- Arregla esto -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <hr />
          <ul class="navbar-nav me-auto mt-2 mb-lg-0">
            <li class="nav-item" align="center">
              <img
                src="/static/img/speaker.png"
                style="width: 40px; height: 40px;"
                alt=""
              />
              <span class="h3 ml-2">Tienda Cellphone</span>
            </li>

            <hr />
            <li class="nav-item d-block d-sm-none" align="center">
              <a href="/">
                <span class="h3">Inicio</span>
              </a>
            </li>
            <hr />
            <li class="nav-item d-block d-sm-none" align="center">
              <span class="h3">Nuevo Anuncio</span>
            </li>
            <hr />
            <li class="nav-item d-block d-sm-none" align="center">
              <span class="h3">Carrito</span>
            </li>
            <hr />
            <li class="nav-item d-block d-sm-none" align="center">
              <a href="/estadisticas">
                <span class="h3">Estadisticas</span>
              </a>
            </li>
            <hr />
          </ul>
        </div>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav d-none d-sm-block">
            <li class="navbar-item" style="width: 400px;">
              <div class="input-group mb-3" style=" margin-top: 10px;">
                <span class="input-group-text" id="basic-addon1">
                  <i class="fa fa-search"></i>
                </span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search"
                  aria-label=""
                  sy="sy"
                  arsearchia-describedby="basic-addon1"
                  v-model="searchText"
                  v-on:keyup="search"
                />
              </div>
            </li>
          </ul>
        </div>
        <div
          class="collapse navbar-collapse d-none d-sm-block"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav  mb-2 mb-lg-0 ">
            <li class="navbar-item " style="margin-right: 10px;">
              <a href="/" class="btn btn-success">Inicio</a>
            </li>
            <li class="navbar-item " style="margin-right: 10px;">
              <a href="/estadisticas" class="btn btn-success">Estadisticas</a>
            </li>
            <li class="navbar-item " style="margin-right: 10px;">
              <button
                type="button"
                class="btn btn-info btn-circle btn-lg"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
              <i class="fa fa-plus"></i>
              </button>
            </li>
            <li class="navbar-item">
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="white"
                  class="bi bi-cart3"
                  viewbox="0 0 16 16"
                >
                  <path
                    d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <!-- Elementos de la derecha -->
      </div>
    </nav>
    <ModalNuevoAnuncio />
  </div>
</template>

<script>
import ModalNuevoAnuncio from "./modalNuevoAnuncio.vue";
export default {
  methods: {
     search() {
      this.$store.dispatch("search", { text: this.searchText });
    }
  },
  components: { ModalNuevoAnuncio },
  data() {
    return {
      searchText: ""
    };
  }
};
</script>

<style></style>
