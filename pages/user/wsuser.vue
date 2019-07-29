<template>
	<view>
		<cu-custom bgColor="bg-thame" :isBack="true">
			<block slot="backText"></block>
			<block slot="content">完善个人信息</block>
			<block slot="right">
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
			<view class="padding-sm border-bottom flex justify-start">
				<text class="margin-right-xs">毕业院校 ：</text>
				<input type="text" v-model="school" value="" placeholder="请填写毕业院校" />
			</view>
			<view class="padding-sm border-bottom flex justify-start">
				<text class="margin-right-xs">主攻学科 ：</text>
				<input type="text" v-model="subject" value="" placeholder="请填写主攻学科" />
			</view>
			<view class="padding-sm border-bottom flex justify-start">
				<text class="margin-right-xs">科研方向 ：</text>
				<input type="text" v-model="direction" value="" placeholder="请填写科研方向" />
			</view>
			<view class="padding-sm border-bottom">
				<text class="margin-right-xs">所属机构 ：</text>
				<text class="color7">{{userxx.school}}</text>
			</view>
			<view class="flexs padding-lr-sm border-bottom">
				<view class="tablb padding-tb-sm border-right basis-df flex justify-start">
					<text class="lbwz">人员类别 ：</text>
					<text class="cuIcon-triangledownfill color7"></text>
					<input type="text" class="basis-sm color7 text-df" v-model="dtype" value="" @tap=" ect = true" />
					<view class="tabxl" :class="{'active': ect}">
						<view class="" style="height: 100%; overflow-y: scroll;">
							<view class="line-h60 border-bottom text-center" v-for="(dtl,index) in doctorTypeList" :key="index" @tap="leib(dtl.code,dtl.name)">
								{{dtl.name}}
							</view>
						</view>
						<button type="primary"  @tap="quxiao">取消</button>
					</view>
				</view>
				<view class="tablb padding-tb-sm basis-sb flex justify-start" style="margin-left: 2%;">
					<text class="">学历 ：</text>
					<text class="cuIcon-triangledownfill color7"></text>
					<input type="text" class="basis-lg color7 text-df" v-model="education" value="" @tap=" etl = true" />
					<view class="tabxl" :class="{'active': etl}">
						<view class="" style="height: 100%; overflow-y: scroll;">
							<view class="line-h60 border-bottom text-center" v-for="(et,index) in educationList" :key="index" @tap="educa(et.typename)">
								{{et.typename}}
							</view>
						</view>
						<button type="primary"  @tap="quxiao">取消</button>
					</view>
				</view>

			</view>
			<view class="padding-lr-sm border-bottom">
				<view class="tablb padding-tb-sm flex justify-start">
					<text class="">资格证书类型 ：</text>
					<text class="cuIcon-triangledownfill color7"></text>
					<input type="text" class="basis-lg color7 text-df" v-model="zstype" value="" @tap=" zst = true" />
					<view class="tabxl" :class="{'active': zst}">
						<view class="" style="height: 100%; overflow-y: scroll;">
							<view class="line-h60 border-bottom text-center" v-for="(zt,index) in zstypeList" :key="index" @tap="ztl(zt.typename,zt.typecode)">
								{{zt.typename}}
							</view>
						</view>
						<button type="primary"  @tap="quxiao">取消</button>
					</view>
				</view>
			</view>
			<view class="padding-lr-sm border-bottom">
				<view class="tablb padding-tb-sm flex justify-start">
					<text class="">职称 ：</text>
					<text class="cuIcon-triangledownfill color7"></text>
					<input type="text" class="basis-xl color7 text-df" v-model="zhicheng" value="" @tap=" zhic = true" />
					<view class="tabxl" :class="{'active': zhic}">
						<view class="" style="height: 100%; overflow-y: scroll;">
							<view class="line-h60 border-bottom text-center" v-for="(zc,index) in zcList" :key="index" @tap="zcl(zc.name)">
								{{zc.name}}
							</view>
						</view>
						<button type="primary"  @tap="quxiao">取消</button>
					</view>
				</view>
			</view>
			<view class="padding-lr-sm border-bottom">
				<view class="tablb padding-tb-sm flex justify-start">
					<text class="">所属医院 ：</text>
					<text class="cuIcon-triangledownfill color7"></text>
					<input type="text" class="basis-lg color7 text-df" v-model="ssyy" value="" @tap=" sy = true" />
					<view class="yyxx" :class="{'action': sy}">
						<input type="text" value="" v-model="keywords" placeholder="搜索医院" />
						<view class="" style="height: 100%; overflow-y: scroll;">
							<view class="line-h60 border-bottom text-center" v-for="(org,index) in search(keywords)" :key="index" @tap="orgl(org.name,org.id)">
								{{org.name}}
							</view>
						</view>
						<button type="primary"  @tap="quxiao">取消</button>
					</view>
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
			<view class="flexs align-center padding-sm border-bottom">
				<text class="basis-xs">简介 ：</text>
				<textarea class="basis-xl text-df color7 line-h40" style="max-height: 160upx;" value="" v-model="resume"
				 placeholder="" />
				</view>
			<view class="flexs align-center padding-sm border-bottom">
				<text style="width: 80upx;">擅长疾病</text>
				<textarea class="basis-xl text-df color7 line-h40" style="max-height: 160upx;" value="" v-model="best" placeholder="填写擅长领域" />
			</view>
			<view class="flexs align-center padding-sm border-bottom">
				<text style="width: 80upx;">医疗成果</text>
				<textarea class="basis-xl text-df color7 line-h40" style="max-height: 160upx;" value="" v-model="avm" placeholder="填写医疗成果" />
			</view>
		</view>
    </view>
