<template>
    <div class="page-wrapper">
        <div class="page-inner bg-brand-gradient">
            <div class="page-content-wrapper bg-transparent m-0">
                <div class="height-10 w-100 shadow-lg px-4 bg-brand-gradient">
                    <div class="d-flex align-items-center container p-0">
                        <div class="page-logo width-mobile-auto m-0 align-items-center justify-content-center p-0 bg-transparent bg-img-none shadow-0 height-9">
                            <a href="javascript:void(0)" class="page-logo-link press-scale-down d-flex align-items-center">
                                <img src="assets/img/logo.png" alt="SmartAdmin WebApp" aria-roledescription="logo">
                                <span class="page-logo-text mr-1">IBSS WebApp</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="flex-1" style="background: url(assets/img/svg/pattern-1.svg) no-repeat center bottom fixed; background-size: cover;">
                    <div class="container py-4 py-lg-5 my-lg-5 px-4 px-sm-0">
                        <div class="row align-items-center justify-content-center">
                            

                            <div class="col-sm-12 col-md-6 col-lg-5 col-xl-4">
                                <!-- <h1 class="text-white fw-300 mb-3 d-sm-block d-md-none">
                                    Secure login
                                </h1> -->
                                <div class="card p-4 rounded-plus bg-faded">
                                    <form id="js-login" novalidate="">
                                        <template v-html="HtmlError"></template>

                                        <div class="form-group">
                                            <label class="form-label" for="username">Username</label>
                                            <input type="text" v-model="username" class="form-control form-control-lg" placeholder="username" id="username" required>
                                            <div class="invalid-feedback">No, you missed this one.</div>
                                            <!-- <div class="help-block">Your unique username to app</div> -->
                                        </div>
                                        <div class="form-group">
                                            <label class="form-label" for="password">Password</label>
                                            <input type="password" v-model="password" class="form-control form-control-lg" placeholder="password" id="password" required>
                                            <div class="invalid-feedback">Sorry, you missed this one.</div>
                                            <!-- <div class="help-block">Your password</div> -->
                                        </div>
                                        <!-- <div class="form-group text-left">
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="rememberme">
                                                <label class="custom-control-label" for="rememberme"> Remember me</label>
                                            </div>
                                        </div>-->
                                        <div class="row no-gutters">
                                            <div class="col-lg-12 pr-lg-1 my-2">
                                                <!-- <router-link to="/module"> -->
                                                    <button id="js-login-btn" type="button" @click.prevent="login" class="btn btn-danger btn-block btn-lg">Login</button>
                                                <!-- </router-link> -->
                                            </div>
                                            <!-- <div class="col-lg-6 pl-lg-1 my-2">
                                                <button type="reset" class="btn btn-danger btn-block btn-lg">Reset</button>
                                            </div> -->
                                        </div>
                                        <div class="alert alert-danger alert-dismissible fade show" role="alert" v-show="isError">
                                            <!-- <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                                <span aria-hidden="true"><i class="fal fa-times"></i></span>
                                            </button> -->
                                            <strong>Error! </strong> {{msgError}}
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="position-absolute pos-bottom pos-left pos-right p-3 text-center text-white">
                            2019 © Telkom Indonesia 
                        </div>
                        <p id="js-color-profile" class="d-none">
                            <span class="color-primary-50"></span>
                            <span class="color-primary-100"></span>
                            <span class="color-primary-200"></span>
                            <span class="color-primary-300"></span>
                            <span class="color-primary-400"></span>
                            <span class="color-primary-500"></span>
                            <span class="color-primary-600"></span>
                            <span class="color-primary-700"></span>
                            <span class="color-primary-800"></span>
                            <span class="color-primary-900"></span>
                            <span class="color-info-50"></span>
                            <span class="color-info-100"></span>
                            <span class="color-info-200"></span>
                            <span class="color-info-300"></span>
                            <span class="color-info-400"></span>
                            <span class="color-info-500"></span>
                            <span class="color-info-600"></span>
                            <span class="color-info-700"></span>
                            <span class="color-info-800"></span>
                            <span class="color-info-900"></span>
                            <span class="color-danger-50"></span>
                            <span class="color-danger-100"></span>
                            <span class="color-danger-200"></span>
                            <span class="color-danger-300"></span>
                            <span class="color-danger-400"></span>
                            <span class="color-danger-500"></span>
                            <span class="color-danger-600"></span>
                            <span class="color-danger-700"></span>
                            <span class="color-danger-800"></span>
                            <span class="color-danger-900"></span>
                            <span class="color-warning-50"></span>
                            <span class="color-warning-100"></span>
                            <span class="color-warning-200"></span>
                            <span class="color-warning-300"></span>
                            <span class="color-warning-400"></span>
                            <span class="color-warning-500"></span>
                            <span class="color-warning-600"></span>
                            <span class="color-warning-700"></span>
                            <span class="color-warning-800"></span>
                            <span class="color-warning-900"></span>
                            <span class="color-success-50"></span>
                            <span class="color-success-100"></span>
                            <span class="color-success-200"></span>
                            <span class="color-success-300"></span>
                            <span class="color-success-400"></span>
                            <span class="color-success-500"></span>
                            <span class="color-success-600"></span>
                            <span class="color-success-700"></span>
                            <span class="color-success-800"></span>
                            <span class="color-success-900"></span>
                            <span class="color-fusion-50"></span>
                            <span class="color-fusion-100"></span>
                            <span class="color-fusion-200"></span>
                            <span class="color-fusion-300"></span>
                            <span class="color-fusion-400"></span>
                            <span class="color-fusion-500"></span>
                            <span class="color-fusion-600"></span>
                            <span class="color-fusion-700"></span>
                            <span class="color-fusion-800"></span>
                            <span class="color-fusion-900"></span>
                        </p>
                        <!-- END Color profile -->
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
                username: '',
                password: '',
                isError: false,
                msgError: ''
            }
        },
        // on create 
        created() {
            //cek login
            if(this.$store.getters.isAuth){
                this.$router.push({ name: 'home' });
            }
        },
        // methods
        methods: {
            login() {

                this.isError = false;
                
                var params = new URLSearchParams();
                params.append('user_name', this.username);
                params.append('user_password', this.password);

                axios({
                    method: 'post',
                    url: this.base_Url + 'api/admin/auth/login',
                    data: params
                }).then((res) => {
                    
                    // console.log(res.data);
                    if (res.data.success) {                        

                        localStorage.setItem('token', res.data.token);
                        localStorage.setItem('user_id', res.data.user_id);
                        localStorage.setItem('user_name', res.data.user_name);
                        localStorage.setItem('user_full_name', res.data.user_full_name);
                        this.$store.commit('SET_TOKEN', res.data.token, { root: true });
                        this.$store.commit('SET_USER_ID', res.data.user_id, { root: true });
                        this.$store.commit('SET_USERNAME', res.data.user_name, { root: true });
                        this.$store.commit('SET_FULLNAME', res.data.user_full_name, { root: true });
                        
                        this.$router.push({ name: 'home' });
                    }else{
                        this.isError = true;
                        this.msgError = res.data.message;
                        this.clearError();
                    }
                }, (error) => {
                    this.isError = true;
                    this.msgError = 'Request API Error';
                    this.clearError();
                });

                
            },

            clearError(){
                var self = this;
                setTimeout(function(){                         
                    self.isError = false;
                    self.msgError = '';
                },3000);
            }

        }

    }
</script>