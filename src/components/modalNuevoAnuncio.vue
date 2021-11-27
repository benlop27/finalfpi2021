<template>
  <!-- Modal -->
  <div
    class="modal  fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div
          class="modal-header"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <h5 class="modal-title" id="exampleModalLabel">Nuevo Anuncio</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-6">
              <div class="row">
                <div
                  class="card"
                  style="width: 100%; margin-bottom: 10px; margin-top: 10px;"
                >
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-3">
                        <strong>Estado:</strong>
                      </div>
                      <div class="col-md-3">
                        <input
                          type="radio"
                          v-model="anuncio.estado"
                          name=""
                          id=""
                          value="true"
                        />
                        Nuevo
                      </div>
                      <div class="col-md-3">
                        <input
                          type="radio"
                          name=""
                          v-model="anuncio.estado"
                          id=""
                          value="false"
                        />
                        Usado
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-3">
                        <strong>Marca:</strong>
                      </div>
                      <div class="col-md-6">
                        <select name="" v-model="anuncio.marca" id="">
                          <option value="Samsung">Samsung</option>
                          <option value="Huawei">Huawei</option>
                          <option value="Nokia">Nokia</option>
                          <option value="iPhone">iPhone</option>
                          <option value="Xiaomi">Xiaomi</option>
                        </select>
                      </div>
                    </div>
                    <div class="row" style="margin-top:5px;">
                      <div class="col-md-3">
                        <strong>Modelo:</strong>
                      </div>
                      <div class="col-md-6">
                        <input
                          type="text"
                          class="form-control"
                          v-model="anuncio.modelo"
                          name=""
                          id=""
                        />
                      </div>
                    </div>
                    <div class="row" style="margin-top:5px;">
                      <div class="col-md-3">
                        <strong>Pantalla:</strong>
                      </div>
                      <div class="col-md-3">
                        <select
                          name=""
                          v-model="anuncio.pantalla"
                          id=""
                          style="width: 60px;"
                        >
                          <option value="6.0">6.0</option>
                          <option value="5.5">5.5</option>
                          <option value="5.0">5.0</option>
                        </select>
                      </div>

                      <div class="col-md-3">Pulgadas</div>
                    </div>
                    <div class="row" style="margin-top:5px;">
                      <div class="col-md-3">
                        <strong>Sistema:</strong>
                      </div>
                      <div class="col-md-6">
                        <select name="" id="" v-model="anuncio.sistema"
                          ><option value="iOS">iOS</option>
                          <option value="Android">Android</option></select
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <h5>Imagenes</h5>
                <div class="col-md-8">
                  <b-form-file
                    multiple
                    accept="image/*"
                    v-model="imagenes"
                    v-on:input="imagenesSelected"
                  ></b-form-file>
                </div>
                <div class="col-md-4">
                  <img v-bind:src="urlImagen" width="100" height="100" />
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <h6>Titulo Breve del producto:</h6>
              <input
                type="text"
                name=""
                class="form-control"
                id=""
                v-model="anuncio.titulo"
              />
              <h6>Vendedor:</h6>
              <input
                type="text"
                name=""
                class="form-control"
                id=""
                placeholder="ej. Juan Perez"
                v-model="anuncio.vendedor"
              />
              <h6 style="margin-top:5px;">Telefono:</h6>
              <input
                type="text"
                name=""
                class="form-control"
                id=""
                placeholder="ej. 123123123"
                v-model="anuncio.telefono"
              />
              <h6>Precio:</h6>
              <div class="row align-items-center">
                <div class="col-md-5">
                  <input
                    type="number"
                    name=""
                    v-model="anuncio.precio"
                    class="form-control"
                    id=""
                  />
                </div>
              </div>
              <h6 style="margin-top:5px;">Descripcion:</h6>
              <textarea
                name=""
                id=""
                cols="30"
                rows="5"
                v-model="anuncio.descripcion"
              ></textarea>
              <br /><br />
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            v-on:click="limpiarModal"
            id="cancelarBoton"
           
          >
            Cancelar
          </button>
          <button
            type="button"
            class="btn btn-success"
            v-on:click="guardarAnuncio"
          >
            Crear
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { mapGetters } from "vuex";
import { FormFilePlugin, BadgePlugin } from "bootstrap-vue";
Vue.use(BadgePlugin);
Vue.use(FormFilePlugin);

export default {
  data() {
    return {
      anuncio: {
        estado: true,
        marca: "Samsung",
        modelo: "",
        pantalla: "6.0",
        sistema: "Android",
        titulo: "",
        vendedor: "",
        telefono: "",
        descripcion: "",
        precio: "",
        fecha: ""
      },
      imagenes: [],
      urlImagen: "https://via.placeholder.com/150"
    };
  },
  methods: {
    guardarAnuncio() {
      var d = new Date();
      d = new Date(d.getTime());
      var date_format_str =
        d.getFullYear().toString() +
        "-" +
        ((d.getMonth() + 1).toString().length == 2
          ? (d.getMonth() + 1).toString()
          : "0" + (d.getMonth() + 1).toString()) +
        "-" +
        (d.getDate().toString().length == 2
          ? d.getDate().toString()
          : "0" + d.getDate().toString()) +
        " " +
        (d.getHours().toString().length == 2
          ? d.getHours().toString()
          : "0" + d.getHours().toString()) +
        ":" +
        ((parseInt(d.getMinutes() / 5) * 5).toString().length == 2
          ? (parseInt(d.getMinutes() / 5) * 5).toString()
          : "0" + (parseInt(d.getMinutes() / 5) * 5).toString()) +
        ":00";
      this.anuncio.fecha = date_format_str;
      this.$store.dispatch("saveAnuncio", {
        anuncio: this.anuncio,
        imagenesArray: this.imagenes
      });
    },
    imagenesSelected() {
      var scope = this;
      console.log(this.imagenes[0]);
      let reader = new FileReader();
      reader.onload = function(e) {
        scope.urlImagen = e.target.result;
      };
      if (this.imagenes.length > 0) {
        reader.readAsDataURL(this.imagenes[0]);
      } else {
        this.urlImagen = "https://via.placeholder.com/150";
      }
      console.log(this.imagenes);
    },
    limpiarModal() {
      this.anuncio = {
        estado: true,
        marca: "Samsung",
        modelo: "",
        pantalla: "6.0",
        sistema: "Android",
        titulo: "",
        vendedor: "",
        telefono: "",
        descripcion: "",
        precio: "",
        fecha: ""
      };
      this.imagenes = [];
    }
  },
  watch:{
    procesarAnuncioCreado() {
      document.querySelector("#cancelarBoton").click();
    }
  },
  computed: {
    ...mapGetters({ procesarAnuncioCreado: "getNuevoAnuncioCreado" })
  }
};
</script>

<style></style>
