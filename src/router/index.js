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
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router