<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <br>
          <router-view name="header-top"></router-view>
          <router-view></router-view> <!--router-view 'e animasyon vermemiz için transition etiketlerinin içine alıp style etiketinin içnde tanımlarsın -->
          <router-view name="header-bottom"></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue"
export default {
  components:{
    appHeader:Header,
  }
}
</script>

<style>

</style>
