// 小轮播图
define(["jquery"], function($) {
	function tabs(ele, show) {}
	tabs.prototype = {
		constructor: tabs,
		init: function(ele, show) {
			// 初始化 选取元素
			this.ele = ele;
			this.show = show;
			var _this = this;
			var sum = this.ele.children();
			var tem = this.show.children();
			this.move(sum, tem)
		},
		move: function(sum, tem) {
			// 运动
			sum.each(function(index, val) {
				// 遍历所有的一级菜单 获取index 根据index 来显示和隐藏
				this.index = index
				// 判断两次为了下面的模块可以使用
				// 第一次是轮播图
					tem.eq(index).on("mouseover", function() {
						for(var i = 0 ; i < sum.length;i++){
							sum.eq(i).css({
								display:"none"
							})
						}
						sum.eq(index).css({
							display:"block"
						})
					})
			})
		}
	}
	return tabs

})