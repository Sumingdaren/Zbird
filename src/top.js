// <<<<<<< HEAD
// 吸顶
// =======
// 活动页回到顶部
// >>>>>>> dev
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
			$("body,html").scrollTop("0")
		}
	}
	return otop

})