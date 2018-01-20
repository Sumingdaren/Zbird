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
			// this.callback()
			this.ele.on("input",$.proxy(this.introduce,this))
	},
	// callback : function(res){
	// 	return res;
	// },
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
				let  $val = this.ele.val();
		//		console.log($val)
				let $qsData = {'p': '3'}
				let $sum;
				// function data(res){
				// 	return res
				// }
				var _this = this;
				setInterval(function(){
					$.ajax({
			url : 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=' + $val + "&cb=callback",
			type : "GET",
			dataType : "jsonp",
			jsonpCallback : "callback",
			seccess : function(data){
				console.log(data)
			}
				})
		
			
		},500);
	//	console.log($sum)
		// console.log(json_data)
	},
	
}

return search

})