import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes'

Vue.use(VueRouter);
Vue.use(Vuex);


const store = new Vuex.Store({
    state: {
        token: localStorage.getItem('token'),
        user_id: localStorage.getItem('user_id'),
        user_name: localStorage.getItem('user_name'),
        user_full_name: localStorage.getItem('user_full_name')
    },
    getters: {
        //method isAuth
        //dimana method ini akan bernilai true/false berdasarkan state
        isAuth: state => {
            return state.token != "null" && state.token != null
        }
    },
    mutations: {
        //berfungsi untuk memanipulasi value dari state
        SET_TOKEN(state, val) {
            state.token = val
        },
        SET_USER_ID(state, val) {
            state.user_id = val
        },
        SET_USERNAME(state, val) {
            state.user_name = val
        },
        SET_FULLNAME(state, val) {
            state.user_full_name = val
        }
    }
});

export const router = new VueRouter({
    routes: routes,
    mode: 'history'
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        let auth = store.getters.isAuth;
        if (!auth) {
            next('/')
        }
    }

    next()

})


new Vue({
    el: '#app',
    render: h => h(App),
    router: router,
    store: store
})