<template>
    <!-- BEGIN Page Wrapper -->
<div class="page-wrapper">
    <div class="page-inner">
        <!-- BEGIN Left Aside -->
        <div-page-sidebar ref='divpageside'></div-page-sidebar>
        <!-- END Left Aside -->
        <div class="page-content-wrapper">
            <!-- BEGIN Page Header -->
            <div-page-header ref='divpageheader'></div-page-header>
            <!-- END Page Header -->
            <!-- BEGIN Page Content -->
            <!-- the #js-page-content id is needed for some plugins to initialize -->
            <main id="js-page-content" role="main" class="page-content">
                <div-page-module ref='divpagemodule'></div-page-module>
                <transition name="slide-fade"> 
                    <!-- <keep-alive> -->
                        <component v-bind:is="component" />
                    <!-- </keep-alive> -->
                </transition>
            </main>
            <!-- this overlay is activated only when mobile menu is triggered -->
            <div class="page-content-overlay" data-action="toggle" data-class="mobile-nav-on"></div>
            <!-- END Page Content -->
            <!-- BEGIN Page Footer -->
            <div-page-footer  ref='divpagefooter'></div-page-footer>
            <!-- END Page Footer -->
            <!-- BEGIN Shortcuts -->
            <div class="modal fade modal-backdrop-transparent" id="modal-shortcut" tabindex="-1" role="dialog" aria-labelledby="modal-shortcut" aria-hidden="true">
                <div class="modal-dialog modal-dialog-top modal-transparent" role="document">
                    <div class="modal-content">
                        <div class="modal-body">
                            <ul class="app-list w-auto h-auto p-0 text-left">
                                <li>
                                    <a href="intel_introduction.html" class="app-list-item text-white border-0 m-0">
                                        <div class="icon-stack">
                                            <i class="base base-7 icon-stack-3x opacity-100 color-primary-500 "></i>
                                            <i class="base base-7 icon-stack-2x opacity-100 color-primary-300 "></i>
                                            <i class="fal fa-home icon-stack-1x opacity-100 color-white"></i>
                                        </div>
                                        <span class="app-list-name">
                                              Home
                                          </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="page_inbox_general.html" class="app-list-item text-white border-0 m-0">
                                        <div class="icon-stack">
                                            <i class="base base-7 icon-stack-3x opacity-100 color-success-500 "></i>
                                            <i class="base base-7 icon-stack-2x opacity-100 color-success-300 "></i>
                                            <i class="ni ni-envelope icon-stack-1x text-white"></i>
                                        </div>
                                        <span class="app-list-name">
                                              Inbox
                                          </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="intel_introduction.html" class="app-list-item text-white border-0 m-0">
                                        <div class="icon-stack">
                                            <i class="base base-7 icon-stack-2x opacity-100 color-primary-300 "></i>
                                            <i class="fal fa-plus icon-stack-1x opacity-100 color-white"></i>
                                        </div>
                                        <span class="app-list-name">
                                              Add More
                                          </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <!-- END Shortcuts -->
            <!-- BEGIN Color profile -->
            <!-- this area is hidden and will not be seen on screens or screen readers -->
            <!-- we use this only for CSS color refernce for JS stuff -->
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
<!-- END Page Wrapper -->
</template>

<script>
    import PageSidebar from './template/PageSidebar.vue'
    import PageHeader from './template/PageHeader.vue'
    import PageModule from './template/PageModule.vue'
    import PageFooter from './template/PageFooter.vue'
    import PageUsers from './pages/Users.vue'
    import PageDashboard from './pages/Dashboard.vue'

    export default {
        data() {
            return {
                component: "Dashboard"
            }
        },
        created() {},
        components: {
            divPageSidebar : PageSidebar,
            divPageHeader : PageHeader,
            divPageModule : PageModule,
            divPageFooter : PageFooter,
            Dashboard : PageDashboard,
            Users : PageUsers
        },
        methods: {
            changeComponent(nameComponent){
                this.component = nameComponent;
            }
        }
    }
</script>
<style>
    /* Enter and leave animations can use different */
    /* durations and timing functions.              */
    .slide-fade-enter-active {
        transition: all .3s ease;
    }
    .slide-fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active below version 2.1.8 */ {
        transform: translateX(10px);
        opacity: 0;
    }
</style>