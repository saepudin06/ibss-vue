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

            <div class="flex-1" style="background: url(img/svg/pattern-1.svg) no-repeat center bottom fixed; background-size: cover;">
                <div class="container py-4 py-lg-5 my-lg-5 px-4 px-sm-0">
                    <div class="row">
                        <div class="col-sm-12">
                        <div class="align-items-center justify-content-center text-center">
                            <h1 class="page-error" style="color: #fff !important;">
                                ERROR <span>404</span>
                                <small class="fw-500">
                                    Something <u>went</u> wrong!
                                </small>
                            </h1>
                            <h3 class="fw-500 mb-5">
                                You have experienced a technical error. We apologize.
                            </h3>
                            <h4>
                                We are working hard to correct this issue. Please wait a few moments and try your search again.
                                <br>In the meantime, check out whats new on SmartAdmin WebApp:
                            </h4>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>    
<!-- END Page Wrapper -->
</template>

<script>
    export default {

    }
</script>