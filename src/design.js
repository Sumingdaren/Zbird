// 轮播钻石
define(["jquery"], function($) {
	function design(ele) {}
	design.prototype = {
		constructor: design,
		init: function(ele) {
			// 初始化  获取元素
			this.num = 5;
			this.index = 0;
			this.ele = ele.children();
			this.load()
		},
		load: function() {
			// 设置一个下标 每隔2秒让那个下标的图片出现
			var _this = this;
			setInterval(function() {
				_this.num++;
				if (_this.index == _this.ele.length - 1) {
					_this.index = 0
				} else {
					_this.index++;
				}
				_this.ele.eq(_this.index).css({
					zIndex: _this.num
				})
			}, 2000)
		}
	}

	return design

})