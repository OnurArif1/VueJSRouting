<template>
  <div class="container">
    <h3>User Detail Component</h3>
    <hr>
    <p>Kullanıcının ID Bilgisi:{{ $route.params.id }}</p>
    <router-link
      tag="button"
      class="btn btn-primary"
      :to="{ name:'userEdit', params: { id:$route.params.id },query: { name:'onur',lastname:'arif' } }"> 
      Kullanıcıyı düzenle
    </router-link> <!--:to="{ name:'userEdit', params:{ id:$route.params.id } } bunu yazarak routes de tanımladığımız {path:':id/edit',component:UserEdit} bu ifadeyi kullanabildik -->
    <!--v-bind:to="'/user/' + $route.params.id +'/edit'">; bunu yazarak routes de tanımladığımız {path:':id/edit',component:UserEdit} bu ifadeyi kullanabildik -->
  </div>
</template>

<script>
  export default {}
</script>
