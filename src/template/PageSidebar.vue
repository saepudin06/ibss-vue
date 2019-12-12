<template>
    <aside class="page-sidebar list-filter-active">
        <div class="page-logo">
            <a href="javascript:;" class="page-logo-link press-scale-down d-flex align-items-center position-relative" data-toggle="modal" data-target="#modal-shortcut">
                <img src="assets/img/logo.png" alt="IBSS WebApp" aria-roledescription="logo">
                <span class="page-logo-text mr-1">IBSS WebApp</span>
                <span class="position-absolute text-white opacity-50 small pos-top pos-right mr-2 mt-n2"></span>
                <i class="fal fa-angle-down d-inline-block ml-1 fs-lg color-primary-300"></i>
            </a>
        </div>
        <!-- BEGIN PRIMARY NAVIGATION -->
        <nav id="js-primary-nav" class="primary-nav" role="navigation">
            <div class="nav-filter">
                <div class="position-relative">
                    <input type="text" id="nav_filter_input" placeholder="Filter menu" class="form-control" tabindex="0">
                    <a href="javascript:;" class="btn-primary btn-search-close js-waves-off">
                        <i class="fal fa-chevron-up"></i>
                    </a>
                </div>
            </div>
            <div class="info-card">
                <img src="assets/img/card-backgrounds/cover-2-lg.png" class="cover" alt="cover">
                <a href="javascript:;" onclick="return false;" class="pull-trigger-btn" data-action="toggle" data-class="list-filter-active" data-target=".page-sidebar" data-focus="nav_filter_input">
                    <i class="fal fa-angle-down"></i>
                </a>
            </div>
            <ul id="js-nav-menu" class="nav-menu">
                <li>
                    <a href="javascript:;" @click="menuusers('Users')" title="Users" data-filter-tags="users">
                        <i class="fal fa-file"></i>
                        <span class="nav-link-text" data-i18n="nav.users">Users</span>
                    </a>
                </li>
                <li>
                    <a href="javascript:;" title="Modules" data-filter-tags="modules">
                        <i class="fal fa-file"></i>
                        <span class="nav-link-text" data-i18n="nav.modules">Modules</span>
                    </a>
                </li>                
                <li>
                    <a href="javascript:;" title="Roles" data-filter-tags="roles">
                        <i class="fal fa-file"></i>
                        <span class="nav-link-text" data-i18n="nav.roles">Roles</span>
                    </a>
                </li>
            </ul>
            <div class="filter-message js-filter-message bg-success-600"></div>
        </nav>
        <!-- END PRIMARY NAVIGATION -->
    </aside>
</template>

<script>
    export default {
        data() {
            return {}
        },
        created() {},
        methods:{
            menuusers(nameComponent){
                //call method in parent component
                this.$parent.changeComponent(nameComponent);                
            }
        }
    }
</script>