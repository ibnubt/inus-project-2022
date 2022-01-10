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
                { name: 'nama', align: 'center', label: 'Nama Store', field: 'nama' },
                { name: 'address', align: 'center', label: 'Address', field: 'address' },
                { name: 'package', align: 'center', label: 'Package', field: 'package' },
                { name: 'usage', align: 'center', label: 'Current Usage', field: 'usage' },
                { name: 'status', align: 'center', label: 'Billing Status', field: 'status' },
                { name: 'aksi', align: 'center', label: 'Aksi', field: 'aksi' },
            ],
            data: [
                {
                    nama: 'Warung Kang Denny',
                    address: 'Mampang Prapatan, Kota Adm. Jakarta Selatan',
                    package: 'Free',
                    usage: '',
                    status: 'ACTIVE',
                },
                {
                    nama: 'Warung Kang Rohim',
                    address: 'Daya Guna 3 no.101, Mampang',
                    package: 'Free',
                    usage: '',
                    status: 'ACTIVE',
                },
                {
                    nama: 'Warung Kang Dede',
                    address: 'Jl Kuningan Bar, Kuningan Barat',
                    package: 'Free',
                    usage: '',
                    status: 'ACTIVE',
                },
                {
                    nama: 'Warung Kang Abdul',
                    address: 'Sebelum Gerbang Kalibunder Regency, Maleber',
                    package: 'Free',
                    usage: '',
                    status: 'ACTIVE',
                },
                {
                    nama: 'Warung Kang Kristian',
                    address: 'IC+ KP Kalteng, Sebangau Mulya',
                    package: 'Free',
                    usage: '',
                    status: 'ACTIVE',
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