<template>
    <view class="content">
		<cu-custom bgColor="bg-thame" :isBacks="true">
			<block slot="backText">
			</block>
			<block slot="content">
				忘记密码
			</block>
			<block slot="right">
				<view class="">
		
				</view>
			</block>
		</cu-custom>
        <view class="input-group">
            <view class="input-row">
                <text class="title">邮箱：</text>
                <m-input type="text" focus clearable v-model="email" placeholder="请输入邮箱"></m-input>
            </view>
        </view>

        <view class="btn-row">
            <button type="primary" class="primary" @tap="findPassword">提交</button>
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
                email: ''
            }
        },
        methods: {
            findPassword() {
                /**
                 * 仅做示例
                 */
                if (this.email.length < 3 || !~this.email.indexOf('@')) {
                    uni.showToast({
                        icon: 'none',
                        title: '邮箱地址不合法',
                    });
                    return;
                }
                uni.showToast({
                    icon: 'none',
                    title: '已发送重置邮件至注册邮箱，请注意查收。',
                    duration: 3000
                });
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
		width: 20%;
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

</style>
