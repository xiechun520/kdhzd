<template>
    <view>
        <cu-custom bgColor="bg-thame" :isBack="true">
        	<block slot="backText"></block>
        	<block slot="content">个人基本信息</block>
			<block slot="right">
				<view class="text-xxl">
					<text class="cuIcon-message text-white margin-lr" @tap="information"></text>
				</view>
			</block>
        </cu-custom>
		<view class="card-menus">
			<view class="flexs padding-sm border-bottom align-center">
				<view class="text-df">
					{{userxx.name}}
				</view>
				<view>
					{{userxx.sex}}
				</view>
				<view class="user-img">
					<image src="../../static/home/idimg.png" mode="aspectFit"></image>
				</view>
			</view>
			<view class="padding-sm border-bottom">
				<text class="margin-right-xs">身份证号 ：</text>
				<text class="color7">{{userxx.sfzh}}</text>
			</view>
			<view class="padding-sm border-bottom">
				<text class="margin-right-xs">电话号码 ：</text>
				<text class="color7">{{userxx.phone}}</text>
			</view>
			<view class="padding-sm border-bottom">
				<text class="margin-right-xs">所属机构 ：</text>
				<text class="color7">{{userxx.school}}</text>
			</view>
			<view class="flexs padding-sm border-bottom">
				<view class="basis-df border-right">
					<text class="margin-right-xs">学位 ：</text>
					<text class="color7">{{userxx.education}}</text>
				</view>
				<view class="basis-df text-center">
					<text class="margin-right-xs">职称 ：</text>
					<text class="color7">{{userxx.zhicheng}}</text>
				</view>
				
			</view>
			<view class="padding-sm border-bottom">
				<text class="margin-right-xs">所属科室 ：</text>
				<text class="color7">{{userxx.zgxk}}</text>
			</view>
			<view class="padding-sm border-bottom">
				<text class="margin-right-xs">资格证书 ：</text>
				<text class="color7">{{userxx.zslx}}</text>
			</view>
			<view class="padding-sm border-bottom">
				<text class="margin-right-xs">资格证编号 ：</text>
				<text class="color7">{{userxx.zsbh}}</text>
			</view>
			<view class="flexs padding-sm border-bottom">
				<text class="basis-xs">简介 ：</text>
				<text class="basis-xl color7 text-content">{{userxx.resume}}</text>
			</view>
		</view>
    </view>
</template>

<script>
    export default {
		data() {
			return {
				userxx:[]
			}
		},
		onLoad() {
			var that = this;
			const userid = uni.getStorageSync('userid');
			that.$axios(that.$baseUrl.user,{
				'id':userid
			   })
			 .then(res =>{
				   //console.log(res.data.attributes.doctor);
				   let user = res.data.attributes.doctor;
				   that.userxx = user;
				   //console.log(that.userxx);
				},(error) =>{
				  console.log(error)
			   })
		},
        methods: {
            
        }
    }
</script>

<style>
	.user-img image{
		width: 100upx;
		height: 100upx;
		border-radius: 50%;
	}
</style>
