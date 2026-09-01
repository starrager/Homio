<template>
    <div class="page">
        <header class="header">
            <div class="container header-inner">
                <RouterLink to="/" class="logo">homio<span>.</span></RouterLink>
                <nav class="nav">
                    <RouterLink to="/services">Услуги</RouterLink>
                    <a href="/#how">Как это работает</a>
                    <a href="/#faq">Помощь</a>
                </nav>
                <div class="header-user">
                    <div class="user-avatar">{{ firstName[0] }}</div>
                    <span>{{ firstName }}</span>
                </div>
            </div>
        </header>
        <main class="account">
            <div class="container">
                <div class="account-heading">
                    <span class="eyebrow">ЛИЧНЫЙ КАБИНЕТ</span>
                    <h1>Мой профиль</h1>
                    <p>Управляйте личными данными и настройками аккаунта.</p>
                </div>
                <div class="account-tabs">
                    <input id="tab-profile" type="radio" name="account-tab" checked>
                    <input id="tab-orders" type="radio" name="account-tab">
                    <input id="tab-history" type="radio" name="account-tab">
                    <input id="tab-favorites" type="radio" name="account-tab">
                    <input id="tab-settings" type="radio" name="account-tab">
                    <aside class="sidebar">
                        <div class="sidebar-user">
                            <div class="sidebar-avatar">{{ firstName[0] || '?' }}</div>
                            <div>
                                <strong>{{ firstName || 'Гость' }}</strong>
                                <span>{{ lastName || '' }}</span>
                            </div>
                        </div>
                        <div class="sidebar-divider"></div>
                        <nav class="sidebar-menu">
                            <label for="tab-profile" class="sidebar-link">
                                <span class="sidebar-icon">○</span>
                                <span>Профиль</span>
                            </label>
                            <label for="tab-orders" class="sidebar-link">
                                <span class="sidebar-icon">□</span>
                                <span>Мои заказы</span>
                            </label>
                            <label for="tab-history" class="sidebar-link">
                                <span class="sidebar-icon">◷</span>
                                <span>История</span>
                            </label>
                            <label for="tab-favorites" class="sidebar-link">
                                <span class="sidebar-icon">♡</span>
                                <span>Избранное</span>
                            </label>
                            <label for="tab-settings" class="sidebar-link">
                                <span class="sidebar-icon">⌁</span>
                                <span>Настройки</span>
                            </label>
                        </nav>
                        <div class="sidebar-divider"></div>
                        <button type="button" class="logout-button" @click="logout">
                            <span>↪</span>
                            Выйти
                        </button>
                    </aside>
                    <div class="account-content">
                        <section class="account-panel panel-profile">
                            <div class="panel-heading">
                                <span class="card-eyebrow">ЛИЧНЫЕ ДАННЫЕ</span>
                                <h2>Основная информация</h2>
                                <p>Эти данные используются для оформления и связи по заказам.</p>
                            </div>
                            <div class="profile-photo">
                                <div class="profile-avatar">{{ firstName[0] || '?' }}</div>
                                <div class="profile-photo-info">
                                    <strong>Фото профиля</strong>
                                    <p>Добавьте фотографию, чтобы специалистам было проще вас узнать.</p>
                                    <button type="button" class="outline-button">Изменить фото</button>
                                </div>
                            </div>
                            <div class="form-divider"></div>
                            <form class="form-grid" @submit.prevent="saveData">
                                <div class="form-field">
                                    <label for="profile-firstName">Имя</label>
                                    <input id="profile-firstName" type="text" v-model="firstName" placeholder="Введите имя">
                                </div>
                                <div class="form-field">
                                    <label for="profile-lastName">Фамилия</label>
                                    <input id="profile-lastName" type="text" v-model="lastName" placeholder="Введите фамилию">
                                </div>
                                <div class="form-field">
                                    <label for="profile-email">Email</label>
                                    <input id="profile-email" type="email" v-model="email" placeholder="you@example.com">
                                </div>
                                <div class="form-field">
                                    <label for="profile-phone">Телефон</label>
                                    <input id="profile-phone" type="tel" v-model="phone" placeholder="+79 000 000 000">
                                </div>
                                <div class="form-field form-field-full">
                                    <label for="profile-address">Адрес</label>
                                    <input id="profile-address" type="text" v-model="address" placeholder="Введите ваш адрес">
                                </div>
                            </form>
                            <div class="panel-actions">
                                <button type="button" class="primary-button" @click="saveData">
                                    Сохранить изменения
                                    <span>→</span>
                                </button>
                            </div>
                        </section>
                        <section class="account-panel panel-orders">
                            <div class="panel-heading panel-heading-row">
                                <div>
                                    <span class="card-eyebrow">ЗАКАЗЫ</span>
                                    <h2>Мои заказы</h2>
                                    <p>Здесь будут отображаться ваши текущие заказы и их статусы.</p>
                                </div>
                                <a href="/services" class="outline-button">Новый заказ</a>
                            </div>
                            <div v-if="orders.length" class="orders-list">
                                <article v-for="order in orders" :key="order.id" class="order-card">
                                    <div class="order-card-main">
                                        <div class="order-icon">✦</div>
                                        <div>
                                            <span class="order-label">ЗАКАЗ #{{ order.orderNumber }}</span>
                                            <h3>{{ order.service }}</h3>
                                            <p>{{ order.comment }}</p>
                                        </div>
                                    </div>
                                    <div class="order-details">
                                        <div class="order-detail">
                                            <span>Дата</span>
                                            <strong>{{ order.scheduledDate }}</strong>
                                        </div>
                                        <div class="order-detail">
                                            <span>Время</span>
                                            <strong>{{ order.scheduledTime }}</strong>
                                        </div>
                                        <div class="order-detail">
                                            <span>Стоимость</span>
                                            <strong>{{ order.estimatedPrice }} €</strong>
                                        </div>
                                    </div>
                                    <div class="order-footer">
                                        <span class="status-badge">{{ order.status }}</span>
                                        <a href="#" class="order-link">Подробнее →</a>
                                    </div>
                                </article>
                            </div>
                            <div v-else class="empty-state">
                                <div class="empty-icon">□</div>
                                <h3>Заказов пока нет</h3>
                                <p>После оформления заказа он появится в этом разделе.</p>
                                <a href="/services" class="primary-button">
                                    Заказать услугу
                                    <span>→</span>
                                </a>
                            </div>
                        </section>
                        <section class="account-panel panel-history">
                            <div class="panel-heading">
                                <span class="card-eyebrow">ИСТОРИЯ</span>
                                <h2>История заказов</h2>
                                <p>Все выполненные и завершённые заказы находятся здесь.</p>
                            </div>
                            <div v-if="history.length" class="history-list">
                                <!-- <article v-for="item in history" :key="item.id" class="history-card">
                                    <div class="history-date">
                                        <strong>{{ item.date }}</strong>
                                        <span>{{ item.time }}</span>
                                    </div>
                                    <div class="history-icon">✓</div>
                                    <div class="history-main">
                                        <span>ЗАКАЗ #{{ item.id }}</span>
                                        <h3>{{ item.service }}</h3>
                                        <p>{{ item.description }}</p>
                                    </div>
                                    <div class="history-price">
                                        <span>Стоимость</span>
                                        <strong>{{ item.price }} €</strong>
                                    </div>
                                </article> -->
                            </div>
                            <div v-else class="empty-state">
                                <div class="empty-icon">◷</div>
                                <h3>История пока пуста</h3>
                                <p>После выполнения заказов они появятся в этом разделе.</p>
                            </div>
                        </section>
                        <section class="account-panel panel-favorites">
                            <div class="panel-heading">
                                <span class="card-eyebrow">ИЗБРАННОЕ</span>
                                <h2>Избранное</h2>
                                <p>Сохраняйте услуги, к которым хотите вернуться позже.</p>
                            </div>
                            <div v-if="favorites.length" class="favorites-grid">
                                <!-- <article v-for="item in favorites" :key="item.id" class="favorite-card">
                                    <div class="favorite-icon">{{ item.icon }}</div>
                                    <div class="favorite-content">
                                        <span>{{ item.category }}</span>
                                        <h3>{{ item.title }}</h3>
                                        <p>{{ item.description }}</p>
                                    </div>
                                    <div class="favorite-footer">
                                        <strong>от {{ item.price }} €</strong>
                                        <a href="/services">Заказать →</a>
                                    </div>
                                </article> -->
                            </div>
                            <div v-else class="empty-state">
                                <div class="empty-icon">♡</div>
                                <h3>Избранное пока пусто</h3>
                                <p>Добавленные вами услуги появятся здесь.</p>
                                <a href="/services" class="primary-button">
                                    Посмотреть услуги
                                    <span>→</span>
                                </a>
                            </div>
                        </section>
                        <section class="account-panel panel-settings">
                            <div class="panel-heading">
                                <span class="card-eyebrow">НАСТРОЙКИ</span>
                                <h2>Настройки аккаунта</h2>
                                <p>Управляйте уведомлениями и безопасностью аккаунта.</p>
                            </div>
                            <div class="settings-list">
                                <div class="setting-item">
                                    <div>
                                        <strong>Email-уведомления</strong>
                                        <p>Получать информацию о заказах на электронную почту.</p>
                                    </div>
                                    <label class="switch">
                                        <input type="checkbox" v-model="notifications.order">
                                        <span></span>
                                    </label>
                                </div>
                                <div class="setting-item">
                                    <div>
                                        <strong>Уведомления о заказах</strong>
                                        <p>Получать уведомления об изменении статуса заказа.</p>
                                    </div>
                                    <label class="switch">
                                        <input type="checkbox" v-model="notifications.reminders">
                                        <span></span>
                                    </label>
                                </div>
                                <div class="setting-item">
                                    <div>
                                        <strong>Новости Homio</strong>
                                        <p>Получать новости и полезные предложения.</p>
                                    </div>
                                    <label class="switch">
                                        <input type="checkbox" v-model="notifications.news">
                                        <span></span>
                                    </label>
                                </div>
                                <div class="setting-item">
                                    <div>
                                        <strong>Изменить пароль</strong>
                                        <p>Обновите пароль для входа в аккаунт.</p>
                                    </div>
                                    <button type="button" class="outline-button" @click="changePassword">Изменить</button>
                                </div>
                                <button type="button" class="primary-button" @click="saveData">
                                    Сохранить изменения
                                    <span>→</span>
                                </button>
                            </div>
                            <div class="danger-zone">
                                <div>
                                    <strong>Удаление аккаунта</strong>
                                    <p>Удаление аккаунта невозможно отменить.</p>
                                </div>
                                <button type="button" class="danger-button" @click="deleteAccount">Удалить аккаунт</button>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>
    
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import { resolveTripleslashReference } from 'typescript'

