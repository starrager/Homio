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
                <span class="eyebrow">С ВОЗВРАЩЕНИЕМ</span>
                <h1>Снова<em>в Homio.</em></h1>
                <p>Войдите в аккаунт, чтобы управлять заказами, отслеживать их статус и получать помощь по дому.</p>
            </div>
            <div class="auth-card">
                <div class="card-heading">
                    <h2>Вход в аккаунт</h2>
                    <p>Введите данные, которые использовали при регистрации.</p>
                </div>
                <form class="auth-form">
                    <div class="field">
                        <label for="email">Email</label>
                        <input id="email" type="email" placeholder="you@example.com">
                    </div>
                    <div class="field">
                        <div class="field-top">
                            <label for="password">Пароль</label>
                            <a href="#" class="forgot-link">Забыли пароль?</a>
                        </div>
                        <input id="password" type="password" placeholder="Введите пароль">
                    </div>
                    <button type="button" class="primary-button"><router-link>Войти</router-link><span>→</span></button>
                </form>
                <div class="form-divider"><span>или</span></div>
                <button type="button" class="secondary-button">Продолжить с Google</button>
                <p class="bottom-text">Нет аккаунта?<router-link to="/register">Создать аккаунт</router-link></p>
            </div>
        </div>
    </main>
    <footer class="auth-footer">
        <div class="container footer-inner"><span>© 2026 Homio</span><span>Условия · Конфиденциальность</span></div>
    </footer>
</div>
</template>

<script setup>

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
    justify-content:space-between
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
    padding:85px 0 100px
}
.auth-container{
    width:min(920px,calc(100% - 48px));
    margin:0 auto;
    display:grid;
    grid-template-columns:0.9fr 1.1fr;
    align-items:center;
    gap:100px
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
    font-size:64px;
    line-height:1.02;
    letter-spacing:-3.5px;
    font-weight:800
}
.auth-intro h1 em{
    display:block;
    color:#657254;
    font-style:normal
}
.auth-intro p{
    max-width:390px;
    margin:0;
    color:#777a71;
    font-size:16px;
    line-height:1.75
}
.auth-card{
    padding:38px;
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
    margin:10px 0 30px;
    color:#898b83;
    font-size:14px;
    line-height:1.6
}
.auth-form{
    display:flex;
    flex-direction:column;
    gap:20px
}
.field{
    display:flex;
    flex-direction:column;
    gap:8px
}
.field-top{
    display:flex;
    align-items:center;
    justify-content:space-between
}
.field label{
    color:#464940;
    font-size:14px;
    font-weight:700
}
.forgot-link{
    color:#657254;
    font-size:13px;
    font-weight:700
}
.field input{
    width:100%;
    height:52px;
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
.primary-button{
    display:inline-flex;
    align-items:center;
    justify-content:center;
    gap:18px;
    width:100%;
    height:54px;
    margin-top:4px;
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
    height:52px;
    border:1px solid #d7d3c9;
    border-radius:8px;
    background:#fbfaf6;
    color:#4c5048;
    font-size:15px;
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
    margin:25px 0
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
    margin:25px 0 0;
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
@media(max-width:800px){
    .auth-container{
        grid-template-columns:1fr;
        gap:45px;
        width:min(520px,calc(100% - 32px))
    }
    .auth-intro{
        text-align:center
    }
    .auth-intro p{
        margin:0 auto
    }
    .auth-intro h1{
        font-size:52px
    }
    .auth-main{
        padding:65px 0 80px
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
        font-size:46px;
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