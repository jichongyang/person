<template>
<div class="chatUs">
    <div id="container">
       
    </div>
    <ul class="chatList">
       <li @click="showList(0)"> 
        <img src="./1.png" alt="" v-if="this.index!=0">
        <img src="./phone-1.png" alt=""  v-if="this.index==0">
       </li>
       <li @click="showList(1)">
        <img src="./2.png" alt="" v-if="this.index!=1">
        <img src="./wechat-1.png" alt="" v-if="this.index==1">
       </li>
       <li @click="showList(2)">
        <img src="./3.png" alt="" v-if="this.index!=2">
        <img src="./wb-1.png" alt="" v-if="this.index==2">

       </li>
       <li @click="showList(3)" >
        <img src="./4.png" alt="" v-if="this.index!=3">
        <img src="./qq-1.png" alt="" v-if="this.index==3">
       </li>
       <li @click="showList(4)">
        <img src="./5.png" alt="" v-if="this.index!=4">
        <img src="./gzh-1.png" alt="" v-if="this.index==4">
       </li>
    </ul>
    <div class="chatInfoBack">
    <div class="swiper-container">
        <div class="swiper-wrapper">
         <div class="swiper-slide">
            <div class="chatInfo" :style="{backgroundImage: 'url(' + imgs + ')' }" >
             <img src="./corner.png" alt="" class="corner">
                 <div class="info infoleft" > 
                   <img src="./phone-2.png" alt="" srcset="./phone-2.png 2x">
                    <p>
                    <span>手机号码</span>
                    <span>18500357704 <a href="tel:18500357704" class="tel">拨打电话</a></span>
                    </p>
                </div>
            </div>
        </div>
        <div class="swiper-slide">
            <div class="chatInfo" :style="{backgroundImage: 'url(' + imgs + ')' }" >
             <img src="./corner.png" alt="" class="corner">
                <div class="info infoleft"  > 
                    <img src="./wechat-2.png" alt="" srcset="./wechat-2.png 2x">
                    <p>
                    <span>微信号</span>
                    <span>6964958@qq.com</span>
                    </p>
                </div>
            </div>
            </div>
        
         <div class="swiper-slide">
            <div class="chatInfo" :style="{backgroundImage: 'url(' + imgs + ')' }" >
               <img src="./corner.png" alt="" class="corner">
                 <div class="info infoleft"  > 
                    <img src="./wb-2.png" alt="" srcset="./wb-2.png 2x">
                    <p>
                    <span>微博</span>
                    <span>18500357704</span>
                    </p>
                </div>
            </div>
        </div>
         <div class="swiper-slide">
            <div class="chatInfo" :style="{backgroundImage: 'url(' + imgs + ')' }" >
               <img src="./corner.png" alt="" class="corner">
                 <div class="info infoleft"  > 
                    <img src="./qq-2.png" alt=""  srcset="./qq-2.png 2x">
                    <p>
                    <span>QQ</span>
                    <span>18500357704</span>
                    </p>
                </div>
            </div>
        </div>
        <div class="swiper-slide">
            <div class="chatInfo" :style="{backgroundImage: 'url(' + imgs + ')' }" >
               <img src="./corner.png" alt="" class="corner">
                <div class="info infoleft"  > 
                    <img src="./gzh-2.png" alt="" srcset="./gzh-2.png 2x">
                    <p>
                    <span>订阅号</span>
                    <span>法律之声 <a href="#" class="go">前往</a></span>
                    </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

  
    </div>
    </div>
</template>
<script>
import { TMap } from '../../TMap.js'
import img from './bg2.png'
import Swiper from 'swiper'
import '../../../static/css/swiper-3.3.1.min.css'
export default {
    data() {
        return {
              imgs:img,
              index:0
        }
    },
  
    methods: {
        showList(n){
              this.index=n;
              this.swiperSide(n);
                
        },
        swiperSide(m){
            let that=this;
             var swiper = new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                paginationClickable: true,
                speed: 600,
                slidesPerView: 'auto',
                centeredSlides: true,
                autoplay: false,
                onSlideChangeStart: function(swiper){
                 that.index=Math.abs(swiper.activeIndex);
                 if(that.index==5){
                     that.index=0;
                 }
                     console.log("------"+that.index)
              }
            });
            swiper.slideTo(m)
            
        }
    },
    created: function () {
    },
     mounted() {
             this.swiperSide()
            TMap('YGIBZ-27VWP-4OMDP-LMBJL-WNPRK-NXFKV').then(qq => {
            var map = new qq.maps.Map(document.getElementById("container"), {
                // 地图的中心地理坐标。
                center: new qq.maps.LatLng(39.916527, 116.397128),
                 zoom: 8
            });
        });
           
        }
}
</script>
<style scoped>
.chatUs{
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
   
}
#container {
   width:375px;
   height:332px;
}
.chatUs .chatList{
    width:100%;
    display:flex;
   justify-content:space-between;
	align-items:center;
    padding:0 24px;
    box-sizing:border-box;
    margin:21px 0;
    
}
.chatUs .chatList li{
    flex:1;
    line-height:50px;
}
.chatUs .chatList li img{
    width:100%;
    vertical-align:middle
}
.chatUs .chatInfoBack{
     width:329px;
    height:158px;
     
   position:relative;
       
    margin:0px auto;
   
    margin-top:22px;
}
.chatUs .chatInfoBack .chatInfo{
  height:158px;
   background-size:cover;
   background-position:center center;
    border-radius: 2px;
   box-shadow: 0 13px 17px 0 rgba(131,125,139,0.38);
border-radius: 2px;
background-image: linear-gradient(-132deg, #80899E 0%, #555E75 100%);
}
.chatUs .chatInfoBack .chatInfo .corner{
    max-width:30px;
    max-height:16px;
    position:absolute;
    left:20px;
    top:-12px;

}
.chatUs .chatInfoBack .chatInfo .info{
    position:absolute;
    top:60.5px;
    left:70.4px;

}
 .chatUs .chatInfoBack .chatInfo .infoleft{
     top:54.5px;
     left:43px;
 }
 .chatUs .chatInfoBack .chatInfo .infoleft p span{
     font-size:14px;
 }
.chatUs .chatInfoBack .chatInfo .info img{
     width:43px;
     height:43px;
     float:left;
     vertical-align:middle
     
}

.chatUs .chatInfoBack .chatInfo .info p{
    display:inline-block;
    color:#fff;
    font-size:16px;
   text-align:left;
   padding-left:10px;
    
}
.chatUs .chatInfoBack .chatInfo .info p span{
    display:block;
    font-family: PingFangSC-Regular;
}
.chatUs .chatInfoBack .chatInfo .info p span:nth-child(2){
    margin-top:10px;
}
.chatUs .chatInfoBack .chatInfo .info p span:nth-child(2) .tel{
     display:inline-block;
     width:70px;
     height:24px;
     text-align:center;
     line-height:24px;
     color:#fff;
     background: #4A90E2;
border-radius: 3px;
font-size:14px;
margin-left:13px;
font-family: PingFangSC-Regular;

}
.chatUs .chatInfoBack .chatInfo .info p span:nth-child(2) .go{
    display:inline-block;
    width:60px;
    height:24px;
    line-height:24px;
    color:#fff;
    font-size:12px;
    background: #4A90E2;
border-radius: 3px;
text-align:center;
margin-left:14px;
}
</style>