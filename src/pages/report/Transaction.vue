<template>
    <div class="content">
        <div class="row">
            <div class="col-12 col-md-6">
                <span>Tanggal</span><br>
                <q-card flat bordered class="pointer my-card q-mt-sm q-mb-lg bg-grey-1" style="width: 75%;">
                    <q-popup-proxy @before-show="updateProxy" transition-show="scale" transition-hide="scale">
                        <q-date v-model="date" range>
                            <div class="row items-center justify-end q-gutter-sm">
                                <q-btn label="Close" color="primary" flat v-close-popup />
                            </div>
                        </q-date>
                    </q-popup-proxy>
                        <div class="full-width q-pa-sm">
                            <div class="row">
                                <div class="col"><q-icon name="event" style="font-size: 1.25rem;" /> <span class="q-pl-md">{{ date.from }}</span> <span v-if="date.to!=null" class="q-pl-md">-</span> <span class="q-pl-md">{{ date.to }}</span> </div>
                            </div>
                        </div>
                </q-card>
                <span>Merchant</span>
                <div class="row q-mt-sm">
                    <div class="col-6 q-pr-md">
                        <q-select class="bg-grey-1" outlined dense v-model="merchant" :options="optMerchant" label="Select" />
                    </div>
                    <div class="col-6">
                        <q-btn icon="search" color="primary" label="Cari Data" />
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6">asdasd</div>
        </div>
    </div>
</template>


<script>
export default {
    data(){
        return{
            merchant: '',
            optMerchant : [
                'Warung Kang Denny',
                'Warung Kang Rohim',
                'Warung Kang Dede',
            ],
            pickedDate: '',
            date: {
                from: null,
                to: null
            },
            proxyDate: {
                from: null,
                to: null
            }
        }
    },
    methods: {
        updateProxy () {
            // this.proxyDate = this.date
        },
    }
}
</script>