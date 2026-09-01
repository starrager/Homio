<template>
    <div class="page">
        <header class="header">
            <div class="container header-inner">
                <RouterLink to="/" class="logo">
                    homio<span>.</span>
                </RouterLink>

                <nav class="nav">
                    <RouterLink to="/services">Услуги</RouterLink>
                    <RouterLink to="/orders">Мои заказы</RouterLink>
                    <RouterLink to="/help">Помощь</RouterLink>
                </nav>

                <RouterLink to="/profile" class="header-user">
                    <div class="user-avatar">
                        {{ userInitial }}
                    </div>

                    <span>{{ userName }}</span>
                </RouterLink>
            </div>
        </header>

        <main>
            <section class="orders-section">
                <div class="container">
                    <div class="page-heading">
                        <div>
                            <span class="eyebrow">ЛИЧНЫЙ КАБИНЕТ</span>

                            <h1>Мои заказы</h1>

                            <p>
                                Здесь находятся текущие и завершённые заказы.
                            </p>
                        </div>

                        <RouterLink to="/services" class="primary-button">
                            Новый заказ
                            <span>→</span>
                        </RouterLink>
                    </div>

                    <div class="orders-layout">
                        <aside class="sidebar">
                            <div class="sidebar-user">
                                <div class="sidebar-avatar">
                                    {{ userInitial }}
                                </div>

                                <div>
                                    <strong>{{ userName }}</strong>
                                    <span>{{ userEmail }}</span>
                                </div>
                            </div>

                            <div class="sidebar-menu">
                                <RouterLink to="/profile" class="sidebar-link">
                                    <span class="sidebar-icon">○</span>
                                    <span>Профиль</span>
                                </RouterLink>

                                <RouterLink to="/orders" class="sidebar-link active">
                                    <span class="sidebar-icon">□</span>
                                    <span>Мои заказы</span>
                                </RouterLink>

                                <RouterLink to="/history" class="sidebar-link">
                                    <span class="sidebar-icon">◷</span>
                                    <span>История</span>
                                </RouterLink>

                                <RouterLink to="/settings" class="sidebar-link">
                                    <span class="sidebar-icon">⌁</span>
                                    <span>Настройки</span>
                                </RouterLink>
                            </div>

                            <div class="sidebar-bottom">
                                <button type="button" class="logout-button">
                                    <span>↪</span>
                                    Выйти
                                </button>
                            </div>
                        </aside>

                        <div class="orders-content">
                            <div class="orders-top">
                                <div class="orders-title">
                                    <span class="card-eyebrow">ЗАКАЗЫ</span>
                                    <h2>Все заказы</h2>
                                </div>

                                <div class="filters">
                                    <button
                                        v-for="filter in filters"
                                        :key="filter.value"
                                        type="button"
                                        class="filter-button"
                                        :class="{ active: activeFilter === filter.value }"
                                        @click="activeFilter = filter.value"
                                    >
                                        {{ filter.label }}
                                    </button>
                                </div>
                            </div>

                            <div v-if="filteredOrders.length" class="orders-list">
                                <article
                                    v-for="order in filteredOrders"
                                    :key="order.id"
                                    class="order-card"
                                >
                                    <div class="order-main">
                                        <div class="order-icon">
                                            {{ order.icon }}
                                        </div>

                                        <div class="order-info">
                                            <div class="order-heading-row">
                                                <div>
                                                    <span class="order-number">
                                                        Заказ #{{ order.id }}
                                                    </span>

                                                    <h3>
                                                        {{ order.service }}
                                                    </h3>
                                                </div>

                                                <span
                                                    class="status"
                                                    :class="`status-${order.status}`"
                                                >
                                                    {{ order.statusLabel }}
                                                </span>
                                            </div>

                                            <p v-if="order.description">
                                                {{ order.description }}
                                            </p>

                                            <div class="order-meta">
                                                <div>
                                                    <span>Дата</span>
                                                    <strong>{{ order.date }}</strong>
                                                </div>

                                                <div>
                                                    <span>Время</span>
                                                    <strong>{{ order.time }}</strong>
                                                </div>

                                                <div>
                                                    <span>Адрес</span>
                                                    <strong>{{ order.address }}</strong>
                                                </div>

                                                <div v-if="order.price">
                                                    <span>Стоимость</span>
                                                    <strong>{{ order.price }}</strong>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="order-footer">
                                        <span>
                                            {{ order.updatedAt }}
                                        </span>

                                        <RouterLink
                                            :to="`/orders/${order.id}`"
                                            class="order-link"
                                        >
                                            Подробнее
                                            <span>→</span>
                                        </RouterLink>
                                    </div>
                                </article>
                            </div>

                            <div v-else class="empty-state">
                                <div class="empty-icon">
                                    □
                                </div>

                                <h3>Заказов пока нет</h3>

                                <p>
                                    Когда вы оформите услугу, заказ появится здесь.
                                </p>

                                <RouterLink to="/services" class="secondary-button">
                                    Посмотреть услуги
                                </RouterLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

        <footer>
            <div class="container footer-inner">
                <div class="footer-brand">
                    <RouterLink to="/" class="logo">
                        homio<span>.</span>
                    </RouterLink>

                    <p>
                        Помогаем решать бытовые задачи проще.
                    </p>
                </div>

                <div class="footer-links">
                    <div>
                        <strong>Аккаунт</strong>
                        <RouterLink to="/profile">Профиль</RouterLink>
                        <RouterLink to="/orders">Мои заказы</RouterLink>
                        <RouterLink to="/history">История</RouterLink>
                    </div>

                    <div>
                        <strong>Помощь</strong>
                        <RouterLink to="/services">Услуги</RouterLink>
                        <RouterLink to="/help">Частые вопросы</RouterLink>
                        <a href="#">Контакты</a>
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
import { computed, ref } from 'vue'

