// 小型轮播
define(["jquery"], function($) {
	function seamless(ele) {}
	seamless.prototype = {
		constructor: seamless,
		init: function(ele,item) {
			// 初始化  获取元素
			this.item = item;
			this.num = 0;
			this.ele = ele;
			this.timer = null;
			// console.log(this.ele)
			this.aggre = this.item.children()
			this.chil = this.ele.children()
			this.width = ele.find("li").width()
			this.load()
			this.move()
			this.chil.on("mouseover",$.proxy(this.ppt,this))
			this.chil.on("mouseout",$.proxy(this.nun,this))

	},
	// 鼠标划过所有的小图停止定时器
	ppt : function(){
		var _this = this;
		clearInterval(_this.timer)
	},
	// 鼠标移除小图在开启定时器
	nun : function(){
		var _this = this;
		clearInterval(_this.timer)
		this.timer = setInterval(function(){
			_this.num++;
			for(var i = 0; i < _this.aggre.length;i++){
				_this.aggre.eq(i).removeClass('disc_hover')
			}
			// 判断如果到了最大的图片数目那就让他归零
			if(_this.num > 3){
				_this.num = 0 
			}
			_this.aggre.eq(_this.num).addClass('disc_hover')
			_this.ele.stop().animate({
					left : - _this.width  * _this.num
			})
		},3000)
	},
	load : function(){
			var _this = this;
		this.aggre.each(function(index){
			_this.aggre.eq(index).on("mouseover",function(){
				// console.log(this.width)
				// 为了确保每次都能删除这个class名字
						for(var i = 0; i < _this.aggre.length;i++){
							_this.aggre.eq(i).removeClass('disc_hover')
						}
						// 滑过的时候增加class名
					_this.aggre.eq(index).addClass('disc_hover')
					// 让四张图片的父元素运动 吗，每次运动一张图片的大小
					// console.log(_this.width)
				_this.ele.stop().animate({
					left : -_this.width  * index
				})
			})
		})
	},
	// 自动让他跑起来 小圆点跟着动
	move : function(){
		clearInterval(this.timer)
		var _this = this;
		this.timer = setInterval(function(){
			_this.num++;
			for(var i = 0; i < _this.aggre.length;i++){
				_this.aggre.eq(i).removeClass('disc_hover')
			}
			// 判断如果到了最大的图片数目那就让他归零
			if(_this.num > 3){
				_this.num = 0 
			}
			_this.aggre.eq(_this.num).addClass('disc_hover')
			_this.ele.stop().animate({
					left : - _this.width  * _this.num
			})
		},3000)
	},








}
return seamless
})