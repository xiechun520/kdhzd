<template>
    <view>
       <cu-custom bgColor="bg-thame" :isBack="true">
       	<block slot="backText">返回</block>
       	<block slot="content">添加团队</block>
       </cu-custom> 
        <view class="input-group card-menus">
            <view class="input-row border">
                <text class="title">团队名称：</text>
                <input class="m-input" type="text" clearable focus v-model="name" placeholder="请输入团队名称"/>
            </view>
			<view class="input-row border">
			    <text class="title">团队所属：</text>
			    <input class="m-input" type="text" clearable  v-model="suoshu" placeholder="请输入团队所属"/>
			</view>
            <view class="input-row border">
                <text class="title">团队地址：</text>
                <input class="m-input" type="text" clearable  v-model="address" placeholder="请输入团队地址"/>
            </view>
			<view class="feedback margin-top-sm padding-sm">
				<textarea focus v-model="best" placeholder-style="color:#888888;line-height: 23px;" placeholder="请描述团队擅长" />
				<view class="imglist">
						<view v-for="(image,index) in imageList" :key="index" >
							<text class="cuIcon-roundclose" @tap="delimg(index)"></text>
							<image class="uni-uploader__img" :src="image" mode="aspectFill" :data-src="image" @tap="previewImage"></image>
						</view>
					</view>
					<view class="padding"></view>
				<image src="../../static/addimg.png" mode="aspectFit" style="width: 160upx;height: 160upx;" @tap="chooseImage"></image>
			</view>
        </view>
		<view class="padding-top">
		</view>
		<button type="" class="cu-btn lg bg-thame block margin-sm" @tap="submit">提交</button>
    </view>
</template>

<script>
	export default{
		data() {
			return {
				'name':'',
				'suoshu':'',
				'address':'',
				'best':'',
				imageList:[]
				
			}
		},
		methods: {
			chooseImage: async function() {
					if (this.imageList.length >= 1) {
						uni.showToast({
						    icon: 'none',
						    title: '每次最多上传一张图片'
						});
						return ;
					}else{
						uni.chooseImage({
							count: 9,
							sizeType: ['original', 'compressed'],
							success: (res) => {
								console.log(res.tempFilePaths)
								this.imageList = this.imageList.concat(res.tempFilePaths);
							}
						})
					}
				},
				previewImage: function(e) {
					var current = e.target.dataset.src
					uni.previewImage({
						current: current,
						urls: this.imageList
					})
				},
				delimg(i){
					var that = this;
					uni.showModal({
						title: '提示',
						content: '是否删除该图片',
						success: function (res) {
							if (res.confirm) {
								that.imageList.splice(i,1)
							} else if (res.cancel) {
								console.log('用户点击取消');
							}
						}
					});
					
				},
				submit(){
					uni.showToast({
					    title: '提交成功'
					});
				}
		}
	}

</script>

<style>
    
    .input-group {
    	background-color: #ffffff;
    	margin-top: 40upx;
    	position: relative;
    }
    
    .input-group::before {
    	position: absolute;
    	right: 0;
    	top: 0;
    	left: 0;
    	height: 1upx;
    	content: '';
    	-webkit-transform: scaleY(.5);
    	transform: scaleY(.5);
    	background-color: #c8c7cc;
    }
    
    .input-group::after {
    	position: absolute;
    	right: 0;
    	bottom: 0;
    	left: 0;
    	height: 1upx;
    	content: '';
    	-webkit-transform: scaleY(.5);
    	transform: scaleY(.5);
    	background-color: #c8c7cc;
    }
    

    .m-input{
    	height: 86upx;
    	line-height: 86upx;
    	width: 72%;
    }
    .uni-input-placeholder{
    	color: #888888;
    	font-size: 28upx;
    }
	.input-row{
		display: flex;
		width: 100%;
		font-size: 28upx;
	}
    .input-row .title {
    	width: 23%;
    	height: 50upx;
    	min-height: 50upx;
    	padding: 15upx 0;
    	padding-left: 30upx;
    	line-height: 50upx;
    }
   
    .feedback textarea{
    	height: 450upx;
    }
    .feedback .imglist{
    	overflow: hidden;
    	display: flex;
    	flex-wrap: wrap;
    	justify-content: flex-start;
    }
    .imglist view{
    	width: 31.3%;
    	height: 0upx;
    	overflow: hidden;
    	margin: 20upx 1%;
    	background: #f1f1f1;
    	padding-top: 31.3%;
    	position: relative;
    }
    .imglist view text{
    	position: absolute;
    	top: 0upx;
    	right: 0upx;
    	color: red;
    	font-size: 50upx;
    	z-index: 99;
    }
    .imglist view image{
    	position: absolute;
    	top: 0upx;
    	left: 0upx;
    	width: 100%;
    	height: 100%;
    }
</style>
