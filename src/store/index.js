import Vue from "vue";
import Vuex from "vuex";
import { db, storage } from "../db";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    anuncios: [],
    anunciosVisibles: [],
    nuevoAnuncio: {
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
      imagenes: []
    },
    rows: 0,
    showSpinner: false,
    nuevoAnuncioCreado: 1
  },
  mutations: {
    SET_ANUNCIOS(state, anuncios) {
      state.anuncios = anuncios;
    },
    SET_ROWS(state, rows) {
      state.rows = rows;
    },
    SET_ANUNCIOS_VISIBLES(state, anunciosVisibles) {
      state.anunciosVisibles = anunciosVisibles;
    },
    SET_SPINNER(state, spinner) {
      state.showSpinner = spinner;
    },
    SET_NUEVO_ANUNCIO(state, nuevoAnuncio) {
      state.nuevoAnuncio = nuevoAnuncio;
    },
    SET_NUEVO_ANUNCIO_CREADO(state) {
      state.nuevoAnuncioCreado +=1;
    }
  },
  actions: {
    async fetchData({ commit }) {
      commit("SET_SPINNER", true);
      return new Promise(resolve => {
        setTimeout(async () => {
          let query = await db.collection("anuncios");
          query = await query.get();
          let anuncios = [];
          query.docs.forEach(doc => {
            let anuncioConId = doc.data();
            anuncioConId.id = doc.id;
            anuncios.push(anuncioConId);
            console.log(doc.id);
          });
          anuncios.forEach(anuncio => {
            var imagenes = anuncio.imagenes;
            var imagenesArray = [];
            imagenes.forEach(imagen => {
              let referencia = storage.ref(`/${anuncio.id}/${imagen}`);
              referencia.getDownloadURL().then(url => {
                imagenesArray.push(url);
              });
            });
            anuncio.imagenes = imagenesArray;
          });
          resolve(anuncios);
          commit("SET_SPINNER", false);
        }, 1000);
      });
    },
    updatePagination({ commit, dispatch }, { myJson, currentPage, perPage }) {
      commit("SET_ANUNCIOS", myJson);
      commit("SET_ROWS", myJson.length);
      dispatch("paginate", { currentPage, perPage });
    },
    async fetchAnuncios({ dispatch }) {
      const myJson = await dispatch("fetchData");
      dispatch("updatePagination", { myJson, currentPage: 1, perPage: 8 });
      return myJson;
    },
    async paginate({ commit, state }, { currentPage, perPage }) {
      const start = (currentPage - 1) * perPage;
      const anuncios = state.anuncios.slice(start, start + 8);
      commit("SET_ANUNCIOS_VISIBLES", anuncios);
    },
    async search({ dispatch }, { text }) {
      const myJson = await dispatch("fetchData");
      const values = myJson.filter(val => {
        return val.descripcion.toLowerCase().includes(text.toLowerCase());
      });

      dispatch("updatePagination", {
        myJson: values,
        currentPage: 1,
        perPage: 3
      });
    },
    async saveAnuncio({ dispatch }, { anuncio, imagenesArray }) {
      console.log("enviado a db");
      console.log(anuncio);
      anuncio.imagenes = imagenesArray.map(imagen => imagen.name);
      let anuncioRef = await db.collection("anuncios").add(anuncio);
      console.log(anuncioRef);
      //dispatch("fetchAnuncios");
      dispatch("subirImagenes", { imagenes: imagenesArray, id: anuncioRef.id });
    },
    async subirImagenes({ dispatch }, { imagenes, id }) {
      await imagenes.forEach(imagen => {
        let archivo = storage.ref(`${id}/${imagen.name}`);
        archivo.put(imagen);
      });
      console.log(imagenes, id);
      dispatch("incrementNuevoAnuncioCreado");
      //commit("SET_NUEVO_ANUNCIO_CREADO", true);
      dispatch("fetchAnuncios");
    },
    incrementNuevoAnuncioCreado(state) {
      state.commit("SET_NUEVO_ANUNCIO_CREADO");
    }
  },
  getters: {
    getJobs(state) {
      return state.anuncios;
    },
    getRows(state) {
      return state.rows;
    },
    getAnunciosVisibles(state) {
      return state.anunciosVisibles;
    },
    getSpinner(state) {
      return state.showSpinner;
    },
    getNuevoAnuncio(state) {
      return state.nuevoAnuncio;
    },
    getNuevoAnuncioCreado(state) {
      return state.nuevoAnuncioCreado;
    }
  },
  modules: {}
});
