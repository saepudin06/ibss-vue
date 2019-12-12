<template>
    <div class="row">
        <div class="col-sm-3 col-xl-3">
            <router-link to="/home">
            <div class="p-3 bg-warning-400 rounded overflow-hidden position-relative text-white mb-g">
                <div class="">
                    <h3 class="display-4 d-block l-h-n m-0 fw-500">                                            
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
                        <small class="m-0 l-h-n">Adjustment</small>
                    </h3>
                </div>
                <i class="fal fa-dolly position-absolute pos-right pos-bottom opacity-15 mb-n1 mr-n4" style="font-size: 6rem;"></i>
            </div>
            </router-link>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        },
        created() {},
    }
</script>