<template>
		<div id="chatingWrap">
				
				<div class="chatingCont" id="chatingCont" ref="chatingCont">
						<div class="chating" ref="chating" id="chating">
								<div class="my-gallery" data-pswp-uid="1">
										<ul ref="chatList" id="chatList">
												<li >
														<span class="tx">
															<img src="./1.png">
														</span>
														
														<div class="rt">
																<p>你好</p>
											                    <img src="./1.png" class="jiao"  style="display:none"/>
														</div>
												</li>
										</ul>
								</div>
						</div>
				</div>
				<div class="btmSend" ref="btmSend" id="btmSend">
						<input type="text" name="" id="inp"  >
						<button class="send" >发送</button>
				</div>
		</div>


</template>
<script>
	
</script>

<style lang="" scoped>
#chatingWrap {
				width: 100%;
				height: 100%;
		}
		/* 底部发送 */
		#chatingWrap .btmSend {
				width: 100%;
				height: 46px;
				position: absolute;
				left: 0;
				bottom: 0;
				z-index: 999;
				background: #fafafa;
				border-top: 1px solid #efefef;
		}
		
		#chatingWrap .btmSend input {
				width: calc(100% - 70px);
				height: 36px;
				float: left;
				background: #ffffff;
				border: 1px solid #c8c8c8;
				border-radius: 6px;
				box-sizing: border-box;
				margin: 5px 0 0 8px;
				padding: 0 5px;
		}
		
		#chatingWrap .btmSend button {
				width: 50px;
				height: 36px;
				float: right;
				background: #1978d0;
				color: #ffffff;
				border-radius: 6px;
				box-sizing: border-box;
				margin: 5px 8px 0 0;
		}
		
		/* 聊天对话 */
		#chatingWrap .chatingCont {
				position: absolute;
				display: block;
				top: 0px;
				bottom: 0px;
				width: 100%;
		}
		
		#chatingWrap .chatingCont .chating {
				width: 100%;
				height: 100%;
				position: absolute;
				top: 0px;
				bottom: 0px;
				overflow-y: auto;
				-webkit-overflow-scrolling: touch;
		}
		
		#chatingWrap .chatingCont ul {
				width: 100%;
				height: auto;
				padding-bottom: 46px;
				padding-top: 20px;
				
		}
		
		#chatingWrap .chatingCont ul li {
				width: 100%;
				height: auto;
				overflow: hidden;
				padding: 6px 0;
		}
		
		#chatingWrap .chatingCont ul  .tx {
				width: 31px;
				height: 31px;
				border-radius: 100px;
				overflow: hidden;
				float: left;
				margin: 0 0 6px 12px;
		}
		
		#chatingWrap .chatingCont ul li .tx img {
				width: 31px;
				height: 31px;
				float: left;
		}
		
		#chatingWrap .chatingCont ul  li .rt {
				width: auto;
				max-width: 63%;
				float: left;
				height: auto;
				position: relative;
				margin-left: 8px;
				background: #ffffff;
				border: 1px solid #f3f3f3;
				border-radius: 3px;
		}
		
		#chatingWrap .chatingCont ul li .rt p {
				max-width: 100%;
				padding: 9px 11px 9px 11px;
				letter-spacing: 0;
				line-height: 18px;
				text-align: justify;
                 font-size:16px;
				color: #333333;
				box-sizing: border-box;
		}
		
		#chatingWrap .chatingCont ul li .rt .imgMeg {
				max-width: calc(100% - 22px);
				margin: 9px 11px 9px 11px;
		}
		
		#chatingWrap .chatingCont ul li .rt .jiao {
				width: 100%;
		}
		
		#chatingWrap .chatingCont ul li .tx {
				width: 31px;
				height: 31px;
				border-radius: 100px;
				overflow: hidden;
				float: right;
				margin: 0 12px 0 0;
		}
		
		#chatingWrap .chatingCont ul li .tx img {
				width: 31px;
				height: 31px;
				float: left;
		}
		
		#chatingWrap .chatingCont ul li .rt {
				width: auto;
				max-width: 63%;
				float: right;
				height: auto;
				background: #a0e75a;
				border: 1px solid #74be50;
				border-radius: 3px;
				position: relative;
				margin-right: 8px;
		}
		
		#chatingWrap .chatingCont ul li .rt p {
				max-width: 100%;
				padding: 9px 11px 9px 11px;
				letter-spacing: 0;
				line-height: 18px;
				text-align: justify;
				 font-size:16px;
				color: #333333;
				box-sizing: border-box;
		}
		
		#chatingWrap .chatingCont ul li .rt .imgMeg {
				max-width: calc(100% - 22px);
				margin: 9px 11px 9px 11px;
		}
		
		#chatingWrap .chatingCont ul li .rt .jiao {
				height: 10px;
				position: absolute;
				right: -5px;
				top: 9px;
		}
</style>