<template>
    <div class="page">
        <header class="header">
            <div class="container header-inner">
                <router-link class="logo" to="/">homio<span>.</span></router-link>
                <nav class="nav">
                <button type="button" @click="router.push('/services')" class="header_button">Услуги</button>
                <a href="/#how" class="header_button">Как это работает</a>
                <a href="/#faq" class="header_button">Помощь</a>
                <button v-if="auth" type="button" @click="router.push('/profile')" class="header_button">Профиль</button>
                </nav>
                <button v-if="!auth" type="button" @click="router.push('/login')" class="header_button">Войти</button>
                <button v-else-if="auth" type="button" @click="logout()" class="header_button-exit">Выйти</button>
            </div>
        </header>
        <main>
            <section class="services-hero">
                <div class="container">
                    <span class="eyebrow">УСЛУГИ HOMIO</span>
                    <div class="services-hero-content">
                        <div>
                            <h1>Помощь по дому<em>без лишних поисков.</em></h1>
                        </div>
                        <p>Выберите нужную услугу или просто опишите задачу. Мы поможем подобрать специалиста и удобное время.</p>
                    </div>
                </div>
            </section>
            <section id="services" class="services-section">
                <div class="container services-layout">
                    <aside class="categories">
                        <div class="categories-heading">
                            <span class="eyebrow">КАТЕГОРИИ</span>
                            <h2>Что нужно сделать?</h2>
                        </div>
                        <div class="category-list">
                            <button v-for="category in categories" :key="category.title" type="button" class="category" :class="{ active:selectedCategory===category.title }" @click="selectedCategory = category.title">
                                <span class="category-icon">{{ category.icon }}</span>
                                <span class="category-info"><strong>{{ category.title }}</strong><small>{{ category.count }} услуги</small></span>
                                <span class="category-arrow">→</span>
                            </button>
                        </div>
                    </aside>
                    <div class="services-content">
                        <div class="services-content-heading">
                            <div>
                                <span class="eyebrow">{{ selectedCategory.toUpperCase() }}</span>
                                <h2>Выберите услугу</h2>
                            </div>
                            <span class="service-count">{{ currentServices.length }} варианта</span>
                        </div>
                        <div class="service-list">
                            <button v-for="service in currentServices":key="service.title" type="button" class="service-item" :class="{ selected:selectedService===service.title }" @click="selectedService=service.title">
                                <div class="service-item-icon">{{ service.icon }}</div>
                                <div class="service-item-content"><h3>{{ service.title }}</h3><p>{{ service.description }}</p></div>
                                <span class="service-item-arrow">{{ selectedService===service.title ? '✓' : '→' }}</span>
                            </button>
                        </div>
                        <div class="custom-service">
                            <div class="custom-service-icon">+</div>
                            <div><strong>Не нашли нужную услугу?</strong><p>Просто опишите задачу — разберёмся индивидуально.</p></div>
                            <button type="button" @click="selectedCategory='Другое'">Опишите задачу →</button>
                        </div>
                    </div>
                </div>
            </section>
            <section class="order-section">
                <div class="container">
                    <div class="order-heading">
                        <div>
                            <span class="eyebrow">ЗАКАЗ УСЛУГИ</span>
                            <h2>Расскажите,<em>что нужно сделать.</em></h2>
                        </div>
                        <p>Заполните форму, и мы свяжемся с вами, чтобы уточнить детали и подтвердить заказ.</p>
                    </div>
                    <form class="order-form" @submit.prevent>
                        <div class="form-main">
                            <div class="form-section">
                                <div class="form-section-number">01</div>
                                <div class="form-section-content">
                                    <h3>Услуга</h3>
                                    <p>Что нужно сделать?</p>
                                    <div class="form-grid">
                                        <label class="field">
                                            <span>Категория</span>
                                            <select v-model="selectedCategory">
                                                <option v-for="category in categories":key="category.title" :value="category.title">{{ category.title }}</option>
                                            </select>
                                        </label>
                                        <label class="field">
                                            <span>Услуга</span>
                                            <select v-model="selectedService">
                                                <option v-for="service in currentServices":key="service.title" :value="service.title">{{ service.title }}</option>
                                            </select>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="form-section">
                                <div class="form-section-number">02</div>
                                <div class="form-section-content">
                                    <h3>Когда и где?</h3>
                                    <p>Укажите адрес и удобное время.</p>
                                    <div class="form-grid">
                                        <label class="field field-full">
                                            <span>Адрес</span>
                                            <input type="text" v-model="address" placeholder="Улица, дом, квартира">
                                        </label>
                                        <label class="field">
                                            <span>Дата</span>
                                            <input type="date" v-model="date">
                                        </label>
                                        <label class="field">
                                            <span>Время</span>
                                            <select v-model="time">
                                                <option>Выберите время</option>
                                                <option>09:00</option>
                                                <option>10:00</option>
                                                <option>11:00</option>
                                                <option>12:00</option>
                                                <option>13:00</option>
                                                <option>14:00</option>
                                                <option>15:00</option>
                                                <option>16:00</option>
                                                <option>17:00</option>
                                                <option>18:00</option>
                                                <option>19:00</option>
                                                <option>20:00</option>
                                            </select>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="form-section">
                                <div class="form-section-number">03</div>
                                <div class="form-section-content">
                                    <h3>Подробнее</h3>
                                    <p>Чем подробнее опишете задачу, тем лучше мы сможем подготовиться.</p>
                                    <label class="field">
                                        <span>Описание проблемы</span>
                                        <textarea rows="5" placeholder="Например: нужно повесить полку на бетонную стену..." v-model="comment"></textarea>
                                    </label>
                                </div>
                            </div>
                            <div class="form-section">
                                <div class="form-section-number">04</div>
                                <div class="form-section-content">
                                    <h3>Контакты</h3>
                                    <p>Оставьте номер телефона для связи.</p>
                                    <label class="field">
                                        <span>Телефон</span>
                                        <input type="tel" v-model="phone" placeholder="+79 000 000 000">
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="form-submit">
                            <div><strong>{{ selectedService||'Выберите услугу' }}</strong><span>После отправки уточним детали заказа</span></div>
                            <button type="submit" class="primary-button" @click="createOrder()">Оставить заявку<span>→</span></button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
        <footer>
            <div class="container footer-inner">
                <div class="footer-brand">
                    <p class="logo" @click="router.push('/')">homio<span>.</span></p>
                    <p>Помогаем решать бытовые задачи проще.</p>
                </div>
                <div class="footer-links">
                    <div>
                        <strong>Услуги</strong>
                        <a>Уборка</a>
                        <a>Ремонт</a>
                        <a>Сантехника</a>
                        <a>Электрика</a>
                    </div>
                    <div>
                        <strong>Информация</strong>
                        <a>Как это работает</a>
                        <a>Помощь</a>
                        <a>Контакты</a>
                    </div>
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
import { computed, ref,onMounted } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const auth=ref(false)
const router=useRouter()
const selectedCategory=ref('Уборка')
const selectedService=ref('Регулярная уборка')
const phone=ref('')
const address=ref('')
const comment=ref('')
const estimatedPrice=ref(0)
const date=ref('')
const time=ref('')

