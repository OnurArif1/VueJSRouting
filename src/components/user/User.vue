<template>
  <div class="container">
    <router-view></router-view> <!--child router var ise router-view kuullanlır -->
    <hr>
    <button class="btn btn-btn-success" @click="navigateHome">Home Component</button> <!--button a tiklandigin da home componentine gitsin dedik-->
    <hr>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        id:this.$route.params.id, //$route sayesinde routes.js dosaysındaki veerileri gelip burada kullanabiliriz
      }
    },
    methods:{
      navigateHome(){
        // this.$router.push("/"); //push method u router.js icin de tanımladığımız herhangibir objeye gitmemizi sağlar. //1.yol: ilk olarak path 'in adı yazılır
        // this.$router.push({path:'/'}); //bu şekilde de tanımlayabilirsin 
        this.$router.push({name:'anasayfa'}); //bu şekilde de tanımlayabilirsin. kod okunabilirliği açısından en mantıklısı bu gibi
      }
    },
    watch:{ //herhangi bir değişikliği anlık izlememiz ve değişikliği yakalamamızı sağlar. 
      "$route"(to,from){ //to; değişen route, from; değişmeden önceki route'yi verir
        this.id=to.params.id;
      }
    }
  }
</script>
