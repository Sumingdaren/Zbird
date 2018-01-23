// 登录验证
define(["jquery","cookie"], function($) {
	function sign(ele) {}
	sign.prototype = {
		constructor: sign,
		init: function(ele,phone,password,mmp,mmm,logo) {
			// 初始化  获取元素
			this.ele = ele;
			this.phone = phone;
			this.password = password;
			this.mmp = mmp;
			this.mmm = mmm;
			this.logo = logo;
			this.ele.on("click",$.proxy(this.btn,this))
			// console.log($.cookie("zhanghao"))
			// console.log(this.password.html())
			// console.log(this.phone,this.password)
			// 判断登录的账号
			this.phone.focus($.proxy(this.cation1,this))
			this.phone.blur($.proxy(this.cation2,this))
			// 判断登录的密码
			this.password.focus($.proxy(this.pass1,this))
			this.password.blur($.proxy(this.pass2,this))

		},

		cation1 : function(){
			if( this.phone.val() == "用户名" ){
				this.phone.val("")
			}
		},
		cation2 : function(){
			if( this.phone.val() == ""  ){
				 this.phone.val("用户名")
			}
		},

		pass1 : function(){
			if( this.password.val() == "密码" ){
				this.password.val("")
			}
		},
		pass2 : function(){
			if( this.password.val() == ""){
				this.password.val("密码")
			}
		},
		btn : function(){
			if( $.cookie(this.phone.val()) ){
				$.cookie("dlcg","1")
			var stm = JSON.parse($.cookie(this.phone.val()));
			var zh = stm[0].id;
			var mm = stm[0].password;
			if( this.phone.val() == zh && this.password.val() == mm ){
				var div = $("<div></div>")
				div.css({
					position : "fixed",
					top : "50%",
					left : "50%",
					width:"200",
					height:"100",
					background: "#fff",
					color:"blue",
					fontSize : "40px",
					lineHeight : "100px",
					textAlign : 'center',
					borderRadius : "10px",
					boxShadow : "0 0 3px #ffff00",
					margin : "-50px 0 0 -100px "
				}) 
				div.html("登录成功")
				$(document.body).append(div)
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
				this.mmp.html(newstr)
				this.mmm.html("退出登录")
				setTimeout(function(){
					$(div).remove()
				},3000) 
			}
			}else{
				return 0;
			}
		}
	}

	return sign

})