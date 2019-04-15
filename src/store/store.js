import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        x: 0,
        y: 0
    },
    mutations: {
        changeX(state, x) {
            state.x = x
        },
        changeY(state, y) {
            state.y = y
        }
    },
    getters: {
        getX: state => state.x,
        getY: state => state.y,

    }

})