const priceMap:Record<string,number>={
    'Уборка':1000,
    'Починить':1200,
    'Электрика':1300,
    'Сантехника':1100,
    'Сборка':900,
    'Другое':800
}

const categories=[
    {
        title:'Уборка',
        icon:'✦',
        count:4,
        services:[
            {
                title:'Регулярная уборка',
                description:'Поддерживающая уборка квартиры или дома',
                icon:'✦',
            },
            {
                title:'Генеральная уборка',
                description:'Тщательная уборка всего помещения',
                icon:'✧',
            },
            {
                title:'Уборка после переезда',
                description:'Приведём помещение в порядок после переезда',
                icon:'□',
            },
            {
                title:'Мытьё окон',
                description:'Мытьё окон и стеклянных поверхностей',
                icon:'◌',
            },
        ],
    },
    {
        title:'Починить',
        icon:'⌁',
        count:4,
        services:[
            {
                title:'Мелкий ремонт',
                description:'Разные бытовые работы по дому',
                icon:'⌁',
            },
            {
                title:'Повесить полку/картину',
                description:'Монтаж полок, картин и других предметов',
                icon:'＋',
            },
            {
                title:'Собрать мебель',
                description:'Сборка шкафов, столов и другой мебели',
                icon:'□',
            },
            {
                title:'Заменить фурнитуру',
                description:'Ручки, петли, замки и другая фурнитура',
                icon:'◈',
            },
        ],
    },
    {
        title:'Электрика',
        icon:'⚡',
        count:4,
        services:[
            {
                title:'Заменить розетку/выключатель',
                description:'Замена и установка электрической фурнитуры',
                icon:'⚡',
            },
            {
                title:'Установить светильник/люстру',
                description:'Монтаж люстр, светильников и бра',
                icon:'○',
            },
            {
                title:'Проложить проводку',
                description:'Прокладка и организация проводки',
                icon:'⌁',
            },
            {
                title:'Починить электрику',
                description:'Диагностика и устранение неисправностей',
                icon:'✦',
            },
        ],
    },
    {
        title:'Сантехника',
        icon:'◌',
        count:4,
        services:[
            {
                title:'Починить кран',
                description:'Устранение протечек и неисправностей крана',
                icon:'◌',
            },
            {
                title:'Устранить засор',
                description:'Прочистка раковины, ванны или труб',
                icon:'⌁',
            },
            {
                title:'Заменить смеситель',
                description:'Демонтаж старого и установка нового',
                icon:'＋',
            },
            {
                title:'Ремонт/замена унитаза',
                description:'Ремонт или установка нового унитаза',
                icon:'⌂',
            },
        ],
    },
    {
        title:'Сборка',
        icon:'□',
        count:3,
        services:[
            {
                title:'Сборка мебели',
                description:'Шкафы, столы, стулья и другая мебель',
                icon:'□',
            },
            {
                title:'Установка техники',
                description:'Установка бытовой техники',
                icon:'＋',
            },
            {
                title:'Монтаж и установка',
                description:'Различные монтажные работы',
                icon:'⌁',
            },
        ],
    },
    {
        title:'Другое',
        icon:'+',
        count:1,
        services:[
            {
                title:'Опишите задачу',
                description:'Индивидуальный заказ под вашу ситуацию',
                icon:'+',
            },
        ],
    },
]

