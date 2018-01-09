<template>
<div class="lawyerInfoIndex">
<div class="lawyerInfoWrap" v-if="!this.showCodeNum">
   <div class="lawyerHeader" :style="{backgroundImage: 'url(' + imgs + ')'}">
       <p class="lawyerName">
	     <span>胡艳美</span>
		 中国十大律师
		 <img src="./First-04.png" alt="">
	   </p>
	   <p class="lawyerWork">
	   <img src="./First-01.png" alt="">
	   <span>法律峰会副主任</span>
	   </p>
	    <p class="lawyerWork">
	   <img src="./First-02.png" alt="">
	   <span>湖北文意律师事务所</span>
	   </p>
	    <p class="lawyerWork selfWork">
	   <img src="./First-03.png" alt="">
	   <span class="lawyerSelf">让理性发声，让正义横行，让法治荡尽人间丑恶，让法律畅行</span>
	   </p>
	   <div class="lawyerCode" @click="showCode">
	    <img src="./code.png" alt="">
		<span>二维码</span>
	   </div>
	   <div class="lawyerImg">
	      <img src="./photo.png" alt="">
	   </div>
   </div>
   <ul class="lawyerList">
   <a href="https://baike.baidu.com/item/%E8%83%A1%E5%BB%B6%E7%BE%8E">
        <li>
		    <img src="./icon-lsbk.png">
			<span>律师百科</span>
		</li>
	</a>
	<a href="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzIwMTA4NzQzOQ==&scene=124#wechat_redirect">
		 <li>
		    <img src="./icon-lsjs.png">
			<span>律师纪实</span>
		</li>
	</a>
	<a href="#">
	    <li @click="pushChat">
		    <img src="./icon-lxwm.png">
			<span>在线咨询</span>
		</li>
	</a>
	<a href="#">
	 <li @click="pushUs">
		    <img src="./icon-zxzx.png">
			<span>联系我们</span>
		</li>  
	</a>
		
   </ul>
   <app-banner :listImg="listImg"></app-banner>
   <ul class="lawyerChat">
   <a href="https://zine.la/@%E8%83%A1%E5%BB%B6%E7%BE%8E%E5%BE%8B%E5%B8%88/">
      <li>
	     <img src="./list-lswj.png">
		 <span>律师文集</span>
		 <img src="./Shape.png" alt="" class="next">
	  </li>
	</a>
	   <li>
	     <img src="./list-jdal.png">
		 <span>经典案例</span>
		 <img src="./Shape.png" alt="" class="next">
	  </li>
	   <li>
	     <img src="./list-lswd.png">
		 <span>律师问答</span>
		 <img src="./Shape.png" alt="" class="next">
	  </li>
	   <li>
	     <img src="./list-sp.png">
		 <span>视频节目</span>
		 <img src="./Shape.png" alt="" class="next">
	  </li>
   </ul>

</div>
<div class="backCode" v-if="this.showCodeNum">
  <span @click="closeCode">X</span>
   <div class="imgCode">
     <img src="./codeimg.jpg" alt="">
   </div>
</div>
</div>
</template>
<script>
		import bus from '../../bus'
		import swiper from '../swiper/swiper.vue'
		import a from './banner01.png'
		import b from './banner02.png'
		import c from './banner03.png'
		import img from './bg.png'
		export default {
				
				data() {
						return {
							 listImg: [{
									url: a
								}, {
									url: b
								}, {
									url: c
								}],
								imgs:img,//背景图
                                showCodeNum:false,//点击按钮显示二维码

						}
				},
				methods: {
					 init(){
						 console.log(2222)
					 },
					 showCode(){
                         this.showCodeNum=true;
					 },
					 closeCode(){
						  this.showCodeNum=false;
					 },
					 pushChat(){
						 this.$router.push("/chating")
					 },
					 pushUs(){
						  this.$router.push("/chatUs")
					 }
				},
				mounted() {
						this.init()
				},
				components: {
					'app-banner': swiper
				}
		}
