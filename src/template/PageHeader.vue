<template>
    <header class="page-header" role="banner">
        <!-- we need this logo when user switches to nav-function-top -->
        <div class="page-logo">
            <a href="javascript:;" class="page-logo-link press-scale-down d-flex align-items-center position-relative" data-toggle="modal" data-target="#modal-shortcut">
                <img src="assets/img/logo.png" alt="IBSS WebApp" aria-roledescription="logo">
                <span class="page-logo-text mr-1">IBSS WebApp</span>
                <span class="position-absolute text-white opacity-50 small pos-top pos-right mr-2 mt-n2"></span>
                <i class="fal fa-angle-down d-inline-block ml-1 fs-lg color-primary-300"></i>
            </a>
        </div>
        <!-- DOC: nav menu layout change shortcut -->
        <div class="hidden-md-down dropdown-icon-menu position-relative">
            <a href="javascript:;" class="header-btn btn js-waves-off" data-action="toggle" data-class="nav-function-hidden" title="Hide Navigation">
                <i class="ni ni-menu"></i>
            </a>
            <ul>
                <li>
                    <a href="javascript:;" class="btn js-waves-off" data-action="toggle" data-class="nav-function-minify" title="Minify Navigation">
                        <i class="ni ni-minify-nav"></i>
                    </a>
                </li>
                <li>
                    <a href="javascript:;" class="btn js-waves-off" data-action="toggle" data-class="nav-function-fixed" title="Lock Navigation">
                        <i class="ni ni-lock-nav"></i>
                    </a>
                </li>
            </ul>
        </div>
        <!-- DOC: mobile button appears during mobile width -->
        <div class="hidden-lg-up">
            <a href="javascript:;" class="header-btn btn press-scale-down" data-action="toggle" data-class="mobile-nav-on">
                <i class="ni ni-menu"></i>
            </a>
        </div>
        <!-- <div class="search">
            <form class="app-forms hidden-xs-down" role="search" action="page_search.html" autocomplete="off">
                <input type="text" id="search-field" placeholder="Search for anything" class="form-control" tabindex="1">
                <a href="javascript:;" onclick="return false;" class="btn-danger btn-search-close js-waves-off d-none" data-action="toggle" data-class="mobile-search-on">
                    <i class="fal fa-times"></i>
                </a>
            </form>
        </div> -->
        <!-- <div> -->
        <h4>Invoice Non Pots</h4>
        <!-- </div> -->
        <div class="ml-auto d-flex">
            <!-- activate app search icon (mobile) -->
            <!-- <div class="hidden-sm-up">
                <a href="javascript:;" class="header-icon" data-action="toggle" data-class="mobile-search-on" data-focus="search-field" title="Search">
                    <i class="fal fa-search"></i>
                </a>
            </div> -->
            
            <!-- app user menu -->
            <div>
                <a href="javascript:;" data-toggle="dropdown" title="drlantern@gotbootstrap.com" class="header-icon d-flex align-items-center justify-content-center ml-2">
                    <img src="assets/img/demo/avatars/avatar-m.png" class="profile-image rounded-circle">
                    <!-- you can also add username next to the avatar with the codes below:
                    <span class="ml-1 mr-1 text-truncate text-truncate-header hidden-xs-down">Me</span>
                    <i class="ni ni-chevron-down hidden-xs-down"></i> -->
                </a>
                <div class="dropdown-menu dropdown-menu-animated dropdown-lg">
                    <div class="dropdown-header bg-trans-gradient d-flex flex-row py-4 rounded-top">
                        <div class="d-flex flex-row align-items-center mt-1 mb-1 color-white">
                            <span class="mr-2">
                                <img src="assets/img/demo/avatars/avatar-m.png" class="rounded-circle profile-image">
                            </span>
                            <div class="info-card-text">
                                <div class="fs-lg text-truncate text-truncate-lg">Administrator</div>
                                <!-- <span class="text-truncate text-truncate-md opacity-80">drlantern@gotbootstrap.com</span> -->
                            </div>
                        </div>
                    </div>
                    <div class="dropdown-divider m-0"></div>
                    <a href="javascript:;" class="dropdown-item" data-toggle="modal" data-target=".js-modal-settings">
                        <span data-i18n="drpdwn.settings">Settings</span>
                    </a>                                    
                    <div class="dropdown-divider m-0"></div>
                    <a class="dropdown-item fw-500 pt-3 pb-3" href="javascript:;" @click="logout()">
                        <span data-i18n="drpdwn.page-logout">Logout</span>
                        <!-- <span class="float-right fw-n">&commat;codexlantern</span> -->
                    </a>
                </div>
            </div>
        </div>
    </header>
</template>
<script>
    import axios from 'axios';

    export default {
        data() {
            return {}
        },
        created() {},
        methods: {
            logout() {

                let param = this.queryString({
                    'token': this.$store.state.token
                });

                axios({
                    method: 'get',
                    url: this.base_Url +'api/admin/auth/logout?'+param
                }).then((res) => {
                    
                    // console.log(res.data);
                    if (res.data.success) {                        

                        localStorage.removeItem('token');
                        localStorage.removeItem('user_id');
                        localStorage.removeItem('user_name');
                        localStorage.removeItem('user_full_name');
                        this.$store.commit('SET_TOKEN', '', { root: true });
                        this.$store.commit('SET_USER_ID', '', { root: true });
                        this.$store.commit('SET_USERNAME', '', { root: true });
                        this.$store.commit('SET_FULLNAME', '', { root: true });
                        
                        // console.log(this.$router);
                        // this.$router.push({ name: 'login' });
                        location.reload();
                    }
                }, (error) => {
                    
                });
            }
        }
    }
</script>