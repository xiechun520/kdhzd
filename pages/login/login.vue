<template>
	<view class="content">
		<cu-custom bgColor="bg-thame" :isBacks="true">
			<block slot="backText">
			</block>
			<block slot="content">
				登录
			</block>
			<block slot="right">
				<view class="">

				</view>
			</block>
		</cu-custom>

		<view class="input-group card-menus">
			<view class="input-row border">
				<text class="title" style="letter-spacing: 14upx;">账号：</text>
				<m-input class="m-input" type="text" clearable focus v-model="account" placeholder="请输入账号"></m-input>
			</view>
			<view class="input-row">
				<text class="title" style="letter-spacing: 14upx;">密码：</text>
				<m-input type="password" displayable v-model="password" placeholder="请输入密码"></m-input>
			</view>
		</view>
		<view class="btn-row">
			<button type="primary" class="primary" @tap="bindLogin">登录</button>
		</view>
		<view class="action-row">
			<navigator url="reg">注册账号</navigator>
			<text>|</text>
			<navigator url="pwd">忘记密码</navigator>
		</view>
	</view>
</template>

<script>
	import mInput from '../../components/m-input.vue'
	import {
	    mapState,
	    mapMutations
	} from 'vuex'
	export default {
		components: {
			mInput
		},
		data() {
			return {
				account: '',
				password: '',
			}
		},
		computed: mapState(['forcedLogin']),
		methods: {
			...mapMutations(['login']),
			bindLogin() {
				var that = this;
				var phonereg = /^1[3|4|5|6|7|8]\d{9}$/;
				if (!phonereg.test(that.account)) {
					uni.showToast({
						icon: 'none',
						title: '请正确输入手机号'
					});
					return;
				} else if (this.password.length < 6) {
					uni.showToast({
						icon: 'none',
						title: '密码最短为 6 个字符'
					});
					return;
				}else {
					//alert("验证通过")
					that.$axios(that.$baseUrl.login, {
							username: that.account,
							password: that.password,
						})
						.then(res => {
							console.log(res);
							var data = res.data;
							if(data.success){
								uni.showToast({
								    icon: 'success',
								    title: data.msg,
								});
								uni.setStorageSync('userid', data.attributes.id);
								var hasLogin = true;
								uni.setStorageSync('hasLogin', hasLogin);
								setTimeout(function(){
									uni.reLaunch({
									    url: '../main/main'
									});
								},1000)
								return ;
							}else{
								uni.showToast({
									icon: 'none',
									title: data.msg
								});
							}
						});
				}

			}

		}

	}
</script>

<style>
	m-input {
		width: 100%;
		min-height: 100%;
		display: flex;
	}

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

	.input-row {
		display: flex;
		flex-direction: row;
		position: relative;
	}

	.input-row .title {
		width: 160upx;
		height: 50upx;
		min-height: 50upx;
		padding: 15upx 0;
		padding-left: 30upx;
		line-height: 50upx;
	}

	.input-row.border::after {
		position: absolute;
		right: 0;
		bottom: 0;
		left: 15upx;
		height: 1upx;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}

	.btn-row {
		margin-top: 50upx;
		padding: 20upx;
	}

	button.primary {
		background-color: #0faeff;
	}

	.action-row {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	.action-row navigator {
		color: #007aff;
		padding: 0 20upx;
	}

	.oauth-row {
		display: flex;
		flex-direction: row;
		justify-content: center;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
	}

	.oauth-image {
		width: 100upx;
		height: 100upx;
		border: 1upx solid #dddddd;
		border-radius: 100upx;
		margin: 0 40upx;
		background-color: #ffffff;
	}

	.oauth-image image {
		width: 60upx;
		height: 60upx;
		margin: 20upx;
	}
	.uni-input-placeholder{
		color: #888888;
		font-size: 28upx;
	}
	
</style>
