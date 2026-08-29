<template>
<div class="page">
    <header class="header">
        <div class="container header-inner">
            <a href="" class="logo">homio<span>.</span></a>
            <nav class="nav">
                <a class="services" @click="router.push('/services')">Услуги</a>
                <a href="#how">Как это работает</a>
                <a href="#faq">Помощь</a>
                <a class="profile" @click="router.push('/profile')">Профиль</a>
            </nav>
            <p @click="router.push('login')" class="header-button">Войти</p>
        </div>
    </header>
    <main>
        <section class="hero">
            <div class="container hero-inner">
                <div class="hero-content">
                    <span class="eyebrow">ПОМОЩЬ ПО ДОМУ</span>
                    <h1>Домашние дела <em>решаются проще.</em></h1>
                    <p class="hero-description">Уборка, ремонт, сантехника и другие бытовые задачи. Расскажите, что нужно сделать — мы поможем решить проблему.</p>
                    <div class="hero-actions">
                        <a href="" class="primary-button">Заказать услугу <span>→</span></a>
                        <a @click="router.push('/services')" class="secondary-button">Посмотреть услуги</a>
                    </div>
                    <div class="hero-info">
                        <div class="stat">
                            <div class="stat-value"><strong>4.9</strong><span>★</span></div>
                            <small>средняя оценка</small>
                        </div>
                        <div class="divider"></div>
                        <div class="stat">
                            <div class="stat-value"><strong>1000+</strong></div>
                            <small>выполненных заказов</small>
                        </div>
                    </div>
                </div>
                <div class="hero-visual">
                    <div class="hero-circle"></div>
                    <div class="request-card">
                        <div class="request-top">
                            <span>Новая заявка</span>
                            <span class="request-status">● Новая</span>
                        </div>
                        <div class="request-main">
                            <div class="request-icon">⌂</div>
                            <div>
                                <h3>Нужна помощь с ремонтом</h3>
                                <p>Повесить полку в гостиной</p>
                            </div>
                        </div>
                        <div class="request-bottom">
                            <span>Сегодня, 18:00</span>
                            <strong>от 30 €</strong>
                        </div>
                    </div>
                    <div class="rating-card">
                        <div class="rating-avatar">А</div>
                        <div>
                            <strong>Анна</strong>
                            <div class="stars">★★★★★</div>
                        </div>
                    </div>
                    <div class="done-card">
                        <div class="done-mark">✓</div>
                        <div>
                            <strong>Заказ выполнен</strong>
                            <small>5 минут назад</small>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="services" class="section services">
            <div class="container">
                <div class="section-heading">
                    <div>
                        <span class="eyebrow">УСЛУГИ</span>
                        <h2>Помощь для вашего дома</h2>
                    </div>
                    <p>Не нашли нужную услугу? Просто опишите задачу при оформлении заявки.</p>
                </div>
                <div class="services-grid">
                    <article v-for="service in services":key="service.title" class="service-card">
                        <div class="service-icon">{{ service.icon }}</div>
                        <div class="service-content">
                            <h3>{{ service.title }}</h3>
                            <p>{{ service.description }}</p>
                        </div>
                        <div class="service-footer">
                            <span>{{ service.price }}</span>
                            <a href="">Заказать</a>
                        </div>
                    </article>
                </div>
                <div class="services-note">
                    <span>Нужна другая помощь?</span>
                    <a href="">Опишите задачу</a>
                </div>
            </div>
        </section>
        <section id="how" class="section how">
            <div class="container">
                <div class="section-heading how-heading">
                    <div>
                        <span class="eyebrow">КАК ЭТО РАБОТАЕТ</span>
                        <h2>Всё просто</h2>
                    </div>
                    <p>От заявки до выполненной работы без лишних звонков и сложностей.</p>
                </div>
                <div class="steps">
                    <article v-for="step in steps":key="step.number" class="step">
                        <span class="step-number">{{ step.number }}</span>
                        <div class="step-content">
                            <h3>{{ step.title }}</h3>
                            <p>{{ step.text }}</p>
                        </div>
                    </article>
                </div>
            </div>
        </section>
        <section class="section why">
            <div class="container why-layout">
                <div class="why-intro">
                    <span class="eyebrow">ПОЧЕМУ HOMIO</span>
                    <h2>Не нужно искать, кому позвонить.</h2>
                    <p>Одна заявка вместо десятка поисков. Расскажите о задаче, укажите адрес и удобное время — остальное мы организуем.</p>
                    <a href="" class="text-link">Оставить заявку →</a>
                </div>
                <div class="why-list">
                    <div class="why-item">
                        <span>01</span>
                        <div>
                            <h3>Одна заявка</h3>
                            <p>Неважно, что именно сломалось. Просто опишите проблему.</p>
                        </div>
                    </div>
                    <div class="why-item">
                        <span>02</span>
                        <div>
                            <h3>Понятная цена</h3>
                            <p>Перед выполнением работы вы знаете её ориентировочную стоимость.</p>
                        </div>
                    </div>
                    <div class="why-item">
                        <span>03</span>
                        <div>
                            <h3>Удобное время</h3>
                            <p>Вы сами выбираете подходящую дату и время визита.</p>
                        </div>
                    </div>
                    <div class="why-item">
                        <span>04</span>
                        <div>
                            <h3>История заказов</h3>
                            <p>Все ваши заявки и их статусы находятся в одном месте.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="order" class="section cta-section">
            <div class="container">
                <div class="cta">
                    <div class="cta-left">
                        <span class="eyebrow">НУЖНА ПОМОЩЬ?</span>
                        <h2>Есть проблема по дому?</h2>
                    </div>
                    <div class="cta-right">
                        <p>Расскажите, что нужно сделать. Мы поможем подобрать услугу и согласовать удобное время.</p>
                        <button type="button" class="primary-button">Оставить заявку <span>→</span></button>
                    </div>
                </div>
            </div>
        </section>
        <section id="faq" class="section faq">
            <div class="container faq-layout">
                <div class="faq-title">
                    <span class="eyebrow">ПОМОЩЬ</span>
                    <h2>Частые вопросы</h2>
                    <p>Если не нашли ответ — просто оставьте заявку, и мы всё объясним.</p>
                </div>
                <div class="faq-list">
                    <article v-for="(question,index) in faqs":key="question" class="faq-item">
                        <button type="button" @click="toggleFaq(index)">
                            <span>{{ question }}</span>
                            <b>{{ faqOpen===index?'−':'+' }}</b>
                        </button>
                        <div v-if="faqOpen===index" class="faq-answer">
                            Стоимость и время зависят от конкретной задачи. После оформления заявки мы уточним детали и сообщим всю необходимую информацию.
                        </div>
                    </article>
                </div>
            </div>
        </section>
    </main>
    <footer>
        <div class="container footer-inner">
            <div class="footer-brand">
                <a href="" class="logo">homio<span>.</span></a>
                <p>Помогаем решать бытовые задачи проще.</p>
            </div>
            <div class="footer-links">
                <div>
                    <strong>Услуги</strong>
                    <a href="">Уборка</a>
                    <a href="">Ремонт</a>
                    <a href="">Сантехника</a>
                    <a href="">Электрика</a>
                </div>
                <div>
                    <strong>Информация</strong>
                    <a href="">Как это работает</a>
                    <a href="">Помощь</a>
                    <a href="">Контакты</a>
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
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router=useRouter()
const faqOpen=ref<number|null>(null)
const services=[
    {
        icon:'✦',
        title:'Уборка',
        description:'Квартиры, дома и генеральная уборка',
        price:'от 3 500 ₽',
    },
    {
        icon:'⌁',
        title:'Мелкий ремонт',
        description:'Собрать мебель, повесить полку, что-то починить',
        price:'от 2 500 ₽',
    },
    {
        icon:'◌',
        title:'Сантехника',
        description:'Краны, трубы, раковины и протечки',
        price:'от 3 500 ₽',
    },
    {
        icon:'⌂',
        title:'Электрика',
        description:'Розетки, светильники и бытовая электрика',
        price:'от 4 000 ₽',
    },
]

