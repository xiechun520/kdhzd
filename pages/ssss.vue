<template>
	<view class="content">
		<ChooseLits :list="list" :arr="arr" @chooseLike="chooseLike"></ChooseLits>
		<rich-text :nodes="ddd"></rich-text>
	</view>
	
</template>

<script>
	import ChooseLits from '../../components/chooseLits.vue'
	export default {
		components: {
			ChooseLits
		},
		data() {
			return {
				list: ['综合排序', '类型不限', '金额不限'],
				arr: [
					['综合排序', '价格降序', '价格升序'],
					['类型不限', '高通过率', '利率低'],
					['金额不限', '5k以下', '5k-10k', '10k以上']
				],
				i2: [0, 0, 0],
				ddd:'在飞云之下，啊哈哈哈哈，这风好大，我还是想她。'
			}
		},
		methods: {
			chooseLike(i1) {
				if (this.i2[i1[0]] != i1[1]) {
					this.i2[i1[0]] = i1[1];
				}
			},
		}
	}
</script>

<style>
</style>
