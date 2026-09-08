<template>
<div class="auth-page">
    <header class="header">
        <div class="container header-inner">
            <router-link class="logo" to="/">homio<span>.</span></router-link>
        </div>
    </header>
    <main class="auth-main">
        <div class="auth-container">
            <div class="auth-intro">
                <span class="eyebrow">НОВЫЙ АККАУНТ</span>
                <h1>Домашние дела<em>проще.</em></h1>
                <p>Создайте аккаунт Homio и оформляйте заявки, отслеживайте заказы и храните всю историю в одном месте.</p>
                <div class="benefits">
                    <div class="benefit"><span>01</span><p>Все заказы в одном месте</p></div>
                    <div class="benefit"><span>02</span><p>Удобное оформление заявок</p></div>
                    <div class="benefit"><span>03</span><p>История выполненных работ</p></div>
                </div>
            </div>
            <div class="auth-card">
                <div class="card-heading">
                    <h2>Создать аккаунт</h2>
                    <p>Заполните форму — это займёт меньше минуты.</p>
                </div>
                <form class="auth-form" @submit.prevent="register">
                    <div class="field"><label for="nameFirst">Имя</label><input v-model="nameFirst" id="nameFirst" type="text" placeholder="Ваше имя"></div>
                    <div class="field"><label for="nameLast">Фамилия</label><input v-model="nameLast" id="nameLast" type="text" placeholder="Ваша фамилия"></div>
                    <div class="field"><label for="email">Email</label><input v-model="email" id="email" type="text" placeholder="you@example.com"></div>
                    <div class="field"><label for="password">Пароль</label><input v-model="password" id="password" type="password" placeholder="Минимум 8 символов"></div>
                    <div class="field"><label for="password-confirm">Повторите пароль</label><input v-model="confirmPassword" id="password-confirm" type="password" placeholder="Введите пароль ещё раз"></div>
                    <label class="checkbox"><input type="checkbox" v-model="agreed"><span>Я принимаю <a href="#">условия использования</a> и <a href="#">политику конфиденциальности</a></span></label>
                    <button type="submit" class="primary-button">Создать аккаунт<span>→</span></button>
                </form>
                <div class="form-divider"><span>или</span></div>
                <button type="button" class="secondary-button">Зарегистрироваться через Google</button>
                <p class="bottom-text">Уже есть аккаунт?<router-link to="/login">Войти</router-link></p>
            </div>
        </div>
    </main>
    <footer class="auth-footer">
        <div class="container footer-inner"><span>© 2026 Homio</span><span>Условия · Конфиденциальность</span></div>
    </footer>
</div>
</template>

<script setup>
import {ref} from 'vue'
import { api } from '@/api/axios'
import { useRouter } from 'vue-router'

const router=useRouter()
const email=ref('')
const nameFirst=ref('')
const nameLast=ref('')
const password=ref('')
const confirmPassword=ref('')
const agreed=ref(false)

const register=async()=>{
    try{
        if(password.value!==confirmPassword.value){
            alert('Пароли не совпадают')
            return
        }
        if(!agreed.value){
            alert('Примите условия использования')
            return
        }
        const response=await api.post('/auth/register',{nameFirst:nameFirst.value,nameLast:nameLast.value,email:email.value,password:password.value})
        router.push('/')
    }catch(error){
        console.error(error)
        alert('register error')
    }
}
</script>