const steps=[
    {
        number:'01',
        title:'Расскажите о проблеме',
        text:'Опишите своими словами, что нужно сделать.',
    },
    {
        number:'02',
        title:'Выберите удобное время',
        text:'Укажите адрес и время, когда вам удобно принять специалиста.',
    },
    {
        number:'03',
        title:'Получите помощь',
        text:'Специалист приедет и выполнит необходимую работу.',
    },
]

const faqs=[
    'Сколько стоит услуга?',
    'Как быстро можно вызвать специалиста?',
    'Можно ли выбрать определённое время?',
    'Что делать, если нужной услуги нет в списке?',
]

function toggleFaq(index: number){
    faqOpen.value=faqOpen.value===index?null:index
}
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
    font-family:Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
}
:global(a){
    color:inherit;
    text-decoration:none;
}
:global(button){
    font-family:inherit;
}
.page{
    min-height:100vh;
    overflow-x:hidden;
}
.container{
    width:min(1160px,calc(100% - 48px));
    margin:0 auto;
}
.header{
    padding:23px 0;
    background:#f7f5ef;
    border-bottom:1px solid #e5e1d7;
}
.header-inner{
    display:flex;
    align-items:center;
    justify-content:space-between;
}
.logo{
    color:#657254;
    font-size:28px;
    font-weight:800;
    letter-spacing:-1.5px;
}
.logo span{
    color:#bd7153;
}
.nav{
    display:flex;
    align-items:center;
    gap:38px;
}
.nav a{
    color:#73766e;
    font-size:16px;
    font-weight:600;
    transition:color .2s ease;
}
.nav a:hover{
    color:#657254;
}
.header-button{
    cursor:pointer;
    padding:14px 26px;
    border-radius:8px;
    background:#657254;
    color:#fff;
    font-size:16px;
    font-weight:700;
    transition:background .2s ease,transform .2s ease;
}
.header-button:hover{
    background:#586448;
    transform:translateY(-1px);
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
    transition:background .2s ease,transform .2s ease;
}
.primary-button:hover{
    background:#586448;
    transform:translateY(-2px);
}
.primary-button span{
    font-size:20px;
}
.secondary-button{
    cursor:pointer;
    display:inline-flex;
    align-items:center;
    justify-content:center;
    padding:17px 26px;
    border:1px solid #d7d3c9;
    border-radius:8px;
    background:#fbfaf6;
    color:#4c5048;
    font-size:16px;
    font-weight:700;
    transition:border-color .2s ease,transform .2s ease;
}
.secondary-button:hover{
    border-color:#aaa79d;
    transform:translateY(-2px);
}
.hero{
    padding:105px 0 110px;
}
.hero-inner{
    display:grid;
    grid-template-columns:minmax(0,1fr) minmax(0,1fr);
    align-items:center;
    gap:80px;
}
.hero-content{
    position:relative;
    z-index:5;
}
.eyebrow{
    display:inline-block;
    color:#a8684e;
    font-size:14px;
    font-weight:800;
    letter-spacing:.12em;
}
.hero h1{
    max-width:680px;
    margin:20px 0;
    color:#30332d;
    font-size:72px;
    line-height:1.02;
    letter-spacing:-3.8px;
    font-weight:800;
}
.hero h1 em{
    display:block;
    color:#657254;
    font-style:normal;
}
.hero-description{
    max-width:510px;
    margin:0;
    color:#74776e;
    font-size:18px;
    line-height:1.75;
}
.hero-actions{
    display:flex;
    gap:12px;
    margin-top:34px;
}
.hero-info{
    display:flex;
    align-items:center;
    gap:22px;
    margin-top:37px;
}
.stat{
    display:flex;
    flex-direction:column;
}
.stat-value{
    display:flex;
    align-items:center;
    gap:5px;
}
.stat-value strong{
    font-size:22px;
}
.stat-value span{
    color:#bd7153;
    font-size:18px;
}
.stat small{
    margin-top:4px;
    color:#94968f;
    font-size:13px;
}
.divider{
    width:1px;
    height:34px;
    background:#ddd9cf;
}
.hero-visual{
    position:relative;
    width:100%;
    height:460px;
    display:flex;
    align-items:center;
    justify-content:center;
}
.hero-circle{
    position:absolute;
    width:365px;
    height:365px;
    border-radius:50%;
    background:#e3e8d9;
}
.request-card{
    position:relative;
    z-index:2;
    width:350px;
    padding:29px;
    border:1px solid #ddd9cf;
    border-radius:12px;
    background:#fffdf8;
    box-shadow:0 22px 50px rgba(48,51,45,.09);
}
.request-top{
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding-bottom:18px;
    border-bottom:1px solid #ebe7df;
    color:#898b83;
    font-size:14px;
    font-weight:600;
}
.request-status{
    color:#6e7c61;
}
.request-main{
    display:flex;
    align-items:center;
    gap:18px;
    padding:30px 0;
}
.request-icon{
    flex-shrink:0;
    display:grid;
    width:64px;
    height:64px;
    place-items:center;
    border-radius:10px;
    background:#e8ecdf;
    color:#68765c;
    font-size:27px;
}
.request-card h3{
    margin:0;
    color:#34372f;
    font-size:24px;
    line-height:1.12;
    letter-spacing:-.9px;
}
.request-card p{
    margin:9px 0 0;
    color:#888b82;
    font-size:15px;
    line-height:1.5;
}
.request-bottom{
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding-top:18px;
    border-top:1px solid #ebe7df;
    color:#898b83;
    font-size:14px;
}
.request-bottom strong{
    color:#b86e50;
    font-size:16px;
}
.rating-card{
    position:absolute;
    z-index:3;
    top:65px;
    right:5px;
    display:flex;
    align-items:center;
    gap:11px;
    padding:13px 16px;
    border:1px solid #ddd9cf;
    border-radius:10px;
    background:#fffdf8;
    box-shadow:0 13px 30px rgba(48,51,45,.08);
}
.rating-avatar{
    display:grid;
    width:35px;
    height:35px;
    place-items:center;
    border-radius:50%;
    background:#d4b4a3;
    color:#fff;
    font-size:13px;
    font-weight:700;
}
.rating-card strong{
    display:block;
    font-size:14px;
}
.stars{
    margin-top:3px;
    color:#bb7052;
    font-size:13px;
    letter-spacing:1px;
}
.done-card{
    position:absolute;
    z-index:3;
    right:0;
    bottom:55px;
    display:flex;
    align-items:center;
    gap:11px;
    padding:13px 16px;
    border:1px solid #ddd9cf;
    border-radius:10px;
    background:#fffdf8;
    box-shadow:0 13px 30px rgba(48,51,45,.08);
}
.done-mark{
    display:grid;
    width:35px;
    height:35px;
    place-items:center;
    border-radius:50%;
    background:#e2e9db;
    color:#657254;
    font-size:16px;
    font-weight:800;
}
.done-card strong{
    display:block;
    font-size:14px;
}
.done-card small{
    display:block;
    margin-top:4px;
    color:#999b93;
    font-size:12px;
}
.section{
    padding:100px 0;
}
.section-heading{
    display:flex;
    align-items:flex-end;
    justify-content:space-between;
    gap:50px;
    margin-bottom:46px;
}
.section-heading h2{
    margin:13px 0 0;
    color:#34372f;
    font-size:44px;
    line-height:1.08;
    letter-spacing:-2px;
}
.section-heading>p{
    max-width:330px;
    margin:0;
    color:#7f8279;
    font-size:16px;
    line-height:1.7;
}
.services{
    background:#eeece4;
}
.services-grid{
    display:grid;
    grid-template-columns:repeat(4,minmax(0,1fr));
    gap:14px;
}
.service-card{
    min-height:285px;
    display:flex;
    flex-direction:column;
    padding:24px;
    border:1px solid #ddd9cf;
    border-radius:10px;
    background:#f9f7f1;
    transition:transform .2s ease,box-shadow .2s ease;
}
.service-card:hover{
    transform:translateY(-4px);
    box-shadow:0 14px 30px rgba(48,51,45,.06);
}
.service-icon{
    display:grid;
    width:53px;
    height:53px;
    place-items:center;
    border-radius:10px;
    background:#e3e8da;
    color:#68765c;
    font-size:24px;
}
.service-content{
    margin-top:auto;
}
.service-content h3{
    margin:0 0 9px;
    color:#383b33;
    font-size:20px;
}
.service-content p{
    min-height:42px;
    margin:0;
    color:#81847b;
    font-size:15px;
    line-height:1.65;
}
.service-footer{
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-top:28px;
    padding-top:16px;
    border-top:1px solid #e1ddd4;
}
.service-footer span{
    color:#b86e50;
    font-size:16px;
    font-weight:800;
}
.service-footer a{
    color:#657254;
    font-size:15px;
    font-weight:700;
}
.services-note{
    display:flex;
    justify-content:center;
    gap:7px;
    margin-top:28px;
    color:#85877f;
    font-size:14px;
}
.services-note a{
    color:#657254;
    font-weight:800;
}
.how{
    background:#f7f5ef;
}
.steps{
    display:grid;
    grid-template-columns:repeat(3,minmax(0,1fr));
    gap:0;
}
.step{
    display:grid;
    grid-template-columns:48px 1fr;
    gap:20px;
    min-height:160px;
    padding:25px 28px;
    border-top:1px solid #dcd9d0;
}
.step:first-child{
    padding-left:0;
}
.step:last-child{
    padding-right:0;
}
.step-number{
    color:#b96e50;
    font-size:16px;
    font-weight:800;
}
.step-content h3{
    margin:0 0 9px;
    color:#363930;
    font-size:20px;
}
.step-content p{
    max-width:230px;
    margin:0;
    color:#81847b;
    font-size:15px;
    line-height:1.7;
}
.why{
    background:#eeece4;
}
.why-layout{
    display:grid;
    grid-template-columns:.85fr 1.15fr;
    gap:110px;
}
.why-intro h2{
    max-width:440px;
    margin:14px 0 18px;
    color:#34372f;
    font-size:46px;
    line-height:1.04;
    letter-spacing:-2px;
}
.why-intro p{
    max-width:430px;
    margin:0;
    color:#7d8077;
    font-size:16px;
    line-height:1.75;
}
.text-link{
    display:inline-block;
    margin-top:25px;
    color:#657254;
    font-size:15px;
    font-weight:800;
}
.why-list{
    border-top:1px solid #d8d5cb;
}
.why-item{
    display:grid;
    grid-template-columns:50px 1fr;
    gap:20px;
    padding:23px 0;
    border-bottom:1px solid #d8d5cb;
}
.why-item>span{
    color:#b96e50;
    font-size:15px;
    font-weight:800;
}
.why-item h3{
    margin:0 0 6px;
    color:#383b33;
    font-size:19px;
}
.why-item p{
    max-width:470px;
    margin:0;
    color:#81847b;
    font-size:15px;
    line-height:1.7;
}
.cta-section{
    background:#f7f5ef;
}
.cta{
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:80px;
    padding:62px 65px;
    border-top:1px solid #d8d5cb;
    border-bottom:1px solid #d8d5cb;
}
.cta h2{
    margin:14px 0 0;
    color:#34372f;
    font-size:52px;
    line-height:1;
    letter-spacing:-2.5px;
}
.cta-right{
    align-self:end;
}
.cta-right p{
    max-width:410px;
    margin:0 0 25px;
    color:#777a71;
    font-size:16px;
    line-height:1.7;
}
.faq{
    background:#f7f5ef;
}
.faq-layout{
    display:grid;
    grid-template-columns:.7fr 1.3fr;
    gap:110px;
}
.faq-title h2{
    margin:14px 0;
    color:#34372f;
    font-size:44px;
    letter-spacing:-2px;
}
.faq-title p{
    max-width:290px;
    margin:0;
    color:#81847b;
    font-size:15px;
    line-height:1.7;
}
.faq-list{
    border-top:1px solid #dcd9d0;
}
.faq-item{
    border-bottom:1px solid #dcd9d0;
}
.faq-item button{
    display:flex;
    align-items:center;
    justify-content:space-between;
    width:100%;
    padding:21px 0;
    border:0;
    background:transparent;
    color:#363930;
    text-align:left;
    font-size:16px;
    font-weight:700;
    cursor:pointer;
}
.faq-item button b{
    color:#657254;
    font-size:24px;
    font-weight:400;
}
.faq-answer{
    max-width:600px;
    padding:0 40px 21px 0;
    color:#81847b;
    font-size:15px;
    line-height:1.75;
}
footer{
    padding:60px 0 22px;
    background:#eeece4;
    border-top:1px solid #dedbd2;
}
.footer-inner{
    display:flex;
    justify-content:space-between;
    padding-bottom:48px;
}
.footer-brand p{
    max-width:200px;
    margin-top:13px;
    color:#85877f;
    font-size:14px;
    line-height:1.7;
}
.footer-links{
    display:flex;
    gap:100px;
}
.footer-links div{
    display:flex;
    flex-direction:column;
    gap:9px;
}
.footer-links strong{
    margin-bottom:5px;
    color:#464940;
    font-size:14px;
}
.footer-links a{
    color:#81847b;
    font-size:14px;
}
.footer-bottom{
    display:flex;
    justify-content:space-between;
    padding-top:19px;
    border-top:1px solid #d9d6cd;
    color:#999b93;
    font-size:13px;
}
@media (max-width:1000px){
    .hero-inner{
        gap:45px;
    }
    .hero h1{
        font-size:60px;
    }
    .hero-circle{
        width:310px;
        height:310px;
    }
    .request-card{
        width:315px;
    }
    .services-grid{
        grid-template-columns:repeat(2,1fr);
    }
    .why-layout{
        gap:60px;
    }
    .faq-layout{
        gap:60px;
    }
}
@media (max-width:700px){
    .container{
        width:calc(100% - 32px);
    }
    .header{
        padding:18px 0;
    }
    .nav{
        display:none;
    }
    .header-button{
        padding:10px 16px;
        font-size:14px;
    }
    .hero{
        padding:65px 0 70px;
    }
    .hero-inner{
        grid-template-columns:1fr;
        gap:40px;
    }
    .hero-content{
        text-align:left;
    }
    .hero h1{
        max-width:none;
        font-size:50px;
        letter-spacing:-2.5px;
    }
    .hero-description{
        font-size:16px;
    }
    .hero-actions{
        flex-direction:column;
        align-items:stretch;
    }
    .hero-info{
        margin-top:30px;
    }
    .hero-visual{
        height:390px;
        margin-top:5px;
    }
    .hero-circle{
        width:290px;
        height:290px;
    }
    .request-card{
        width:300px;
        padding:23px;
    }
    .request-main{
        padding:25px 0;
    }
    .request-card h3{
        font-size:21px;
    }
    .rating-card{
        top:35px;
        right:0;
    }
    .done-card{
        right:0;
        bottom:35px;
    }
    .section{
        padding:70px 0;
    }
    .section-heading{
        display:block;
        margin-bottom:32px;
    }
    .section-heading h2{
        font-size:38px;
    }
    .section-heading>p{
        margin-top:15px;
        font-size:15px;
    }
    .services-grid{
        grid-template-columns:1fr;
    }
    .service-card{
        min-height:230px;
    }
    .steps{
        grid-template-columns:1fr;
    }
    .step,.step:first-child,.step:last-child{
        padding:22px 0;
    }
    .step-content p{
        max-width:none;
    }
    .why-layout{
        grid-template-columns:1fr;
        gap:50px;
    }
    .why-intro h2{
        font-size:40px;
    }
    .cta{
        grid-template-columns:1fr;
        gap:30px;
        padding:40px 28px;
    }
    .cta h2{
        font-size:44px;
    }
    .cta-right p{
        font-size:14px;
    }
    .faq-layout{
        grid-template-columns:1fr;
        gap:40px;
    }
    .faq-title h2{
        font-size:38px;
    }
    .footer-inner{
        display:block;
    }
    .footer-links{
        margin-top:40px;
        gap:70px;
    }
    .footer-bottom{
        flex-direction:column;
        gap:8px;
    }
}
.services,.profile{
    cursor:pointer;
}
</style>