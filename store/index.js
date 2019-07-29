import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        /**
         * 是否需要强制登录
         */
		uerInfo: {},
        hasLogin: false,
		userzt:'',
        userid: ""
    },
    mutations: {
        login(state, userzt) {
			//console.log(state);
			console.log(JSON.stringify(userzt));
            //state.userid = userzt.attributes.id;
            state.hasLogin = true;
			uni.setStorage({
				key: 'uerInfo',
				data: userzt
			})
        },
        logout(state) {
            state.userName = "";
            state.hasLogin = false;
			uni.removeStorage({
				key: 'uerInfo'
			});
        }
    }
})

export default store
