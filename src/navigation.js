// 导航
define(["jquery"], function($) {
	function Navigation(ele, show) {}
	Navigation.prototype = {
		constructor: Navigation,
		init: function(ele, show) {
			// 初始化 选取元素
			this.ele = ele;
			this.show = show;
			var _this = this;
			var sum = this.ele.children();
			var tem = this.show.children();
			this.move(sum, tem, ele, show)
		},
		move: function(sum, tem, ele, show) {
			// 运动
			sum.each(function(index, val) {
				// 遍历所有的一级菜单 获取index 根据index 来显示和隐藏
				this.index = index
				tem.eq(index).on("mouseover", function() {
					// console.log(this)
					show.show()
					tem.eq(index).css({
						display: "block",
						zIndex: "999"
					})
				})
				tem.eq(index).on("mouseout", function() {
					// console.log(this)
					show.hide()
					tem.eq(index).css({
						display: "none",
						zIndex: "999"
					})
				})
				sum.eq(index + 1).on("mouseover", function() {
					// console.log(this)
					show.show()
					tem.eq(index).css({
						display: "block",
						zIndex: "999"
					})
				})
				sum.eq(index + 1).on("mouseout", function() {
					// console.log(this)
					show.hide()
					tem.eq(index).css({
						display: "none",
						zIndex: "999"
					})
				})
			})
		}
	}
	return Navigation

})