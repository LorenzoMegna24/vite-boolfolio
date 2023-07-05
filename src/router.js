import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import ProjectList from './pages/ProjectList.vue';
import SingleProject from './pages/SingleProject.vue';
import NotFound from './pages/NotFound.vue';
import Contacts from './pages/Contacts.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
            {
                path: '/',
                name: 'home',
                component: AppHome
            },
            {
                path: '/project',
                name: 'projects',
                component: ProjectList
            },
            {
                path: '/project/:slug',
                name: 'single-project',
                component: SingleProject
            },
            {
                path: '/contacts',
                name: 'contacts',
                component: Contacts
            },
            {
                path: '/:pathMatch(.*)*',
                name: 'not-found',
                component: NotFound
            },

    ]
});
export { router };