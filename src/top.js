// 吸顶
define(["jquery"], function($) {
	function otop(ele) {}
	otop.prototype = {
		constructor: otop,
		init: function(ele) {
			// 初始化 选取元素
			this.ele = ele;
			this.ele.on("click",$.proxy(this.move,this))
			
		},
		move : function(){
			// console.log($("body,html").scrollTop())
			$("body,html").scrollTop("0")
		}
	}
	return otop

})