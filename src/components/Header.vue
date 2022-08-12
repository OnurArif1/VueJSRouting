<template>
    <div class="container">
        <ul class="nav nav-pills">
            <router-link 
                active-class="active"
                exact
                to="/"
                tag="li">
                <a>Home</a>
            </router-link> <!--routerler arasında dolaşabilceğimiz etikettir--> <!--vue.js render edildiğinde bu etiket li etiketine bürünsün anlamına gelir-->
            <router-link 
                active-class="active"
                to="/user"
                tag="li"> 
                <!--exact; verilen link activ ise onu active et gibi ibr şey-->
                <!--to="/" linke tıklandığında nereye gitsin onu tanımlıyoruz. tag="li" hangi etikette tanımladıysan onun ismini yazman gerekir-->
                <!--routes.js de tanımladığın :id parametresini gerldik /user/10 ile kullandık. buraki 10 = id'dir -->
                <a>User</a>
            </router-link>
        </ul>
    </div>
</template>