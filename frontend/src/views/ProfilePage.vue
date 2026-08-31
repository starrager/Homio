<template>
    <div class="page">
        <header class="header">
            <div class="container header-inner">
                <RouterLink to="/" class="logo">homio<span>.</span></RouterLink>
                <nav class="nav">
                    <RouterLink class="header-button" to="/services">Услуги</RouterLink>
                    <RouterLink class="header-button" to="/orders">Мои заказы</RouterLink>
                    <a href="/#faq" class="header_button">Помощь</a>
                </nav>
                <div class="header-user">
                    <div class="user-avatar">{{ firstName[0] }}</div>
                    <span>{{ firstName }}</span>
                </div>
            </div>
        </header>
        <main>
            <section class="profile-section">
                <div class="container">
                    <div class="page-heading">
                        <span class="eyebrow">ЛИЧНЫЙ КАБИНЕТ</span>
                        <h1>Мой профиль</h1>
                        <p>Управляйте личными данными и настройками аккаунта.</p>
                    </div>
                    <div class="profile-layout">
                        <aside class="sidebar">
                            <div class="sidebar-user">
                                <div class="sidebar-avatar">{{ firstName[0] }}</div>
                                <div>
                                    <strong>{{ firstName }}</strong>
                                    <span>{{ lastName }}</span>
                                </div>
                            </div>
                            <div class="sidebar-menu">
                                <RouterLink to="/profile" class="sidebar-link active">
                                    <span class="sidebar-icon">○</span>
                                    <span>Профиль</span>
                                </RouterLink>
                                <RouterLink to="/orders" class="sidebar-link">
                                    <span class="sidebar-icon">□</span>
                                    <span>Мои заказы</span>
                                </RouterLink>
                                <RouterLink to="/history" class="sidebar-link">
                                    <span class="sidebar-icon">◷</span>
                                    <span>История</span>
                                </RouterLink>
                                <RouterLink to="/favorites" class="sidebar-link">
                                    <span class="sidebar-icon">♡</span>
                                    <span>Избранное</span>
                                </RouterLink>
                                <RouterLink to="/settings" class="sidebar-link">
                                    <span class="sidebar-icon">⌁</span>
                                    <span>Настройки</span>
                                </RouterLink>
                            </div>
                            <div class="sidebar-bottom">
                                <button type="button" class="logout-button" @click="logout()">
                                    <span>↪</span>
                                    Выйти
                                </button>
                            </div>
                        </aside>
                        <div class="profile-content">
                            <section class="profile-card">
                                <div class="card-heading">
                                    <div>
                                        <span class="card-eyebrow">ЛИЧНЫЕ ДАННЫЕ</span>
                                        <h2>Основная информация</h2>
                                        <p>Эти данные используются для оформления и связи по заказам.</p>
                                    </div>
                                </div>
                                <form class="profile-form">
                                    <div class="avatar-row">
                                        <div class="large-avatar">{{ firstName[0] }}</div>
                                        <div class="avatar-info">
                                            <strong>Фото профиля</strong>
                                            <p>Добавьте фотографию, чтобы специалистам было проще вас узнать.</p>
                                            <button type="button" class="outline-button">Изменить фото</button>
                                        </div>
                                    </div>
                                    <div class="form-grid">
                                        <div class="form-group">
                                            <label for="firstName">Имя</label>
                                            <input id="firstName" type="text" v-model="firstName" placeholder="Введите имя">
                                        </div>
                                        <div class="form-group">
                                            <label for="lastName">Фамилия</label>
                                            <input id="lastName" type="text" v-model="lastName" placeholder="Введите фамилию">
                                        </div>
                                        <div class="form-group">
                                            <label for="email">Email</label>
                                            <input id="email" type="email" v-model="email" placeholder="you@example.com">
                                        </div>
                                        <div class="form-group">
                                            <label for="phone">Телефон</label>
                                            <input id="phone" type="tel" v-model="phone" placeholder="+79 000 000 000">
                                        </div>
                                        <div class="form-group full">
                                            <label for="address">Адрес</label>
                                            <input id="address" type="text" v-model="address" placeholder="Введите адрес">
                                            <small>Используется для оформления заказа и визита специалиста.</small>
                                        </div>
                                    </div>
                                    <div class="form-footer">
                                        <span>Последнее изменение: сегодня</span>
                                        <button type="button" class="primary-button" @click="saveData()">Сохранить изменения<span>→</span></button>
                                    </div>
                                </form>
                            </section>
                            <section class="profile-card">
                                <div class="card-heading">
                                    <div>
                                        <span class="card-eyebrow">БЕЗОПАСНОСТЬ</span>
                                        <h2>Пароль</h2>
                                        <p>Рекомендуем использовать сложный пароль, который вы не используете на других сайтах.</p>
                                    </div>
                                </div>
                                <form class="password-form">
                                    <div class="form-group">
                                        <label for="oldPassword">Текущий пароль</label>
                                        <input id="oldPassword" v-model="passwords.currentPassword" type="password" placeholder="Введите текущий пароль">
                                    </div>
                                    <div class="form-grid">
                                        <div class="form-group">
                                            <label for="newPassword">Новый пароль</label>
                                            <input id="newPassword" v-model="passwords.newPassword" type="password" placeholder="Новый пароль">
                                        </div>
                                        <div class="form-group">
                                            <label for="repeatPassword">Повторите пароль</label>
                                            <input id="repeatPassword" v-model="passwords.confirmPassword" type="password" placeholder="Повторите новый пароль">
                                        </div>
                                    </div>
                                    <div class="form-footer">
                                        <span>Пароль можно изменить в любой момент.</span>
                                        <button type="button" class="secondary-button" @click="changePassword()">Изменить пароль</button>
                                    </div>
                                </form>
                            </section>
                            <section class="profile-card notification-card">
                                <div class="card-heading">
                                    <div>
                                        <span class="card-eyebrow">УВЕДОМЛЕНИЯ</span>
                                        <h2>Как с вами связаться</h2>
                                        <p>Выберите, какие уведомления хотите получать.</p>
                                    </div>
                                </div>
                                <div class="notification-list">
                                    <label class="notification-item">
                                        <div>
                                            <strong>Обновления заказов</strong>
                                            <span>Статусы, назначение специалиста и изменения заказа.</span>
                                        </div>
                                        <input type="checkbox" checked @change="setNotifications" v-model="notifications.order">
                                        <span class="toggle"></span>
                                    </label>
                                    <label class="notification-item">
                                        <div>
                                            <strong>Напоминания</strong>
                                            <span>Напоминание о предстоящем визите специалиста.</span>
                                        </div>
                                        <input type="checkbox" checked @change="setNotifications" v-model="notifications.reminders">
                                        <span class="toggle"></span>
                                    </label>
                                    <label class="notification-item">
                                        <div>
                                            <strong>Новости Homio</strong>
                                            <span>Новые услуги, предложения и полезные новости.</span>
                                        </div>
                                        <input type="checkbox" @change="setNotifications" v-model="notifications.news">
                                        <span class="toggle"></span>
                                    </label>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <footer>
            <div class="container footer-inner">
                <div class="footer-brand">
                    <RouterLink to="/" class="logo">homio<span>.</span></RouterLink>
                    <p>Помогаем решать бытовые задачи проще.</p>
                </div>
            </div>
            <div class="container footer-bottom">
                <span>© 2026 Homio</span>
                <span>Условия · Конфиденциальность</span>
            </div>
        </footer>
    </div>
