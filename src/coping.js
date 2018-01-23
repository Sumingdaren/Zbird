// 活动页吸顶
define(["jquery"], function($) {
	function coping(ele) {}
	coping.prototype = {
		constructor: coping,
		init: function(ele,show) {
			// 初始化 选取元素
			this.ele = ele;
			this.show = show;
			this.mmx = this.show.offset().top;
			$(window).scroll($.proxy(this.move,this))
		},
		move : function(e){
			var nex = $("body,html").scrollTop();
			// console.log($("body,html").scrollTop())
			// console.log(this.show.offset().top)
			if( $(window).scrollTop() >=  this.mmx){
				this.ele.css({
					position: "fixed",
					top: "30px"
				})
			}else{
				this.ele.css({
					position : ""
				})
			}

		}
	}
	return coping

})