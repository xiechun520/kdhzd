<template>
	<view class="">
		<cu-custom bgColor="bg-thame" :isBacks="true">
			<block slot="backText">
				<view class="text-xxl flex justify-center" style="height: 50upx;line-height: 50upx;">
					<navigator class="cuIcon-settings text-white" url="../user/set"></navigator>
				</view>
			</block>
			<block slot="content">
				欢迎使用康大 APP
			</block>
			<block slot="right">
				<view class="text-xxl">
					<text class="cuIcon-message text-white margin-lr" @tap="information"></text>
				</view>
			</block>
		</cu-custom>
		<view class="bluepd">
		</view>
		<view class="card-menus userbk">
			<view class="user flexs">
				<image src="../../static/home/idimg.png" mode="aspectFit" style="width: 160upx; height: 160upx;"></image>
				<view class="userxq basis-qs">
					<view class="qdl flexs">
						<text class="text-xl">签单率<text class="text-df" style="color: #32C2FF; margin-left: 10upx;">86%</text></text>
						<navigator url="../user/user" class="geren">
							个人信息
						</navigator>
						
					</view>
					<view class="flexs margin-top text-center text-sm" style="color: #777777;">
						<text>
							<text style="color: #32C2FF;">360户</text>
							<text class="block margin-top-xs">应签约客户</text>
						</text>
						<text>
							<text style="color: #32C2FF;">456户</text>
							<text class="block margin-top-xs">未签约客户</text>
						</text>
						<text>
							<text style="color: #32C2FF;">234户</text>
							<text class="block margin-top-xs">实际签约客户</text>
						</text>
					</view>
				</view>
			</view>
			<view class="margin-top-sm flexs padding-bottom-sm" style="border-bottom: 1px solid #f1f1f1;">
				<view class="">
					<text>专业度</text>
					<text style="color: #CF5411; margin-left: 6upx;">9.6 分</text>
				</view>
				<view class="">
					<text>及时度</text>
					<text style="color: #CF5411; margin-left: 6upx;">9.4 分</text>
				</view>
				<view class="">
					<text>服务态度</text>
					<text style="color: #CF5411; margin-left: 6upx;">9.0 分</text>
				</view>
			</view>
			<view class="flexs margin-top text-center text-sm" style="color: #777777;">
				<text>
					<text style="color: #32C2FF;">0.00</text>
					<text class="block margin-top-xs">现金</text>
				</text>
				<text>
					<text style="color: #32C2FF;">0.00</text>
					<text class="block margin-top-xs">健康生活通</text>
				</text>
				<text>
					<text style="color: #32C2FF;">0.00</text>
					<text class="block margin-top-xs">健康金</text>
				</text>
				<text>
					<text style="color: #32C2FF;">1</text>
					<text class="block margin-top-xs">银行卡</text>
				</text>
			</view>
		</view>
		<view class="margin">
			<text class="text-lg margin-right-xs">我的服务</text>
			<text style="font-size: 24upx; color: #DE1313;">你有5项服务急需处理</text>
		</view>
		<view class="card-menus">
			<view class="">
				<text class="serverico text-sm margin-right-xs">
					<text class="icobg"></text>急需服务</text>
				<text class="serverico text-sm margin-right-xs">
					<text class="icobg"></text>轻微急需服务</text>
				<text class="serverico text-sm margin-right-xs">
					<text class="icobg"></text>需要服务</text>
			</view>
			<view class="server padding-top padding-bottom flexs" style="border-bottom: 2upx solid #f1f1f1;">
				<view class="">
					<view class="">
						<image src="../../static/home/li3.png" mode=""></image>
						<text class="ico1">5</text>
					</view>
					<text class="block">上门服务</text>
				</view>
				<view class="">
					<view class="">
						<image src="../../static/home/li4.png" mode=""></image>
						<text class="ico2">5</text>
					</view>
					<text class="block">签约客户</text>
				</view>
				<view class="">
					<view class="">
						<image src="../../static/home/li1.png" mode=""></image>
						<text class="ico2">5</text>
					</view>
					<text class="block">预约挂号</text>
				</view>
				<view class="">
					<view class="">
						<image src="../../static/home/li2.png" mode=""></image>
						<text class="ico2">5</text>
					</view>
					<text class="block">咨询</text>
				</view>
			</view>
			<view class="server padding-top flexs">
				<view class="" @tap="Scheduling">
					<view class="">
						<image src="../../static/home/li5.png" mode=""></image>
						<text class="ico1">5</text>
					</view>
					<text class="block">我的排班</text>
				</view>
				<view class="">
					<view class="">
						<image src="../../static/home/li6.png" mode=""></image>
						<text>5</text>
					</view>
					<text class="block">开方单药</text>
				</view>
				<view class="">
					<view class="">
						<image src="../../static/home/li7.png" mode=""></image>
						<text>5</text>
					</view>
					<text class="block">订单处理</text>
				</view>
				<view class="">
					<view class="">
						<image src="../../static/home/li8.png" mode=""></image>
						<text class="ico2">5</text>
					</view>
					<text class="block">我的订单</text>
				</view>
			</view>
		</view>
		<view class="card-menus">
			<view class="padding-bottom-sm">
				<text class="text-xl">我的团队</text>
				<text class="fr text-xxl" @tap="addteam">+</text>
			</view>
			<view class="">
				<scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll">
					<view class="teamlist">
						<image src="../../static/set/li1.png" mode="aspectFit"></image>
						<text class="text-lg block">家庭医生团队</text>
						<view class="flexs margin-top-xs" style="color: #777777;">
							<text>
								<text class="cuIcon-group margin-right-xs"></text> 
								5 人
							</text>
							<text>
								<text class="cuIcon-markfill margin-right-xs"></text> 
								9.5分
							</text>
						</view>
					</view>
					<view class="teamlist">
						<image src="../../static/set/li1.png" mode="aspectFit"></image>
						<text class="text-lg block">家庭医生团队</text>
						<view class="flexs margin-top-xs" style="color: #777777;">
							<text>
								<text class="cuIcon-group margin-right-xs"></text> 
								5 人
							</text>
							<text>
								<text class="cuIcon-markfill margin-right-xs"></text> 
								9.5分
							</text>
						</view>
					</view>
					<view class="teamlist">
						<image src="../../static/set/li1.png" mode="aspectFit"></image>
						<text class="text-lg block">家庭医生团队</text>
						<view class="flexs margin-top-xs" style="color: #777777;">
							<text>
								<text class="cuIcon-group margin-right-xs"></text> 
								5 人
							</text>
							<text>
								<text class="cuIcon-markfill margin-right-xs"></text> 
								9.5分
							</text>
						</view>
					</view>
				</scroll-view>
				<view class="fr margin-top-xs anima">
					<text>></text>
					<text>></text>
					<text>></text>
				</view>
			</view>
		</view>
		
		<view class="margin text-lg">
			团队报表
		</view>
		<view class="qiun-charts">
			<!--#ifdef MP-ALIPAY -->
			<canvas canvas-id="canvasLineA" id="canvasLineA" class="charts" :style="{'width':cWidth*pixelRatio+'px','height':cHeight*pixelRatio+'px', 'transform': 'scale('+(1/pixelRatio)+')','margin-left':-cWidth*(pixelRatio-1)/2+'px','margin-top':-cHeight*(pixelRatio-1)/2+'px'}"
			 disable-scroll=true @touchstart="touchLineA" @touchmove="moveLineA" @touchend="touchEndLineA"></canvas>
			<!-- 使用图表拖拽功能时，建议给canvas增加disable-scroll=true属性，在拖拽时禁止屏幕滚动 -->
			<!--#endif-->
			<!--#ifndef MP-ALIPAY -->
			<canvas canvas-id="canvasLineA" id="canvasLineA" class="charts" disable-scroll=true @touchstart="touchLineA"
			 @touchmove="moveLineA" @touchend="touchEndLineA"></canvas>
			<!-- 使用图表拖拽功能时，建议给canvas增加disable-scroll=true属性，在拖拽时禁止屏幕滚动 -->
			<!--#endif-->
		</view>
		
		<view class="fworder card-menus margin-sm">
			<view class="fw-tab flexs">
				<view class="" @tap="fwtab = 1" :class="{'active':fwtab==1}">
					服务订单
				</view>
				<view class="" @tap="fwtab = 2" :class="{'active':fwtab==2}">
					服务列表
				</view>
			</view>
			<view class="fw-list margin-top">
				<view class="flexs ">
					<text>服务订单</text>
					<text>客户</text>
					<text>日期/开始时间/结束时间</text>
					<text>操作</text>
				</view>
				<view class="flexs margin-top-sm" v-if="fwtab == 1" v-for="(fw , index) in fwlist" :key="index">
					<text>{{fw.fwname}}</text>
					<text>{{fw.user}}</text>
					<text>{{fw.starttime}}/{{fw.endtime}}</text>
					<text>{{fw.caozuo}}</text>
				</view>
				<view class="flexs margin-top-sm" v-if="fwtab == 2" v-for="(fw , index) in fwlist" :key="index">
					<text>{{fw.fwname}}</text>
					<text>{{fw.user}}</text>
					<text>{{fw.starttime}}/{{fw.endtime}}</text>
					<text>{{fw.caozuo}}</text>
				</view>
			</view>
		</view>
	</view>
		
