import Login from './auth/Login.vue'
import Home from './Home.vue'
import Users from './pages/Users.vue'
import Error404 from './Error404.vue'

export const routes = [
    { path: '/', name: 'login', component: Login, meta: { requiresAuth: false } },
    { path: '/home', name: 'home', component: Home, meta: { requiresAuth: true } },
    { path: '/users', name: 'users', component: Users, meta: { requiresAuth: true } },
    { path: '*', component: Error404 }
];