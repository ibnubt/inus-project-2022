<template>
  <div class="container">
    <div class="bg">
        <div class="login">
          <q-img class="resp-logo" src="../assets/logo_airsale.png" style="width: 100px"></q-img>
          <br>
          <span class="title">Backoffice AIRSale</span>
          <br><br>
          <div class="card-login q-mt-md">
              <div class="body-login">
                  <b>Login</b><br>
                  <span class="lighter">Sign in to your account</span>
                  <q-input :dense="dense" label="Email">
                    <template v-slot:prepend>
                      <i class="fas fa-envelope"></i>
                    </template>
                  </q-input>
                <br>
                  <q-input :dense="dense" label="Password">
                    <template v-slot:prepend>
                      <i class="fas fa-key"></i>
                    </template>
                  </q-input>
                  <br>
                <q-btn class="full-width" color="primary" label="Login" @click="login()" />
              </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  data () {
    return {
      dense: ref(false)
    }
  },
  methods: {
    login() {
      this.$router.push({path: '/'})
    }
  }
}
</script>

<style scoped>
.title{
  font-weight:lighter;
  font-size: 1.5rem;
}
.lighter{
  font-weight:lighter;
}
.bg{
    width: 100%;
    height: 100vh;
    position: absolute;
    background-color: rgba(232, 236, 241, 0.7);
}
.grey{
    color: grey;
}
.login{
    display: block;
    position: relative;
    top: 15%;
    text-align: center;
}
.card-login{
    margin: auto;
    width: 100%;
    max-width: 400px;
    background: #fff;
    border: 1px solid gainsboro;
    zoom: 1;
    filter: alpha(opacity=100);
    opacity: 1;
    border-radius: 12px;
}
.body-login{
  text-align: left;
  padding: 24px;
}
</style>