</template>
    
<script setup lang="ts">
import axios from 'axios'
import {useRouter} from 'vue-router'
import {ref,onMounted} from 'vue'
import router from '@/router/router'

const firstName=ref('')
const lastName=ref('')
const email=ref('')
const phone=ref('')
const address=ref('')
const notifications=ref({
    order:false,
    reminders:false,
    news:false
})
const passwords=ref({
    currentPassword:'',
    newPassword:'',
    confirmPassword:''
})

const getProfile=async()=>{
    try{
        const token=localStorage.getItem('token')
        const response=await axios.get('http://localhost:5178/auth/profile',{headers:{Authorization:`Bearer ${token}`}})

        firstName.value=response.data.firstName
        lastName.value=response.data.lastName
        email.value=response.data.email
        phone.value=response.data.phone
        address.value=response.data.address
        notifications.value.order=response.data.order
        notifications.value.reminders=response.data.reminders
        notifications.value.news=response.data.news
    }catch(error){
        console.error(error)
        alert('ошибка загрузки данных пользователя')
    }
}

const changePassword=async()=>{
    try{
        if(!passwords.value.confirmPassword||!passwords.value.newPassword||!passwords.value.currentPassword){
            alert('проверьте формы для изменения пароля')
            return
        }
        if(passwords.value.confirmPassword!==passwords.value.newPassword){
            alert('пароли не совпадют')
            return
        }

        const token=localStorage.getItem('token')
        const response=await axios.put('http://localhost:5178/password/',{
                newPassword:passwords.value.newPassword,
                currentPassword:passwords.value.currentPassword,
                confirmPassword:passwords.value.confirmPassword
            },{headers:{Authorization:`Bearer ${token}`}})
        passwords.value.newPassword=''
        passwords.value.currentPassword=response.data.password
        passwords.value.confirmPassword=''

        alert('pass is new')
    }catch(error){
        console.error(error)
        alert('ошибка изменения пароля')
    }
}

