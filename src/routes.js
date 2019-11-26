import Login from './auth/Login.vue'
import Home from './Home.vue'
import Module from './Module.vue'
import Error404 from './Error404.vue'

export const routes = [
    { path: '/', name: 'login', component: Login, meta: { requiresAuth: false } },
    { path: '/home', name: 'home', component: Home, meta: { requiresAuth: true } },
    { path: '/module', component: Module, meta: { requiresAuth: true } },
    { path: '*', component: Error404 }
];