const logout=async()=>{
    try{
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        await checkAuth()
    }catch(error){
        console.error(error)
        alert('ошибка выхода из аккаунта')
    }
}

const checkAuth=async()=>{
    try{
        const token=localStorage.getItem('token')
        if(!token)auth.value=false
        if(token)auth.value=true
    }catch(error){
        console.error(error)
        alert('ошибка выхода из аккаунта')
    }
}

const currentServices=computed(()=>{
    const category=categories.find(
        item=>item.title===selectedCategory.value
    )

    return category?.services??[]
})

const getData=async()=>{
    try{
        const token=localStorage.getItem('token')
        const response=await axios.get('http://localhost:5178/auth/profile',{headers:{Authorization:`Bearer ${token}`}})

        phone.value=response.data.phone
        address.value=response.data.address
    }catch(error){
        console.log(error)
    }
}

const createOrder=async()=>{
    try{
        const token=localStorage.getItem('token')

        estimatedPrice.value=priceMap[selectedCategory.value]||800


        if(!selectedCategory.value){
            alert('Выберите услугу')
            return
        }

        if(!selectedService.value){
            alert('Выберите услугу')
            return
        }

        const response=await axios.post('http://localhost:5178/order/',
        {
            service:selectedService.value,
            address:address.value,
            scheduledDate:date.value,
            scheduledTime:time.value,
            comment:comment.value,
            estimatedPrice:estimatedPrice.value
        },
        {headers:{Authorization:`Bearer ${token}`}})

        alert('success')
    }catch(error){
        console.error(error)
        alert('ошибка создания заказа')
    }
}