<style scoped>
:global(*){
    box-sizing:border-box
}
:global(html){
    scroll-behavior:smooth;
    scrollbar-gutter:stable;
}
:global(body){
    margin:0;
    background:#f7f5ef;
    color:#30332d;
    font-family:Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif
}
:global(a){
    color:inherit;
    text-decoration:none
}
:global(button),:global(input){
    font-family:inherit
}
.auth-page{
    min-height:100vh;
    display:flex;
    flex-direction:column;
    overflow-x:hidden
}
.container{
    width:min(1160px,calc(100% - 48px));
    margin:0 auto
}
.header{
    padding:23px 0;
    background:#f7f5ef;
    border-bottom:1px solid #e5e1d7
}
.header-inner{
    display:flex;
    align-items:center;
    justify-content:space-between;
    min-height:48px
}
.logo{
    color:#657254;
    font-size:28px;
    font-weight:800;
    letter-spacing:-1.5px
}
.logo span{
    color:#bd7153
}
.header-link{
    color:#85877f;
    font-size:14px
}
.header-link strong{
    margin-left:5px;
    color:#657254;
    font-weight:800
}
.auth-main{
    flex:1;
    padding:70px 0 85px
}
.auth-container{
    width:min(1000px,calc(100% - 48px));
    margin:0 auto;
    display:grid;
    grid-template-columns:0.95fr 1.05fr;
    align-items:center;
    gap:95px
}
.auth-intro{
    position:relative
}
.eyebrow{
    display:inline-block;
    color:#a8684e;
    font-size:14px;
    font-weight:800;
    letter-spacing:.12em;
    text-transform:uppercase
}
.auth-intro h1{
    margin:18px 0 20px;
    color:#30332d;
    font-size:58px;
    line-height:1.02;
    letter-spacing:-3px;
    font-weight:800
}
.auth-intro h1 em{
    display:block;
    color:#657254;
    font-style:normal
}
.auth-intro>p{
    max-width:390px;
    margin:0;
    color:#777a71;
    font-size:16px;
    line-height:1.75
}
.benefits{
    margin-top:38px;
    border-top:1px solid #dcd9d0
}
.benefit{
    display:grid;
    grid-template-columns:40px 1fr;
    gap:15px;
    padding:15px 0;
    border-bottom:1px solid #dcd9d0
}
.benefit span{
    color:#b96e50;
    font-size:13px;
    font-weight:800
}
.benefit p{
    margin:0;
    color:#70736b;
    font-size:14px;
    font-weight:600
}
.auth-card{
    padding:36px;
    border:1px solid #ddd9cf;
    border-radius:12px;
    background:#fffdf8;
    box-shadow:0 22px 50px rgba(48,51,45,.07)
}
.card-heading h2{
    margin:0;
    color:#34372f;
    font-size:28px;
    line-height:1.1;
    letter-spacing:-1px
}
.card-heading p{
    margin:10px 0 27px;
    color:#898b83;
    font-size:14px;
    line-height:1.6
}
.auth-form{
    display:flex;
    flex-direction:column;
    gap:16px
}
.field{
    display:flex;
    flex-direction:column;
    gap:7px
}
.field label{
    color:#464940;
    font-size:14px;
    font-weight:700
}
.field input{
    width:100%;
    height:49px;
    padding:0 15px;
    border:1px solid #d8d5cb;
    border-radius:8px;
    outline:none;
    background:#f9f7f1;
    color:#34372f;
    font-size:15px;
    transition:border-color .2s ease,box-shadow .2s ease,background .2s ease
}
.field input::placeholder{
    color:#aaa9a1
}
.field input:focus{
    border-color:#657254;
    background:#fffdf8;
    box-shadow:0 0 0 3px rgba(101,114,84,.09)
}
.checkbox{
    display:flex;
    align-items:flex-start;
    gap:10px;
    margin-top:3px;
    color:#85877f;
    font-size:12px;
    line-height:1.6;
    cursor:pointer
}
.checkbox input{
    width:16px;
    height:16px;
    margin:2px 0 0;
    accent-color:#657254;
    flex-shrink:0
}
.checkbox a{
    color:#657254;
    font-weight:700
}
.primary-button{
    display:inline-flex;
    align-items:center;
    justify-content:center;
    gap:18px;
    width:100%;
    height:53px;
    margin-top:5px;
    border:0;
    border-radius:8px;
    background:#657254;
    color:#fff;
    font-size:15px;
    font-weight:700;
    cursor:pointer;
    transition:background .2s ease,transform .2s ease
}
.primary-button:hover{
    background:#586448;
    transform:translateY(-2px)
}
.primary-button span{
    font-size:20px
}
.secondary-button{
    display:flex;
    align-items:center;
    justify-content:center;
    width:100%;
    height:50px;
    border:1px solid #d7d3c9;
    border-radius:8px;
    background:#fbfaf6;
    color:#4c5048;
    font-size:14px;
    font-weight:700;
    cursor:pointer;
    transition:border-color .2s ease,transform .2s ease
}
.secondary-button:hover{
    border-color:#aaa79d;
    transform:translateY(-2px)
}
.form-divider{
    display:flex;
    align-items:center;
    gap:15px;
    margin:22px 0
}
.form-divider::before,.form-divider::after{
    content:"";
    flex:1;
    height:1px;
    background:#e1ddd4
}
.form-divider span{
    color:#aaa9a1;
    font-size:13px
}
.bottom-text{
    margin:22px 0 0;
    color:#898b83;
    font-size:14px;
    text-align:center
}
.bottom-text a{
    margin-left:4px;
    color:#657254;
    font-weight:800
}
.auth-footer{
    padding:20px 0;
    border-top:1px solid #dedbd2;
    background:#eeece4
}
.footer-inner{
    display:flex;
    align-items:center;
    justify-content:space-between;
    color:#999b93;
    font-size:13px
}
@media(max-width:850px){
    .auth-container{
        grid-template-columns:1fr;
        gap:45px;
        width:min(520px,calc(100% - 32px))
    }
    .auth-intro{
        text-align:center
    }
    .auth-intro>p{
        margin:0 auto
    }
    .benefits{
        text-align:left
    }
    .auth-intro h1{
        font-size:52px
    }
    .auth-main{
        padding:60px 0 75px
    }
}
@media(max-width:500px){
    .container{
        width:calc(100% - 32px)
    }
    .header{
        padding:18px 0
    }
    .header-link{
        font-size:12px
    }
    .header-link strong{
        display:none
    }
    .auth-container{
        width:calc(100% - 32px)
    }
    .auth-intro h1{
        font-size:45px;
        letter-spacing:-2.5px
    }
    .auth-card{
        padding:25px 20px
    }
    .card-heading h2{
        font-size:25px
    }
    .footer-inner{
        flex-direction:column;
        align-items:flex-start;
        gap:8px
    }
}
</style>