const router=useRouter()

const firstName=ref('')
const lastName=ref('')
const email=ref('')
const phone=ref('')
const address=ref('')

const orders=ref<any[]>([])
const history=ref([])
const favorites=ref([])

const notifications=ref({
    order:false,
    reminders:false,
    news:false
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
        lastName.value=response.data.lastName
        email.value=response.data.email
        phone.value=response.data.phone
        address.value=response.data.address

        notifications.value.order=response.data.order
        notifications.value.reminders=response.data.reminders
        notifications.value.news=response.data.news
    }catch(error){
        console.error(error)
        alert('Ошибка загрузки данных пользователя')
    }
}

const getOrders=async()=>{
    try{
        const token=localStorage.getItem('token')
        const response=await axios.get(
            'http://localhost:5178/orders',
            {
                headers:{
                    Authorization:`Bearer ${token}`
                }
            }
        )

        orders.value=response.data
    }catch(error){
        console.error(error)
        alert('ошибка получения заказов')
    }
}

const saveData=async()=>{
    try{
        const token=localStorage.getItem('token')

        await axios.put(
            'http://localhost:5178/data/phone',
            {phone:phone.value},
            {
                headers:{
                    Authorization:`Bearer ${token}`
                }
            }
        )

        await axios.put(
            'http://localhost:5178/data/address',
            {address:address.value},
            {
                headers:{
                    Authorization:`Bearer ${token}`
                }
            }
        )

        await axios.put(
            'http://localhost:5178/data/name',
            {firstName:firstName.value,lastName:lastName.value},
            {
                headers:{
                    Authorization:`Bearer ${token}`
                }
            }
        )

        await axios.put(
            'http://localhost:5178/data/email',
            {email:email.value},
            {
                headers:{
                    Authorization:`Bearer ${token}`
                }
            }
        )

        await axios.put(
            'http://localhost:5178/data/notifications',
            {
                order:notifications.value.order,
                reminders:notifications.value.reminders,
                news:notifications.value.news
            },
            {
                headers:{
                    Authorization:`Bearer ${token}`
                }
            }
        )

        await getProfile()

        alert('Данные успешно сохранены')
    }catch(error){
        console.error(error)
        alert('Ошибка сохранения данных')
    }
}

