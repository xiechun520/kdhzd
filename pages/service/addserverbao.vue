<template>
	<view :class="{'xuanfu':curIndex}">
		<cu-custom bgColor="bg-thame" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">添加服务包</block>
		</cu-custom>
		<view class="input-group card-menus">
			<view class="input-row">
				<input class="m-input" type="text" clearable focus v-model="cpname" placeholder="请输入服务包名称" />
			</view>
			<view class="input-row border">
				<input class="m-input" type="text" clearable v-model="oldprice" placeholder="请输入原报价" />
			</view>
			<view class="input-row border">
				<input class="m-input" type="text" clearable v-model="newprice" placeholder="请输入优惠价" />
			</view>
			<view class="input-row border" style="position: relative; display: inherit;">
				<button type="" class="addbutton" @tap="select">添加服务项</button>
				<view class="fwlist">
					
					<view class="" v-for="(it,index) in fwlb" :key = "index">
						<text class="text-df margin-right">{{it.name}}</text>
						<text class="margin-left">{{it.server}}</text>
						<text style="color: red; font-size: 24upx; margin-left: 30upx;"> {{it.price}} 元</text>
						<text class="cuIcon-roundclose fr" style="font-size: 38upx; color: red;" @tap="del(index)"></text>
					</view>
				</view>
				
				<view class="block xzsj" v-if="curIndex">
					<view class="icosubmit">
						<button type="" class="cu-btn  bg-thame" @tap="quxiao">取消</button>
						<button type="" class="cu-btn  bg-thame fr" @tap="curIndex = false">确定</button>
					</view>
					<checkbox-group @change="checkboxChange">
						<label class="uni-list-cell uni-list-cell-pd" v-for="(item,index) in items" :key="index">
							<view>
								<checkbox  :value="JSON.stringify(item)"/>
							</view>
							<view class="margin-left" style="color: #777777;">{{item.name}}
								<text class="margin-left" style="color: red;">{{item.price}} 元</text>
								<text class="margin-left">{{item.server}}</text>
							</view>
						</label>
					</checkbox-group>
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
				'fwtime':[],
				'newprice':'',
				curIndex:false,
				'servicemode':'',
				ServiceSubject:'',
				description:'',
				imageList:[],
				checked: false,
				fwlb:[],
				items: [{
						name: '服务项一',
						price: '130',
						server:'上门服务'
					},
					{
						name: '服务项二',
						price: '130',
						server:'视频咨询'
					},
					{
						name: '服务项三',
						price: '130',
						server:'图文咨询'
					},
					{
						name: '服务项四',
						price: '130',
						server:'上门送药'
					},
					{
						name: '服务项五',
						price: '130',
						server:'图文咨询'
					},
					{
						name: '服务项六',
						price: '130',
						server:'上门送药'
					}
				]
			}
		},
		methods: {
			quxiao(){
				this.curIndex = !this.curIndex;
				this.fwlb = '';
			},
			select(){
				this.curIndex = !this.curIndex;
			},
			//添加服务项
			checkboxChange(e) {
				//console.log(ee.detail.value)
				var datalist = e.detail.value;
				//console.log(datalist);
				this.fwlb=[];
				for (var i = 0; i < datalist.length; i++) {
					var data = JSON.parse(datalist[i]);
					console.log(data)
					this.fwlb.push(data)
				}
			},
			//删除服务项
			del(index){
				this.fwlb.splice(index, 1);
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
					console.log(this.fwlb)
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
		height: 80upx;
		line-height: 80upx;
		width: 100%;
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
		position: fixed;
		bottom: 0;
		left: 0%;
		z-index: 99;
		width: 100%;
		height: 50%;
		background: #FFFFFF;
		padding: 90upx 30upx 40upx 30upx;
		box-shadow: 0upx 0upx 4upx 4upx #f1f1f1;
	}
	.icosubmit{
		position: absolute;
		top: 12upx;
		left: 0upx;
		width: 100%;
		padding: 0upx 30upx;
	}
	uni-checkbox-group{
		height: 100%;
		overflow-y: scroll;
		padding: 30upx;
	}
	.addbutton{
		width: 100%;
		height: 80upx;
		line-height: 80upx;
		background: #FFFFFF;
		color: #777777;
		border: none;
		outline: none;
		box-shadow: none;
		padding: 0upx;
		text-align: left;
		border-radius: 0upx;
		font-size: 28upx;
	}
	.addbutton:after{
		display: none;
	}
	.uni-list-cell {
		padding: 20upx 10upx;
		justify-content: flex-start;
		display: flex;
		border-bottom: 1px solid #f1f1f1;
	}
	view.xuanfu{
		position: fixed;
		height: 50%;
		overflow-y: scroll;
		width: 100%;
	}
	.fwlist view{
		padding: 20upx 0upx;
		border-bottom: 2upx solid #f1f1f1;
		color: #777777;
	}
</style>
