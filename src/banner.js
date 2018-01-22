// 轮播图
define(["jquery"], function($) {
	function Banner(ele) {}
	Banner.prototype = {
		constructor: Banner,
		init: function(ele, dot, left, right) {
			//	console.log(ele,show)
			// 初始化  获取元素
			this.ele = ele;
			this.timer = null;
			this.left = left;
			this.right = right;
			var sum = this.ele.children();
			dots = dot.find("li")
			this.number = 2;
			this.num = 0;
			this.dots = dots;
			this.sum = sum;
			// 鼠标划过小按钮显示和隐藏
			this.ele.on("mouseover", $.proxy(this.enterover, this));
			this.ele.on("mouseout", $.proxy(this.enterout, this));
			this.left.on("mouseover", $.proxy(this.leftover, this));
			this.right.on("mouseover", $.proxy(this.rightover, this));
			// 分别点击左右按钮
			this.right.on("click", $.proxy(this.rightclick, this))
			this.left.on("click", $.proxy(this.leftclick, this))

			this.move(dots, sum)
			this.app()
		},
		// 划过左边按钮保证不会发抖
		leftover: function() {
			clearInterval(this.timer)
			this.left.show()
			this.right.show()
		},
		// 划过右边按钮保证不会发抖
		rightover: function() {
			clearInterval(this.timer)
			this.left.show()
			this.right.show()
		},
		// 鼠标划过大图让左右按钮出现
		enterover: function() {
			// console.log(this.timer)
			clearInterval(this.timer)
			this.left.show()
			this.right.show()

		},
		// 鼠标离开大图让左右按钮隐藏 同时让轮播图开始调用点击右按钮轮播
		enterout: function() {
			var _this = this;
			this.left.hide()
			this.right.hide()
			this.timer = setInterval(function() {
				$(_this.right).trigger("click")
			}, 3000)
		},
		// 轮播图运动
		move: function(dots, sum) {
			var _this = this;
			dots.each(function(index){
				// 划过出现红色的点 
				dots.eq(index).on("mouseover", function() {
					_this.number++;
					_this.num=index
					for (var i = 0; i < dots.length; i++) {
						// 让所有的图片初始透明度都为0.6
						sum.eq(i).css({
							opacity: 0.6,
						})
						//删除所有的小红点
						dots.eq(i).removeClass("on")
					}
					// 增加classname on出现红点
					dots.eq(index).addClass("on")
					// 让出现的图片zindex每次都加一
					sum.eq(index).css({
						zIndex: _this.number
					})
					// 让图片出现的效果为透明出现
					sum.eq(index).animate({
						opacity: 1
					}, 1000)
				})
			})

		},
		// 点击右边按钮的事件
		rightclick: function() {
			var _this = this;
			_this.number++;
			if (_this.num == this.dots.length - 1) {
				_this.num = 0;
			} else {
				_this.num++;
			}
			// 遍历所有的图片让所有的图片透明度都为0.3
			for (var i = 0; i < this.dots.length; i++) {
				this.dots.eq(i).removeClass("on")
				this.sum.eq(i).css({
					opacity: 0.3,
				})
			}
			// 每次要出现的图片透明度都为1zindex递增
			this.dots.eq(_this.num).addClass("on")
			this.sum.eq(_this.num).css({
				zIndex: _this.number
			})
			this.sum.eq(_this.num).animate({
				opacity: 1
			}, 1000)
		},
		// 点击左边按钮的事件
		leftclick: function() {
			var _this = this;
			_this.number++;
			if (_this.num == -1) {
				_this.num = dots.length - 1;
			} else {
				_this.num--;
			}
			for (var i = 0; i < this.dots.length; i++) {
				this.dots.eq(i).removeClass("on")
				this.sum.eq(i).css({
					opacity: 0.3,
				})
			}
			// 增加小红点
			this.dots.eq(_this.num).addClass("on")
			this.sum.eq(_this.num).css({
				zIndex: _this.number
			})
			this.sum.eq(_this.num).animate({
				opacity: 1
			}, 1000)
		},
		// 自动轮播
		app: function() {
			var _this = this;
			this.timer = setInterval(function() {
				// 调用点击右键事件每3秒轮播一次
				$(_this.right).trigger("click")
			}, 3000)
		}
	}

	return Banner

})