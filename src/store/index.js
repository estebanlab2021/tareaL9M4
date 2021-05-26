import { createStore } from 'vuex'

export default createStore({
    state: {
        lista: [
            { nombre: 'Esteban', apellido: 'Arroyo' },
            { nombre: 'Rodrigo', apellido: 'Rubio' },
            { nombre: 'Fanny', apellido: 'Maureira' },
            { nombre: 'Ivonne', apellido: 'Soto' },
            { nombre: 'Giovanna', apellido: 'Salazar' },
        ],
        //lista: [],
        nuevo: {}
    },
    mutations: {
        nuevodato: (state, payload) => {
            state.nuevo = payload
        },
        actualizar: (state, n) => {
            state.lista.push(n)
        }
    },
    actions: {},
    modules: {}
})