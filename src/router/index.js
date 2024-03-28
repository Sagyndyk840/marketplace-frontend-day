import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: '/',
        component: () => import('@/layouts/HomeLayout.vue'),
        children: [
            {
                path: '',
                component: () => import('@/pages/HomePage.vue'),
                name: 'HomePage',
                meta: {
                    roles: ['guest', 'auth']
                }
            }
        ]
    },
    {
        path: '/',
        component: () => import('@/layouts/AuthLayout.vue'),
        meta: {
            roles: ['guest']
        },
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
    },
    {
        path: '/',
        component: () => import('@/layouts/DefaultLayout.vue'),
        children: [
            {
                path: '/category',
                component: () => import('@/pages/CategoryPage.vue'),
                name: 'CategoryPage',
                meta: {
                    roles: ['guest', 'auth']
                }
            },
            {
                path: '/product/:id',
                component: () => import('@/pages/ProductPage.vue'),
                name: 'ProductPage',
                meta: {
                    roles: ['guest', 'auth']
                }
            },
            {
                path: '/favorite',
                component: () => import('@/pages/FavoritePage.vue'),
                name: "FavoritePage",
                meta: {
                    roles: ['guest', 'auth']
                }
            },
            {
                path: '/cart',
                component: () => import('@/pages/CartPage.vue'),
                name: 'CartPage',
                meta: {
                    roles: ['auth']
                }
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


router.beforeEach((to, from , next) => {
    let token = sessionStorage.getItem('token')

    const allowedRoles = to.meta.roles

    if (allowedRoles && allowedRoles.includes('guest') && !token) {
        next()
    } else if (allowedRoles && allowedRoles.includes('auth') && token) {
        next()
    }

})


export default router