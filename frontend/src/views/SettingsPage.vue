<template>
    <div class="page">
        <header class="header">
            <div class="container header-inner">
                <RouterLink to="/" class="logo">homio<span>.</span></RouterLink>
                <nav class="nav">
                    <button type="button" @click="router.push('/services')" class="header_button">Услуги</button>
                    <a href="/#how">Как это работает</a>
                    <a href="/#faq">Помощь</a>
                    <button type="button" @click="router.push('/profile')" class="header_button">Профиль</button>
                </nav>
                <RouterLink to="/profile" class="header-user">
                    <div class="user-avatar">{{ firstName[0] }}</div>
                    <span>{{ firstName }}</span>
                </RouterLink>
            </div>
        </header>

        <main>
            <section class="settings-section">
                <div class="container">
                    <div class="page-heading">
                        <span class="eyebrow">НАСТРОЙКИ</span>
                        <h1>Безопасность аккаунта</h1>
                        <p>Измените пароль для входа в ваш аккаунт Homio.</p>
                    </div>

                    <div class="settings-layout">
                        <aside class="settings-info">
                            <span class="info-number">01</span>

                            <div>
                                <h2>Новый пароль</h2>

                                <p>
                                    Используйте пароль, который вы не применяете
                                    на других сайтах.
                                </p>
                            </div>
                        </aside>

                        <section class="settings-card">
                            <div class="card-heading">
                                <span class="card-eyebrow">ПАРОЛЬ</span>
                                <h2>Изменить пароль</h2>
                                <p>
                                    Для подтверждения изменений сначала
                                    укажите текущий пароль.
                                </p>
                            </div>

                            <form class="password-form" @submit.prevent="changePassword">
                                <div class="form-group">
                                    <label for="currentPassword">
                                        Текущий пароль
                                    </label>

                                    <input
                                        id="currentPassword"
                                        v-model="passwords.currentPassword"
                                        type="password"
                                        placeholder="Введите текущий пароль"
                                    >
                                </div>

                                <div class="form-divider"></div>

                                <div class="password-grid">
                                    <div class="form-group">
                                        <label for="newPassword">
                                            Новый пароль
                                        </label>

                                        <input
                                            id="newPassword"
                                            v-model="passwords.newPassword"
                                            type="password"
                                            placeholder="Введите новый пароль"
                                        >

                                        <small>
                                            Рекомендуем минимум 8 символов.
                                        </small>
                                    </div>

                                    <div class="form-group">
                                        <label for="confirmPassword">
                                            Повторите пароль
                                        </label>

                                        <input
                                            id="confirmPassword"
                                            v-model="passwords.confirmPassword"
                                            type="password"
                                            placeholder="Повторите новый пароль"
                                        >
                                    </div>
                                </div>

                                <div class="password-hint">
                                    <div class="hint-icon">✓</div>

                                    <div>
                                        <strong>Совет по безопасности</strong>

                                        <p>
                                            Используйте буквы, цифры и разные
                                            символы. Не используйте один пароль
                                            для нескольких сервисов.
                                        </p>
                                    </div>
                                </div>

                                <div class="form-footer">
                                    <RouterLink to="/profile" class="secondary-button">
                                        Назад
                                    </RouterLink>

                                    <button type="submit" class="primary-button">
                                        Изменить пароль
                                        <span>→</span>
                                    </button>
                                </div>
                            </form>
                        </section>
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
import { ref,onMounted } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const router=useRouter()
const firstName=ref('')

const passwords=ref({
    currentPassword:'',
    newPassword:'',
    confirmPassword:''
})

const getProfile=async()=>{
    try{
        const token=localStorage.getItem('token')

        const response=await axios.get('http://localhost:5178/auth/profile',{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })

        firstName.value=response.data.firstName
    }catch(error){
        console.error(error)
        alert('Ошибка загрузки данных пользователя')
    }
}

const changePassword=async()=>{
    try{
        if(!passwords.value.currentPassword||!passwords.value.newPassword||!passwords.value.confirmPassword){
            alert('Заполните все поля')
            return
        }

        if(passwords.value.newPassword!==passwords.value.confirmPassword){
            alert('Пароли не совпадают')
            return
        }

        const token=localStorage.getItem('token')

        await axios.put('http://localhost:5178/password/',{
            currentPassword:passwords.value.currentPassword,
            newPassword:passwords.value.newPassword,
            confirmPassword:passwords.value.confirmPassword
        },{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })

        passwords.value.currentPassword=''
        passwords.value.newPassword=''
        passwords.value.confirmPassword=''

        alert('Пароль успешно изменён')

        router.push('/profile')
    }catch(error){
        console.error(error)
        alert('Ошибка изменения пароля')
    }
}

