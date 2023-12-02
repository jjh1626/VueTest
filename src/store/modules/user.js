import axios from 'axios'

export default {
    namespaced: true,
    state: {
        users: []
    },
    mutations: {
        SET_USERS(state, users){
            state.users = users
        }
    },
    actions: {
        getUsers({ commit }){
            // index.js 에서는 this.$axios 를 인식하지 못해 axios 를 import 해서 사용
            axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                //console.log(res.data);
                commit('SET_USERS', res.data);
            })
          }
    }
}