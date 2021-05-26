<template>
  <div class="container">
    <div class="row justify-content-center">
        <div class="col-8 bg-light border border-dark">
            <h1 class="text-center">Formulario de Registro</h1>
            <form class="row g-3 justify-content-center" v-on:submit.prevent>
                <div class="col-4">
                    <label for="nombre" class="form-label">Nombre</label>
                    <input v-model="nombre" id="nombre" type="text" class="form-control" placeholder="Escribe el nombre">
                </div>
                <div class="col-4">
                    <label for="apellido" class="form-label">Apellido</label>
                    <input v-model="apellido" id="apellido" type="text" class="form-control" placeholder="Escribe el apellido">
                </div>
            </form>
            <div class="row justify-content-center py-3">
                <div class="col-2">
                    <button class="btn btn-primary" @click="guardar">Guardar</button>
                </div>
                <div class="col-2">
                    <button type="reset" class="btn btn-danger" @click="borrar" >Reset</button>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'

export default {
  components: {  },
    data() {
        return {
            nombre:'',
            apellido:'',
        }
    },
    computed: {
        ...mapState(['nuevo']),
    },
    methods: {
        ...mapMutations(['actualizar', 'nuevodato']),
        guardar() {
            let valor = {nombre:this.nombre, apellido:this.apellido};
            this.nuevodato(valor);
            this.actualizar(this.nuevo);
            console.log(this.nuevo);
        },
        borrar(){
            this.nombre = '';
            this.apellido = '';
        }
    },

}
</script>

<style>

</style>