</template>

<script>
    export default {
		data() {
			return {
				ect: false,
				zst:false,
				etl:false,
				zhic:false,
				sy:false,
				keywords:'',
				userxx:[],
				school:'',
				subject:'',
				direction:'',
				resume:'',
				best:'',
				avm:'',
				educationList:[],
				zstypeList:[],
				zcList:[],
				orgList:[],
				zhicheng:'',
				zstype:'',
				education:'',
				dtype:'',
				doctorTypeList:[],
				ssyy:'',
			}
		},
		onLoad() {
			var that = this;
			const userid = uni.getStorageSync('userid');
			that.$axios(that.$baseUrl.user,{
				'id':userid
			   })
			 .then(res =>{
				   console.log(res.data.attributes);
				   let docter = res.data.attributes;
				   that.doctorTypeList = docter.doctorTypeList;//人员类别
				   that.educationList = docter.educationList;//学历
				   that.zstypeList = docter.zstypeList;//资格证书类型
				   that.zcList = docter.zcList;//职称
				   that.orgList = docter.orgList;//所属医院
				   that.resume = docter.resume;
				   that.userxx = docter.doctor;
				   //console.log(that.userxx);
				},(error) =>{
				  console.log(error)
			   })
		},
        methods: {
			leib(code,name){
				console.log(code)
				this.ect = false;
				this.dtype = name;
			},
			zcl(name){
				this.zhic = false;
				this.zhicheng = name;
			},
			educa(et){
				this.etl = false;
				this.education = et;
			},
			ztl(name,code){
				console.log(code)
				this.zst = false;
				this.zstype = name;
			},
			search(keywords){
				//注意：forEach some filter findindex 这些都属于数组的新方法，
				//都会对数组中的每一项进行遍历，执行相关操作。
				return this.orgList.filter(org => {
					//if(item.name.indexOf(keywords) != -1)
					//注意：Es6中，为字符串提供了一个新方法，叫做 String,prototype.includes('要包含的字符串')
					//如果包含，则返回 true ，否则返回 false
					if(org.name.includes(keywords)){
						return org
					}
				})
			},
			orgl(name,id){
				this.ssyy = name;
				this.sy = false;
				this.keshi();
				console.log(id)
			},
			keshi(){
				var that = this;
				that.$axios(that.$baseUrl.keshi,{
					'id':id
				   })
				 .then(res =>{
					   console.log(res);
					},(error) =>{
					  console.log(error)
				   })
			},
            adddocter(){
				var that = this;
				const userid = uni.getStorageSync('userid');
				that.$axios(that.$baseUrl.adddocter,{
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
			quxiao(){
				this.ect= false;
				this.zst=false;
				this.etl=false;
				this.zhic=false;
				this.sy=false;
			}
        }
    }
</script>

<style>
	.user-img image{
		width: 100upx;
		height: 100upx;
		border-radius: 50%;
	}
	.uni-input-placeholder {
		color: #888888;
		font-size: 28upx;
	}
	.tablb {
		position: relative;
	}
	.lbwz{
		width: 148upx;
	}
	.cuIcon-triangledownfill{
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		right: 6upx;
		font-size: 50upx;
		display: inline-block;
	}
	.tabxl{
		position: fixed;
		left: 0upx;
		bottom: -200%;
		width: 100%;
		height: 60%;
		background: #ffffff;
		padding: 30upx 30upx 120upx 30upx;
		transition: all 0.5s;
		z-index: 10;
	}
	.tabxl:before{
		position: absolute;
		left: 0upx;
		top: -100%;
		content: '';
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.8);
	}
	.active{
		bottom: 0%;
	}
	.yyxx{
		position: fixed;
		top: -200%;
		left: 0upx;
		width: 100%;
		height: 100%;
		background: #ffffff;
		padding: 200upx 30upx 120upx 30upx;
		z-index: 10;
		transition: all 0.5s;
	}
	.action{
		top: 0%;
	}
	.yyxx input{
		position: absolute;
		left: 30upx;
		top: 130upx;
		background: #f1f1f1;
		width: 91%;
		height: 60upx;
		text-indent: 10upx;
		line-height: 60upx;
		border-radius: 20upx;
		overflow: hidden;
	}
	.tabxl button,
	.yyxx button{
		position: absolute;
		width: 100%;
		left: 0upx;
		bottom: 20upx;
		height: 80upx;
		line-height: 80upx;
		background: none;
		color: #888;
		border-top: 2upx solid #f1f1f1;
	}
	.tabxl button:after,
	.yyxx button:after{
		display: none;
	}
</style>
