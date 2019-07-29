<template>
	<view class="">
		<cu-custom bgColor="bg-thame" :isBack="true">
			<block slot="backText"></block>
			<block slot="content">{{title}}</block>
		</cu-custom>
		<view class="fw-list margin">
			<view class="flexs fwxm" v-if="title == '上门订单'">
				<text>服务项目</text>
				<text>服务日期</text>
				<text>服务时间</text>
				<text>服务客户</text>
				<text>服务技能</text>
			</view>
			<view class="flexs fwxm" v-if="title == '问诊订单'">
				<text>咨询项目</text>
				<text>咨询日期</text>
				<text>咨询时间</text>
				<text>咨询人员</text>
				<text>咨询科室</text>
			</view>
			<view class="flexs qykh" v-if="title == '签约客户'">
				<text>签约客户</text>
				<text>签约项目</text>
				<text>签约日期</text>
				<text>签约时间</text>
			</view>
			<view class="flexs qykh" v-if="title == '开方单药'">
				<text>开单名字</text>
				<text>开单日期</text>
				<text>开单时间</text>
				<text>工作人员</text>
			</view>
			<view v-if="title == '上门订单'" class="flexs fwxm margin-top-sm" 
			style="color: #888888;" v-for="(fw , index) in Interrogation" :key="index"
			@tap="tocontent(fw.fwname)">
				<text>{{fw.fwname}}</text>
				<text>{{fw.orderdate}}</text>
				<text>{{fw.time}}</text>
				<text>{{fw.server}}</text>
				<text>{{fw.skill}} <text style="margin-left: 6upx;">></text></text>
			</view>
			<view v-if="title == '问诊订单'" class="flexs fwxm margin-top-sm" style="color: #888888;" v-for="(fw , index) in fwlist" :key="index">
				<text>{{fw.fwname}}</text>
				<text>{{fw.orderdate}}</text>
				<text>{{fw.time}}</text>
				<text>{{fw.server}}</text>
				<text>{{fw.skill}} <text style="margin-left: 6upx;">></text></text>
			</view>
			<view v-if="title == '签约客户'" class="flexs qykh margin-top-sm" style="color: #888888;" v-for="(fw , index) in sac" :key="index">
				<text>{{fw.sacname}}</text>
				<text>{{fw.sacxm}}</text>
				<text>{{fw.sactime}}</text>
				<text>{{fw.time}} <text style="margin-left: 6upx;">></text></text>
			</view>
			<view v-if="title == '开方单药'" class="flexs qykh margin-top-sm" style="color: #888888;" v-for="(fw , index) in kaid" :key="index">
				<text>{{fw.sacname}}</text>
				<text>{{fw.sacxm}}</text>
				<text>{{fw.sactime}}</text>
				<text>{{fw.time}} <text style="margin-left: 6upx;">></text></text>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data() {
			return {
				title:'订单列表',
				kaid:[
					{
						'sacname': '糖尿病',
						'sacxm':'5月30号',
						'sactime':'11:30',
						'time':'张开',
					},
					{
						'sacname': '糖尿病',
						'sacxm':'5月30号',
						'sactime':'11:30',
						'time':'张开',
					},
					{
						'sacname': '糖尿病',
						'sacxm':'5月30号',
						'sactime':'11:30',
						'time':'张开',
					},
					{
						'sacname': '糖尿病',
						'sacxm':'5月30号',
						'sactime':'11:30',
						'time':'张开',
					}
				],
				sac:[
					{
						'sacname': '张达',
						'sacxm':'糖尿病服务包',
						'sactime':'5月30号',
						'time':'11:30',
					},{
						'sacname': '张达',
						'sacxm':'糖尿病服务包',
						'sactime':'5月30号',
						'time':'11:30',
					},
					{
						'sacname': '张达',
						'sacxm':'糖尿病服务包',
						'sactime':'5月30号',
						'time':'11:30',
					},
					{
						'sacname': '张达',
						'sacxm':'糖尿病服务包',
						'sactime':'5月30号',
						'time':'11:30',
					}
				],
				Interrogation:[
					{
						'fwname': '电话咨询',
						'orderdate':'5月26',
						'time':'9:30',
						'server':'杨怀',
						'skill':'内科'
					},
					{
						'fwname': '视频咨询',
						'orderdate':'5月26',
						'time':'9:30',
						'server':'张扬',
						'skill':'骨科'
					},
					{
						'fwname': '图文咨询',
						'orderdate':'5月26',
						'time':'9:30',
						'server':'王佳',
						'skill':'中医'
					},
					{
						'fwname': '图文咨询',
						'orderdate':'5月26',
						'time':'9:30',
						'server':'王凯',
						'skill':'中医'
					}
				],
				fwlist:[
					{
						'fwname': '针灸',
						'orderdate':'5月26',
						'time':'9:30',
						'server':'杨怀',
						'skill':'送药'
					},
					{
						'fwname': '送药',
						'orderdate':'5月26',
						'time':'9:30',
						'server':'张扬',
						'skill':'送药'
					},
					{
						'fwname': '健美',
						'orderdate':'5月26',
						'time':'9:30',
						'server':'王佳',
						'skill':'送药'
					},
					{
						'fwname': '上门输液',
						'orderdate':'5月26',
						'time':'9:30',
						'server':'王凯',
						'skill':'送药'
					}
				]
			}
		},
		onLoad(options) {
			this.title = options.title;
			this.loading();
		},
		methods:{
			loading() {
				console.log("加载中")
				/* uni.request({
					url: 'https://unidemo.dcloud.net.cn/hello-uniapp-ucharts-data.json',
					data: {},
					success: function(res) {
						_self.fillData(res.data);
					},
					fail: () => {
						_self.tips = "网络错误，小程序端请检查合法域名";
					}
					
				}); */
			},
			tocontent(title){
				uni.navigateTo({
					url:'ordercontent?title='+title
				})
			}
		}
	}
</script>

<style>
	.fw-list .fwxm text{
		width: 20%;
		text-align: center;
	}
	.fw-list .qykh text{
		width: 25%;
		text-align: center;
	}
	.fw-list view text:first-child{
		text-align: left;
	}
	.fw-list view text:last-child{
		text-align: right;
	}
</style>