</template>

<script>
	import uCharts from '../../components/u-charts/u-charts.js';
	var _self;
	var canvaColumn = null;
	var canvaLineA = null;
	var canvaColumnMeter = null;
	

	export default {
		data() {
			return {
				fwtab: 1,
				fwlist:[
					{
						'fwname': '服务包',
						'user':'张三',
						'starttime':'4月27',
						'endtime':'未开始',
						'caozuo':'问诊'
					},{
						'fwname': '上门服务',
						'user':'李四',
						'starttime':'4月27',
						'endtime':'未开始',
						'caozuo':'问诊'
					},{
						'fwname': '图文咨询',
						'user':'王二',
						'starttime':'4月27',
						'endtime':'未开始',
						'caozuo':'问诊'
					}
				],
				pixelRatio: 1,
				serverData: '',
				itemCount: 20, //x轴单屏数据密度
				sliderMax: 50,
				"LineA": {
					"categories": ["第一周", "第二周", "第三周", "第四周"],
					"series": [{
						"name": "签单率",
						"data": [35, 8, 25, 37]
					}, {
						"name": "应签单",
						"data": [70, 40, 65, 100]
					}, {
						"name": "未签单",
						"data": [100, 80, 95, 150]
					}, {
						"name": "实际签单",
						"data": [80, 120, 70, 130]
					}]
				}
			}
		},
		onLoad() {
			//uni.setStorageSync('userid', '402880f86ab00733016ab0189ddd0007');
			//uni.removeStorageSync('hasLogin');//清除用户id
			//const userid = uni.getStorageSync('userid');
			//console.log(userid)
			const hasLogin = uni.getStorageSync('hasLogin');
			console.log(hasLogin)
			if (!hasLogin) {
			    uni.showModal({
			        title: '未登录',
			        content: '您未登录，需要登录后才能继续',
			         //如果需要强制登录，不显示取消按钮
			        showCancel: !this.forcedLogin,
			        success: (res) => {
			            if (res.confirm) {
							 //如果需要强制登录，使用reLaunch方式
			                if (this.forcedLogin) {
			                    uni.reLaunch({
			                        url: '../login/login'
			                    });
			                } else {
			                    uni.navigateTo({
			                        url: '../login/login'
			                    });
			                }
			            } else if(res.cancel){
							plus.runtime.quit();
						}
			        }
			    });
			}
			_self = this;
			this.cWidth = uni.upx2px(750);
			this.cHeight = uni.upx2px(500);
			this.arcbarWidth = uni.upx2px(24);
			this.gaugeWidth = uni.upx2px(30);
			
		},
		onReady() {
			this.getServerData();
		},
		methods: {
			addteam(){
				uni.navigateTo({
					url:'addteam'
				})
			},
			Scheduling(){
				uni.navigateTo({
					url:'Scheduling'
				})
			},
			scroll: function(e) {
				console.log(e)
			},
			getServerData() {
				_self.fillData(this.LineA);
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
			fillData(data) {
				
				let LineA = {
					categories: [],
					series: []
				};
				
				LineA.categories = this.LineA.categories;
				LineA.series = this.LineA.series;
				
				this.showLineA("canvasLineA", LineA);
				
			},
			showColumn(canvasId, chartData) {
				canvaColumn = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'column',
					legend: true,
					fontSize: 11,
					background: '#E5FDC3',
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

			},
			showColumnMeter(canvasId, chartData) {
				canvaColumnMeter = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'column',
					legend: true,
					fontSize: 11,
					background: '#FFFFFF',
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
							type: 'meter',
							width: _self.cWidth * _self.pixelRatio * 0.45 / chartData.categories.length,
							meter: {
								border: 4,
								fillColor: '#E5FDC3'
							}
						}
					}
				});

			},
			showLineA(canvasId, chartData) {
				canvaLineA = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'line',
					fontSize: 11,
					legend: true,
					dataLabel: false,
					dataPointShape: false,
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					categories: chartData.categories,
					series: chartData.series,
					animation: false,
					enableScroll: true, //开启图表拖拽功能
					xAxis: {
						disableGrid: false,
						type: 'grid',
						gridType: 'dash',
						itemCount: 4, //可不填写，配合enableScroll图表拖拽功能使用，x轴单屏显示数据的数量，默认为5个
						scrollShow: true, //新增是否显示滚动条，默认false
						scrollAlign: 'left',
						//scrollBackgroundColor:'#F7F7FF',//可不填写，配合enableScroll图表拖拽功能使用，X轴滚动条背景颜色,默认为 #EFEBEF
						//scrollColor:'#DEE7F7',//可不填写，配合enableScroll图表拖拽功能使用，X轴滚动条颜色,默认为 #A6A6A6
					},
					yAxis: {
						//disabled:true
						gridType: 'dash',
						splitNumber: 8,
						min: 10,
						max: 180,
						format: (val) => {
							return val.toFixed(0)
						} //如不写此方法，Y轴刻度默认保留两位小数
					},
					width: _self.cWidth * _self.pixelRatio,
					height: _self.cHeight * _self.pixelRatio,
					dataLabel: true,
					dataPointShape: true,
					extra: {
						lineStyle: 'straight'
					},
				});

			},
			
			touchLineA(e) {
				canvaLineA.scrollStart(e);
			},
			moveLineA(e) {
				canvaLineA.scroll(e);
			},
			touchEndLineA(e) {
				canvaLineA.scrollEnd(e);
				//下面是toolTip事件，如果滚动后不需要显示，可不填写
				canvaLineA.showToolTip(e, {
					format: function(item, category) {
						return category + ' ' + item.name + ':' + item.data
					}
				});
			}
		}
	}
