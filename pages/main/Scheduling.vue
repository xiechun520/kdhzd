<template>
	<view class="">
		<cu-custom bgColor="bg-thame" :isBack="true">
			<block slot="backText"></block>
			<block slot="content">我的排班</block>
		</cu-custom>
		<view class="">
			<view class="card-menus">
				<view class="margin-tb-sm" style="line-height: 50upx; color: #888888;">
					<view class="">1、疑难杂症电话沟通更清楚</view>
					<view class="">2、专家医生本人接听解答</view>
					<view class="">3、准时接通,无电话费，不接通全额退款。</view>
				</view>
			</view>
			<view class="pickerdata">
				<view class="padding-bottom-sm border-bottom" v-if="list">
					<view class="flexs pblb text-center">
						<view class="text-left">
							日期
						</view>
						<view>
							开始时间
						</view>
						<view>
							结束时间
						</view>
						<view>
							预约数量
						</view>
						<view>
							选择分类
						</view>
						<view class="text-right">
							操作
						</view>
					</view>
					<view class="flexs pblb text-center margin-top-sm color7" v-for="(zt,index) in ztsj" :key="index">
						<view class="text-left">
							{{zt.rq}}
						</view>
						<view>
							{{zt.st}}
						</view>
						<view>
							{{zt.et}}
						</view>
						<view>
							{{zt.sl}}
						</view>
						<view>
							{{zt.lb}}
						</view>
						<view class="text-right">
							<text class="cuIcon-roundclose" style="font-size: 32upx; color: red;" @tap="delect(index)"></text>
						</view>
					</view>
				</view>
				
				<view class="border-bottom padding-top">
					<scroll-view class="scroll-view_H" scroll-x="true">
						<view class="" style="width: 220upx; height: 50upx;display: inline-block;" v-for="(dt,index) in daytime" :key="index"
						 :class="{'active':tabindex == index}" @tap="xzrq(month[index],dt,index)">
							{{month[index]}}月{{dt}}日<text class="color7 text-sm">({{setday[sy[index]]}})</text>
						</view>
					</scroll-view>
				</view>
				<view class="margin-top-sm" v-if="tabindex == 0">
					<view class="">
						<view class="flexs">
							<view class="sttime">
								<input type="text" v-model="starttime" @tap="timest = !timest" placeholder="开始时间" />
								<view class="xztime"  :class="{'action': timest}">
									<view class="xztime1">
										<view v-for="(jt,index) in jttime" :key="index" @tap="jtsjxz(jt)">
											{{jt}}:00
										</view>
									</view>
								</view>
							</view>
							<view class="sttime">
								<input type="text" v-model="endtime" @tap="timest1 = !timest1" placeholder="结束时间" />
								<view class="xztime" :class="{'action': timest1}">
									<view class="xztime1">
										<view v-for="(jt,index) in jttime" :key="index" @tap="jtsjxz1(jt)">
											{{jt}}:00
										</view>
									</view>
								</view>
							</view>
							<view class="sttime">
								<input type="text" v-model="yysl" placeholder="预约数量" />
							</view>
							<view class="sttime">
								<input type="text" v-model="leib" @tap="timest2 = !timest2" placeholder="选择类别" />
								<view class="xztime"  :class="{'action': timest2}">
									<view class="xztime1">
										<view class="" v-for="(it,index) in items" :key="index" @tap="xzlb(it.name)">
											{{it.name}}
										</view>
									</view>
								</view>
							</view>
							<view class="sttime">
								<button type="" class="cu-btn bg-thame" style="height: 50upx; line-height: 50upx;" @tap="addtime">添加</button>
							</view>
						</view>
					</view>
				</view>
			
				<view class="margin-top-sm" v-if="tabindex == 1">
					<view class="">
						<view class="flexs">
							<view class="sttime">
								<input type="text" v-model="starttime" @tap="timest = !timest" placeholder="开始时间" />
								<view class="xztime" :class="{'action': timest}">
									<view class="xztime1">
										<view v-for="(jt,index) in jttimen" :key="index" @tap="jtsjxz(jt)">
											{{jt}}:00
										</view>
									</view>
								</view>
							</view>
							<view class="sttime">
								<input type="text" v-model="endtime" @tap="timest1 = !timest1" placeholder="结束时间" />
								<view class="xztime" :class="{'action': timest1}">
									<view class="xztime1">
										<view v-for="(jt,index) in jttimen" :key="index" @tap="jtsjxz1(jt)">
											{{jt}}:00
										</view>
									</view>
								</view>
							</view>
							<view class="sttime">
								<input type="text" v-model="yysl" placeholder="预约数量" />
							</view>
							<view class="sttime">
								<input type="text" v-model="leib" @tap="timest2 = !timest2" placeholder="选择类别" />
								<view class="xztime" :class="{'action': timest2}">
									<view class="xztime1">
										<view class="" v-for="(it,index) in items" :key="index" @tap="xzlb(it.name)">
											{{it.name}}
										</view>
									</view>
								</view>
							</view>
							<view class="sttime">
								<button type="" class="cu-btn bg-thame" style="height: 50upx; line-height: 50upx;" @tap="addtime">添加</button>
							</view>
						</view>
					</view>
				</view>
				<view class="margin-top-sm" v-if="tabindex == 2">
					<view class="">
						<view class="flexs">
							<view class="sttime">
								<input type="text" v-model="starttime" @tap="timest = !timest" placeholder="开始时间" />
								<view class="xztime" :class="{'action': timest}">
									<view class="xztime1">
										<view v-for="(jt,index) in jttimen" :key="index" @tap="jtsjxz(jt)">
											{{jt}}:00
										</view>
									</view>
								</view>
							</view>
							<view class="sttime">
								<input type="text" v-model="endtime" @tap="timest1 = !timest1" placeholder="结束时间" />
								<view class="xztime" :class="{'action': timest1}">
									<view class="xztime1">
										<view v-for="(jt,index) in jttimen" :key="index" @tap="jtsjxz1(jt)">
											{{jt}}:00
										</view>
									</view>
								</view>
							</view>
							<view class="sttime">
								<input type="text" v-model="yysl" placeholder="预约数量" />
							</view>
							<view class="sttime">
								<input type="text" v-model="leib" @tap="timest2 = !timest2" placeholder="选择类别" />
								<view class="xztime" :class="{'action': timest2}">
									<view class="xztime1">
										<view class="" v-for="(it,index) in items" :key="index" @tap="xzlb(it.name)">
											{{it.name}}
										</view>
									</view>
								</view>
							</view>
							<view class="sttime">
								<button type="" class="cu-btn bg-thame" style="height: 50upx; line-height: 50upx;" @tap="addtime">添加</button>
							</view>
						</view>
					</view>
				</view>
				<view class="margin-top-sm" v-if="tabindex == 3">
					<view class="">
						<view class="flexs">
							<view class="sttime">
								<input type="text" v-model="starttime" @tap="timest = !timest" placeholder="开始时间" />
								<view class="xztime" :class="{'action': timest}">
									<view class="xztime1">
										<view v-for="(jt,index) in jttimen" :key="index" @tap="jtsjxz(jt)">
											{{jt}}:00
										</view>
									</view>
								</view>
							</view>
							<view class="sttime">
								<input type="text" v-model="endtime" @tap="timest1 = !timest1" placeholder="结束时间" />
								<view class="xztime" :class="{'action': timest1}">
									<view class="xztime1">
										<view v-for="(jt,index) in jttimen" :key="index" @tap="jtsjxz1(jt)">
											{{jt}}:00
										</view>
									</view>
								</view>
							</view>
							<view class="sttime">
								<input type="text" v-model="yysl" placeholder="预约数量" />
							</view>
							<view class="sttime">
								<input type="text" v-model="leib" @tap="timest2 = !timest2" placeholder="选择类别" />
								<view class="xztime" :class="{'action': timest2}">
									<view class="xztime1">
										<view class="" v-for="(it,index) in items" :key="index" @tap="xzlb(it.name)">
											{{it.name}}
										</view>
									</view>
								</view>
							</view>
							<view class="sttime">
								<button type="" class="cu-btn bg-thame" style="height: 50upx; line-height: 50upx;" @tap="addtime">添加</button>
							</view>
						</view>
					</view>
				</view>
				<view class="margin-top-sm" v-if="tabindex == 4">
					<view class="">
						<view class="flexs">
							<view class="sttime">
								<input type="text" v-model="starttime" @tap="timest = !timest" placeholder="开始时间" />
								<view class="xztime" :class="{'action': timest}">
									<view class="xztime1">
										<view v-for="(jt,index) in jttimen" :key="index" @tap="jtsjxz(jt)">
											{{jt}}:00
										</view>
									</view>
								</view>
							</view>
							<view class="sttime">
								<input type="text" v-model="endtime" @tap="timest1 = !timest1" placeholder="结束时间" />
								<view class="xztime" :class="{'action': timest1}">
									<view class="xztime1">
										<view v-for="(jt,index) in jttimen" :key="index" @tap="jtsjxz1(jt)">
											{{jt}}:00
										</view>
									</view>
								</view>
							</view>
							<view class="sttime">
								<input type="text" v-model="yysl" placeholder="预约数量" />
							</view>
							<view class="sttime">
								<input type="text" v-model="leib" @tap="timest2 = !timest2" placeholder="选择类别" />
								<view class="xztime" :class="{'action': timest2}">
									<view class="xztime1">
										<view class="" v-for="(it,index) in items" :key="index" @tap="xzlb(it.name)">
											{{it.name}}
										</view>
									</view>
								</view>
							</view>
							<view class="sttime">
								<button type="" class="cu-btn bg-thame" style="height: 50upx; line-height: 50upx;" @tap="addtime">添加</button>
							</view>
						</view>
					</view>
				</view>
				<view class="margin-top-sm" v-if="tabindex == 5">
					<view class="">
						<view class="flexs">
							<view class="sttime">
								<input type="text" v-model="starttime" @tap="timest = !timest" placeholder="开始时间" />
								<view class="xztime" :class="{'action': timest}">
									<view class="xztime1">
										<view v-for="(jt,index) in jttimen" :key="index" @tap="jtsjxz(jt)">
											{{jt}}:00
										</view>
									</view>
								</view>
							</view>
							<view class="sttime">
								<input type="text" v-model="endtime" @tap="timest1 = !timest1" placeholder="结束时间" />
								<view class="xztime" :class="{'action': timest1}">
									<view class="xztime1">
										<view v-for="(jt,index) in jttimen" :key="index" @tap="jtsjxz1(jt)">
											{{jt}}:00
										</view>
									</view>
								</view>
							</view>
							<view class="sttime">
								<input type="text" v-model="yysl" placeholder="预约数量" />
							</view>
							<view class="sttime">
								<input type="text" v-model="leib" @tap="timest2 = !timest2" placeholder="选择类别" />
								<view class="xztime" :class="{'action': timest2}">
									<view class="xztime1">
										<view class="" v-for="(it,index) in items" :key="index" @tap="xzlb(it.name)">
											{{it.name}}
										</view>
									</view>
								</view>
							</view>
							<view class="sttime">
								<button type="" class="cu-btn bg-thame" style="height: 50upx; line-height: 50upx;" @tap="addtime">添加</button>
							</view>
						</view>
					</view>
				</view>
				<view class="margin-top-sm" v-if="tabindex == 6">
					<view class="">
						<view class="flexs">
							<view class="sttime">
								<input type="text" v-model="starttime" @tap="timest = !timest" placeholder="开始时间" />
								<view class="xztime" :class="{'action': timest}">
									<view class="xztime1">
										<view v-for="(jt,index) in jttimen" :key="index" @tap="jtsjxz(jt)">
											{{jt}}:00
										</view>
									</view>
								</view>
							</view>
							<view class="sttime">
								<input type="text" v-model="endtime" @tap="timest1 = !timest1" placeholder="结束时间" />
								<view class="xztime" :class="{'action': timest1}">
									<view class="xztime1">
										<view v-for="(jt,index) in jttimen" :key="index" @tap="jtsjxz1(jt)">
											{{jt}}:00
										</view>
									</view>
								</view>
							</view>
							<view class="sttime">
								<input type="text" v-model="yysl" placeholder="预约数量" />
							</view>
							<view class="sttime">
								<input type="text" v-model="leib" @tap="timest2 = !timest2" placeholder="选择类别" />
								<view class="xztime" :class="{'action': timest2}">
									<view class="xztime1">
										<view class="" v-for="(it,index) in items" :key="index" @tap="xzlb(it.name)">
											{{it.name}}
										</view>
									</view>
								</view>
							</view>
							<view class="sttime">
								<button type="" class="cu-btn bg-thame" style="height: 50upx; line-height: 50upx;" @tap="addtime">添加</button>
							</view>
						</view>
					</view>
				</view>
				<!-- 一键排班 -->
				<view class="yjpb" :class="{'act': yj}">
					<view class="padding-bottom-sm border-bottom" v-if="list">
						<view class="flexs pblb text-center">
							<view class="text-left">
								日期
							</view>
							<view>
								开始时间
							</view>
							<view>
								结束时间
							</view>
							<view>
								预约数量
							</view>
							<view>
								选择分类
							</view>
							<view class="text-right">
								操作
							</view>
						</view>
						<view class="flexs pblb text-center margin-top-sm color7" v-for="(zt,index) in ztsj" :key="index">
							<view class="text-left">
								{{zt.rq}}
							</view>
							<view>
								{{zt.st}}
							</view>
							<view>
								{{zt.et}}
							</view>
							<view>
								{{zt.sl}}
							</view>
							<view>
								{{zt.lb}}
							</view>
							<view class="text-right">
								<text class="cuIcon-roundclose" style="font-size: 32upx; color: red;" @tap="delect(index)"></text>
							</view>
						</view>
					</view>
					<view class="">
						<view class="flexs">
							<view class="sttime">
								<input type="text" v-model="starttime" @tap="timest3 = !timest3" placeholder="开始时间" />
								<view class="xztime" :class="{'action': timest3}">
									<view class="xztime1">
										<view v-for="(jt,index) in jttimen" :key="index" @tap="jtsjxz2(jt)">
											{{jt}}:00
										</view>
									</view>
								</view>
							</view>
							<view class="sttime">
								<input type="text" v-model="endtime" @tap="timest4 = !timest4" placeholder="结束时间" />
								<view class="xztime" :class="{'action': timest4}">
									<view class="xztime1">
										<view v-for="(jt,index) in jttimen" :key="index" @tap="jtsjxz3(jt)">
											{{jt}}:00
										</view>
									</view>
								</view>
							</view>
							<view class="sttime">
								<input type="text" v-model="yysl" placeholder="预约数量" />
							</view>
							<view class="sttime">
								<input type="text" v-model="leib" @tap="timest5 = !timest5" placeholder="选择类别" />
								<view class="xztime" :class="{'action': timest5}">
									<view class="xztime1">
										<view class="" v-for="(it,index) in items" :key="index" @tap="xzlbpb(it.name)">
											{{it.name}}
										</view>
									</view>
								</view>
							</view>
							<view class="sttime">
								<button type="" class="cu-btn bg-thame" style="height: 50upx; line-height: 50upx;" @tap="addtime">添加</button>
							</view>
						</view>
					</view>
					<view class="">
						<button type="" class="margin-tb-sm fl bg-thame " style="height: 60upx; line-height: 60upx;" @tap="yj = false">取消</button>
						<button type="" class="margin-tb-sm bg-thame fr" style="height: 60upx; line-height: 60upx;" @tap="qdpb">确定</button>
					</view>
				</view>
				<button type="" class="cu-btn bg-thame block" style="display: inline-block;line-height: 64upx; width: 100%; margin: 40upx 0upx;"
				 @tap="submit">确认提交</button>
				<view class="">
					<button type="" class="cu-btn bg-thame" style="margin: 40upx 0upx;"
					@tap="yj = true">一键排班</button>
					<button type="" class="cu-btn bg-thame fr" style="margin: 40upx 0upx;"
					@tap="qxpb">取消一键排班</button>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				ztsj: [],
				list: false,
				timest: false,
				timest1: false,
				timest2: false,
				timest3: false,
				timest4: false,
				timest5: false,
				yj: false,
				starttime: '',
				leib: '',
				yysl: '',
				endtime: '',
				xzxm: "0",
				year: '',
				month: '',
				tabindex: '0',
				daytime: [],
				timeh: [],
				sy: '',
				setday: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],

				jttime: [],
				jttimen: [],
				jtm: '',
				jtr: '',
				jts: [],
				items: [{
						name: '远程会诊'
					},
					{
						name: '上门服务'
					}
				]
			}
		},
		computed: {},
		onLoad() {
			this.add();
			this.jutidate();
			this.loadpb();
		},
		methods: {
			jtsjxz(t) {
				this.starttime = t + ":00";
				this.timest = !this.timest;
			},
			jtsjxz1(t) {
				this.endtime = t + ":00";
				this.timest1 = !this.timest1;
			},
			xzlb(i) {
				//console.log(i);
				this.leib = i;
				this.timest2 = !this.timest2;
			},
			jtsjxz2(t) {
				this.starttime = t + ":00";
				this.timest3 = !this.timest3;
			},
			jtsjxz3(t) {
				this.endtime = t + ":00";
				this.timest4 = !this.timest4;
			},
			xzlbpb(i) {
				//console.log(i);
				this.leib = i;
				this.timest5 = !this.timest5;
			},
			addtime() {
				var that = this;
				if (that.starttime == '') {
					uni.showToast({
						icon: 'none',
						title: '开始时间不能为空'
					});
					return;
				} else if (that.endtime == '') {
					uni.showToast({
						icon: 'none',
						title: '结束时间不能为空'
					});
					return;
				} else if (that.yysl == '') {
					uni.showToast({
						icon: 'none',
						title: '预约数量不能为空'
					});
					return;
				} else if (that.leib == '') {
					uni.showToast({
						icon: 'none',
						title: '类别不能为空'
					});
					return;
				}else if (that.starttime > that.endtime) {
					uni.showToast({
						icon: 'none',
						title: '结束时间不能小于开始时间'
					});
					return;
				};
				console.log(that.starttime)
				var ztsj = {
					rq: that.jtm + "-" + that.jtr,
					st: that.starttime,
					et: that.endtime,
					sl: that.yysl,
					lb: that.leib
				};
				that.ztsj = that.ztsj.concat(ztsj)
				/* console.log(that.starttime);
				console.log(that.leib);
				console.log(that.yysl);
				console.log(that.endtime); */
				//console.log(that.ztsj);
				that.starttime = '';
				that.leib = '';
				that.yysl = '';
				that.endtime = '';
				if (that.ztsj !== '') {
					that.list = true;
				};
			},
			delect(i) {
				var that = this;

				uni.showModal({
					title: '提示',
					content: '是否删除',
					success: function(res) {
						if (res.confirm) {
							that.ztsj.splice(i, 1);
							if (i == '') {
								that.list = false;
							};
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});

			},
			loaddate(n) {
				//console.log(n);
				var that = this;
				const date = new Date();
				that.jtm = date.getMonth() + 1;
				that.jtr = date.getDate();
				date.setMonth(date.getMonth()); //设置月份
				date.setDate(date.getDate() + n);
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
				let xqj = date.getDay(date.getDate());
				//that.sy = xqj;
				that.year = year;
				that.sy = that.sy.concat(xqj);
				that.month = that.month.concat(month);
				that.daytime = that.daytime.concat(day);


				//console.log(that.daytime)
			},
			jutidate() {
				var that = this;
				const date = new Date();
				date.setDate(date.getDate());
				let day = date.getDate();
				//console.log(day);
				date.setHours(date.getHours());
				let Hours = date.getHours();
				for (var i = Hours; i <= 23; i++) {
					that.jttime = that.jttime.concat(i);
					//console.log(that.jttime);
				}
				for (var i = 0; i <= 23; i++) {
					that.jttimen = that.jttimen.concat(i);
					//console.log(that.jttimen);
				}

			},
			add() {
				for (var i = 0; i < 7; i++) {
					this.loaddate(i);
				}
			},
			xzrq(m, d, index) {
				//console.log(index)
				this.jtm = m;
				this.jtr = d;
				this.tabindex = index;
			},
			yjpb(){
			},
			qdpb(){
				var that = this;
				console.log(that.ztsj)
				uni.setStorage({
					key:"stagetime",
					data: that.ztsj
				})
				that.yj = false;
			},
			qxpb(){
				uni.setStorage({
					key:"stagetime",
					data: ''
				});
				this.loadpb();
			},
			loadpb(){
				var that = this;
				uni.getStorage({
					key:"stagetime",
					success(e){
						//console.log(e.data);
						that.ztsj = e.data;
					}
				});
				if (that.ztsj == '') {
					that.list = false;
				};
				if (that.ztsj !== '') {
					that.list = true;
				};
			},
			submit() {
				console.log(this.ztsj)
				uni.showToast({
					title: "提交成功"
				});
				uni.request({
					url: '/imhmp/patientController.do?login',
					method: "POST", //仅为示例，并非真实接口地址。
					data: {
						data: this.phone
					},
					header: {
						'content-type': 'application/x-www-form-urlencoded',
					},
					success: (res) => {
						//console.log(res.data);
						this.text = 'request success';
						uni.reLaunch({
							url: '../index/index',
						});
					},
					error: function(xhr, type, errorThrown) {
						//console.log("error: " + type);

					}
				});

			}
		}
	}
</script>

<style>
	.pickerdata {
		width: 100%;
		padding: 30upx;
	}

	.pickerafter {
		position: fixed;
		z-index: 1;
		width: 100%;
		height: 50%;
		overflow-y: scroll;
	}

	.scroll-view_H {
		white-space: nowrap;
		width: 100%;
	}

	.sttime {
		position: relative;
		margin: 10upx 0upx;
		width: 19%;
	}

	.sttime input {
		width: 100%;
		border: 2upx solid #f1f1f1;
		border-radius: 6upx;
		padding: 0upx 6upx;
		height: 50upx;
		line-height: 50upx;
		font-size: 28upx;
	}

	.xztime {
		position: fixed;
		bottom: -100%;
		left: 0upx;
		z-index: 9;
		width: 100%;
		height: 50%;
		padding: 30upx;
		text-align: center;
		border: 2upx solid #f1f1f1;
		border-top: none;
		background: #ffffff;
		z-index: 99;
		transition: all 0.5s;
	}
	.xztime1{
		overflow-y: scroll;
		height: 100%;
	}
	.xztime1 view{
		line-height: 70upx;
		border-bottom: 2upx solid #f1f1f1;
	}
	.action:before{
		position: absolute;
		left: 0upx;
		top: -100%;
		content: '';
		width: 100%;
		height: 100%;
		background: rgb(0,0,0,0.8);
	}
	.action{
		bottom: 0%;
	}
	.active {
		color: #0081FF;
		font-size: 32upx;
	}

	.uni-input-placeholder {
		color: #888888;
		font-size: 28upx;
	}
	.pblb view{
		width: 18%;
		font-size: 26upx;
	}
	.pblb view:first-child,
	.pblb view:last-child{
		width: 12%;
	}
	.yjpb{
		position: fixed;
		top: 200%;
		left: 0%;
		width: 100%;
		height: 100%;
		background: #FFFFFF;
		z-index: 10;
		padding: 30upx;
		transition: all 0.5s;
	}
	.act{
		top: 7%;
	}
</style>