const userName=ref('')
const userEmail=ref('')
const userInitial=ref('')

const activeFilter=ref('all')

const filters=[
    {
        label:'Все',
        value:'all',
    },
    {
        label:'Активные',
        value:'active',
    },
    {
        label:'Завершённые',
        value:'completed',
    },
    {
        label:'Отменённые',
        value:'cancelled',
    },
]

const orders=ref<any[]>([])

const filteredOrders=computed(()=>{
    if(activeFilter.value==='all'){
        return orders.value
    }

    return orders.value.filter(order=>order.status===activeFilter.value)
})
</script>

<style scoped>
:global(*){
    box-sizing:border-box;
}
:global(html){
    scroll-behavior:smooth;
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
    min-height:48px;
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
.header-user{
    display:flex;
    align-items:center;
    gap:10px;
    color:#464940;
    font-size:15px;
    font-weight:700;
}
.user-avatar{
    display:grid;
    width:38px;
    height:38px;
    place-items:center;
    border-radius:50%;
    background:#d4b4a3;
    color:#fff;
    font-size:14px;
}
.orders-section{
    padding:78px 0 110px;
}
.page-heading{
    display:flex;
    align-items:flex-end;
    justify-content:space-between;
    gap:40px;
    margin-bottom:45px;
}
.eyebrow{
    display:inline-block;
    color:#a8684e;
    font-size:13px;
    font-weight:800;
    letter-spacing:.12em;
}
.page-heading h1{
    margin:13px 0 12px;
    color:#34372f;
    font-size:52px;
    line-height:1;
    letter-spacing:-2.5px;
}
.page-heading p{
    max-width:500px;
    margin:0;
    color:#81847b;
    font-size:16px;
    line-height:1.7;
}
.primary-button{
    display:inline-flex;
    align-items:center;
    justify-content:center;
    gap:15px;
    min-height:48px;
    padding:0 22px;
    border-radius:7px;
    background:#657254;
    color:#fff;
    font-size:14px;
    font-weight:700;
    transition:background .2s ease,transform .2s ease;
}
.primary-button:hover{
    background:#586448;
    transform:translateY(-1px);
}
.primary-button span{
    font-size:18px;
}
.orders-layout{
    display:grid;
    grid-template-columns:270px 1fr;
    gap:30px;
    align-items:start;
}
.sidebar{
    position:sticky;
    top:25px;
    padding:22px;
    border:1px solid #ddd9cf;
    border-radius:12px;
    background:#eeece4;
}
.sidebar-user{
    display:flex;
    align-items:center;
    gap:13px;
    padding:4px 2px 24px;
    border-bottom:1px solid #d9d6cd;
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
    font-weight:700;
}
.sidebar-user strong{
    display:block;
    color:#3d4038;
    font-size:15px;
}
.sidebar-user span{
    display:block;
    max-width:155px;
    margin-top:4px;
    overflow:hidden;
    color:#898b83;
    font-size:12px;
    text-overflow:ellipsis;
    white-space:nowrap;
}
.sidebar-menu{
    display:flex;
    flex-direction:column;
    gap:4px;
    padding:20px 0;
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
    transition:background .2s ease,color .2s ease;
}
.sidebar-link:hover{
    background:#e5e4d9;
    color:#657254;
}
.sidebar-link.active{
    background:#657254;
    color:#fff;
}
.sidebar-icon{
    display:grid;
    width:24px;
    place-items:center;
    font-size:17px;
}
.sidebar-bottom{
    padding-top:18px;
    border-top:1px solid #d9d6cd;
}
.logout-button{
    display:flex;
    align-items:center;
    gap:13px;
    width:100%;
    padding:11px 13px;
    border:0;
    background:transparent;
    color:#a8684e;
    font-size:14px;
    font-weight:700;
    text-align:left;
    cursor:pointer;
}
.orders-content{
    min-width:0;
    padding:34px;
    border:1px solid #ddd9cf;
    border-radius:12px;
    background:#fbfaf6;
}
.orders-top{
    display:flex;
    align-items:flex-end;
    justify-content:space-between;
    gap:30px;
    padding-bottom:28px;
    border-bottom:1px solid #e1ddd4;
}
.card-eyebrow{
    color:#a8684e;
    font-size:12px;
    font-weight:800;
    letter-spacing:.11em;
}
.orders-title h2{
    margin:10px 0 0;
    color:#34372f;
    font-size:28px;
    line-height:1.1;
    letter-spacing:-1px;
}
.filters{
    display:flex;
    align-items:center;
    gap:6px;
    padding:4px;
    border-radius:8px;
    background:#eeece4;
}
.filter-button{
    padding:9px 13px;
    border:0;
    border-radius:6px;
    background:transparent;
    color:#7f8279;
    font-size:12px;
    font-weight:700;
    cursor:pointer;
    transition:background .2s ease,color .2s ease;
}
.filter-button:hover{
    color:#657254;
}
.filter-button.active{
    background:#fffdf8;
    color:#657254;
    box-shadow:0 1px 4px rgba(48,51,45,.08);
}
.orders-list{
    display:flex;
    flex-direction:column;
}
.order-card{
    padding:28px 0 0;
    border-bottom:1px solid #e1ddd4;
}
.order-card:last-child{
    border-bottom:0;
}
.order-main{
    display:grid;
    grid-template-columns:58px 1fr;
    gap:18px;
}
.order-icon{
    display:grid;
    width:58px;
    height:58px;
    place-items:center;
    border-radius:10px;
    background:#e3e8da;
    color:#68765c;
    font-size:23px;
}
.order-info{
    min-width:0;
}
.order-heading-row{
    display:flex;
    align-items:flex-start;
    justify-content:space-between;
    gap:20px;
}
.order-number{
    display:block;
    margin-bottom:5px;
    color:#999b93;
    font-size:11px;
    font-weight:700;
}
.order-info h3{
    margin:0;
    color:#383b33;
    font-size:19px;
    line-height:1.2;
}
.order-info > p{
    max-width:600px;
    margin:9px 0 0;
    color:#85877f;
    font-size:13px;
    line-height:1.6;
}
.status{
    flex-shrink:0;
    padding:7px 10px;
    border-radius:20px;
    font-size:11px;
    font-weight:800;
}
.status-active{
    background:#e3e8da;
    color:#657254;
}
.status-completed{
    background:#e8e5dd;
    color:#676a62;
}
.status-cancelled{
    background:#f0dfd7;
    color:#a8684e;
}
.order-meta{
    display:grid;
    grid-template-columns:repeat(4,minmax(0,1fr));
    gap:14px;
    margin-top:22px;
    padding:17px 0;
    border-top:1px solid #ebe7df;
}
.order-meta div{
    display:flex;
    flex-direction:column;
    gap:4px;
}
.order-meta span{
    color:#999b93;
    font-size:11px;
}
.order-meta strong{
    overflow:hidden;
    color:#565950;
    font-size:13px;
    font-weight:700;
    text-overflow:ellipsis;
    white-space:nowrap;
}
.order-footer{
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap:20px;
    padding:15px 0 25px 76px;
}
.order-footer > span{
    color:#a0a29b;
    font-size:11px;
}
.order-link{
    display:inline-flex;
    align-items:center;
    gap:8px;
    color:#657254;
    font-size:13px;
    font-weight:800;
}
.order-link span{
    font-size:16px;
}
.empty-state{
    display:flex;
    min-height:430px;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    padding:40px 20px;
    text-align:center;
}
.empty-icon{
    display:grid;
    width:64px;
    height:64px;
    place-items:center;
    margin-bottom:18px;
    border-radius:50%;
    background:#e3e8da;
    color:#657254;
    font-size:24px;
}
.empty-state h3{
    margin:0;
    color:#383b33;
    font-size:21px;
}
.empty-state p{
    max-width:340px;
    margin:9px 0 22px;
    color:#898b83;
    font-size:14px;
    line-height:1.6;
}
.secondary-button{
    display:inline-flex;
    align-items:center;
    justify-content:center;
    min-height:44px;
    padding:0 18px;
    border:1px solid #d5d1c7;
    border-radius:7px;
    background:#fffdf8;
    color:#657254;
    font-size:13px;
    font-weight:700;
    transition:border-color .2s ease,transform .2s ease;
}
.secondary-button:hover{
    border-color:#aaa79d;
    transform:translateY(-1px);
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
@media (max-width:950px){
    .orders-layout{
        grid-template-columns:220px 1fr;
        gap:20px;
    }
    .orders-content{
        padding:27px;
    }
    .order-meta{
        grid-template-columns:1fr 1fr;
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
    .header-user span{
        display:none;
    }
    .orders-section{
        padding:55px 0 70px;
    }
    .page-heading{
        align-items:flex-start;
        flex-direction:column;
        margin-bottom:30px;
    }
    .page-heading h1{
        font-size:42px;
        letter-spacing:-2px;
    }
    .page-heading p{
        font-size:14px;
    }
    .orders-layout{
        grid-template-columns:1fr;
    }
    .sidebar{
        position:static;
        padding:15px;
    }
    .sidebar-user{
        padding-bottom:15px;
    }
    .sidebar-menu{
        display:grid;
        grid-template-columns:1fr 1fr;
        gap:4px;
        padding:12px 0;
    }
    .sidebar-link{
        padding:10px;
        font-size:13px;
    }
    .sidebar-bottom{
        display:none;
    }
    .orders-content{
        padding:22px 18px;
    }
    .orders-top{
        align-items:flex-start;
        flex-direction:column;
    }
    .filters{
        width:100%;
        overflow-x:auto;
    }
    .filter-button{
        flex:1;
        white-space:nowrap;
    }
    .order-main{
        grid-template-columns:48px 1fr;
        gap:13px;
    }
    .order-icon{
        width:48px;
        height:48px;
        font-size:19px;
    }
    .order-heading-row{
        flex-direction:column;
        gap:10px;
    }
    .order-meta{
        grid-template-columns:1fr 1fr;
    }
    .order-footer{
        padding-left:61px;
    }
    .footer-inner{
        display:block;
    }
    .footer-links{
        margin-top:40px;
        gap:55px;
    }
    .footer-bottom{
        flex-direction:column;
        gap:8px;
    }
}
@media (max-width:450px){
    .order-meta{
        grid-template-columns:1fr;
    }
    .order-footer{
        align-items:flex-start;
        flex-direction:column;
        padding-left:61px;
    }
}
</style>