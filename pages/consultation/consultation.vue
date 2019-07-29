<template>
	<view class="">
		<cu-custom :isBacks="true" bgColor="bg-thame">
			<block slot="backText">
				<view class="text-xxl flex justify-center" style="height: 50upx;line-height: 50upx;">
					<text class="cuIcon-location text-white"></text>
					<text class="text-lg text-white">贵阳</text>
				</view>
			</block>
			<block slot="content">
				<view class="cu-bar search">
					<view class="search-form round padding-right-sm text-xl" style="width: 400upx;background-color: #ffffff;opacity: 0.52;">
						<input @focus="InputFocus" @blur="InputBlur" :adjust-position="false" type="text" placeholder=" " confirm-type="search"></input>
						<text class="cuIcon-search  "></text>
					</view>
				</view>
			</block>
			<block slot="right">
				<view class="text-xxl">
					<text class="cuIcon-message text-white margin-lr"></text>
				</view>
			</block>
		</cu-custom>
		<view class="card-menus flexs" v-for="(zx,index) in 10" :key="index">
			<view class="basis-sw">
				<image class="user-img" src="../../static/set/li1.png" mode="aspectFit"></image>
				<view class="margin-top-xs text-sm"style="color: #888888;">
					<image class="user-ico" src="../../static/home/li2.png" mode="aspectFit"></image>
					贵州银江康大
				</view>
			</view>
			<view class="basis-ls">
				<view class="zxtitle text-df text-cut2">
					一看就懂！超实用的防癌检查项目汇为家人搜藏！
				</view>
				<view class="bqico margin-tb-xs">
					<text>癌症</text>
				</view>
				<view class="flexs zx-ft">
					<text>
						<text class="cuIcon-time"></text>
						8分钟前
					</text>
					<text>
						<text class="cuIcon-text"></text>
						400 阅读
					</text>
				</view>
			</view>
		</view>
		<view class="padding">
			
		</view>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				zixun:[
					{
						'fwname': '针灸',
						'orderdate':'5月26',
						'time':'9:30',
						'server':'杨怀'
					},
					{
						'fwname': '送药',
						'orderdate':'5月26',
						'time':'9:30',
						'server':'张扬'
					},
					{
						'fwname': '健美',
						'orderdate':'5月26',
						'time':'9:30',
						'server':'王佳'
					},
					{
						'fwname': '上门输液',
						'orderdate':'5月26',
						'time':'9:30',
						'server':'王凯'
					}
				]
			}
		},
		methods: {
			/* teamorder(){
				uni.navigateTo({
					url: 'teamorder'
				});
			} */
		
			
		}

	}
</script>

<style>
	.user-img{
		width: 200upx;
		height: 140upx;
		border-radius: 10upx;
	}
	.user-ico{
		width: 40upx;
		height: 40upx;
		border-radius: 50%;
		vertical-align: middle;
		margin-right: 6upx;
	}
	.zxtitle{
		color: #666666;
	}
	.bqico text{
		display: inline-block;
		padding: 4upx 8upx;
		box-shadow: 0upx 0upx 4upx 4upx #f1f1f1;
		border-radius: 4upx;
		color: #888888;
		font-size: 24upx;
		margin-right: 6upx;
	}
	.zx-ft{
		font-size: 24upx;
		color: #888888;
	}
</style>
