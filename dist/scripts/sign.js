// 轮播钻石
define(["jquery"], function($) {
	function sign(ele) {}
	sign.prototype = {
		constructor: sign,
		init: function(ele,phone,password) {
			// 初始化  获取元素
			this.ele = ele;
			this.phone = phone;
			this.password = password;
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
					var stm = JSON.parse($.cookie(this.phone.val()));
			var zh = stm[0].id;
			var mm = stm[0].password;
			console.log(zh,mm)
			console.log(this.phone.val(),this.password.val())
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