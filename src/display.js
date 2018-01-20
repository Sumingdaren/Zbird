// 列表页的下拉数据详情
define(["jquery"], function($) {
	function display(ele) {}
	display.prototype = {
		constructor: display,
		init: function(ele,stem) {
			//	console.log(ele,show)
			// 初始化  获取元素
			this.ele = ele;
			this.stem = stem;
			this.num =0;
			this.ele.on("click",$.proxy(this.move,this))
	},
	// 增加一个计数器按照计数器如果点击一下就让隐藏的出现如果第二次就让他消失
	move : function(){
		this.num++;
		if( this.num  % 2 == 0){
			$(".display_none").hide()
		}else{
			this.stem.find("li").show()
		}
	}
}
	return display

})