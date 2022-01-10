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
                                    <q-btn label="Edit" class="full-width" color="primary" dense flat @click="listStore(props.row)" />
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
                { name: 'nama', align: 'center', label: 'Nama', field: 'nama' },
                { name: 'type', align: 'center', label: 'Type', field: 'type' },
                { name: 'price', align: 'center', label: 'Price', field: 'price' },
                { name: 'limit', align: 'center', label: 'Limit', field: 'limit' },
                { name: 'status', align: 'center', label: 'Status', field: 'status' },
                { name: 'aksi', align: 'center', label: 'Aksi', field: 'aksi' },
            ],
            data: [
                {
                    nama: 'Paket 1',
                    type: 'MONTHLY',
                    price: 'Rp. 100.000	',
                    limit: '100 / day',
                    status: 'ACTIVE',
                },
                {
                    nama: 'Paket 5',
                    type: 'MONTHLY',
                    price: 'Rp. 150.000	',
                    limit: '75 / day',
                    status: 'ACTIVE',
                },
                {
                    nama: 'Paket 10',
                    type: 'MONTHLY',
                    price: 'Rp. 200.000	',
                    limit: '50 / day',
                    status: 'ACTIVE',
                },
                {
                    nama: 'Paket 20',
                    type: 'MONTHLY',
                    price: 'Rp. 250.000	',
                    limit: '25 / day',
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