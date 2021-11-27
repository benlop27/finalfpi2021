<template>
  <div class="col-md-3">
    <div class="card" style="width: 18rem; cursor: pointer; ">
     <div class="container">
        <div class="row align-items-center">
        <div class="col">
          <a :href="`/anuncio/` + id">
            <img
              v-bind:src="imagenes[0]"
              style="width:100%; height: 200px; margin-top:10px;"
              class="card-img-top"
              alt="..."
            />
          </a>
        </div>
      </div>
       <hr>
     </div>
     
      <div class="card-body">
       
        <h5 class="card-title">${{ precio }}</h5>
        <p class="card-text">{{ titulo }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titulo: String,
    precio: String,
    id: String,
    imagenes: {
      type: Array,
      default: () => [
        "https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif"
      ]
    }
  },
  computed: {
    modalId() {
      return `modal-${this.id}`;
    }
  }
};
</script>

<style>
.card {
  margin-bottom: 10px;
}
</style>
