// 导航
define(["jquery", "cookie"], function($) {
	function car(ele) {}
	car.prototype = {
		constructor: car,
		init: function(ele,show,remove) {
			// 初始化 选取元素
			this.ele = ele;
			this.show = show;
			this.remove = remove;
		this.ele.on("click",$.proxy(this.move,this))
		this.show.on("click",$.proxy(this.link,this))
		},
		move : function(){
			window.location.href= 'http://localhost:81/dist/shopping.html';
		},
		link : function(){
			this.remove.show()
		}
	}
	return car
})