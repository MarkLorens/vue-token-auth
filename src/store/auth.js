import axios from 'axios'

export default {
    namespaced: true,
    state: {
        token: null,
        user: null
    },

    getters: {
        authenticated(state) {
            return state.token && state.user
        },

        user(state) {
            return state.user 
        }
    },
    mutations: {
        SET_TOKEN(state, token) {
            state.token = token
        },
        SET_USER(state, data){
            state.user = data
        }
    },
    actions: {
        async signIn({ dispatch }, credentials) {
            let response = await axios.post('v1/public/login', credentials)
            
            localStorage.setItem('uID', response.data.userID)
            return dispatch('attempt', response.data.token)
        },
        async attempt ({ commit }, token) {
            //Store token to compare
            commit('SET_TOKEN',token)
            //Check token is valid
            try {
                commit('SET_USER', localStorage.getItem('uID'))
            }
            catch(e){
                //Invalid token, delete token and user data
                commit('SET_TOKEN', null)
                commit('SET_USER', null)
                console.log('Failed');
            }
         },
        signOut({ commit }){
            commit('SET_TOKEN', null)
            commit('SET_USER', null)
        }
    }
}