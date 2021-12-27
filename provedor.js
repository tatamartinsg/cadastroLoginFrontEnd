import Vuex from 'vuex'
import Vue from 'vue'
import http from '@/http'

Vue.use(Vuex)

const estado = {
    token: null
}

const mutations = {
    DEFINE_LOGGED_USER(state,{token}){
        state.token = token
    },
    LOGOUT_USER(state){
        state.token = null
    }
}

const actions = {
    doLogin({ commit }, usuario){
        return new Promise( (resolve,reject) => {
            http.post('/login', usuario)
            .then(response => {
                commit('DEFINE_LOGGED_USER', {
                    token: response.data.token
                })
                resolve(response.data)
            })
            .catch(error => {
                console.log(error)
                reject(error)
            })
        })
    }
}

export default new Vuex.Store({
    state: estado,
    mutations,
    actions
})