onMounted(()=>{
    getProfile()
})
</script>

<style scoped>
:global(*){
    box-sizing:border-box
}
:global(html){
    scroll-behavior:smooth;
    scrollbar-gutter:stable
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
    font-family:inherit;
    color:inherit;
    text-decoration:none
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
.nav .header_button{
    cursor:pointer;
    border:0;
    margin:0;
    background:transparent;
    color:#73766e;
    font-size:16px;
    font-weight:600;
    transition:color .2s ease;
    font-family:inherit
}
.nav .header_button:hover{
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
.settings-section{
    padding:78px 0 110px
}
.page-heading{
    margin-bottom:48px
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
.settings-layout{
    display:grid;
    grid-template-columns:270px minmax(0,1fr);
    gap:30px;
    align-items:start
}
.settings-info{
    display:grid;
    grid-template-columns:38px 1fr;
    gap:14px;
    padding:24px 0;
    border-top:1px solid #d8d5cb;
    border-bottom:1px solid #d8d5cb
}
.info-number{
    color:#b96e50;
    font-size:14px;
    font-weight:800
}
.settings-info h2{
    margin:0 0 8px;
    color:#383b33;
    font-size:20px
}
.settings-info p{
    margin:0;
    color:#85877f;
    font-size:13px;
    line-height:1.65
}
.settings-card{
    padding:34px;
    border:1px solid #ddd9cf;
    border-radius:12px;
    background:#fbfaf6
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
.password-form{
    padding-top:28px
}
.form-group{
    display:flex;
    flex-direction:column
}
.form-group label{
    margin-bottom:8px;
    color:#464940;
    font-size:13px;
    font-weight:700
}
.form-group input{
    width:100%;
    height:50px;
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
    font-size:11px
}
.form-divider{
    height:1px;
    margin:28px 0;
    background:#e1ddd4
}
.password-grid{
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:18px
}
.password-hint{
    display:flex;
    align-items:flex-start;
    gap:14px;
    margin-top:28px;
    padding:17px;
    border:1px solid #dde1d5;
    border-radius:9px;
    background:#f1f3eb
}
.hint-icon{
    display:grid;
    width:30px;
    height:30px;
    flex-shrink:0;
    place-items:center;
    border-radius:50%;
    background:#e2e9db;
    color:#657254;
    font-size:13px;
    font-weight:800
}
.password-hint strong{
    display:block;
    color:#45483f;
    font-size:13px
}
.password-hint p{
    max-width:550px;
    margin:4px 0 0;
    color:#81847b;
    font-size:12px;
    line-height:1.55
}
.form-footer{
    display:flex;
    align-items:center;
    justify-content:flex-end;
    gap:10px;
    margin-top:28px;
    padding-top:22px;
    border-top:1px solid #e1ddd4
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
    transition:background .2s ease,transform .2s ease,border-color .2s ease
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
    border-color:#a9a69d;
    transform:translateY(-1px)
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
.footer-bottom{
    display:flex;
    justify-content:space-between;
    padding-top:19px;
    border-top:1px solid #d9d6cd;
    color:#999b93;
    font-size:13px
}
@media(max-width:900px){
    .settings-layout{
        grid-template-columns:220px minmax(0,1fr);
        gap:20px
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
    .settings-section{
        padding:55px 0 70px
    }
    .page-heading{
        margin-bottom:32px
    }
    .page-heading h1{
        font-size:42px;
        letter-spacing:-2px
    }
    .page-heading p{
        font-size:14px
    }
    .settings-layout{
        grid-template-columns:1fr
    }
    .settings-info{
        padding:20px 0
    }
    .settings-card{
        padding:22px 18px;
        border-radius:10px
    }
    .card-heading h2{
        font-size:24px
    }
    .card-heading p{
        font-size:13px
    }
    .password-grid{
        grid-template-columns:1fr;
        gap:18px
    }
    .form-footer{
        flex-direction:column-reverse;
        align-items:stretch
    }
    .primary-button,.secondary-button{
        width:100%
    }
    .footer-inner{
        display:block
    }
    .footer-bottom{
        flex-direction:column;
        gap:8px
    }
}
</style>