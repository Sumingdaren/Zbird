// 模糊搜索
define(["jquery"], function($) {
	function search(ele) {}
	search.prototype = {
		constructor: search,
		init: function(ele, show) {
			// 初始化  获取元素
			this.ele = ele;
			this.show = show;
			this.ele.focus($.proxy(this.cli, this))
			this.ele.on("input", $.proxy(this.introduce, this))
			this.ele.blur($.proxy(this.prp, this))
		},
		// 判断是否有文字 如果文字为默认就清空否则为输入的文字
		cli: function() {
			var str = "戒托"
			var _this = this;
			if (_this.ele.val() == str) {
				_this.ele.val("")
			}
		},
		// 调用接口 输出到页面
		introduce: function(item) {
			var item = function(res) {}
			var $val = this.ele.val();
			var _this = this;
			setTimeout(function() {
				$.ajax({
					url: "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=" + $val + "&cb=callback",
					type: "GET",
					dataType: "jsonp",
					jsonpCallback: "callback",
					success: function(data) {
						var html = "";
						this.html = html;
						var sum = data.s;
						sum.forEach(function(add, index) {
							html += '<li>' + data.s[index] + '</li>'
						})
						_this.show.html(html)
					}
				})
			}, 500);
		},
		// 文本框失去焦点的时候判断是否有文字如果没有文字让他的默认值为初始值
		prp: function() {
			var _this = this;
			// console.log(_this.ele.val())
			if (_this.ele.val() == "") {
				_this.ele.val("戒托")
			}
			this.show.children().remove()
		}
	}
	return search

})