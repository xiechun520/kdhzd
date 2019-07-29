<template>
	<view class="">
		<cu-custom :isBacks="true" bgColor="bg-thame">
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
					<text class="cuIcon-message text-white margin-lr"></text>
				</view>
			</block>
		</cu-custom>
		<view class="">
			<view class="margin">
				<text class="text-lg">订单管理</text>
				<text class="fr" style="color: #888888;">退款售后 <text class="tkshico">5</text></text>
			</view>
			<view class="fw-tab flexs ">
				<view class=""  >
					个人订单
				</view>
				<view class="active" @tap="teamorder">
					团队订单
				</view>
			</view>
			<view class="card-menus margin-top">
				<text class="text-lg">订单类型</text>
				<view class="flexs tabtype text-center margin-top-sm">
					<view @tap="orderlist('问诊订单')">
						<image src="../../static/phone/tab1.png" mode="aspectFit"></image>
						<text>问诊订单</text>
					</view>
					<view @tap="orderlist('上门订单')">
						<image src="../../static/phone/tab2.png" mode="aspectFit"></image>
						<text>上门订单</text>
					</view>
					<view @tap="orderlist('签约客户')">
						<image src="../../static/phone/tab3.png" mode="aspectFit"></image>
						<text>签约客户</text>
					</view>
					<view @tap="orderlist('开方单药')">
						<image src="../../static/phone/tab4.png" mode="aspectFit"></image>
						<text>开方单药</text>
					</view>
				</view>
			</view>
			<view class="margin-top">
			</view>
			<view class="fw-tab flexs">
				<view class="">
					个人金额
				</view>
				<view class="active" @tap="csss">
					团队金额
				</view>
			</view>
			<view class="">
				<view class="qiun-charts">
					<text class="jine">金额（万）</text>
					<!--#ifndef MP-ALIPAY -->
					<canvas canvas-id="canvasColumn" id="canvasColumn" class="charts"></canvas>
					<!--#endif-->
				</view>
			</view>
			<view class="fw-list margin">
				<view class="flexs ">
					<text>服务项目</text>
					<text>服务日期</text>
					<text>服务时间</text>
					<text>服务人员</text>
				</view>
				<view class="flexs margin-top-sm" style="color: #888888;" v-for="(fw , index) in fwlist" :key="index">
					<text>{{fw.fwname}}</text>
					<text>{{fw.orderdate}}</text>
					<text>{{fw.time}}</text>
					<text>{{fw.server}} <text style="margin-left: 6upx;">></text></text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uCharts from '../../components/u-charts/u-charts.js';
	var _self;
	var canvaColumn = null;
	export default {
		data() {
			return {
				cWidth: '',
				cHeight: '',
				pixelRatio: 1,
				Column: {
					"categories": ["上门服务", "在线咨询", "理疗", "健康"],
					"series": [{
						"name": "已支付",
						"data": [15, 20, 45, 37]
					}, {
						"name": "未支付",
						"data": [30, 40, 25, 14]
					}]
				},
				fwlist:[
					{
						'fwname': '针灸',
						'orderdate':'5月26',
						'time':'9:30',
						'server':'杨怀'
					},
					{
						'fwname': '送药',
						'orderdate':'5月26',
						'time':'9:30',
						'server':'张扬'
					},
					{
						'fwname': '健美',
						'orderdate':'5月26',
						'time':'9:30',
						'server':'王佳'
					},
					{
						'fwname': '上门输液',
						'orderdate':'5月26',
						'time':'9:30',
						'server':'王凯'
					}
				]
			}
		},
		onLoad() {
			_self = this;
			this.cWidth = uni.upx2px(750);
			this.cHeight = uni.upx2px(500);
		},
		onReady() {
			this.getServerData();
		},
		methods: {
			orderlist(title){
				uni.navigateTo({
					url:'orderlist?title='+title
				})
			},
			csss(){
				uni.navigateTo({
					url: '../public/echarts'
				});
			},
			teamorder(){
				uni.navigateTo({
					url: 'teamorder'
				});
			},
			getServerData() {
				_self.fillData(this.Column);
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
			fillData(Column) {
				let Columns = {
					categories: [],
					series: []
				};
				
				//这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
				Columns.categories = Column.categories;
				//这里的series数据是后台做好的，如果您的数据没有和前面我注释掉的格式一样，请自行拼接数据
				Columns.series = Column.series;
				this.showColumn("canvasColumn", Columns);
				
			},
			showColumn(canvasId, chartData) {
				canvaColumn = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'column',
					legend: true,
					fontSize: 11,
					//background: '#E5FDC3',
					pixelRatio: _self.pixelRatio,
					animation: true,
					categories: chartData.categories,
					series: chartData.series,
					xAxis: {
						disableGrid: true,
					},
					yAxis: {
						//disabled:true
					},
					dataLabel: true,
					width: _self.cWidth * _self.pixelRatio,
					height: _self.cHeight * _self.pixelRatio,
					extra: {
						column: {
							width: _self.cWidth * _self.pixelRatio * 0.45 / chartData.categories.length
						}
					}
				});

			}
		
			
		}

	}
</script>

<style>
	.tkshico{
		width: 30upx;
		height: 30upx;
		text-align: center;
		line-height: 30upx;
		border-radius: 50%;
		background: red;
		color: #FFFFFF;
		display: inline-block;
		margin-left: 6upx;
		transform: scale(0.8);
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
	.tabtype view image{
		width: 50upx;
		height: 50upx;
	}
	.tabtype view text{
		display: block;
		color: #888888;
	}
	/* 通用样式 */
	.qiun-charts {
		position: relative;
		margin-top: 50upx;
		width: 750upx;
		height: 500upx;
		background-color: #FFFFFF;
	}
	.jine{
		font-size: 24upx;
		position: absolute;
		top: -20upx;
		left: 20upx;
		z-index: 9;
		color: #888888;
	}
	.charts {
		width: 750upx;
		height: 500upx;
		background-color: #FFFFFF;
	}
	.fw-list view text{
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
