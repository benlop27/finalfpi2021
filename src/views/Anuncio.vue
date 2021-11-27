<template>
  <div class="container" style="margin-top: 60px;">
    <div class="row">
      <!--El Carousel-->
      <div class="col-md-5">
        <!--div
          id="carouselExampleControls"
          class="carousel slide"
          style="width: 400px; height: 450px;"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div
              class="carousel-item active"
              :key="imagen"
              v-for="imagen in anuncio.imagenes"
            >
              <img
                v-bind:key="imagen"
                :src="imagen"
                class="d-block w-100"
                alt="..."
                style="height:400px; "
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              class="carousel-control-prev-icon"
              style="color: black;"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div-->

        <b-carousel
          controls
          indicators
          v-model="slide"
          :interval="3500"
          background="#e1e1e1"
          img-height="400"
          @sliding-end="endSlide"
          @sliding-start="initCarousel"
          style="text-shadow: 2px 3px 3px #222222;"
        >
          <b-carousel-slide
            v-bind:key="imagen"
            v-for="imagen in anuncio.imagenes"
          >
            <template v-slot:img>
              <img
                class="d-block img-fluid w-100"
                :src="imagen"
                style="height:400px; width:100%;"
                alt="Atomic Habits"
              />
            </template>
          </b-carousel-slide>
          <!-- 
          <b-carousel-slide img-src="https://picsum.photos/1000/500/?image=56">
            <h2>Love For All, Hatred For None</h2>
          </b-carousel-slide>

          <b-carousel-slide
            img-src="https://picsum.photos/1000/500/?image=57"
          ></b-carousel-slide> -->

          <!-- <b-carousel-slide>
            <template v-slot:img>
              <img
                class="d-block img-fluid w-100"
                src="https://picsum.photos/1000/500/?image=55"
                width="1000"
                height="500"
                alt="Atomic Habits"
              />
            </template>
          </b-carousel-slide>

          <b-carousel-slide caption="Life Quote" img-alt="Life Quote" img-blank>
            <p>The last mile is always the least crowded.</p>
          </b-carousel-slide> -->
        </b-carousel>
      </div>
      <div class="col-md-6">
        <h3>{{ anuncio.titulo }}</h3>
        <h4>${{ anuncio.precio }}</h4>
        <br />
        <hr />
        <button type="button" class="btn btn-success">Comprar</button>
        <div
          class="row"
          style="margin-top: 50px;  height: 60px; border: 1px black solid;"
        >
          <div class="col-md-6" style="margin-top: 20px;">
            Vendedor: {{ anuncio.vendedor }}
          </div>
          <div class="col-md-6" style="margin-top: 20px;">
            Telefono: {{ anuncio.telefono }}
          </div>
        </div>
      </div>
     
      <div class="row" style="margin-top :40px;">
        <hr />
       
        <div class="d-flex justify-content-center">
          <h3>Descripcion</h3>
        </div>
        <div class="col-md-2"></div>
        <div class="col-md-4">
          <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">Especificaciones</h5>
              <p class="card-text">
                Estado: {{ anuncio.estado ? "Nuevo" : "Usado" }}
                <br />
                Marca: {{ anuncio.marca }}
                <br />
                Pantalla:{{ anuncio.pulgadas }} pulgadas
                <br />
                Sistema: {{ anuncio.sistema }}
                <br />
                Rom: {{ anuncio.rom }}
                <br />
                Ram: {{ anuncio.ram }}
                <br />
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-1"></div>
        <div class="col-md-4">
          <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">Detalles</h5>
              <p class="card-text">
                {{ anuncio.descripcion }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { db, storage } from "../db";
import { CarouselPlugin } from "bootstrap-vue";
Vue.use(CarouselPlugin);
export default {
  name: "Anuncio",
  async mounted() {
    this.getAnuncioInfo();
  },
  data() {
    return {
      slide: 0,
      sliding: null,
      id: this.$route.params.id_anuncio,
      anuncio: {
        estado: true,
        marca: "",
        modelo: "",
        pantalla: "",
        sistema: "",
        titulo: "",
        vendedor: "",
        telefono: "",
        descripcion: "",
        precio: "",
        rom: "",
        ram: "",
        imagenes: []
      } //this is the id from the browser
    };
  },
  methods: {
    initCarousel() {
      this.sliding = true;
    },
    endSlide() {
      this.sliding = false;
    },
    async getAnuncioInfo() {
      let referencia = db.collection("anuncios").doc(this.id);
      let documento = await referencia.get();
      let anuncio = documento.data();

      var imagenes = anuncio.imagenes;
      var imagenesArray = [];
      imagenes.forEach(imagen => {
        let referencia = storage.ref(`/${this.id}/${imagen}`);
        referencia.getDownloadURL().then(url => {
          imagenesArray.push(url);
        });
      });
      anuncio.imagenes = imagenesArray;
      this.anuncio = anuncio;
      console.log(anuncio);
    }
  }
};
</script>

<style></style>
