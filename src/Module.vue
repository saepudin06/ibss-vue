<template>
<!-- BEGIN Page Wrapper -->
<div class="page-wrapper">
    <div class="page-inner bg-brand-gradient">
        <div class="page-content-wrapper bg-transparent m-0">
            <div class="height-10 w-100 shadow-lg px-4 bg-brand-gradient">
                <div class="d-flex align-items-center container p-0">
                    <div class="page-logo width-mobile-auto m-0 align-items-center justify-content-center p-0 bg-transparent bg-img-none shadow-0 height-9">
                        <a href="javascript:void(0)" class="page-logo-link press-scale-down d-flex align-items-center">
                            <img src="assets/img/logo.png" alt="SmartAdmin WebApp" aria-roledescription="logo">
                            <span class="page-logo-text mr-1">DWS Tools</span>
                        </a>
                    </div>
                    <!-- <a href="page_register.html" class="btn-link text-white ml-auto">
                        Create Account
                    </a> -->
                    <div class="btn-group text-white ml-auto" role="group">
                        <button id="btnGroupVerticalDrop1" type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Welcome, Administrator
                        </button>
                        <div class="dropdown-menu" aria-labelledby="btnGroupVerticalDrop1">
                            <!-- <a class="dropdown-item" href="javascript:;" id="my-profile"><i class="fal fa-user"></i> My Profile</a> -->
                            <a class="dropdown-item" href="#"><i class="fal fa-share"></i> Log Out</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex-1" style="background: url(assets/img/svg/pattern-1.svg) no-repeat center bottom fixed; background-size: cover;">
                <div class="container py-4 py-lg-5 my-lg-5 px-4 px-sm-0">
                    <div class="row">
                        <div class="col-sm-3 col-xl-3">
                            <router-link to="/home">
                            <div class="p-3 bg-warning-400 rounded overflow-hidden position-relative text-white mb-g">
                                <div class="">
                                    <h3 class="display-4 d-block l-h-n m-0 fw-500">
                                        INV
                                        <small class="m-0 l-h-n">Invoice Non Pots</small>
                                    </h3>
                                </div>
                                <i class="fal fa-gem position-absolute pos-right pos-bottom opacity-15  mb-n1 mr-n4" style="font-size: 6rem;"></i>
                            </div>
                            </router-link>
                        </div>
                        <div class="col-sm-3 col-xl-3">
                            <router-link to="/home">
                            <div class="p-3 bg-success-200 rounded overflow-hidden position-relative text-white mb-g">
                                <div class="">
                                    <h3 class="display-4 d-block l-h-n m-0 fw-500">
                                        EDR
                                        <small class="m-0 l-h-n">EDR Satelite</small>
                                    </h3>
                                </div>
                                <i class="fal fa-lightbulb position-absolute pos-right pos-bottom opacity-15 mb-n5 mr-n6" style="font-size: 8rem;"></i>
                            </div>
                            </router-link>
                        </div>
                        <div class="col-sm-3 col-xl-3">
                            <router-link to="/home">
                            <div class="p-3 bg-info-200 rounded overflow-hidden position-relative text-white mb-g">
                                <div class="">
                                    <h3 class="display-4 d-block l-h-n m-0 fw-500">
                                        CAM
                                        <small class="m-0 l-h-n">Customer Account</small>
                                    </h3>
                                </div>
                                <i class="fal fa-globe position-absolute pos-right pos-bottom opacity-15 mb-n1 mr-n4" style="font-size: 6rem;"></i>
                            </div>
                            </router-link>
                        </div>
                        <div class="col-sm-3 col-xl-3">
                            <router-link to="/home">
                            <div class="p-3 bg-danger-200 rounded overflow-hidden position-relative text-white mb-g">
                                <div class="">
                                    <h3 class="display-4 d-block l-h-n m-0 fw-500">
                                        ADJ
                                        <small class="m-0 l-h-n">Adjustment</small>
                                    </h3>
                                </div>
                                <i class="fal fa-dolly position-absolute pos-right pos-bottom opacity-15 mb-n1 mr-n4" style="font-size: 6rem;"></i>
                            </div>
                            </router-link>
                        </div>
                    </div>
                </div>
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
<!-- END Page Wrapper -->
</template>

<script>
    export default {

    }
</script>