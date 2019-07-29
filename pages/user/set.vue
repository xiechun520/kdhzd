<template>
	<view>
		<cu-custom bgColor="bg-thame" :isBack="true">
			<block slot="backText"></block>
			<block slot="content">设置</block>
			<block slot="right">
				
			</block>
		</cu-custom>
		<view class="card-menus">
			<navigator class="padding-sm border-bottom line-h50 color7 text-xl" url="wsuser">
				完善个人信息
				<text class="cuIcon-right fr"></text>
			</navigator>
		</view>
	</view>
</template>

<script>
</script>

<style>
</style>
