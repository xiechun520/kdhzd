<template name="mall">
		<view>
			<cu-custom bgColor="bg-thame" :isBack="true">
				<block slot="backText"></block>
				<block slot="content">{{title}}</block>
				<block slot="right">
					<text class="cuIcon-add margin-right" style="font-size: 40upx;" @tap="addserverbao"></text>
				</block>
			</cu-custom>
			
			<view style="width: 100%;" class="flex flex-direction align-center">
				<view class="list3 margin-top-sm">
					<view class="flexs ">
						<view class="cu-item shadow padding-bottom-sm" v-for="(item,index) in 12" :key="index" @tap="svcontent()">
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
</template>

<script>
	export default {
		data() {
			return {
				title:'',
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
			addserverbao() {
				uni.navigateTo({
					url: 'addserverbao'
				});
			},
			svcontent(){
				uni.navigateTo({
					url:'svcontent'
				})
			}
		},
		onLoad(options) {
             this.title = options.title;
        }

	}
</script>

<style>
	.item {
		width: 80upx;
		height: 80upx;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0upx 0upx 9upx 1upx rgba(0, 0, 0, 0.1);
		border-radius: 50%;
	}
	.list3 {
		width: 698upx;
		background: rgba(255, 255, 255, 1);
		border-radius: 15upx;
	}
	.cu-item{
		width: 48%;
		box-shadow: 0upx 0px 4upx 4upx #eeeeee;
		margin-bottom: 20upx;
		border-radius: 20upx;
	}
</style>
