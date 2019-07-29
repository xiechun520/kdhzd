<template>
	<scroll-view @scroll="scrollTop" scroll-y class="page">
		<view>
			<cu-custom :isBacks="true" :bgColor="showColor?'bg-thame':''">
				<block slot="backText">
					<text class="cuIcon-back backico" @tap="backico()"></text>
				</block>
			</cu-custom>
			
			<swiper style="min-height: 422upx;" :style="[{'margin-top':-CustomBar + 'px'}]" :class="dotStyle?'square-dot':'round-dot'"
			 :indicator-dots="true" :circular="true" :autoplay="true" interval="5000" duration="500">
				<swiper-item v-for="(item,index) in swiperList" :key="index">
					<image style="width: 100%;height: 100%;" :src="item.url" mode="widthFix" v-if="item.type=='image'"></image>
					<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video>
				</swiper-item>
			</swiper>
			<view class="card-menus">
				<view class="">
					<text class="text-xl" style="color: red;">￥ 360</text>
					<text style="margin-left: 10upx; font-size: 24upx; color: #888888;">原价 <s>￥ 450</s></text>
					<text class="share cuIcon-share fr">分享</text>
				</view>
				<view class="text-cut2 margin-top-sm">
					香雪 抗病毒口服液18支 清热祛湿 凉血解毒 流感风热感冒药
				</view>
				<view class="flexs text-center" style="color: #777777;">
					<text class="basis-sm">
						<text class="cuIcon-appreciate margin-right-sm" style="font-size: 40upx;"></text>
						65 人点赞
					</text>
					<text class="basis-sm">
						<text class="cuIcon-cart margin-right-sm" style="font-size: 40upx;"></text>
						128 人购买
					</text>
				</view>
			</view>
			<view class="card-menus" style="color: #888888;">
				<view class="flexs padding-top-xs padding-bottom-xs">
					<text>服务时间</text>
					<text>24小时</text>
				</view>
				<view class="flexs padding-top-xs padding-bottom-xs">
					<text>适用人群</text>
					<text>24-35岁</text>
				</view>
				<view class="flexs padding-top-xs padding-bottom-xs">
					<text>服务方式</text>
					<text>360元/一次</text>
				</view>
				<view class="flexs padding-top-xs padding-bottom-xs">
					<text>服务主题</text>
					<text>医生</text>
				</view>
				<view class="flexs padding-top-xs padding-bottom-xs">
					<text>服务周期</text>
					<text>一年</text>
				</view>
			</view>
			<view class="card-menus">
				<view class="flexs">
					<view class="text-xl">
						宝贝评价（650）
					</view>
					<view style="font-size: 24upx; color: #FF6529; font-family: '宋体';">
						查看全部 >
					</view>
				</view>
				<view class="evaluate flex justify-start margin-top-sm">
					<text>
						服务态度很好
					</text>
					<text>
						服务很及时
					</text>
					<text>
						服务很专业
					</text>
				</view>
				<view class="margin-top" style="color: #777777;">
					<view class="">
						<image src="../../static/home/idimg.png" class="evaluate-img margin-right-sm" mode="aspectFit"></image>
						<text>落雪纷飞</text>
					</view>
					<view class="margin-top">
						服务态度很好，服务态度也很及时，非常满意的一次购买
					</view>
					<view class="flexs margin-top" >
						<image v-for="(img , index) in imageList" :key="index" :src="img.imgurl" mode="aspectFit" style="width: 140upx; height: 140upx;margin: 10upx;"></image>
					</view>
				</view>
			</view>
			
			<view class="cu-tabbar-height margin-top"></view>
		</view>
	</scroll-view>
</template>

<script>
	export default {
		data() {
			return {
				showColor: false,
				dotStyle: true,
				CustomBar: this.CustomBar,
				swiperList: [{
					id: 0,
					type: 'image',
					url: '../../static/server/banner.png'
				}, {
					id: 1,
					type: 'image',
					url: '../../static/server/banner.png'
				}, {
					id: 2,
					type: 'image',
					url: '../../static/server/banner.png'
				}],
				imageList:[
					{
						"imgurl":'../../static/server/list11.png'
					},
					{
						"imgurl":'../../static/server/list11.png'
					},
					{
						"imgurl":'../../static/server/list11.png'
					},
					{
						"imgurl":'../../static/server/list11.png'
					}
				]
			};
		},
		methods: {
			scrollTop(e) {
				// console.log(e.detail.scrollTop)
				if (e.detail.scrollTop >= 100) {
					this.showColor = true;
				} else {
					this.showColor = false;
				}
			},
			
			serverbao() {
				uni.navigateTo({
					url: 'package'
				});
			},
			svcontent(){
				uni.navigateTo({
					url:'svcontent'
				})
			},
			backico(){
				uni.navigateBack();
			}
		}

	}
</script>

<style>
	.page {
		height: 100vh;
	}
	.backico{
		display: inline-block;
		height: 50upx;
		width: 50upx;
		line-height: 50upx;
		border-radius: 50%;
		text-align: center;
		background: rgba(0,0,0,0.7);
		color: #FFFFFF;
	}
	.share{
		display: inline-block;
		padding: 6upx 16upx;
		background: #c3c3c3;
		color: #FFFFFF;
		border-radius: 30upx 0upx 0upx 30upx;
		margin-right: -34upx;
	}
	.evaluate text{
		display: inline-block;
		padding: 6upx 16upx;
		background: #CFF1FF;
		margin-right: 20upx;
		border-radius: 30upx;
	}
	.evaluate-img{
		width: 80upx;
		height: 80upx;
		border-radius: 50%;
		vertical-align: middle;
	}
</style>
