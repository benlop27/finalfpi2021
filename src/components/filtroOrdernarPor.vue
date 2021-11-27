<template>
  <div class="card mb-2">
    <div class="card-body">
      <div class="row">
        <div class="col-md-3">Ordenar Por:</div>

        <div class="col-md-2 col-xs-3">
          <button
            class="btn d-none d-sm-block"
            style="background-color: #B1907F; color:white;"
          >
            Precio
          </button>
        </div>
        <div class="col-md-1  d-none d-sm-block"></div>
        <div class="col-md-2  col-xs-3">
          <button
            class="btn d-none d-sm-block"
            style="background-color: #7FA0B1; color:white;"
          >
            Fecha
          </button>
        </div>
        <div class="col-xs-6">
          <select name="" class="mb-2 d-block d-sm-none" id="">
            <option value="">precio</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
