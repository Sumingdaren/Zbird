// 轮播钻石
define(["jquery"], function($) {
	function carousel(ele, left, right) {}
	carousel.prototype = {
		constructor: carousel,
		init: function(ele, left, right) {
			//	console.log(ele,show)
			// 初始化  获取元素
			this.ele = ele.find("ul");
			// 滑过出现亮光
			// console.log(this.ele)
			// this.width = this.ele.find("li").width()
			this.right = right;
			//		console.log(this.width)
			this.left = left;
			this.num = 0;
			//		console.log(this.width)
			//		console.log(this.right)
			this.right.on("click", $.proxy(this.rightover, this))
			this.left.on("click", $.proxy(this.leftover, this))
		},
		// 点击右键按钮让父元素运动 同事控制两边的按钮如果到头了就变换背景图片
		rightover: function() {
			this.num++;
			console.log(this.num)
			if (this.num > 3) {
				this.num = 4;
				this.right.css({
					backgroundPositionX: -37,
					backgroundPositionY: -51
				})
			};
			if (this.num > 0) {
				this.left.css({
					backgroundPositionX: 0,
					backgroundPositionY: 0
				})
			};
			this.ele.stop().animate({
				left: -274 * this.num
			})

		},
		// 每次点击让计时器减一 如果到头让背景图片同时跟着变化
		leftover: function() {
			this.num--;
			if (this.num == 0) {
				this.left.css({
					backgroundPositionX: -37,
					backgroundPositionY: 0
				})
			}
			console.log(this.num)
			if (this.num == -1) {
				this.num = 0;
			}
			this.ele.stop().animate({
				left: -274 * this.num
			})
		}
	}
	return carousel

})