import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import LoginPage from '@/views/LoginPage.vue'
import RegisterPage from '@/views/RegisterPage.vue'
import ServicesPage from '@/views/ServicesPage.vue'
import ProfilePage from '@/views/ProfilePage.vue'

const router=createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path:'/',
            component:HomePage
        },
        {
            path:'/login',
            component:LoginPage
        },
        {
            path:'/register',
            component:RegisterPage
        },
        {
            path:'/services',
            component:ServicesPage
        },
        {
            path:'/profile',
            component:ProfilePage
        }
    ],
})

export default router