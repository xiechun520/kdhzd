<template>
	<view class="">
		<cu-custom bgColor="bg-thame" :isBack="true">
			<block slot="backText"></block>
			<block slot="content">{{title}}</block>
		</cu-custom>
		<view class="card-menus flex justify-start align-center">
			<view class="margin-right">
				<image src="../../static/phone/address.png" mode="aspectFit" style="width: 60upx; height: 60upx;"></image>
			</view>
			<view class="">
				<view class="">
					<text class="text-df margin-right">张华</text>
					<text style="color: #888888;">18506893645</text>
				</view>
				<view class="margin-top-sm" style="line-height: 50upx;">
					贵州省 贵阳市 南明区 花果园 财富广场六号楼35楼3512号
				</view>
			</view>
		</view>
		<view class="orderct">
			<view class="ortitle">
				<image src="../../static/img/logo.png" mode="aspectFit" style="width: 52upx; height: 30upx;"></image>
				<text>贵州银江康大</text>
			</view>
			<view class="padding-sm flex justify-start align-center" v-for="(cr, index) in cart" :key="index">
				<image :src="cr.img" mode="aspectFit" class="margin-right" style="width: 200upx; height: 112upx;"></image>
				<view class="margin-right text-cut2">
					{{cr.title}}
				</view>
				<view class="text-right text-sm">
					<text class="block">￥{{cr.price}}</text>
					<text>X {{cr.num}}</text>
				</view>
			</view>
			<view class="padding-sm">
				<view class="border-top padding-tb flexs">
					<text>配送费</text>
					<text class="color8">
						<s>￥12</s>
						<text>￥8</text>
					</text>
				</view>
				<view class="border-top padding-tb flexs">
					<text>配送抵用券</text>
					<text>
						￥4
					</text>
				</view>
				<view class="border-top padding-tb flexs">
					<text>小计</text>
					<text class="color8">
						￥ 128
					</text>
				</view>
				<view class="border-top padding-tb flexs">
					<text>备注</text>
					<text class="color8">
						5月23号下午2点前送到>
					</text>
				</view>
				<view class="border-top padding-tb flexs">
					<text>发票</text>
					<text class="color8">
						开发票
					</text>
				</view>
			</view>
		</view>
		<view class="padding">
		</view>
		<view class="padding">
		</view>
		<view class="footer flexs text-center">
			<view>已优惠 ￥4</view>
			<view>合计 ￥4</view>
			<view @tap="sure">确认订单</view>
		</view>
	</view>
	
</template>

<script>
	export default{
		data(){
			return{
				title:'详情页',
				cart:[
					{
						img:'../../static/phone/list1.png',
						title:'艾丽 奥利司他胶囊 21粒 瘦身减脂减重减肥药男女抗肥胖',
						price:'45.00',
						num:'2'
					},
					{
						img:'../../static/phone/list2.png',
						title:'艾丽 奥利司他胶囊 21粒 瘦身减脂减重减肥药男女抗肥胖',
						price:'45.00',
						num:'2'
					},
					{
						img:'../../static/phone/list3.png',
						title:'艾丽 奥利司他胶囊 21粒 瘦身减脂减重减肥药男女抗肥胖',
						price:'45.00',
						num:'2'
					}
				]
			}
		},
		onLoad(options) {
			this.title = options.title;
		},
		methods: {
			sure() {
				uni.showToast({
				    title: '已确认'
				});
			}
		},
	}
</script>

<style>
	.orderct{
		overflow: hidden;
		background: #FFFFFF;
		padding: 0upx;
		margin: 20upx 20upx;
		border-radius: 20upx;
		box-shadow: 0upx 0upx 8upx 4upx #eaeaea;
	}
	.ortitle{
		height: 80upx;
		line-height: 80upx;
		color: #FFFFFF;
		background: rgba(166,228,255);
		padding: 0upx 30upx;
	}
	.ortitle image{
		vertical-align: sub;
		margin-right: 10upx;
	}
	.footer{
		position: fixed;
		left: 0upx;
		width: 100%;
		bottom: 0upx;
		background: #8E8E8E;
		color: #FFFFFF;
	}
	.footer view{
		width: 33.3%;
		height: 100upx;
		line-height: 100upx;
		font-size: 32upx;
	}
	.footer view:last-child{
		background: #32C2FF;
	}
</style>
