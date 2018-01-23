// 跳转页面 
define(["jquery", "cookie"], function($) {
	function mmp() {}
	mmp.prototype = {
		constructor: mmp,
		init: function(dl,mmm,logo) {
			// 初始化 选取元素
			this.dl = dl;
			this.mmm = mmm;
			this.logo = logo;
			this.load()
			},
			load : function(){
				if( $.cookie("dlcg") ){
				// 获取所有cookie
			var strCookie = document.cookie;
			// 将cookie分割
            var arrCookie = strCookie.split("; ");
            var _this = this;
            // 对这个遍历
            arrCookie.forEach(function(item){
            	// 按照等号分割等号左边的是一项 等号右边的是一项
            	var nb = item.split("=")
            	// 创建一个数组
            	var arr = []
            	// 把所有的对象让进数组里形成一个新的对象
            	for(var i in nb[0]){
            		arr.push(nb[0])
            	}
            	// 对数组去重返回一个没有重复值的数组
            	let no = new Set(arr)
            	// 创建一个正则选取所有的复合规则是数字的因为别的cookie都是字母只有账号是数字
            	var zz =  /^1\d{10}$/
            	// 查看没有重复值的数组是否符合规则
            	var oo = zz.test(no)
            	// 对所有的遍历
            	for(let item of no.keys() ){
            		var res =/^\d{1,}$/ 
            		// 查看是否符合规则
            		var haha = res.test(item)
            		// 如果为true就是符合然后运行下面的
            		if( haha == true ){
						_this.logo.html(item)
						// 否则就返回
            		}else{
            			return 0;
            		}
            	}
            })
            var s = "普通";
              var reg = new RegExp("(" + s + ")", "g");
              var str = "晚上好您是&nbsp;普通&nbsp;会员"
              var newstr = str.replace(reg,"<font color=#ff8a81>$1</font>");  
				this.dl.html(newstr)
				this.mmm.html("退出登录")
			}
		}
	}
	return mmp
})