import router from '../router'
// 跳转登录页面
export const toLogin = () => {
    router.replace({
        path: '/login',
        query: {
            redirect: router.currentRoute.fullPath // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
        }
    });
}


// 通过参数名获取url中的参数值
export const getString = (queryName) => {
	let href = window.location.href
	let value = ''
	
	if(href.indexOf('?') == -1 || href.indexOf(name) == -1 || href.indexOf('=') == -1){
	  value = '';
	}else{
		let param_str = href.substr(href.indexOf('?') + 1);
		let param_arr = [];
		if(param_str.indexOf('&') !=-1){
		    param_arr = param_str.split('&');
		}else{
		    param_arr[0] = param_str
		}
		for(let p of param_arr){
			let p_arr = p.split('=');
			if(p_arr[0] == queryName){
				value = p_arr[1]
			}
		}
	}
	
	return value;
}


/* 验证密码 */
export const validatePassword = (value) => {
  const reg = /^[\x21-\x7E]{6,20}$/
  if (value == '' || value == undefined || value == null) {
    return '请输入密码'
  } else {
		if ((!reg.test(value)) && value != '') {
			return '密码为6-20位字符、数字、及标点符号'
    }else{
			return true
		}
  }
}

/* 验证手机号 */
export const validatePhone = (value) => {
  const reg = /^[1][3,4,5,7,8,9][0-9]{9}$/
  if (value == '' || value == undefined || value == null) {
    return '请输入手机号'
  } else {
    if ((!reg.test(value)) && value != '') {
			return '请输入正确的手机号码'
    }else{
			return true
		}
  }
}

// 验证身份证号
export const validateIdCard = (value) => {
  var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
  if (value == '' || value == undefined || value == null) {
    return '请输入身份证号'
  } else {
    if (!reg.test(value)) {
			return '请输入正确的身份证号'
    } else {
			return true
    }
  }
}

// 将数字转成 k w 方式显示
export const formatNumber = (num) => {
  return num >= 1e3 && num < 1e4 ? (num / 1e3).toFixed(1) + 'k' : num >= 1e4 ? (num / 1e4).toFixed(1) + 'w' : num
}

export const numberFormat = (value) => {
  let param = {};
  let k = 10000;
  let newValue,
      sizes = ['', '万', '亿', '万亿'],
      i;
      if(value < k){
          param.value =value
          param.unit=''
      }else{
          i = Math.floor(Math.log(value) / Math.log(k)); 
          param.value = ((value / Math.pow(k, i))).toFixed(2);
          param.unit = sizes[i];
      }
  newValue = param.value +  param.unit
  return newValue;
}


// 判断机型是android
export const isAndroid = () => {
  const u = navigator.userAgent;
  const isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1; //判断android
  return isAndroid;
}

// 年月日 + 时分秒
export const dateCurFull = () => {
	const date = new Date();
		let time = {
			year: date.getFullYear(), //年
			month: date.getMonth() + 1, // 月
			day: date.getDate(), // 日
			hours: date.getHours(), // 时
			minutes: date.getMinutes(), // 分
			seconds: date.getSeconds() // 秒
		};
	  // time.month = (time.month < 10) ? ('0'+ time.month) : time.month
	  if (time.month < 10) {
			time.month = '0' + time.month;
		}
	    if (time.day < 10) {
			time.day = '0' + time.day;
		}
		if (time.hours < 10) {
			time.hours = '0' + time.hours;
		}
		if (time.minutes < 10) {
			time.minutes = '0' + time.minutes;
		}
		if (time.seconds < 10) {
			time.seconds = '0' + time.seconds;
		}
		const currTime = time.year + '-' + time.month + '-' + time.day + ' ' + time.hours + ':' + time.minutes + ':' + time.seconds;
		return currTime
}
// 年月日
export const dateCurrent = () => {
	const date = new Date();
		let time = {
			year: date.getFullYear(), //年
			month: date.getMonth() + 1, // 月
			day: date.getDate(), // 日
		};
	  if (time.month < 10) {
			time.month = '0' + time.month;
		}
	    if (time.day < 10) {
			time.day = '0' + time.day;
		}
		const currTime = time.year + '-' + time.month + '-' + time.day;
		return currTime
}

// 当前年月
export const dateCurYearMonth = () => {
	const date = new Date();
		let time = {
			year: date.getFullYear(), //年
			month: date.getMonth() + 1, // 月
		};
	  if (time.month < 10) {
			time.month = '0' + time.month;
		}
		const currTime = time.year + '-' + time.month;
		return currTime
}
// 当前月
export const dateCurMonth = () => {
	const date = new Date();
		let month = date.getMonth() + 1 // 月;
		const currTime = month + '月';
		return currTime
}

// 当前月，日
export const dateCurMonthDate = () => {
	const date = new Date();
		let time = {
			month: date.getMonth() + 1, // 月
			day: date.getDate(), // 日
		};
	  if (time.month < 10) {
			time.month = '0' + time.month;
		}
	    if (time.day < 10) {
			time.day = '0' + time.day;
		}
		const currTime = time.month + '-' + time.day;
		return currTime
}

// 几天后的时间月，日，如果不是同一年， -- 账户转出用到
export const dateCurrentAfterNum = (num) => {
	const date = new Date();
		let nowTime = {
			year: date.getFullYear(), //年
			month: date.getMonth() + 1, // 月
			day: date.getDate(), // 日
		};
	  let temp = new Date(nowTime.year, nowTime.month, nowTime.day + num)
		let afterTime = {
			year: temp.getFullYear(), //年
			month: temp.getMonth(), // 月 ----- nowTime 中月份已经1，这里就不用了
			day: temp.getDate(), // 日
		}
		
	  if (afterTime.month < 10) {
			afterTime.month = '0' + afterTime.month;
		}
	  if (afterTime.day < 10) {
			afterTime.day = '0' + afterTime.day;
		}
		if(afterTime.year == nowTime.year){
			const currTime = afterTime.month + '-' + afterTime.day;
			return currTime
		}else{
			const currTime = afterTime.year + '-' + afterTime.month + '-' + afterTime.day;
			return currTime
		}
		
}

// 几天后的时间(周几) -- 互助金转入收益的时候用到
export const dateCurrentAfter = (num) => {
	const date = new Date();
		let weeks=["日", "一", "二", "三", "四", "五", "六"]
		let nowTime = {
			year: date.getFullYear(), //年
			month: date.getMonth() + 1, // 月
			day: date.getDate(), // 日
			week: weeks[date.getDay()]
		};
	  let temp = new Date(nowTime.year, nowTime.month, nowTime.day + num)
		let afterTime = {
			year: temp.getFullYear(), //年
			month: temp.getMonth(), // 月 ----- nowTime 中月份已经1，这里就不用了
			day: temp.getDate(), // 日
			week: weeks[temp.getDay()]
		}
		
	  if (afterTime.month < 10) {
			afterTime.month = '0' + afterTime.month;
		}
	  if (afterTime.day < 10) {
			afterTime.day = '0' + afterTime.day;
		}
		if(afterTime.year == nowTime.year){
			const currTime = afterTime.month + '-' + afterTime.day + '(周' + afterTime.week + ')';
			return currTime
		}else{
			const currTime = afterTime.year + '-' + afterTime.month + '-' + afterTime.day + '(周' + afterTime.week + ')';
			return currTime
		}
		
}