const setNotifications=async()=>{
    try{
        const token=localStorage.getItem('token')
        const response=await axios.put('http://localhost:5178/data/notifications',
        {order:notifications.value.order,reminders:notifications.value.reminders,news:notifications.value.news},
        {headers:{Authorization:`Bearer ${token}`}})

        notifications.value.order=response.data.order
        notifications.value.reminders=response.data.reminders
        notifications.value.news=response.data.news

    }catch(error){
        console.error(error)
        alert('ошибка уведомлений')
    }
}

const setPhone=async()=>{
    try{
        const token=localStorage.getItem('token')
        const response=await axios.put('http://localhost:5178/data/phone',{phone:phone.value},{headers:{Authorization:`Bearer ${token}`}})
        phone.value=response.data.phone
    }catch(error){
        console.error(error)
        alert('error set phone')
    }
}

const setAddress=async()=>{
    try{
        const token=localStorage.getItem('token')
        const response=await axios.put('http://localhost:5178/data/address',{address:address.value},{headers:{Authorization:`Bearer ${token}`}})
        address.value=response.data.address
    }catch(error){
        console.error(error)
        alert('error set address')
    }
}

const saveData=async()=>{
    try{
        await setPhone()
        await setAddress()
        await setNotifications()
        await getProfile()
    }catch(error){
        console.error(error)
        alert('error save data')
    }
}

const logout=async()=>{
    try{
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        router.push('/login')
    }catch(error){
        console.error(error)
        alert('ошибка выхода из аккаунта')
    }
}

onMounted(()=>{
    getProfile()
})
</script>
    