</script>
<style scoped>
    
	.lawyerInfoWrap{
		width:100%;
		height:100%;
		position:absolute;
		top:0;
		bottom:0;
		left:0;
		right:0;
	}
	.lawyerInfoWrap .lawyerHeader{
		width:100%;
		height:158px;
		background-repeat:no-repeat;
		background-size:cover;
		padding-left:15px;
		box-sizing:border-box;	
		position:relative;
	}
	.lawyerInfoWrap .lawyerHeader .lawyerName{
		padding-top:24px;
		width:100%;
		text-align:left;
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #EAC366;
		letter-spacing: 0.4px;
		line-height: 17px;
		box-sizing:border-box;
		padding-bottom:5px;
	}
	.lawyerInfoWrap .lawyerHeader .lawyerName span{
		
		padding-right:6px;
		font-family: PingFangSC-Medium;
		font-size:17px;
		color: #FEC02F;
		letter-spacing: 0.4px;
		line-height: 17px;
	}
	.lawyerInfoWrap .lawyerHeader .lawyerName img{
		width:12px;
		height:12px;
		display:inline-block;
		vertical-align:middle
		
	}
	.lawyerInfoWrap .lawyerHeader .lawyerWork{
		width:100%;
		height:21px;
		padding-top:5px;
		text-align:left;
	}
	.lawyerInfoWrap .lawyerHeader .lawyerWork img{
		width:11px;
		height:14px;
		vertical-align:middle
	}
	.lawyerInfoWrap .lawyerHeader .lawyerWork span{
		font-family: PingFangSC-Regular;
		font-size: 13px;
		color: #F3F3F3;
		line-height: 21px;
		padding-left:11px;
	}
	.lawyerInfoWrap .lawyerHeader .lawyerWork .lawyerSelf{
		width:235px;
		height:42px;
		display:inline-block;
	}
	.lawyerInfoWrap .lawyerHeader .selfWork{
		height:auto;
	}
	.lawyerInfoWrap .lawyerHeader .selfWork img{
		vertical-align:top;
		margin-top:4px;
	}
	.lawyerInfoWrap .lawyerHeader .lawyerCode{
		width:67px;
		height:30px;
		line-height:30px;
		background: rgba(0,0,0,0.50);
		position:absolute;
		top:19px;
		right:0px;
		border-radius:15px 0 0 15px;
		padding-left:6px;
		
	}
	.lawyerInfoWrap .lawyerHeader .lawyerCode img{
		width:16px;
		height:14px;
		vertical-align:middle;
	}
	.lawyerInfoWrap .lawyerHeader .lawyerCode span{
		font-family: PingFangSC-Regular;
		font-size: 9px;
		color: rgba(255,255,255,0.75);
		line-height: 11px;
		margin-left:4px;
	}
	.lawyerInfoWrap .lawyerHeader .lawyerImg{
		width:51px;
		height:55px;
		position:absolute;
		bottom:0px;
		right:16px;
		border: 1px solid #FEC02F;
		border-radius:100%;
		overflow:hidden;
	}
	.lawyerInfoWrap .lawyerHeader .lawyerImg img{
		width:51px;
		height:55px;
		display: block;
		border: 1px solid #FEC02F;
		border-radius:100%;
	}
	.lawyerInfoWrap .lawyerList{
		width:100%;
		display:flex;
		padding-top:12px;
	}
	.lawyerInfoWrap .lawyerList a{
		flex:1;
		text-align:center;
		
	}
	.lawyerInfoWrap .lawyerList a li{
            display:flex;
		flex-direction:column;
	}
	.lawyerInfoWrap .lawyerList li img{
       width:38px;
	   height:38px;
	   margin:0 auto;
	}
.lawyerInfoWrap .lawyerList li span{
   	font-family: PingFangSC-Regular;
		font-size: 13px;
		color: #38414C;
		line-height:15px;
		padding-top:10px;
}
.lawyerInfoWrap .lawyerChat{
	width:100%;
	padding-left:27px;
	padding-right:25px;
	box-sizing:border-box;
}

.lawyerInfoWrap .lawyerChat li{
	padding:23px 0;
	line-height:22px;
	text-align:left;
	border: 1px solid #F6F6F6;
	position:relative;
	}
	.lawyerInfoWrap .lawyerChat li img{
		width:21px;
		height:21px;
		vertical-align:middle;
	}
	.lawyerInfoWrap .lawyerChat li span{
		padding-left:14px;
		font-family: PingFangSC-Regular;
		font-size:16px;
		color: #38414C;
		line-height:21px;
	}
	.lawyerInfoWrap .lawyerChat li .next{
		width:16px;
		height:16px;
		position:absolute;
		right:0px;
		top:23px;
	}
	.backCode{
		width:100%;
		height:100%;
		position:absolute;
		top:0;
		bottom:0;
		left:0;
		right:0;
		background:#000;
	}
	.backCode span{
		font-size:20px;
		color:#ccc;
		position:absolute;
		right:8px;
		top:8px;
	}
	.imgCode{
		width:100%;
		height:100%;
		display:flex;
		justify-content:center;
		 align-items:center;
	}

</style>