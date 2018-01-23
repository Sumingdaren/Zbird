// 吸顶 
define(["jquery"], function($) {
	function tab(ele) {}
	tab.prototype = {
		constructor: tab,
		init: function(ele) {
			//	console.log(ele,show)
			// 初始化  获取元素
			this.ele = ele;
			this.scroll = this.ele.offset().top;
			// 监听页面的scroll值
			$(window).scroll($.proxy(this.move,this))
	},
	// 判断如果大于元素的scrollTop值就让元素吸顶，如果小于就还原
	move : function(e){
		if( $(window).scrollTop() >= this.scroll){
			this.ele.css({
				position : "fixed",
				top:"0",
				left:"0",
				zIndex : "9999",
				background: "#fff",
				width:"100%"
			})
		}
		else{
			this.ele.css({
				position:""
			})
		}
	}

}

return tab

})