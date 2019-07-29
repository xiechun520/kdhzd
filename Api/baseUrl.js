import {web} from "./config.js"

const serviceModule = {
    user: {//用户信息
        url: web.www+'imhmp/doctorController.do?getDoctorInfo',
        method: 'post'
    },
	adddocter:{//完善信息
		url: web.www+'doctorController.do?saveDoctor',
		method:'post'
	},
	user: {//用户信息
	    url: web.www+'imhmp/departController.do?getKeshiByOrg',
	    method: 'post'
	},
	reg: {//注册
	    url: web.www+'imhmp/doctorController.do?register',
	    method: 'post'
	},
	login: {//登录
	    url: web.www+'imhmp/doctorController.do?login',
	    method: 'post'
	},
    datas:{
        url:web.webUrl+'basic/data/hospital.php',
        method: 'get'
    }
};


const ApiSetting = { ...serviceModule
}
export default ApiSetting
