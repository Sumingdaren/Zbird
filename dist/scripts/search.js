// 轮播图
define(["jquery"], function($) {
	function search(ele) {}
	search.prototype = {
		constructor: search,
		init: function(ele,item) {
			//	console.log(ele,show)
			// 初始化  获取元素
			this.ele = ele;
			this.ele.on("input",$.proxy(this.introduce,this))
	},
	introduce : function(item){
		// $.getJSON("http://suggestion.baidu.com/",function(item){
		// 	console.log(item)
		// })
		var json_data = "";
		$.ajax({
			url : "http://suggestion.baidu.com",
			type : "GET",
			dataType:"json",
			success : function(data){
				// console.log(res)
				// console.log(data)
				// json_data = data;
			var result = JSON.stringify(data)
			console.log(result)
			}
		})
		// console.log(json_data)
	}
}

return search

})