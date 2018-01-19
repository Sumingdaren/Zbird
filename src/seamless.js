// 小型轮播
define(["jquery"], function($) {
	function seamless(ele) {}
	seamless.prototype = {
		constructor: seamless,
		init: function(ele,item) {
			// 初始化  获取元素
			this.item = item;
			this.num = 0;
			// console.log(this.ele)
			var aggre = this.item.children()
			this.load(aggre,ele)
			this.move(aggre,ele)
			this.width = ele.find("li").width()
	},
	load : function(aggre,ele){
		aggre.each(function(index){
			aggre.eq(index).on("mouseover",function(){
				// 为了确保每次都能删除这个class名字
						for(var i = 0; i < aggre.length;i++){
							aggre.eq(i).removeClass('disc_hover')
						}
						// 滑过的时候增加class名
					aggre.eq(index).addClass('disc_hover')
					// 让四张图片的父元素运动 吗，每次运动一张图片的大小
				ele.stop().animate({
					left : - _this.width  * index
				})
			})
		})
	},
	// 自动让他跑起来 小圆点跟着动
	move : function(aggre,ele){
		var _this = this;
		setInterval(function(){
			_this.num++;
			for(var i = 0; i < aggre.length;i++){
				aggre.eq(i).removeClass('disc_hover')
			}
			// 判断如果到了最大的图片数目那就让他归零
			if(_this.num > 3){
				_this.num = 0 
			}
			aggre.eq(_this.num).addClass('disc_hover')
			ele.stop().animate({
					left : - _this.width  * _this.num
			})
		},3000)
	}
}
return seamless
})