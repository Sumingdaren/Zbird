// 无缝轮播图
define(["jquery"], function($) {
	function see(ele) {}
	see.prototype = {
		constructor: see,
		init: function(ele,left,right,ppt) {
			// 初始化 选取元素
			this.ele = ele;
			this.left = left;
			this.right = right;
			this.num = 0;
			this.ppt = ppt;
			this.timer = null;
			this.width = this.ele.find("div").eq(0).width()
			this.right.on("click",$.proxy(this.showRight,this))
			this.left.on("click",$.proxy(this.showLeft,this));
			this.show();
			 this.ele.on("mouseover",$.proxy(this.move,this))
			 this.ele.on("mouseout",$.proxy(this.move2,this))
			},
			// 点击右按钮时让父元素运动一个图片的距离同时每次下标加一当下标大于3的时候让下标回到1 同时父元素定位回0
			showRight : function(){
				this.num++;
				if( this.num >  2 ){
					this.num = 1;
					this.ele.css({
						left: 0
					})
				}
				this.ele.stop().animate({
					left : -this.width * this.num
				})
			},
			// 点击左按钮时让父元素运动一个突破的距离同事每次下标减一如果小于0就让下标等于一 父元素定位到后面
			showLeft : function(){
				this.num--;
				if( this.num < 0 ){
					this.num =  1
					this.ele.css({
						left: -this.width * (this.num+1)
					})
				}
				this.ele.stop().animate({
					left : -this.width * this.num
				})
			},
			// 自动轮播
			show : function(){
				var _this=this;
				this.timer = setInterval(function(){
					_this.showRight()
				},3000)
			},
			// 鼠标滑过图片时清除定时器
			move : function(){
				clearInterval(this.timer)
			},
			// 鼠标移除时开启定时器
			move2 : function(){
				this.show()
			}

	}
	return see
})