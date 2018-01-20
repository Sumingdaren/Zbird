// json动态生成
define(["jquery"], function($) {
	function product(ele) {}
	product.prototype = {
		constructor: product,
		init: function(ele, pop) {
			//	console.log(ele,show)
			// 初始化  获取元素
			this.ele = ele;
			this.callback;
			this.load();
		},
		// 加载ajax
		load: function() {
			var _this = this;
			$.ajax({
				type: "get",
				url: "scripts/commodity.json",
				// 让数据是同步
				async: false,
				// 用callback接收返回的数据
				success: function(stm) {
					_this.callback = stm;
				}
			})
			// 调用接收的数据加载放入页面
			this.push(this.callback)
		},
		// 把获取到的元素送到页面
		push: function(item) {
			var html = "";
			item.forEach(function(emm, index) {
				html += '<div class="page_bg">' +
					'<a href="javascript:void(0)" class="page_img_bg">' + '</a>' +
					'<a href="javascript:void(0)" class="page_img_bg_p">' + '</a>' +
					'<a href="javascript:void(0)" class="page_text_1">' +
					'<span class="page_text_1_span">' + item[index].title + '</span>' +
					'</a>' +
					'<div class="page_text_2">' +
					'<span>' + "￥" + '</span>' +
					'<span>' + item[index].price + '</span>' +
					'</div>' +
					'<div class="page_text_3">售出<span>' + item[index].sold + '</span>' +
					'</div> ' +
					'<a href="javascript:void(0)" class="page_a">' +
					'<div class="page_text_3" style="left:150px">' +
					"评论" +
					'<span>' + item[index].comment + '</span>' +
					'</div>' +
					'</a>' +
					'<div class="page_img_opacity_1">' +
					'<div class="page_img_1">' +
					'<a href="javascript:void(0)"> <img src=" ' + item[index].bigpicture1 + '"> </a>' +
					'</div>' +
					'<div class="page_img_2">' +
					'<a href="javascript:void(0)"> <img src=" ' + item[index].bigpicture2 + '"> </a>' +
					'</div>' +
					'</div>' +
					'</div>'

			})
			this.ele.append(html)
		}
	}
	return product
})