import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: '/',
        component: () => import('@/layouts/HomeLayout.vue'),
        children: [
            {
                path: '',
                component: () => import('@/pages/HomePage.vue'),
                name: 'HomePage'
            }
        ]
    },
    {
        path: '/',
        component: () => import('@/layouts/AuthLayout.vue'),
        children: [
            {
                path: '/login',
                component: () => import('@/pages/LoginPage.vue'),
                name: 'LoginPage'
            },
            {
                path: '/register',
                component: () => import('@/pages/RegisterPage.vue'),
                name: 'RegisterPage'
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router