const changePassword=()=>{
    router.push('/settings')
}

const deleteAccount=()=>{
    if(confirm('Вы уверены? Это действие нельзя отменить.')){
        alert('Функция удаления аккаунта будет добавлена позже')
    }
}

const logout=async()=>{
    try{
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        router.push('/login')
    }catch(error){
        console.error(error)
        alert('Ошибка выхода из аккаунта')
    }
}

onMounted(()=>{
    getProfile()
    getOrders()
})
</script>

<style scoped>
:global(*){
    box-sizing:border-box
}
:global(html){
    scroll-behavior:smooth
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
@media(max-width:900px){
    .nav{
        gap:22px
    }
}
@media(max-width:700px){
    .header{
        padding:18px 0
    }
    .nav{
        display:none
    }
    .header-user span{
        display:none
    }
}
.page{
    min-height:100vh;
    overflow-x:hidden
}
.container{
    width:min(1160px,calc(100% - 48px));
    margin:0 auto
}
.account{
    padding:58px 0 100px
}
.account-heading{
    margin-bottom:36px
}
.account-heading h1{
    margin:11px 0 8px;
    color:#34372f;
    font-size:42px;
    line-height:1.05;
    letter-spacing:-2px
}
.account-heading p{
    margin:0;
    color:#85877f;
    font-size:15px
}
.eyebrow,.card-eyebrow{
    display:inline-block;
    color:#a8684e;
    font-size:12px;
    font-weight:800;
    letter-spacing:.12em
}
.account-tabs{
    display:grid;
    grid-template-columns:270px minmax(0,1fr);
    align-items:start;
    gap:30px;
    position:relative
}
.account-tabs>input{
    display:none
}
.sidebar{
    position:sticky;
    top:25px;
    padding:20px;
    border:1px solid #ddd9cf;
    border-radius:14px;
    background:#eeece4;
    box-shadow:0 8px 25px rgba(48,51,45,.025)
}
.sidebar-user{
    display:flex;
    align-items:center;
    gap:13px;
    padding:7px 4px 17px
}
.sidebar-avatar{
    display:grid;
    width:48px;
    height:48px;
    flex-shrink:0;
    place-items:center;
    border-radius:50%;
    background:#d7b39f;
    color:#fff;
    font-size:18px;
    font-weight:800
}
.sidebar-user strong{
    display:block;
    color:#3d4038;
    font-size:15px
}
.sidebar-user span{
    display:block;
    margin-top:3px;
    color:#8a8c84;
    font-size:13px
}
.sidebar-divider{
    height:1px;
    background:#d9d6cd
}
.sidebar-menu{
    display:flex;
    flex-direction:column;
    gap:4px;
    padding:18px 0
}
.sidebar-link{
    position:relative;
    display:flex;
    align-items:center;
    gap:13px;
    width:100%;
    min-height:44px;
    padding:10px 13px;
    border-radius:8px;
    color:#74776e;
    font-size:15px;
    font-weight:600;
    cursor:pointer;
    transition:background .2s ease,color .2s ease,transform .2s ease
}
.sidebar-link:hover{
    background:#e3e2d9;
    color:#657254;
    transform:translateX(2px)
}
.sidebar-icon{
    display:grid;
    width:22px;
    place-items:center;
    color:currentColor;
    font-size:17px
}
.logout-button{
    display:flex;
    align-items:center;
    gap:13px;
    width:100%;
    margin-top:18px;
    padding:10px 13px;
    border:0;
    border-radius:8px;
    background:transparent;
    color:#a8684e;
    font-size:14px;
    font-weight:700;
    text-align:left;
    cursor:pointer;
    transition:background .2s ease,transform .2s ease
}
.logout-button:hover{
    background:#e7ddd6;
    transform:translateX(2px)
}
#tab-profile:checked~.sidebar .sidebar-link[for="tab-profile"],
#tab-orders:checked~.sidebar .sidebar-link[for="tab-orders"],
#tab-history:checked~.sidebar .sidebar-link[for="tab-history"],
#tab-favorites:checked~.sidebar .sidebar-link[for="tab-favorites"],
#tab-settings:checked~.sidebar .sidebar-link[for="tab-settings"]{
    background:#657254;
    color:#fff;
    box-shadow:0 5px 14px rgba(101,114,84,.16)
}
#tab-profile:checked~.sidebar .sidebar-link[for="tab-profile"]::after,
#tab-orders:checked~.sidebar .sidebar-link[for="tab-orders"]::after,
#tab-history:checked~.sidebar .sidebar-link[for="tab-history"]::after,
#tab-favorites:checked~.sidebar .sidebar-link[for="tab-favorites"]::after,
#tab-settings:checked~.sidebar .sidebar-link[for="tab-settings"]::after{
    position:absolute;
    right:10px;
    width:5px;
    height:5px;
    border-radius:50%;
    background:#d4b4a3;
    content:""
}
.account-content{
    min-width:0
}
.account-panel{
    display:none;
    padding:34px;
    border:1px solid #ddd9cf;
    border-radius:14px;
    background:#fbfaf6;
    box-shadow:0 12px 35px rgba(48,51,45,.025);
    animation:panelIn .25s ease
}
@keyframes panelIn{
    from{
        opacity:0;
        transform:translateY(8px)
    }
    to{
        opacity:1;
        transform:translateY(0)
    }
}
#tab-profile:checked~.account-content .panel-profile,
#tab-orders:checked~.account-content .panel-orders,
#tab-history:checked~.account-content .panel-history,
#tab-favorites:checked~.account-content .panel-favorites,
#tab-settings:checked~.account-content .panel-settings{
    display:block
}
.panel-heading{
    padding-bottom:27px;
    border-bottom:1px solid #e1ddd4
}
.panel-heading-row{
    display:flex;
    align-items:flex-start;
    justify-content:space-between;
    gap:25px
}
.panel-heading h2{
    margin:9px 0 8px;
    color:#34372f;
    font-size:30px;
    line-height:1.1;
    letter-spacing:-1.2px
}
.panel-heading p{
    max-width:620px;
    margin:0;
    color:#85877f;
    font-size:14px;
    line-height:1.65
}
.profile-photo{
    display:flex;
    align-items:center;
    gap:20px;
    padding:30px 0
}
.profile-avatar{
display:grid;
width:78px;
height:78px;
flex-shrink:0;
place-items:center;
border-radius:50%;
background:#d7b39f;
    color:#fff;
    font-size:28px;
    font-weight:800
}
.profile-photo-info strong{
    display:block;
    margin-bottom:5px;
    color:#3a3d35;
    font-size:16px
}
.profile-photo-info p{
    max-width:480px;
    margin:0 0 13px;
    color:#85877f;
    font-size:13px;
    line-height:1.6
}
.form-divider{
    height:1px;
    background:#e1ddd4
}
.form-grid{
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:21px 18px;
    padding-top:27px
}
.form-field{
    display:flex;
    flex-direction:column;
    gap:8px
}
.form-field-full{
    grid-column:1/-1
}
.form-field label{
    color:#42453d;
    font-size:13px;
    font-weight:700
}
.form-field input{
    width:100%;
    height:49px;
    padding:0 14px;
    border:1px solid #d9d5ca;
    border-radius:8px;
    outline:none;
    background:#fffdf8;
    color:#45483f;
    font-size:14px;
    transition:border-color .2s ease,box-shadow .2s ease
}
.form-field input::placeholder{
    color:#a5a69f
}
.form-field input:focus{
    border-color:#89937b;
    box-shadow:0 0 0 3px rgba(101,114,84,.08)
}
.panel-actions{
    display:flex;
    justify-content:flex-end;
    margin-top:28px;
    padding-top:22px;
    border-top:1px solid #e1ddd4
}
.primary-button{
    display:inline-flex;
    align-items:center;
    justify-content:center;
    gap:17px;
    min-height:46px;
    padding:0 21px;
    border:0;
    border-radius:8px;
    background:#657254;
    color:#fff;
    font-size:14px;
    font-weight:700;
    cursor:pointer;
    transition:background .2s ease,transform .2s ease,box-shadow .2s ease
}
.primary-button:hover{
    background:#586448;
    transform:translateY(-2px);
    box-shadow:0 7px 16px rgba(101,114,84,.16)
}
.primary-button span{
    font-size:18px
}
.outline-button{
    display:inline-flex;
    align-items:center;
    justify-content:center;
    min-height:38px;
    padding:0 13px;
    border:1px solid #d5d1c6;
    border-radius:7px;
    background:#fbfaf6;
    color:#657254;
    font-size:13px;
    font-weight:700;
    cursor:pointer;
    transition:border-color .2s ease,background .2s ease,transform .2s ease
}
.outline-button:hover{
    border-color:#9da295;
    background:#f5f3ec;
    transform:translateY(-1px)
}
.orders-list{
    padding-top:25px
}
.order-card{
    padding:21px;
    border:1px solid #ddd9cf;
    border-radius:10px;
    background:#fffdf8;
    transition:transform .2s ease,box-shadow .2s ease
}
.order-card:hover{
    transform:translateY(-2px);
    box-shadow:0 10px 25px rgba(48,51,45,.05)
}
.order-card-main{
    display:flex;
    align-items:center;
    gap:15px
}
.order-icon{
    display:grid;
    width:50px;
    height:50px;
    flex-shrink:0;
    place-items:center;
    border-radius:10px;
    background:#e4e9dc;
    color:#657254;
    font-size:21px
}
.order-label{
    display:block;
    margin-bottom:5px;
    color:#a8684e;
    font-size:10px;
    font-weight:800;
    letter-spacing:.09em
}
.order-card h3{
    margin:0;
    color:#3b3e36;
    font-size:17px
}
.order-card p{
    margin:5px 0 0;
    color:#898b83;
    font-size:13px
}
.order-details{
    display:flex;
    gap:35px;
    margin:22px 0 0 65px;
    padding-top:17px;
    border-top:1px solid #e5e1d8
}
.order-detail{
    display:flex;
    flex-direction:column;
    gap:4px
}
.order-detail span{
    color:#999b93;
    font-size:11px
}
.order-detail strong{
    color:#464940;
    font-size:13px
}
.order-footer{
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-top:18px;
    padding-top:16px;
    border-top:1px solid #e5e1d8
}
.status-badge{
    padding:6px 10px;
    border-radius:20px;
    background:#e4e9dc;
    color:#657254;
    font-size:10px;
    font-weight:800
}
.order-link{
    color:#657254;
    font-size:12px;
    font-weight:800
}
.empty-state{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    min-height:280px;
    padding:40px 20px;
    text-align:center
}
.empty-icon{
    display:grid;
    width:58px;
    height:58px;
    margin-bottom:16px;
    place-items:center;
    border:1px solid #d9d6cd;
    border-radius:50%;
    background:#f1efe7;
    color:#657254;
    font-size:23px
}
.empty-state h3{
    margin:0;
    color:#3d4038;
    font-size:17px
}
.empty-state p{
    max-width:340px;
    margin:7px 0 20px;
    color:#898b83;
    font-size:13px;
    line-height:1.6
}
.history-list{
    padding-top:25px
}
.history-card{
    display:grid;
    grid-template-columns:90px 46px minmax(0,1fr) auto;
    align-items:center;
    gap:18px;
    padding:21px 0;
    border-bottom:1px solid #e1ddd4;
    transition:transform .2s ease
}
.history-card:hover{
    transform:translateX(3px)
}
.history-date{
    display:flex;
    flex-direction:column;
    gap:4px
}
.history-date strong{
    color:#4a4d45;
    font-size:13px
}
.history-date span{
    color:#999b93;
    font-size:11px
}
.history-icon{
    display:grid;
    width:42px;
    height:42px;
    place-items:center;
    border-radius:50%;
    background:#e4e9dc;
    color:#657254;
    font-size:16px;
    font-weight:800
}
.history-main>span{
    display:block;
    margin-bottom:5px;
    color:#a8684e;
    font-size:10px;
    font-weight:800;
    letter-spacing:.09em
}
.history-main h3{
    margin:0;
    color:#3d4038;
    font-size:15px
}
.history-main p{
    margin:5px 0 0;
    color:#898b83;
    font-size:13px
}
.history-price{
    display:flex;
    flex-direction:column;
    gap:4px
}
.history-price span{
    color:#999b93;
    font-size:11px
}
.history-price strong{
    color:#464940;
    font-size:13px
}
.favorites-grid{
    display:grid;
    grid-template-columns:repeat(2,minmax(0,1fr));
    gap:14px;
    padding-top:25px
}
.favorite-card{
    display:flex;
    flex-direction:column;
    min-height:220px;
    padding:21px;
    border:1px solid #ddd9cf;
    border-radius:10px;
    background:#fffdf8;
    transition:transform .2s ease,box-shadow .2s ease,border-color .2s ease
}
.favorite-card:hover{
    transform:translateY(-3px);
    border-color:#cbc7bc;
    box-shadow:0 12px 25px rgba(48,51,45,.06)
}
.favorite-icon{
    display:grid;
    width:48px;
    height:48px;
    place-items:center;
    border-radius:10px;
    background:#e4e9dc;
    color:#657254;
    font-size:21px
}
.favorite-content{
    margin-top:auto
}
.favorite-content>span{
    display:block;
    margin-bottom:5px;
    color:#a8684e;
    font-size:10px;
    font-weight:800;
    letter-spacing:.08em;
    text-transform:uppercase
}
.favorite-content h3{
    margin:0;
    color:#3b3e36;
    font-size:17px
}
.favorite-content p{
    margin:6px 0 0;
    color:#898b83;
    font-size:13px;
    line-height:1.55
}
.favorite-footer{
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-top:20px;
    padding-top:14px;
    border-top:1px solid #e5e1d8
}
.favorite-footer strong{
    color:#b86e50;
    font-size:14px
}
.favorite-footer a{
    color:#657254;
    font-size:12px;
    font-weight:800
}
.settings-list{
    padding-top:10px
}
.setting-item{
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap:25px;
    padding:23px 0;
    border-bottom:1px solid #e1ddd4
}
.setting-item strong{
    display:block;
    color:#3c3f37;
    font-size:15px
}
.setting-item p{
    margin:5px 0 0;
    color:#898b83;
    font-size:13px;
    line-height:1.55
}
.switch{
    position:relative;
    display:block;
    width:43px;
    height:24px;
    flex-shrink:0;
    cursor:pointer
}
.switch input{
    display:none
}
.switch span{
    position:absolute;
    inset:0;
    border-radius:20px;
    background:#d8d5cb;
    transition:background .2s ease
}
.switch span::after{
    position:absolute;
    top:3px;
    left:3px;
    width:18px;
    height:18px;
    border-radius:50%;
    background:#fff;
    box-shadow:0 2px 5px rgba(0,0,0,.12);
    content:"";
    transition:transform .2s ease
}
.switch input:checked+span{
    background:#657254
}
.switch input:checked+span::after{
    transform:translateX(19px)
}
.danger-zone{
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap:25px;
    margin-top:30px;
    padding:20px;
    border:1px solid #e1d3cc;
    border-radius:10px;
    background:#f7f0ec
}
.danger-zone strong{
    display:block;
    color:#9d503b;
    font-size:14px
}
.danger-zone p{
    margin:5px 0 0;
    color:#91857f;
    font-size:12px
}
.danger-button{
    min-height:38px;
    padding:0 13px;
    border:1px solid #d7b9ad;
    border-radius:7px;
    background:transparent;
    color:#a4543e;
    font-family:inherit;
    font-size:12px;
    font-weight:700;
    cursor:pointer;
    transition:background .2s ease,transform .2s ease
}
.danger-button:hover{
    background:#eadbd4;
    transform:translateY(-1px)
}
@media(max-width:900px){
    .account-tabs{
        grid-template-columns:220px minmax(0,1fr);
        gap:20px
    }
    .account-panel{
        padding:28px
    }
    .favorites-grid{
        grid-template-columns:1fr
    }
    .order-details{
        margin-left:0
    }
}
@media(max-width:700px){
    .container{
        width:calc(100% - 32px)
    }
    .account{
        padding:35px 0 70px
    }
    .account-heading{
        margin-bottom:25px
    }
    .account-heading h1{
    font-size:34px
    }
    .account-tabs{
        display:block
    }
    .sidebar{
        position:relative;
        top:auto;
        margin-bottom:15px;
        padding:14px
    }
    .sidebar-user{
        padding:5px 4px 13px
    }
    .sidebar-menu{
        display:grid;
        grid-template-columns:1fr 1fr;
        gap:4px;
        padding:13px 0
    }
    .sidebar-link{
        min-height:42px;
        font-size:13px
    }
    .sidebar-divider{
        display:block
    }
    .logout-button{
        margin-top:13px
    }
    .account-panel{
        padding:21px 18px;
        border-radius:11px
    }
    .panel-heading-row{
        display:block
    }
    .panel-heading-row .outline-button{
        margin-top:17px
    }
    .panel-heading h2{
        font-size:26px
    }
    .profile-photo{
        align-items:flex-start
    }
    .profile-avatar{
        width:62px;
        height:62px;
        font-size:23px
    }
    .form-grid{
        grid-template-columns:1fr;
        gap:17px
    }
    .form-field-full{
        grid-column:auto
    }
    .panel-actions{
        justify-content:stretch
    }
    .panel-actions .primary-button{
        width:100%
    }
    .order-card{
        padding:17px
    }
    .order-details{
        display:grid;
        grid-template-columns:1fr 1fr;
        gap:15px
    }
    .history-card{
        grid-template-columns:42px 1fr;
        gap:12px
    }
    .history-date{
        grid-column:1/-1;
        flex-direction:row;
        gap:8px
    }
    .history-price{
        grid-column:2;
        margin-top:2px
    }
    .setting-item{
        align-items:flex-start
    }
    .danger-zone{
        align-items:flex-start;
        flex-direction:column
    }
    .danger-button{
        width:100%
    }
}
</style>