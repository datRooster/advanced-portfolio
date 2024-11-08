import { createRouter, createWebHistory } from 'vue-router';

import Home from './pages/Home.vue'
import Services from './pages/Services.vue';

const routes = [
    {path: '/', component: Home, name: 'Home'},
    {path: '/services', component: Services, name: 'Services'}
]

const router = createRouter({
    history:createWebHistory(),
    routes,
});

export default router;