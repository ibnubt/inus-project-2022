<template>
    <div class="content">
        <q-card flat bordered class="my-card">
            <div class="row q-pt-md">
                <div class="col">
                    <q-input dense outlined v-model="text" placeholder="Cari" input-class="text-left" class="q-ml-md">
                        <template v-slot:append>
                            <q-icon v-if="text === ''" name="search" />
                            <q-icon v-else name="clear" class="cursor-pointer" @click="text = ''" />
                        </template>
                    </q-input>
                </div>
                <div class="col text-right q-pr-md">
                    <q-btn color="primary" icon="add" label="Tambah Merchant" />
                </div>
            </div>
            <q-card-section>
                <q-table
                square
                :rows="data"
                :columns="columns"
                row-key="id"
                :pagination="pagination"
                :loading="loading"
                hide-bottom
                >
                    <template v-slot:body-cell-status="props">
                        <q-td :props="props">
                        <div>
                            <q-badge color="secondary" :label="props.value" />
                        </div>
                        </q-td>
                    </template>
                    <template v-slot:body-cell-aksi="props">
                        <q-td>
                            <div class="row">
                                <div class="col">
                                    <q-btn label="Detail" class="full-width" color="primary" dense flat @click="listStore(props.row)" />
                                </div>
                                <div class="col">
                                    <q-btn label="Paid" class="full-width" color="primary" dense flat @click="listStore(props.row)" />
                                </div>
                            </div>
                        </q-td>
                    </template>
                </q-table>
                <div class="q-pa-lg flex flex-center">
                    <q-pagination
                    v-model="current"
                    color="primary"
                    :max="10"
                    :max-pages="6"
                    boundary-numbers
                    />
                </div>
                
            </q-card-section>
        </q-card>
    </div>
</template>

<script>
export default {
    data(){
        return{
            current: 1,
            loading: false,
            columns: [
                { name: 'nama', align: 'center', label: 'Nama Store', field: 'nama' },
                { name: 'address', align: 'center', label: 'Address', field: 'address' },
                { name: 'type', align: 'center', label: 'Package Type', field: 'type' },
                { name: 'nominal', align: 'right', label: 'Nominal', field: 'nominal' },
                { name: 'aksi', align: 'center', label: 'Aksi', field: 'aksi' },
            ],
            data: [
                {
                    nama: 'Warung Kang Denny',
                    address: 'Mampang Prapatan, Kota Adm. Jakarta Selatan',
                    type: 'UPGRADE PAKET',
                    nominal: 'Rp. 500.000',
                },
                {
                    nama: 'Warung Kang Rohim',
                    address: 'Daya Guna 3 no.101, Mampang',
                    type: 'UPGRADE PAKET',
                    nominal: 'Rp. 120.000',
                },
                {
                    nama: 'Warung Kang Dede',
                    address: 'Jl Kuningan Bar, Kuningan Barat',
                    type: 'UPGRADE PAKET',
                    nominal: 'Rp. 180.000',
                },
                {
                    nama: 'Warung Kang Abdul',
                    address: 'Sebelum Gerbang Kalibunder Regency, Maleber',
                    type: 'UPGRADE PAKET',
                    nominal: 'Rp. 230.000',
                },
                {
                    nama: 'Warung Kang Kristian',
                    address: 'IC+ KP Kalteng, Sebangau Mulya',
                    type: 'UPGRADE PAKET',
                    nominal: 'Rp. 200.000',
                },
            ],
            text: '',
            pagination: {
                rowsPerPage: 8 // current rows per page being displayed
            },
        }
    },
    methods: {
        listStore(item){
            console.log(item)
        }
    }
}
</script>