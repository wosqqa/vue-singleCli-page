import axios from 'axios'
var qs = require('qs')    // qs.stringify(params)对提交json参数格式化a=212&b=2332的格式
import jsonp from 'jsonp';
//静态变量
var localHref = window.location.href;//判断正式测试参数

// 接口请求地址base
let base = ''
let baseTwo = ''
let baseThree= ''
export var hostname='';//cdn测试服
export var giveRedUrl='';//发红包页面//kp.dftoutiao.com/shb_in3/second.html正式

if(localHref.indexOf('http://localhost:8888/')>-1 || localHref.indexOf('http://172.18.5.108:8888/')>-1){//本地
	base = 'https://shoutu.dftoutiao.com';
	hostname='http://172.18.5.108:8888/index.html#/';
	baseTwo = 'https://awaken.dftoutiao.com/';
	baseThree = 'https://kp.dftoutiao.com';
	giveRedUrl='https://shoutu2.dftoutiao.com';
}else if(localHref.indexOf('//resources.dftoutiao.com/apprentice2__test')>-1){//测试
	base = 'https://test-shoutu.dftoutiao.com';
	hostname='https://resources.dftoutiao.com/apprentice__test/index.html#/';
	baseTwo = 'https://awaken.dftoutiao.com/';
	baseThree = 'https://test-kp.dftoutiao.com';
	giveRedUrl='https://test-shoutu2.dftoutiao.com';
}else{//正式
	base = 'https://shoutu.dftoutiao.com';
	hostname='https://resources.dftoutiao.com/apprentice/index.html#/';
	baseTwo = 'https://awaken.dftoutiao.com';
	baseThree = 'https://kp.dftoutiao.com';
	giveRedUrl='https://shoutu2.dftoutiao.com';
}


axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.withCredentials = true;
  // 超时时间
axios.defaults.timeout = 50000
	  // http请求拦截器
	axios.interceptors.request.use(config => {
	  config.headers={
	  	'Content-Type':'application/x-www-form-urlencoded'
		}
	  return config
	}, error => {
	  return Promise.reject(error)
	})
	  // http响应拦截器
	axios.interceptors.response.use(data => { // 响应成功关闭loading
	  if (data.data.code == '00044') {
	    window.location.href = '/login'
	  }
	  return data
	}, error => {
	  return Promise.reject(error)
	})

// axios.defaults.baseURL = 'https://api.example.com';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

//var instance = axios.create({//测试cors跨域
//baseURL: 'http://some-domain.com/api/',
//timeout: 5000,
//headers:{
//  'Content-Type':'application/x-www-form-urlencoded'
//	},
//	transformRequest: [function (data) {
//	    data = qs.stringify(data);
//	    return data;
//	}],
//	withCredentials:true   //加了这段就可以跨域了
//headers: {'X-Custom-Header': 'foobar',"Access-Control-Allow-Methods":"GET,POST"}
//})


//jsonp get获取数据
export const jsonpGetData = params => {
	jsonp(params.url+'?'+qs.stringify(params.param), {}, function (err, data) {
		 console.log(params.url+'?'+qs.stringify(params.param));
			window[params.callback](data);
	});
}

//jsonp post获取数据
export const jsonpPostData = params => {
	jsonp(params.url, qs.stringify(params.param), function (err, data) {
			window[params.callback](data);
	});
}

//获取云控玩法、邀请码
export const getInviteCode = `${base}/invitefriends/can_type_code`

//获取云控数据参数
export const pollingConfig = `${base}/polling/config`
//获取top参数
export const typeCodeTop = `${base}/invitefriends/type_code_top`
//获取我的徒儿
export const myApprenticeList = `${base}/Invitenew/my_apprentice_list`

//唤醒徒儿列表
export const wakeupApprenticeList = `${base}/Invitenew/wakeup_apprentice_list`

//唤醒徒儿Top提示
export const wakeupTopTips = `${base}/awaken/config`

//徒孙列表
export const getGrandApprentice = `${base}/grand/apprentice`

//单独页唤醒好友列表
export const gettxlhx02 = `${baseTwo}/dfh_dingyue/gettxlhx02`

//群发邀请获取图片等
export const getbalance = `${baseTwo}/ucenter/pocketmoney/getbalance`

//手气抢红包列表
export const giveRedEnvelope = `${giveRedUrl}/index/invite/init`
//拆云控
export const giveInviteApprentice = `${giveRedUrl}/index/invite/invite_apprentice`
//点击拆
export const giveRedChai = `${baseThree}/act6th4/take`


