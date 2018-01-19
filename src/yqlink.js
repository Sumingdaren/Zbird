// 小型轮播
define(["jquery"], function($) {
	function yqlink(ele) {}
	yqlink.prototype = {
		constructor: yqlink,
		init: function(ele) {
			// 初始化  获取元素
			this.ele = ele.find("ul");
			this.num = 0;
			var grop = this.ele.find("li");
			// console.log(this.ele.find("li"))
			this.move(grop)
		},
		// 运动思路 设置一个计数器 每次让定时器运动如果计数器达到了最大的数量就让他回到第一个
		move: function(grop) {
			var _this = this;
			setInterval(function() {
				_this.num++;
				if (_this.num == 6) {
					_this.num = 0;
				}
				//  每次都让该显示的显示
				grop.show()
				_this.ele.animate({
					top: -grop.height() * _this.num
				})
			}, 3000)

		}
	}
	return yqlink
})