// 亮光
define(["jquery"], function($) {
	function shine(ele) {}
	shine.prototype = {
		constructor: shine,
		init: function(ele,item) {
			//	console.log(ele,show)
			// 初始化  获取元素
			this.ele = ele;
			var _this = this;
			// 滑过出现亮光
			this.ele.on("mouseover",function(){
				_this.ele.animate({
					opacity : 0.8
				},-100)
				.animate({
					opacity :1
				})
			})
	},
}
return shine
})