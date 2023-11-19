import VueRouter from "vue-router"

const routes = [
    {
        name: 'welcome',
        path: '/',
        component: () => import('@/views/basic/WelcomePage')
    }, {
        name: 'login',
        path: '/login',
        component: () => import('@/views/basic/loginPage')
    }, {
        name: 'register',
        path: '/register',
        component: () => import('@/views/basic/registerPage')
    }, {
        name: 'main',
        path: '/main',
        component: () => import('@/views/main/mainPage')
    }
]

var router = new VueRouter({
    routes,
    mode: 'history'
})

export default router