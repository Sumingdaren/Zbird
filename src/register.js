// 加入购物车
define(["jquery", "cookie"], function($) {
	function register(ele) {}
	register.prototype = {
		constructor: register,
		init: function(phone, proving, password, again, phoneempty, provingempty, passwordempty, againempty, dynamic, submit) {
			// 初始化 选取元素
			this.phone = phone;
			this.proving = proving;
			this.password = password;
			this.again = again;
			this.phoneempty = phoneempty;
			this.provingempty = provingempty;
			// console.log(this.provingempty)
			this.passwordempty = passwordempty;
			this.againempty = againempty;
			this.dynamic = dynamic;
			this.submit = submit;
			// this.num = 0;
			this.num1 = 0;
			this.num2 = 0;
			this.num3 = 0;
			this.num4 = 0;
			// console.log(this.phone.parent())
			// 手机号验证  获取焦点和失去焦点
			this.phone.focus($.proxy(this.cation1, this))
			this.phone.blur($.proxy(this.cation2, this))


			//验证码验证
			this.dynamic.on("click", $.proxy(this.btn, this))
			this.proving.focus($.proxy(this.btn1, this))
			this.proving.blur($.proxy(this.btn2, this))

			// 密码验证
			this.password.focus($.proxy(this.pass, this))
			this.password.blur($.proxy(this.pass2, this))

			// 再次输入密码
			this.again.focus($.proxy(this.again1, this))
			this.again.blur($.proxy(this.again2, this))

			// 提交
			this.submit.on("click", $.proxy(this.winner, this))
			// console.log(this.submit)

		},
		// 输入框获取到焦时判断是否有文字如果是初始的文字 清空
		cation1: function() {
			if (this.phone.val() == "请输入手机号") {
				this.phone.val("")
			}
		},
		// 输入框失去焦点时判断文字是否正确 如果不正确输出为11位数字 如果没输入 则输出不能为空
		cation2: function() {
			// console.log(this.phone.val().charCodeAt())
			var res = /^1\d{10}$/
			var phone = this.phone.val();
			// console.log(res)
			// 判断是否符合这个正则的规则 如果符合就不弹出
			if (res.test(phone)) {
				var _this = this;
				_this.num1 = 1;
				this.phoneempty.html("")
				this.phone.parent().css({
					borderColor: "#fff"
				})
			}
			if (!res.test(phone)) {
				this.phoneempty.html("手机号码为11位数字")
				this.phone.parent().css({
					borderColor: "red"
				})
			}
			// 判断是否为空如果为空就输出不能为空
			if (this.phone.val() == "") {
				this.phoneempty.html("手机号码不能为空")
				this.phone.val("请输入手机号");
				this.phone.parent().css({
					borderColor: "red"
				})
			}
		},
		// 点击获取验证码随机生成一个验证码 
		btn: function() {
			this.suiji = Math.floor(Math.random() * 65535).toString(16);
			if (this.suiji.length < 4) {
				this.suiji += "a"
			}
			if (this.suiji.length < 3) {
				this.suiji += "az"
			}
			this.dynamic.html(this.suiji)
		},
		// 输入框获取焦点的时候让默认的字取消
		btn1: function() {
			if (this.proving.val() == "6位验证码") {
				this.proving.val("")
			}
		},
		// 输入框失去焦点时判断是否为生成的随机验证码
		btn2: function() {
			var _this = this;
			console.log(_this.proving.val())
			if (_this.proving.val() != _this.suiji) {
				_this.provingempty.html("请输入正确的验证码")
				_this.proving.parent().css({
					borderColor: "red"
				})
			}
			if (_this.proving.val() == "") {
				_this.provingempty.html("验证码不能为空")
				_this.proving.val("6位验证码")
				_this.proving.parent().css({
					borderColor: "red"
				})
			}
			if (_this.proving.val() == _this.suiji) {
				_this.num2 = 1;
				_this.provingempty.html("")
				_this.proving.parent().css({
					borderColor: "#fff"
				})
			}
		},
		pass: function() {
			if (this.password.val() == "6-20位大小写字母，数字及'-'、'_'组合") {
				this.password.val("")
			}
		},
		pass2: function() {
			var res = /^[0-9a-zA-Z-\_]{6,20}$/
			var password = this.password.val()
			if (res.test(password)) {
				var _this = this;
				_this.num3 = 1;
				this.passwordempty.html("")
				_this.password.parent().css({
					borderColor: "#fff"
				})
			}
			if (!res.test(password)) {
				this.passwordempty.html("6-20位大小写字母，数字及'-'、'_'组合")
				this.password.parent().css({
					borderColor: "red"
				})
			}
			if (this.password.val() == "") {
				this.passwordempty.html("密码不能为空，请填写密码")
				this.password.parent().css({
					borderColor: "red"
				})
			}
		},

		again1: function() {
			if (this.again.val() == "请再次输入密码") {
				this.again.val("")
			}
		},
		again2: function() {
			// var res= /^[0-9a-zA-Z-\_]{6,20}$/
			var password = this.again.val()
			if (password == this.password.val() && password != "") {
				var _this = this;
				_this.num4 = 1;
				this.againempty.html("")
				this.again.parent().css({
					borderColor: "#fff"
				})
			}
			if (password != this.password.val()) {
				this.againempty.html("6-20位大小写字母，数字及'-'、'_'组合")
				this.again.parent().css({
					borderColor: "red"
				})
			}
			if (this.again.val() == "") {
				this.againempty.html("确认密码不能为空")
				this.again.parent().css({
					borderColor: "red"
				})
			}
		},
		// 点击提交的时候判断如果全都成功了就上传cookie
		winner: function() {
			var _this = this;
			var password = this.password.val()
			if (this.num1 == 1 && this.num2 == 1 && this.num3 == 1 && this.num4 == 1) {
				$.cookie("zhanghao", '[{"id":' + this.phone.val() + ', "password" : ' + password + '}]')
			}
		},



	}
	return register
})