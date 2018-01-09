<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="str in listImg" >
                <img :src="str.url" alt="">
            </div>
        </div>
        <div class="swiper-pagination swiper-pagination-white"></div>
    </div>
</template>

<script>
    import Swiper from 'swiper';
    import '../../../static/css/swiper-3.3.1.min.css';
    export default {
        props: ['listImg'],
        mounted() {
             this.$nextTick(function(){
               var swiper = new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                paginationClickable: true,
                loop: true,
                speed: 600,
                spaceBetween: 8,
                slidesPerView: 'auto',
               centeredSlides: true,
                autoplay: 500,
                observer:true,//修改swiper自己或子元素时，自动初始化swiper
                observeParents:true,//修改swiper的父元素时，自动初始化swiper
                 onTouchEnd: function() {
                    swiper.startAutoplay()
                }
            });
             })
           
        }
    }
</script>

<style  scoped>
    .swiper-container {
        width: 100%;
        margin:11px 0;
    }
      .swiper-container    .swiper-wrapper {
             width:100%;
            height:115px;
    }
  .swiper-container    .swiper-wrapper .swiper-slide{
      width:235px;
      height:100%;
  }
    .swiper-container  .swiper-wrapper  .swiper-slide   img {
               width:235px;
               height:115px;
     }
    
    
</style>