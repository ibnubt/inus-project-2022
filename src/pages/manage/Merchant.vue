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
                    <template v-slot:body-cell-stores="props">
                        <q-td>
                            <q-btn label="List Store" class="full-width" color="primary" dense flat @click="listStore(props.row)" />
                        </q-td>
                    </template>
                    <template v-slot:body-cell-aksi="props">
                        <q-td>
                            <q-btn label="Edit" class="full-width" color="primary" dense flat @click="listStore(props.row)" />
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
                { name: 'kode', align: 'center', label: 'Kode', field: 'kode' },
                { name: 'nama', align: 'center', label: 'Nama', field: 'nama' },
                { name: 'address', align: 'center', label: 'Address', field: 'address' },
                { name: 'phone', align: 'center', label: 'Phone', field: 'phone' },
                { name: 'status', align: 'center', label: 'Status', field: 'status' },
                { name: 'stores', align: 'center', label: 'Stores', field: 'stores' },
                { name: 'aksi', align: 'center', label: 'Aksi', field: 'aksi' },
            ],
            data: [
                {
                    kode: 'AIR23',
                    nama: 'Starbucks Denny',
                    address: 'Mampang Prapatan, Kota Adm. Jakarta Selatan',
                    phone: '081329362843',
                    status: 'ACTIVE',
                },
                {
                    kode: 'AIR24',
                    nama: 'Starbucks Denny',
                    address: 'Mampang Prapatan, Kota Adm. Jakarta Selatan',
                    phone: '081329362843',
                    status: 'ACTIVE',
                },
                {
                    kode: 'AIR25',
                    nama: 'Starbucks Denny',
                    address: 'Mampang Prapatan, Kota Adm. Jakarta Selatan',
                    phone: '081329362843',
                    status: 'ACTIVE',
                },
                {
                    kode: 'AIR26',
                    nama: 'Starbucks Denny',
                    address: 'Mampang Prapatan, Kota Adm. Jakarta Selatan',
                    phone: '081329362843',
                    status: 'ACTIVE',
                },
                {
                    kode: 'AIR27',
                    nama: 'Starbucks Denny',
                    address: 'Mampang Prapatan, Kota Adm. Jakarta Selatan',
                    phone: '081329362843',
                    status: 'ACTIVE',
                }
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