<template>
    <div class="panel">
        <div class="panel-hdr">
            <h2>
                <ul class="nav nav-tabs border-bottom-0 nav-tabs-clean" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" data-toggle="tab" href="javascript:;" role="tab" id="tab-1"><i class="fal fa-user-plus mr-1"></i> Users</a>
                    </li>
                </ul>
            </h2>
        </div>
        <div class="panel-container show">
            <div class="panel-content">
                
                <div class="frame-wrap m-0">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="table-responsive-lg">
                                <table class="table table-bordered m-0">
                                    <thead class="bg-primary-400">
                                        <tr>
                                            <th>User Name</th>
                                            <th>Full Name</th>
                                            <th>Email</th>
                                            <th>Status Active</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="item in items">
                                            <td>{{ item.user_name }}</td>
                                            <td>{{ item.user_full_name }}</td>
                                            <td>{{ item.user_email }}</td>
                                            <td>{{ item.user_status }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                items: [],
                page: 0,
                records: 0,
                total: 0
            }
        },
        // on create 
        created() {

            let param = this.queryString({
                'token': this.$store.state.token
            });

            axios({
                method: 'get',
                url: this.base_Url + 'api/admin/users?' + param
            }).then((res) => {

                this.items = res.data.rows;
                this.page = res.data.page;
                this.records = res.data.records;
                this.total = res.data.total;

            }, (error) => {

            });
        }
    }
</script>