onMounted(()=>{
    const now=new Date()
    date.value=now.toISOString().split('T')[0]||''
    time.value=now.toTimeString().slice(0,5)
    checkAuth()
    getData()
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
:global(button),:global(input),:global(select),:global(textarea){
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
.header_button{
    cursor:pointer;
    border:0;
    margin:0;
    padding:0;
    background:none;
    color:#73766e;
    font-size:16px;
    font-weight:700;
    transition:background .2s ease,transform .2s ease;
}
.header_button-exit{
    cursor:pointer;
    border:0;
    margin:0;
    padding:0;
    background:none;
    color:rgb(165, 43, 43);
    font-size:16px;
    font-weight:700;
    transition:background .2s ease,transform .2s ease;
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
.header-button{
    padding:14px 26px;
    margin:0;
    border-radius:8px;
    background:#657254;
    color:#fff;
    font-size:16px;
    font-weight:700;
    transition:background .2s ease,transform .2s ease
}
.header-button:hover{
    background:#586448;
    transform:translateY(-1px)
}
.eyebrow{
    display:inline-block;
    color:#a8684e;
    font-size:14px;
    font-weight:800;
    letter-spacing:.12em
}
.services-hero{
    padding:90px 0 80px;
    background:#f7f5ef
}
.services-hero-content{
    display:grid;
    grid-template-columns:1.2fr .8fr;
    align-items:end;
    gap:100px;
    margin-top:18px
}
.services-hero h1{
    max-width:760px;
    margin:0;
    color:#30332d;
    font-size:68px;
    line-height:1.02;
    letter-spacing:-3.5px;
    font-weight:800
}
.services-hero h1 em{
    display:block;
    color:#657254;
    font-style:normal
}
.services-hero-content>p{
    max-width:390px;
    margin:0 0 5px;
    color:#7b7e75;
    font-size:17px;
    line-height:1.75
}
.services-section{
    padding:80px 0 100px;
    background:#eeece4
}
.services-layout{
    display:grid;
    grid-template-columns:300px minmax(0,1fr);
    gap:85px
}
.categories-heading h2{
    max-width:250px;
    margin:13px 0 30px;
    color:#34372f;
    font-size:32px;
    line-height:1.1;
    letter-spacing:-1.5px
}
.category-list{
    border-top:1px solid #d8d5cb
}
.category{
    display:flex;
    align-items:center;
    width:100%;
    min-height:76px;
    padding:13px 0;
    border:0;
    border-bottom:1px solid #d8d5cb;
    background:transparent;
    color:#4c5048;
    text-align:left;
    cursor:pointer;
    transition:padding .2s ease,color .2s ease
}
.category:hover{
    padding-left:7px
}
.category.active{
    color:#657254;
    padding-left:7px
}
.category-icon{
    display:grid;
    width:43px;
    height:43px;
    flex-shrink:0;
    place-items:center;
    margin-right:15px;
    border-radius:9px;
    background:#e2e7d9;
    color:#68765c;
    font-size:19px
}
.category-info{
    display:flex;
    flex-direction:column;
    gap:3px
}
.category-info strong{
    font-size:15px
}
.category-info small{
    color:#989a92;
    font-size:12px
}
.category-arrow{
    margin-left:auto;
    color:#a2a49c;
    font-size:18px
}
.category.active .category-arrow{
    color:#bd7153
}
.services-content{
    min-width:0
}
.services-content-heading{
    display:flex;
    align-items:flex-end;
    justify-content:space-between;
    gap:30px;
    margin-bottom:30px
}
.services-content-heading h2{
    margin:11px 0 0;
    color:#34372f;
    font-size:42px;
    line-height:1;
    letter-spacing:-2px
}
.service-count{
    padding-bottom:4px;
    color:#92948c;
    font-size:13px
}
.service-list{
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:12px
}
.service-item{
    display:grid;
    grid-template-columns:54px 1fr 25px;
    align-items:center;
    gap:17px;
    min-height:145px;
    padding:21px;
    border:1px solid #dcd8ce;
    border-radius:10px;
    background:#f9f7f1;
    color:#30332d;
    text-align:left;
    cursor:pointer;
    transition:transform .2s ease,border-color .2s ease,box-shadow .2s ease
}
.service-item:hover{
    transform:translateY(-3px);
    border-color:#c9c5ba;
    box-shadow:0 12px 28px rgba(48,51,45,.05)
}
.service-item.selected{
    border-color:#657254;
    box-shadow:0 10px 25px rgba(48,51,45,.06)
}
.service-item-icon{
    display:grid;
    width:54px;
    height:54px;
    place-items:center;
    border-radius:10px;
    background:#e4e9dc;
    color:#68765c;
    font-size:21px
}
.service-item-content h3{
    margin:0 0 7px;
    color:#383b33;
    font-size:17px;
    line-height:1.25
}
.service-item-content p{
    margin:0;
    color:#85877f;
    font-size:13px;
    line-height:1.55
}
.service-item-arrow{
    color:#a5a79f;
    font-size:18px;
    text-align:right
}
.service-item.selected .service-item-arrow{
    color:#657254;
    font-weight:700
}
.custom-service{
    display:flex;
    align-items:center;
    gap:17px;
    margin-top:18px;
    padding:20px 21px;
    border:1px dashed #c9c6bc;
    border-radius:10px
}
.custom-service-icon{
    display:grid;
    width:44px;
    height:44px;
    flex-shrink:0;
    place-items:center;
    border-radius:50%;
    background:#e4e9dc;
    color:#657254;
    font-size:21px
}
.custom-service strong{
    display:block;
    color:#44473f;
    font-size:15px
}
.custom-service p{
    margin:4px 0 0;
    color:#888a82;
    font-size:13px
}
.custom-service button{
    margin-left:auto;
    padding:0;
    border:0;
    background:transparent;
    color:#657254;
    font-size:13px;
    font-weight:800;
    white-space:nowrap;
    cursor:pointer
}
.order-section{
    padding:100px 0;
    background:#f7f5ef
}
.order-heading{
    display:grid;
    grid-template-columns:1fr 1fr;
    align-items:end;
    gap:80px;
    margin-bottom:50px
}
.order-heading h2{
    max-width:600px;
    margin:14px 0 0;
    color:#34372f;
    font-size:50px;
    line-height:1.02;
    letter-spacing:-2.5px
}
.order-heading h2 em{
    color:#657254;
    font-style:normal
}
.order-heading>p{
    max-width:390px;
    margin:0 0 4px;
    color:#7e8178;
    font-size:16px;
    line-height:1.75
}
.order-form{
    border-top:1px solid #d8d5cb
}
.form-section{
    display:grid;
    grid-template-columns:70px minmax(0,1fr);
    gap:25px;
    padding:38px 0;
    border-bottom:1px solid #d8d5cb
}
.form-section-number{
    color:#b96e50;
    font-size:14px;
    font-weight:800
}
.form-section-content{
    min-width:0
}
.form-section-content h3{
    margin:0 0 6px;
    color:#383b33;
    font-size:21px
}
.form-section-content>p{
    margin:0 0 25px;
    color:#888a82;
    font-size:14px
}
.form-grid{
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:18px
}
.field{
    display:flex;
    flex-direction:column;
    gap:8px
}
.field-full{
    grid-column:1 / -1
}
.field>span{
    color:#5f6259;
    font-size:13px;
    font-weight:700
}
.field input,.field select,.field textarea{
    width:100%;
    border:1px solid #d7d3c9;
    border-radius:8px;
    outline:none;
    background:#fbfaf6;
    color:#383b33;
    font-size:15px;
    transition:border-color .2s ease,box-shadow .2s ease
}
.field input,.field select{
    height:52px;
    padding:0 15px
}
.field textarea{
    min-height:130px;
    padding:14px 15px;
    resize:vertical;
    line-height:1.6
}
.field input::placeholder,.field textarea::placeholder{
    color:#aaa9a1
}
.field input:focus,.field select:focus,.field textarea:focus{
    border-color:#657254;
    box-shadow:0 0 0 3px rgba(101,114,84,.08)
}
.form-submit{
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap:30px;
    padding:35px 0 0
}
.form-submit>div{
    display:flex;
    flex-direction:column;
    gap:5px
}
.form-submit strong{
    color:#383b33;
    font-size:16px
}
.form-submit span{
    color:#92948c;
    font-size:13px
}
.primary-button{
    display:inline-flex;
    align-items:center;
    justify-content:center;
    gap:18px;
    padding:18px 28px;
    border:0;
    border-radius:8px;
    background:#657254;
    color:white;
    font-size:16px;
    font-weight:700;
    cursor:pointer;
    transition:background .2s ease,transform .2s ease
}
.primary-button:hover{
    background:#586448;
    transform:translateY(-2px)
}
.primary-button span{
    color:white;
    font-size:20px
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
@media(max-width:1000px){
    .services-hero-content{
        gap:50px
    }
    .services-hero h1{
        font-size:58px
    }
    .services-layout{
        grid-template-columns:240px minmax(0,1fr);
        gap:45px
    }
    .service-list{
        grid-template-columns:1fr
    }
    .order-heading{
        gap:50px
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
    .header-button{
        padding:10px 16px;
        font-size:14px
    }
    .services-hero{
        padding:65px 0 60px
    }
    .services-hero-content{
        grid-template-columns:1fr;
        gap:22px
    }
    .services-hero h1{
        font-size:48px;
        letter-spacing:-2.5px
    }
    .services-hero-content>p{
        font-size:15px
    }
    .services-section{
        padding:65px 0 70px
    }
    .services-layout{
        grid-template-columns:1fr;
        gap:45px
    }
    .categories-heading h2{
        font-size:30px
    }
    .category-list{
        display:grid;
        grid-template-columns:1fr 1fr;
        gap:8px;
        border-top:0
    }
    .category{
        min-height:68px;
        padding:10px;
        border:1px solid #d8d5cb;
        border-radius:8px;
        background:#f4f2eb
    }
    .category:hover,.category.active{
        padding-left:10px
    }
    .category-icon{
        width:37px;
        height:37px;
        margin-right:10px;
        font-size:16px
    }
    .category-arrow{
        display:none
    }
    .category-info strong{
        font-size:13px
    }
    .category-info small{
        font-size:11px
    }
    .services-content-heading{
        align-items:flex-start
    }
    .services-content-heading h2{
        font-size:36px
    }
    .service-count{
        padding-top:25px
    }
    .service-item{
        min-height:125px;
        padding:17px;
        grid-template-columns:48px 1fr 20px;
        gap:13px
    }
    .service-item-icon{
        width:48px;
        height:48px
    }
    .service-item-content h3{
        font-size:16px
    }
    .service-item-content p{
        font-size:12px
    }
    .custom-service{
        align-items:flex-start;
        flex-wrap:wrap
    }
    .custom-service button{
        margin-left:61px
    }
    .order-section{
        padding:70px 0
    }
    .order-heading{
        grid-template-columns:1fr;
        gap:25px;
        margin-bottom:35px
    }
    .order-heading h2{
        font-size:42px
    }
    .order-heading>p{
        font-size:15px
    }
    .form-section{
        grid-template-columns:35px minmax(0,1fr);
        gap:12px;
        padding:30px 0
    }
    .form-grid{
        grid-template-columns:1fr
    }
    .field-full{
        grid-column:auto
    }
    .form-submit{
        align-items:stretch;
        flex-direction:column;
        padding-top:28px
    }
    .primary-button{
        width:100%
    }
    .footer-inner{
        display:block
    }
    .footer-links{
        margin-top:40px;
        gap:70px
    }
    .footer-bottom{
        flex-direction:column;
        gap:8px
    }
}
</style>