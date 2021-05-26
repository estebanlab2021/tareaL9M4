<template>
  <div class="container py-3">
    <div class="row justify-content-center">
        <div class="col-8">
            <h1 class="text-center">Lista de Estudiantes Vue</h1>
            <table class="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(item,index) in lista" :key="index">
                        <th scope="row">{{index+1}}</th>
                        <td>{{item.nombre}}</td>
                        <td>{{item.apellido}}</td>
                      </tr>
                    </tbody>
            </table>
        </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
    //props:['nuevo'],
    data() {
      return { 
      }
    },
    computed: {
      ...mapState(['lista'])
    },
    

}
</script>

<style>

</style>