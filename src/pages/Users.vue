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
                        <div class="col-md-3">
                            <div class="form-group">
                                <select class="form-control" v-model="search.searchField">
                                    <option v-for="header in headers" :value="header.value">{{ header.name }}</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-3">
                                <div class="form-group">
                                    <select class="form-control" v-model="search.searchOper">
                                        <option value="eq" selected="selected">equal (=)</option>
                                        <option value="ne">not equal (<>)</option>
                                        <option value="bw">begins with (text%)</option>
                                        <option value="ew">ends with (%text)</option>
                                        <option value="cn">contains (%text%)</option>
                                        <option value="gt">is greater than (>)</option>
                                        <option value="ge">is greater than or equal to (>=)</option>
                                        <option value="lt">is less than (<)</option>
                                        <option value="le">is less than or equal to (<=)</option>
                                    </select>
                                </div>
                            </div>
                        <div class="col-md-3">
                            <div class="form-group ">
                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder="Searching" aria-describedby="basic-addon2" v-model="search.searchString">
                                    <div class="input-group-append">
                                        <span class="input-group-text"><a href="javascript:;" v-on:click="filter">Search</a></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <button type="button" class="btn btn-light float-right" style="margin-left: 5px;"><i class="fal fa-file-excel"></i></button>
                            <button type="button" class="btn btn-light float-right" style="margin-left: 5px;"><i class="fal fa-file-pdf"></i></button>
                            <button type="button" class="btn btn-light float-right" style="margin-left: 5px;" v-on:click="reload()"><i class="fal fa-repeat-alt"></i></button>
                            <button type="button" class="btn btn-light float-right" style="margin-left: 5px;"><i class="fal fa-plus"></i></button>
                        </div>
                    </div>
                    <p style="margin-bottom: 10px;"></p>
                    <div class="row">
                        <!-- <div class="col-md-12">&nbsp;&nbsp;</div> -->
                        <div class="col-md-12">
                            <div class="table-responsive-lg">
                                <table class="table table-bordered m-0">
                                    <thead class="bg-primary-400">
                                        <tr>
                                            <th>User Name</th>
                                            <th>Full Name</th>
                                            <th>Email</th>
                                            <th>Status Active</th>
                                            <th><center>Action</center></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="item in items">
                                            <td>{{ item.user_name }}</td>
                                            <td>{{ item.user_full_name }}</td>
                                            <td>{{ item.user_email }}</td>
                                            <td>{{ item.user_status }}</td>
                                            <td>
                                                <center>
                                                <a href="javascript:;" class="btn btn-primary btn-xs btn-icon waves-effect waves-themed">
                                                    <i class="fal fa-edit"></i>
                                                </a>  
                                                <a href="javascript:;" class="btn btn-danger btn-xs btn-icon waves-effect waves-themed">
                                                    <i class="fal fa-trash-alt"></i>
                                                </a>
                                                </center>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <p style="margin-bottom: 10px;"></p>
                    <div class="row">                        
                        <div class="col-md-9">Page {{ page }} of {{ total_page }} ( {{ total }} records )</div>
                        
                        <div class="col-md-1">
                            <button type="button" class="btn btn-primary col-md-12" v-on:click="prevPage()" v-bind:disabled="isbtnPagePrev">Prev</button>
                        </div>       
                        <div class="col-md-1">
                                <input type="text" class="form-control col-md-12" v-model="page" style="text-align: center;">
                            </div>
                        <div class="col-md-1">
                            <button type="button" class="btn btn-primary col-md-12" v-on:click="nextPage()" v-bind:disabled="isbtnPageNext">Next</button>
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
                page: 1,
                records: 0,
                total: 0,
                total_page: 0,
                headers: [{ name: 'User Name', value: 'user_name'}, 
                          { name: 'Full Name', value: 'user_full_name'}, 
                          { name: 'Email', value: 'user_email'}, 
                          { name: 'Status Active', value: 'user_status'}],
                search:[{searchField:'', searchOper:'', searchString:''}],
                isbtnPageNext: false,
                isbtnPagePrev: true
            }
        },
        // on create 
        created() {
            //first create load grid
            this.loadGrid();
        },
        methods: {
            filter(){
                this.page = 1;
                this.loadGrid();
            },
            reload(){
                this.page = 1;
                this.isbtnPageNext= false;
                this.isbtnPagePrev= true;
                this.search.searchField = '';
                this.search.searchOper = '';
                this.search.searchString = '';
                this.loadGrid();
            },
            loadGrid() {
                let param = this.queryString({
                    'token': this.$store.state.token,
                    'page': this.page,
                    'searchField': this.search.searchField,
                    'searchOper': this.search.searchOper,
                    'searchString': this.search.searchString
                });

                axios({
                    method: 'get',
                    url: this.base_Url + 'api/admin/users?' + param
                }).then((res) => {

                    this.items = res.data.rows;
                    this.page = res.data.page;
                    this.records = res.data.records;
                    this.total = res.data.total;
                    this.total_page = res.data.total_page;

                }, (error) => {

                });
            },
            nextPage(){
                
                this.page++;
                this.isbtnPagePrev = false;
                this.loadGrid();
                
                if(this.page == this.total_page){
                    this.isbtnPageNext = true;
                }
                
                
            },
            prevPage(){
           
                this.page--;
                this.isbtnPageNext = false;
                this.loadGrid();
                
                if(this.page == 1){
                    this.isbtnPagePrev = true;
                }
            }
        }

    }
</script>