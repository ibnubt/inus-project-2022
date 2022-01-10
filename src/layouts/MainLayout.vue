<template>
  <q-layout view="lhh lpR lFf">
    <q-header bordered class="bg">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <div class="full-width">
          <div class="row">
            <div class="col text-right">
              <div class="q-pa-md">
                Halo, selamat datang <span class="name">mas Denny</span>
                <q-btn round class="q-ml-sm">
                <q-avatar size="42px">
                  <img src="https://cdn.quasar.dev/img/avatar2.jpg">
                </q-avatar>
                  <q-menu>
                    <div class="row no-wrap q-pa-md">
                      <div class="column">
                        <div class="text-h6 q-mb-md">Account</div>

                        <q-btn
                          color="primary"
                          label="Logout"
                          push
                          size="sm"
                          v-close-popup
                        />
                      </div>
                    </div>
                  </q-menu>
                </q-btn>
              </div>
            </div>
          </div>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <div class="header-sidebar">
        <img src="../assets/airsale.png" width="100">
      </div>
      <q-list bordered class="no-border">
        <q-item clickable
          class="text-orange"
          :class="{'active':($route.path.includes('dashboard'))}"
          @click="changeRoute('/dashboard')"
        >
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>

          <q-item-section class="text-weight-medium">Dashboard</q-item-section>
        </q-item>
        <q-expansion-item
          header-class="text-orange"
          icon="settings"
          label="Manage"
          class="text-weight-medium"
          :default-opened="$route.path.includes('manage')"
        >
          <q-item @click="changeRoute('/manage/merchant')" :class="{'active':($route.path.includes('merchant'))}" clickable class="text-orange" :inset-level="1" :content-inset-level="1" expand-separator label="Postponed">
            <q-item-section>
                <q-item-label class="text-weight-medium">Merchant</q-item-label>
            </q-item-section>
          </q-item>
          <q-item @click="changeRoute('/manage/subscription')" :class="{'active':($route.path.includes('subscription'))}" clickable class="text-orange" :inset-level="1" :content-inset-level="1" expand-separator label="Postponed">
            <q-item-section>
                <q-item-label class="text-weight-medium">Subscription</q-item-label>
            </q-item-section>
          </q-item>
        </q-expansion-item>

        <q-expansion-item
          header-class="text-orange"
          icon="payment"
          label="Billing"
          class="text-weight-medium"
          :default-opened="$route.path.includes('billing')"
        >
          <q-item @click="changeRoute('/billing/storebilling')" :class="{'active':($route.path.includes('storebilling'))}" clickable class="text-orange" :inset-level="1" :content-inset-level="1" expand-separator label="Postponed">
            <q-item-section>
                <q-item-label class="text-weight-medium">Store Billing</q-item-label>
            </q-item-section>
          </q-item>
          <q-item @click="changeRoute('/billing/payment')" :class="{'active':($route.path.includes('payment'))}" clickable class="text-orange" :inset-level="1" :content-inset-level="1" expand-separator label="Postponed">
            <q-item-section>
                <q-item-label class="text-weight-medium">Payment</q-item-label>
            </q-item-section>
          </q-item>
        </q-expansion-item>

        <q-expansion-item
          header-class="text-orange"
          icon="pages"
          label="Report"
          class="text-weight-medium"
          :default-opened="$route.path.includes('report')"
        >
          <q-item @click="changeRoute('/report/transaction')" :class="{'active':($route.path.includes('transaction'))}" clickable class="text-orange" :inset-level="1" :content-inset-level="1" expand-separator label="Postponed">
            <q-item-section>
                <q-item-label class="text-weight-medium">Transaction</q-item-label>
            </q-item-section>
          </q-item>
        </q-expansion-item>

    </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer bordered class="bg">
      <q-toolbar>
        <div class="full-width">
          <div class="row">
            <div class="col-6">
              © 2021 AIRSale
            </div>
            <div class="col-6 text-right">
              Powered by <span @click="iconplus()" class="iconplus">ICON+</span>
            </div>
          </div>
        </div>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  data() {
    return{
      active: ''
    }
  },
  setup () {
    const leftDrawerOpen = ref(false)
    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  },
  mounted() {

  },
  methods: {
    iconplus() {
      window.open("http://www.iconpln.co.id/english-olympiad-icon-lanjutkan-tradisi-juara/", "_blank")
    },
    changeRoute(route){
      this.$router.replace(route)
    }
  }
}
</script>

<style scoped>
.bg {
  background-color: #ebedef;
  color: black;
}
.iconplus{
  cursor: pointer;
  color: rgb(69, 168, 217);
}
.iconplus:hover{
  text-decoration: underline;
}
.name{
  color: rgb(50, 31, 219);
}
.header-sidebar{
  width: 100%;
  height: auto;
  text-align: center;
  padding: 22px;
}
.active{
  background-color: #f35301;
  color: white!important;
}
.active .q-item__section{
  transition: all 0.4s ease-in;
  background-color: #f35301;
  color: white!important;
}
</style>