</script>

<style>
	 .bluepd{
		width: 100%;
		height: 140upx;
		background: rgba(50,194,255,1);
	}
	.userbk{
		margin-top: -120upx;
	}
	.qdl{
		line-height: 48upx;
	}
	.qdltext{
		font-size: 44upx;
	}
	.geren{
		background: rgba(250,205,137);
		line-height: 50upx;
		padding: 0px 15upx;
		color: #FFFFFF;
		border-radius: 30upx 0upx 0upx 30upx;
		margin-right: -30upx;
	}
	.serverico{
		color: #666666;
	}
	.serverico .icobg{
		display: inline-block;
		width: 16upx;
		height: 16upx;
		border-radius: 50%;
		background: #fbbd08;
		margin-right: 6upx;
	}
	.serverico:first-child .icobg{
		background: red;
	}
	.serverico:last-child .icobg{
		background: #0eff4f;
	}
	.server view{
		text-align: center;
		color: #777777;
	}
	.server view view{
		position: relative;
		display: inline-block;
	}
	.server view view text{
		position: absolute;
		top: 0upx;
		right: 0upx;
		width: 26upx;
		height: 26upx;
		border-radius: 50%;
		background: red;
		color: #ffffff;
		font-size: 16upx;
		transform: scale(0.8);
	}
	.server view view text.ico1{
		background: #fbbd08;
	}
	.server view view text.ico2{
		background: #0eff4f;
	}
	.server view image{
		width: 80upx;
		height: 80upx;
	}
	.scroll-view_H {
		white-space: nowrap;
		width: 100%;
	}
	.teamlist {
		display: inline-block;
		width: 49%;
		margin-right: 2%;
		
	}
	.teamlist image{
		width: 100%;
		height: 220upx;
	}
	.anima{
		font-size: 34upx;
	}
	.anima text{
		margin: 0px 4upx;
	}
	.anima text:first-child{
		animation:mymove 5s infinite;
	}
	.anima text:nth-child(2){
		animation:mymove1  5s infinite 0.5s;
	}
	.anima text:nth-child(3){
		animation:mymove2  5s infinite 1s;
	}
	@keyframes mymove{
		0%   {color:red;}
		25%  {color:yellow;}
		50%  {color:blue;}
		75%  {color:block;}
		100% {color:red;}
	}
	@keyframes mymove1{
		0%   {color:red;}
		25%  {color:yellow;}
		50%  {color:blue;}
		75%  {color:block;}
		100% {color:red;}
	}
	@keyframes mymove2{
		0%   {color:red;}
		25%  {color:yellow;}
		50%  {color:blue;}
		75%  {color:block;}
		100% {color:red;}
	}
	.echart_img {
		box-shadow: #EBEBEB 0px 0px 2px 1px;
		border-radius: 0.3rem;
		margin-top: 0.2rem;
	}
	
	.echart_ul {
		background: #abe6ff;
		border-radius: 0.3rem;
		padding: 0.2rem;
	}
	
	/* 通用样式 */
	.qiun-charts {
		width: 750upx;
		height: 500upx;
		background-color: #FFFFFF;
	}

	.charts {
		width: 750upx;
		height: 500upx;
		background-color: #FFFFFF;
	}

	/* 横屏样式 */
	.qiun-charts-rotate {
		width: 700upx;
		height: 1100upx;
		background-color: #FFFFFF;
		padding: 25upx;
	}

	.charts-rotate {
		width: 700upx;
		height: 1100upx;
		background-color: #FFFFFF;
	}

	/* 圆弧进度样式 */
	.qiun-charts3 {
		width: 750upx;
		height: 250upx;
		background-color: #FFFFFF;
		position: relative;
	}

	.charts3 {
		position: absolute;
		width: 250upx;
		height: 250upx;
		background-color: #FFFFFF;
	}

	.qiun-tip {
		display: block;
		width: auto;
		overflow: hidden;
		padding: 15upx;
		height: 30upx;
		line-height: 30upx;
		margin: 10upx;
		background: #ff9933;
		font-size: 30upx;
		border-radius: 8upx;
		justify-content: center;
		text-align: center;
		border: 1px solid #dc7004;
		color: #FFFFFF;
	}
	.fw-tab{
		border-radius: 10upx 10upx 0upx 0upx;
		overflow: hidden;
	}
	.fw-tab view{
		width: 50%;
		height: 70upx;
		line-height: 70upx;
		text-align: center;
	}
	view.active{
		background: rgba(50,194,255,1);
		color: #ffffff;
	}
	.fw-list view text:first-child{
		width: 22%;
	}
	.fw-list view text:nth-child(3){
		width: 47%;
		text-align: center;
	}
</style>
