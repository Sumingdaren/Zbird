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
			show : function(){
				var _this=this;
				this.timer = setInterval(function(){
					_this.showRight()
				},3000)
			},
			move : function(){
				clearInterval(this.timer)
			},

			move2 : function(){
				this.show()
			}

	}
	return see
})