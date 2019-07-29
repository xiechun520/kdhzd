<template>
	<view>
		<cu-custom bgColor="bg-thame" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">添加服务项</block>
		</cu-custom>
		<view class="input-group card-menus">
			<view class="input-row border">
				<text class="title">产品名称：</text>
				<input class="m-input" type="text" clearable focus v-model="cpname" placeholder="请输入产品名称" />
			</view>
			<view class="input-row border">
				<text class="title">原报价：</text>
				<input class="m-input" type="text" clearable v-model="oldprice" placeholder="请输入原报价" />
			</view>
			<view class="input-row border">
				<text class="title">优惠价：</text>
				<input class="m-input" type="text" clearable v-model="newprice" placeholder="请输入优惠价" />
			</view>
			<view class="input-row border" style="position: relative;">
				<text class="title">服务时间：</text>
				<input class="m-input" type="text" clearable @tap="select" v-model="fwtime" placeholder="请选择时间" />
				<view class="block xzsj" v-if="curIndex">
					<view  v-for="(ft , index) in fwtimeone" :key="index"  @tap="xzsj(ft)">
						{{ft}}
					</view>
				</view>
			</view>
			<view class="input-row border" style="position: relative;">
				<text class="title">适用人群：</text>
				<input class="m-input" type="text" clearable @tap="select1" v-model="fwtime1" placeholder="请选择适用人群" />
				<view class="block xzsj" v-if="curIndex1">
					<view  v-for="(ft , index) in fwtimeone1" :key="index"  @tap="xzsj1(ft)">
						{{ft}}
					</view>
				</view>
			</view>
			<view class="input-row border">
				<text class="title">服务方式：</text>
				<input class="m-input" type="text" clearable v-model="servicemode" placeholder="上门服务" />
			</view>
			<view class="input-row border">
				<text class="title">服务主体：</text>
				<input class="m-input" type="text" clearable v-model="ServiceSubject" placeholder="医生" />
			</view>
			<view class="input-row border" style="position: relative;">
				<text class="title">服务周期：</text>
				<input class="m-input" type="text" clearable @tap="select2" v-model="fwtime2" placeholder="请选择服务周期" />
				<view class="block xzsj" v-if="curIndex2">
					<view  v-for="(ft , index) in fwtimeone2" :key="index"  @tap="xzsj2(ft)">
						{{ft}}
					</view>
				</view>
			</view>
			<view class="feedback margin-top-sm padding-sm">
				<textarea focus v-model="description" placeholder-style="color:#888888;line-height: 23px;" placeholder="产品说明" />
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
		
		<button class="cu-btn lg bg-thame block margin-sm" @tap="submit">提交</button>
		
		<view class="padding">
			
		</view>
		
		
    </view>
</template>

<script>
	export default{
		data() {
			return {
				'cpname':'',
				'oldprice':'',
				'newprice':'',
				'servicemode':'',
				'fwtime':'',
				ServiceSubject:'',
				description:'',
				'fwtime1':'',
				'fwtime2':'',
				imageList:[],
				curIndex: false,
				curIndex1: false,
				curIndex2: false,
				pickerValueArray:[],
				fwtimeone: ["一小时" , "五小时","十小时","一天"],
				fwtimeone1: ["0-12岁" , "12-18岁","18-45岁","45岁以上"],
				fwtimeone2: ["半年" , "一年","两年","两年以上"]
				
				
			}
		},
		methods: {
			select(){
				this.curIndex = !this.curIndex;
			},
			select1(){
				this.curIndex1 = !this.curIndex1;
			},
			select2(){
				this.curIndex2 = !this.curIndex2;
			},
			xzsj(e){
				this.fwtime = e;
				this.curIndex = !this.curIndex;
			},
			xzsj1(e){
				this.fwtime1 = e;
				this.curIndex1 = !this.curIndex1;
			},
			xzsj2(e){
				this.fwtime2 = e;
				this.curIndex2 = !this.curIndex2;
			},
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
					uni.request({
						url: '/imhmp/patientController.do?login',
						method:"POST",//仅为示例，并非真实接口地址。
						data: {
							data: this.phone
						},
						header: {
							'content-type': 'application/x-www-form-urlencoded', 
						},
						success: (res) => {
							console.log(res.data);
							this.text = 'request success';
							 uni.reLaunch({
							    url: '../index/index',
							});
						},
						error: function(xhr, type, errorThrown){
							console.log("error: " + type);
					
						}
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
		height: 76upx;
		line-height: 76upx;
		width: 72%;
		font-size: 28upx;
	}
	.uni-input-placeholder{
		color: #888888;
		font-size: 28upx;
	}
	.input-row{
		display: flex;
		width: 100%;
		font-size: 28upx;
		border-bottom: 1px solid #f1f1f1;
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
    	height: 160upx;
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
	.xzsj{
		position: absolute;
		top: 90upx;
		left: 28%;
		z-index: 99;
		width: 72%;
		height: auto;
		background: #FFFFFF;
		padding: 30upx;
		box-shadow: 0upx 0upx 4upx 4upx #f1f1f1;
	}
	.xzsj view{
		height: 60upx;
		line-height: 60upx;
		color: #777777;
		padding: 0upx 20upx;
		border-bottom: 2upx solid #f1f1f1;
	}
	.xzsj view:last-child{
		border: none;
	}
</style>
