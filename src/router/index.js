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
                    roles: ['auth', 'guest']
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
                    roles: ['auth', 'guest']
                }
            },
            {
                path: '/product/:id',
                component: () => import('@/pages/ProductPage.vue'),
                name: 'ProductPage',
                meta: {
                    roles: ['auth', 'guest']
                }
            },
            {
                path: '/favorite',
                component: () => import('@/pages/FavoritePage.vue'),
                name: "FavoritePage",
                meta: {
                    roles: ['auth', 'guest']
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

router.beforeEach((to, from, next) => {

    let token = sessionStorage.getItem('token')

    const allowed = to.meta.roles

    if (allowed && allowed.includes('guest') && !token) {
        next()
    } else if (allowed && allowed.includes('auth') && token) {
        next()
    }

})


export default router