// 模糊搜索
define(["jquery"], function($) {
	function search(ele) {}
	search.prototype = {
		constructor: search,
		init: function(ele,show) {
			//	console.log(ele,show)
			// 初始化  获取元素
			this.ele = ele;
			this.show = show;
			this.ele.on("input",$.proxy(this.introduce,this))
	},
	introduce : function(item){
		// $.getJSON("http://suggestion.baidu.com/",function(item){
		// 	console.log(item)
		// })
		var json_data = "";
		var item = function(res){
					var html = "";
					// res.s.forEach(function(item){
					// 	html += "<li>" + item + "</li>"
 				// 	})
 				console.log(res)
					// show.append("html");
				}
		$.ajax({
			url : "http://suggestion.baidu.com",
			type : "GET",
			data : {
				cb : item,
				wd : "question"	
			},
		})
		// console.log(json_data)
	}
}

return search

})