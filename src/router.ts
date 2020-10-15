import HomeView from './views/Home.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

export let routes = [
    { path: '/', component: HomeView },
    { path: '/:path(.*)', component: HomeView },
];

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes,
});

export default router;
