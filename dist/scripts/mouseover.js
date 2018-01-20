// 页面最上面的小购物车 鸟巢
define(["jquery"], function($) {

	function Mouseover(ele, show) {}
	Mouseover.prototype = {
		constructor: Mouseover,
		init: function(ele, show) {
			// 获取元素 
			this.ele = ele;
			this.show = show;
			var _this = this;
			// 鼠标划过的时候让隐藏元素显示 css样式改变
			this.show.on("mouseover", function() {
				_this.show.show()
				_this.ele.css({
					width: "100%",
					overflow: "hidden",
					borderTopColor: "#f8a89c",
					borderRightColor: "#f8a89c",
					borderLeftColor: "#f8a89c",
					backgroundColor: "#fff",
					position: "absolute",
					left: "0",
					top: "0",
					zIndex: "6",
				})
			})
			// 鼠标移除的时候消失
			this.show.on("mouseout", function() {
				_this.show.hide()
				_this.ele.css({
					background: "0",
					borderTopColor: "#f2f1f1",
					borderRightColor: "#f8e3df",
					borderLeftColor: "#f8e3df",
				})
			})
			// 鼠标划过的时候让隐藏元素显示 css样式改变
			this.ele.on("mouseover", function(show, ele) {
				_this.show.show()
				_this.ele.css({
					width: "100%",
					overflow: "hidden",
					borderTopColor: "#f8a89c",
					borderRightColor: "#f8a89c",
					borderLeftColor: "#f8a89c",
					backgroundColor: "#fff",
					position: "absolute",
					left: "0",
					top: "0",
					zIndex: "6",
				})
			})
			// 鼠标移除的时候消失
			this.ele.on("mouseout", function(show, ele) {
				_this.show.hide()
				_this.ele.css({
					background: "0",
					borderTopColor: "#f2f1f1",
					borderRightColor: "#f8e3df",
					borderLeftColor: "#f8e3df",
				})
			})
		},
	}
	return Mouseover
})