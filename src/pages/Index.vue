<template>
  <div class="container">
    <div class="contents">
      <div class="title">
        Selamat Datang
      </div>
      <div class="subtitle">
        di Dashboard AIRSale Point of Sale
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.container{
  height:84.7vh;
  background: url('../assets/bg-dashboard.png') no-repeat;
  background-size:100% 100%;
  padding: 24px;
  padding-top: auto;
  position: relative;
}
.contents{
  position: absolute;
  bottom: 5%;
  left: 3%;
  color:rgba(0,0,0,0.6);
}
.title{
  font-size: 3rem;
  font-weight: bolder;
}
.subtitle{
  font-size: 2rem;
}
</style>