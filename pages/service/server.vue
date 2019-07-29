<template name="mall">
	<scroll-view @scroll="scrollTop" scroll-y class="page">
		<view>
			<cu-custom :isBacks="true" :bgColor="showColor?'bg-thame':''">
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
						<text class="cuIcon-scan text-white"></text>
						<text class="cuIcon-cart text-white margin-lr"></text>
					</view>
				</block>
			</cu-custom>
			<swiper style="min-height: 422upx;" :style="[{'margin-top':-CustomBar + 'px'}]" :class="dotStyle?'square-dot':'round-dot'"
			 :indicator-dots="true" :circular="true" :autoplay="true" interval="5000" duration="500">
				<swiper-item v-for="(item,index) in swiperList" :key="index">
					<image style="width: 100%;height: 100%;" :src="item.url" mode="widthFix" v-if="item.type=='image'"></image>
					<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video>
				</swiper-item>
			</swiper>
			<view class="fw-tab flexs ">
				<view class="active1"  @tap="serverbao1('我的服务包',10)">
					我的服务包
				</view>
				<view class="active" @tap="serverbao('我的服务项',10)">
					我的服务项
				</view>
			</view>
			<view style="width: 100%;" class="flex flex-direction align-center">
				<view class="block " style="width: 100%;">
					<view class="block" style="padding: 20upx 20upx 0upx 20upx;">
						<text class="text-xl">我的服务</text>
						<text class="fr text-xs" style="color: #888888;" >更多</text>
					</view>
					<view class="card-menus flexs text-center">
						<view class="">
							<image src="../../static/server/tab4.png" mode="aspectFit" style="width: 100upx; height: 100rpx;"></image>
							<view class="">
								上门服务
							</view>
						</view>
						<view class="">
							<image src="../../static/server/tab3.png" mode="aspectFit" style="width: 100upx; height: 100rpx;"></image>
							<view class="">
								在线咨询
							</view>
						</view>
						<view class="">
							<image src="../../static/server/tab2.png" mode="aspectFit" style="width: 100upx; height: 100rpx;"></image>
							<view class="">
								理疗
							</view>
						</view>
						<view class="">
							<image src="../../static/server/tab1.png" mode="aspectFit" style="width: 100upx; height: 100rpx;"></image>
							<view class="">
								健康
							</view>
						</view>
					</view>
					
				</view>
				
				<view class="list3 margin-top-sm">
					<view class="server-title bg-thame flexs">
						<view class="text-xl">
							热门服务
						</view>
						<view class="text-sm" @tap="serverbao('热门服务',10)">
							更多
						</view>
					</view>
					<view class="flexs ">
						<view class="cu-item shadow padding-bottom-sm" v-for="(item,index) in 4" :key="index" @tap="svcontent()">
								<image src="../../static/server/list5.png" mode="aspectFit" style="width: 400upx; height: 335upx;"></image>
								<view class="flexs align-center padding-sm">
									<view class="text-xl">
										图文咨询
									</view>
									<view class="text-mix text-xs text-center" style="color: #32C2FF;">
										<view class="">
											全天
										</view>
										<view class="">
											服务时间
										</view>
									</view>
								</view>
								<view class="text-left text-cut padding-lr margin-top-sm">
									适用于60-65岁的老年的人群适用于60-65岁的老年的人群...
								</view>
								<view class="flex justify-between padding-lr">
									<view class="text-red flex text-lg"><text>￥</text><text class="text-red">600</text></view>
									<text class="text-sm text-gray">235人购买</text>
								</view>
						</view>
					</view>
				</view>
				<view class="list3 margin-top-sm">
					<view class="server-title bg-thame flexs">
						<view class="text-xl">
							个人服务包
						</view>
						<view class="text-sm" @tap="serverbao('个人服务包',10)">
							更多
						</view>
					</view>
					<view class="flexs ">
						<view class="cu-item shadow padding-bottom-sm" v-for="(item,index) in 4" :key="index" @tap="svcontent()">
								<image src="../../static/server/list5.png" mode="aspectFit" style="width: 400upx; height: 335upx;"></image>
								<view class="flexs align-center padding-sm">
									<view class="text-xl">
										图文咨询
									</view>
									<view class="text-mix text-xs text-center" style="color: #32C2FF;">
										<view class="">
											全天
										</view>
										<view class="">
											服务时间
										</view>
									</view>
								</view>
								<view class="text-left text-cut padding-lr margin-top-sm">
									适用于60-65岁的老年的人群适用于60-65岁的老年的人群...
								</view>
								<view class="flex justify-between padding-lr">
									<view class="text-red flex text-lg"><text>￥</text><text class="text-red">600</text></view>
									<text class="text-sm text-gray">235人购买</text>
								</view>
						</view>
					</view>
				</view>
				<view class="list3 margin-top-sm">
					<view class="server-title bg-thame flexs">
						<view class="text-xl">
							团队服务包
						</view>
						<view class="text-sm" @tap="serverbao('团队服务包',10)">
							更多
						</view>
					</view>
					<view class="flexs ">
						<view class="cu-item shadow padding-bottom-sm" v-for="(item,index) in 4" :key="index" @tap="svcontent()">
								<image src="../../static/server/list5.png" mode="aspectFit" style="width: 400upx; height: 335upx;"></image>
								<view class="flexs align-center padding-sm">
									<view class="text-xl">
										图文咨询
									</view>
									<view class="text-mix text-xs text-center" style="color: #32C2FF;">
										<view class="">
											全天
										</view>
										<view class="">
											服务时间
										</view>
									</view>
								</view>
								<view class="text-left text-cut padding-lr margin-top-sm">
									适用于60-65岁的老年的人群适用于60-65岁的老年的人群...
								</view>
								<view class="flex justify-between padding-lr">
									<view class="text-red flex text-lg"><text>￥</text><text class="text-red">600</text></view>
									<text class="text-sm text-gray">235人购买</text>
								</view>
						</view>
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
				}]
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
			serverbao(title,i) {
				console.log(title);
				console.log(i);
				uni.navigateTo({
					url: 'package?title='+title
				});
			},
			serverbao1(title,i) {
				uni.navigateTo({
					url: 'serverbao?title='+title
				});
			},
			svcontent(){
				uni.navigateTo({
					url:'svcontent'
				})
			}
		}

	}
</script>

<style>
	.page {
		height: 100vh;
	}

	.fw-tab{
		border-radius: 10upx;
		overflow: hidden;
		box-shadow: 0upx 0upx 6upx 4upx #f1f1f1;
		margin: 20upx;
	}
	.fw-tab view{
		width: 50%;
		height: 80upx;
		line-height: 80upx;
		text-align: center;
	}
	view.active{
		background: rgba(50,194,255,1);
		color: #ffffff;
	}
	view.active1{
		background: #42b983;
		color: #ffffff;
	}

	
	.server-title{
		padding: 20upx 10upx;
		border-radius: 10upx 10upx 0upx 0upx;
	}
	

	.item {
		width: 80upx;
		height: 80upx;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0upx 0upx 9upx 1upx rgba(0, 0, 0, 0.1);
		border-radius: 50%;
	}

	.list {
		width: 698upx;
		height: 259upx;
		background: rgba(255, 255, 255, 1);
		border-radius: 15upx;
	}

	
	

	
	.list3 {
		width: 698upx;
		background: rgba(255, 255, 255, 1);
		border-radius: 15upx;
	}
	.cu-item{
		width: 48%;
		box-shadow: 0upx 1px 4upx 4upx #eeeeee;
		margin-bottom: 20upx;
		border-radius: 20upx;
	}
</style>