<style scoped>
:global(*){
    box-sizing:border-box;
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
.page{
    min-height:100vh;
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
    min-height:48px;
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
.nav{
    display:flex;
    align-items:center;
    gap:38px
}
.nav a{
    color:#73766e;
    font-size:16px;
    font-weight:600;
    transition:color .2s ease
}
.nav a:hover{
    color:#657254
}
.header-user{
    display:flex;
    align-items:center;
    gap:10px;
    color:#464940;
    font-size:15px;
    font-weight:700
}
.user-avatar{
    display:grid;
    width:38px;
    height:38px;
    place-items:center;
    border-radius:50%;
    background:#d4b4a3;
    color:#fff;
    font-size:14px
}
.profile-section{
    padding:78px 0 110px
}
.page-heading{
    margin-bottom:45px
}
.eyebrow{
    display:inline-block;
    color:#a8684e;
    font-size:13px;
    font-weight:800;
    letter-spacing:.12em
}
.page-heading h1{
    margin:13px 0 12px;
    color:#34372f;
    font-size:52px;
    line-height:1;
    letter-spacing:-2.5px
}
.page-heading p{
    max-width:500px;
    margin:0;
    color:#81847b;
    font-size:16px;
    line-height:1.7
}
.profile-layout{
    display:grid;
    grid-template-columns:270px 1fr;
    gap:30px;
    align-items:start
}
.sidebar{
    position:sticky;
    top:25px;
    padding:22px;
    border:1px solid #ddd9cf;
    border-radius:12px;
    background:#eeece4
}
.sidebar-user{
    display:flex;
    align-items:center;
    gap:13px;
    padding:4px 2px 24px;
    border-bottom:1px solid #d9d6cd
}
.sidebar-avatar{
    display:grid;
    width:47px;
    height:47px;
    flex-shrink:0;
    place-items:center;
    border-radius:50%;
    background:#d4b4a3;
    color:#fff;
    font-size:16px;
    font-weight:700
}
.sidebar-user strong{
    display:block;
    color:#3d4038;
    font-size:15px
}
.sidebar-user span{
    display:block;
    max-width:155px;
    margin-top:4px;
    overflow:hidden;
    color:#898b83;
    font-size:12px;
    text-overflow:ellipsis;
    white-space:nowrap
}
.sidebar-menu{
    display:flex;
    flex-direction:column;
    gap:4px;
    padding:20px 0
}
.sidebar-link{
    display:flex;
    align-items:center;
    gap:13px;
    padding:12px 13px;
    border-radius:7px;
    color:#74776e;
    font-size:15px;
    font-weight:600;
    transition:background .2s ease,color .2s ease
}
.sidebar-link:hover{
    background:#e5e4d9;
    color:#657254
}
.sidebar-link.active{
    background:#657254;
    color:#fff
}
.sidebar-icon{
    display:grid;
    width:24px;
    place-items:center;
    font-size:17px
}
.sidebar-bottom{
    padding-top:18px;
    border-top:1px solid #d9d6cd
}
.logout-button{
    display:flex;
    align-items:center;
    gap:13px;
    width:100%;
    padding:11px 13px;
    border:0;
    background:transparent;
    color:rgb(165, 43, 43);
    font-size:14px;
    font-weight:700;
    text-align:left;
    cursor:pointer
}
.profile-content{
    display:flex;
    flex-direction:column;
    gap:22px
}
.profile-card{
    padding:34px;
    border:1px solid #ddd9cf;
    border-radius:12px;
    background:#fbfaf6
}
.header-button{
    margin:0;
}
.card-heading{
    padding-bottom:27px;
    border-bottom:1px solid #e1ddd4
}
.card-eyebrow{
    color:#a8684e;
    font-size:12px;
    font-weight:800;
    letter-spacing:.11em
}
.card-heading h2{
    margin:10px 0 8px;
    color:#34372f;
    font-size:28px;
    line-height:1.1;
    letter-spacing:-1px
}
.card-heading p{
    max-width:580px;
    margin:0;
    color:#85877f;
    font-size:14px;
    line-height:1.65
}
.avatar-row{
    display:flex;
    align-items:center;
    gap:18px;
    padding:28px 0;
    border-bottom:1px solid #e1ddd4
}
.large-avatar{
    display:grid;
    width:78px;
    height:78px;
    flex-shrink:0;
    place-items:center;
    border-radius:50%;
    background:#d4b4a3;
    color:#fff;
    font-size:27px;
    font-weight:700
}
.avatar-info strong{
    display:block;
    color:#3c3f37;
    font-size:16px
}
.avatar-info p{
    max-width:400px;
    margin:6px 0 12px;
    color:#898b83;
    font-size:13px;
    line-height:1.55
}
.outline-button{
    padding:9px 14px;
    border:1px solid #d3cfc5;
    border-radius:6px;
    background:transparent;
    color:#657254;
    font-size:13px;
    font-weight:700;
    cursor:pointer
}
.profile-form{
    display:flex;
    flex-direction:column
}
.form-grid{
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:22px 18px;
    padding:28px 0
}
.form-group{
    display:flex;
    flex-direction:column
}
.form-group.full{
    grid-column:1 / -1
}
.form-group label{
    margin-bottom:8px;
    color:#464940;
    font-size:13px;
    font-weight:700
}
.form-group input{
    width:100%;
    height:48px;
    padding:0 15px;
    border:1px solid #d8d4ca;
    border-radius:7px;
    outline:none;
    background:#fffdf8;
    color:#363930;
    font-size:14px;
    transition:border-color .2s ease,box-shadow .2s ease
}
.form-group input::placeholder{
    color:#aaa9a1
}
.form-group input:focus{
    border-color:#8b987d;
    box-shadow:0 0 0 3px rgba(101,114,84,.08)
}
.form-group small{
    margin-top:7px;
    color:#999b93;
    font-size:11px;
    line-height:1.5
}
.form-footer{
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap:20px;
    padding-top:21px;
    border-top:1px solid #e1ddd4
}
.form-footer>span{
    color:#999b93;
    font-size:12px
}
.primary-button,.secondary-button{
    display:inline-flex;
    align-items:center;
    justify-content:center;
    gap:15px;
    min-height:46px;
    padding:0 21px;
    border-radius:7px;
    font-size:14px;
    font-weight:700;
    cursor:pointer;
    transition:background .2s ease,transform .2s ease
}
.primary-button{
    border:0;
    background:#657254;
    color:#fff
}
.primary-button:hover{
    background:#586448;
    transform:translateY(-1px)
}
.primary-button span{
    font-size:18px
}
.secondary-button{
    border:1px solid #d5d1c7;
    background:#fffdf8;
    color:#657254
}
.secondary-button:hover{
    border-color:#a9a69d
}
.password-form{
    padding-top:27px
}
.password-form>.form-group{
    max-width:100%
}
.password-form .form-grid{
    padding-bottom:27px
}
.notification-card{
    padding-bottom:10px
}
.notification-list{
    display:flex;
    flex-direction:column
}
.notification-item{
    position:relative;
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap:20px;
    padding:21px 0;
    border-bottom:1px solid #e1ddd4;
    cursor:pointer
}
.notification-item:last-child{
    border-bottom:0
}
.notification-item>div{
    display:flex;
    flex-direction:column;
    gap:5px
}
.notification-item strong{
    color:#41443c;
    font-size:14px
}
.notification-item span:not(.toggle){
    color:#898b83;
    font-size:12px;
    line-height:1.5
}
.notification-item input{
    position:absolute;
    opacity:0;
    pointer-events:none
}
.toggle{
    position:relative;
    width:42px;
    height:24px;
    flex-shrink:0;
    border-radius:20px;
    background:#d7d4ca;
    transition:background .2s ease
}
.toggle::after{
    position:absolute;
    top:3px;
    left:3px;
    width:18px;
    height:18px;
    border-radius:50%;
    background:#fffdf8;
    box-shadow:0 1px 3px rgba(48,51,45,.15);
    content:"";
    transition:transform .2s ease
}
.notification-item input:checked+.toggle{
    background:#657254
}
.notification-item input:checked+.toggle::after{
    transform:translateX(18px)
}
footer{
    padding:60px 0 22px;
    background:#eeece4;
    border-top:1px solid #dedbd2
}
.footer-inner{
    display:flex;
    justify-content:space-between;
    padding-bottom:48px
}
.footer-brand p{
    max-width:200px;
    margin-top:13px;
    color:#85877f;
    font-size:14px;
    line-height:1.7
}
.footer-links{
    display:flex;
    gap:100px
}
.footer-links div{
    display:flex;
    flex-direction:column;
    gap:9px
}
.footer-links strong{
    margin-bottom:5px;
    color:#464940;
    font-size:14px
}
.footer-links a{
    color:#81847b;
    font-size:14px
}
.footer-bottom{
    display:flex;
    justify-content:space-between;
    padding-top:19px;
    border-top:1px solid #d9d6cd;
    color:#999b93;
    font-size:13px
}
@media(max-width:900px){
    .profile-layout{
        grid-template-columns:220px 1fr;
        gap:20px
    }
    .profile-card{
        padding:27px
    }
    .nav{
        gap:22px
    }
}
@media(max-width:700px){
    .container{
        width:calc(100% - 32px)
    }
    .header{
        padding:18px 0
    }
    .nav{
        display:none
    }
    .header-user span{
        display:none
    }
    .profile-section{
        padding:55px 0 70px
    }
    .page-heading{
        margin-bottom:30px
    }
    .page-heading h1{
        font-size:42px;
        letter-spacing:-2px
    }
    .page-heading p{
        font-size:14px
    }
    .profile-layout{
        grid-template-columns:1fr
    }
    .sidebar{
        position:static;
        padding:15px
    }
    .sidebar-user{
        padding-bottom:15px
    }
    .sidebar-menu{
        display:grid;
        grid-template-columns:1fr 1fr;
        gap:4px;
        padding:12px 0
    }
    .sidebar-link{
        padding:10px;
        font-size:13px
    }
    .sidebar-bottom{
        display:none
    }
    .profile-card{
        padding:22px 18px;
        border-radius:10px
    }
    .card-heading h2{
        font-size:24px
    }
    .card-heading p{
        font-size:13px
    }
    .avatar-row{
        align-items:flex-start
    }
    .large-avatar{
        width:62px;
        height:62px;
        font-size:21px
    }
    .avatar-info p{
        font-size:12px
    }
    .form-grid{
        grid-template-columns:1fr;
        gap:18px;
        padding:22px 0
    }
    .form-group.full{
        grid-column:auto
    }
    .form-footer{
        flex-direction:column;
        align-items:stretch
    }
    .form-footer>span{
        order:2
    }
    .primary-button,.secondary-button{
        width:100%
    }
    .notification-item{
        gap:12px
    }
    .notification-item>div{
        max-width:calc(100% - 55px)
    }
    .footer-inner{
        display:block
    }
    .footer-links{
        margin-top:40px;
        gap:55px
    }
    .footer-bottom{
        flex-direction:column;
        gap:8px
    }
}
</style>