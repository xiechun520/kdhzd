<template>
	<view class="content">
		<cu-custom bgColor="bg-thame" :isBack="true">
			<block slot="backText"></block>
			<block slot="content">注册</block>
			<block slot="right">
				
			</block>
		</cu-custom>
		<view class="input-group card-menus">
			<!-- <view class="input-row border">
			    <text class="title">角色：</text>
			    <picker @change="bindPickerChange" :value="roleindex" :range="role" range-key="name">
			    	<view class="uni-input">{{role[roleindex].name}}</view>
			    </picker>
			</view> -->
			<view class="input-row border">
				<text class="title"><text style="letter-spacing: 8upx;">手机</text>号 ：</text>
				<m-input type="text" focus clearable v-model="account" placeholder="请输入账号"></m-input>
			</view>
			<view class="input-row border">
				<text class="title"><text style="letter-spacing: 46upx;">密</text>码 ：</text>
				<m-input type="password" displayable v-model="password" placeholder="请输入密码"></m-input>
			</view>
			<view class="input-row border">
				<text class="title">确认密码：</text>
				<m-input type="password" displayable v-model="qrmm" placeholder="请确认密码"></m-input>
			</view>
			<view class="input-row">
				<text class="title"><text style="letter-spacing: 14upx;">身份</text>证：</text>
				<m-input type="text" focus clearable v-model="sfz" placeholder="请输入身份证"></m-input>
			</view>
			<!-- <view class="input-row">
                <text class="title">邮箱：</text>
                <m-input type="text" clearable v-model="email" placeholder="请输入邮箱"></m-input>
            </view> -->
		</view>
		<view class="btn-row">
			<button type="primary" class="primary" @tap="register">注册</button>
		</view>
	</view>
</template>

<script>
	import service from '../../service.js';
	import mInput from '../../components/m-input.vue';

	export default {
		components: {
			mInput
		},
		data() {
			return {
				account: '',
				password: '',
				qrmm:'',
				sfz: ''
				/* roleindex: 0,
				role: [{name:'医务人员'},{name: '运维人员'}, {name:'商家'}], */
			}
		},
		methods: {
			/* bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为：' + e.target.value)
				this.roleindex = e.target.value
			}, */
			register() {
				var that = this;
				var phonereg = /^1[3|4|5|6|7|8]\d{9}$/;
				var sfzz1 = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/;
				var sfzz2 = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
				if (!phonereg.test(that.account)) {
					uni.showToast({
						icon: 'none',
						title: '请正确输入手机号'
					});
					return;
				}else if (this.password.length < 6) {
					uni.showToast({
						icon: 'none',
						title: '密码最短为 6 个字符'
					});
					return;
				}else if (this.password !== this.qrmm) {
					uni.showToast({
						icon: 'none',
						title: '两次密码不一致'
					});
					return;
				}else if (!sfzz1.test(that.sfz) && !sfzz2.test(that.sfz)) {
					uni.showToast({
						icon: 'none',
						title: '请正确输入身份证号'
					});
					return;
				} else {
					//alert("验证通过")

					const data = {
						username: that.account,
						password: that.password,
						sfz: that.sfz
					};
					that.$axios(that.$baseUrl.reg, {
						username: that.account,
						password: that.password,
						sfz: that.sfz
					})
					.then(res => {
						console.log(res);
						var data = res.data;
						if(data.success){
							uni.showToast({
							    icon: 'none',
							    title: data.msg
							});
							setTimeout(function(){
								uni.navigateTo({
									url: 'login'
								});
							},1000)
							return ;
						}else{
							uni.showToast({
								icon: 'none',
								title: data.msg
							});
						}
						
						
					}, (error) => {
						console.log(error)
					})
				}
			}
		}
	}
</script>

<style>
	m-input,
	uni-picker {
		width: 100%;
		min-height: 100%;
		display: flex;
	}

	uni-picker {
		margin-left: 40upx;
		line-height: 40px;
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
		width: 200upx;
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
	.uni-input-placeholder{
		color: #888888;
		font-size: 28upx;
	}
	button.primary {
		background-color: #0faeff;
	}
</style>
