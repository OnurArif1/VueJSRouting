<template>
  <div class="container">
    <h3>User Edit Component</h3>
    <hr>
    <p>ad: {{ $route.query.name }}</p>
    <p>soyad: {{ $route.query.lastname }}</p>
  </div>
</template>
<script>
  export default {}
</script>
