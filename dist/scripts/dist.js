// 小购物车
define(["jquery", "cookie", "picture"], function($) {
	function dist(ele) {}
	dist.prototype = {
		constructor: dist,
		init: function(show, num) {
			// 初始化 选取元素
			this.show = show;
			this.callback;
			this.num = num;
			this.make()
			this.load()
		},
		// ajax获取json数据
		make: function() {
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
		},
		// 判断是否有cookie 如果有就让小购物车里面输入
		load: function() {
			var html = "";
			if ($.cookie("zs")) {
				var zs = JSON.parse($.cookie("zs"))
				var zm = 0;
				zs.forEach(function(item, index) {
					zm = zs.length;
				})
				this.num.html(zm)
				var _this = this;
				zs.forEach(function(item) {
					html += ' <div class="indexw_shopCard_border" style="margin-top:0px;padding-top:8px; height: 70px;">' +
						'<img src=" ' + _this.callback[item.id].src + '" alt="" style="float:left;width:52px;height:52px">' +
						'<div class="indexw_shopCard_text" style="height: 33px;">' + _this.callback[item.id].title + '</div>' +
						'<a href="" class="indexw_shopCard_del"></a>' +
						'<div class="indexw_shopCard_text" style="margin-top:0px;">' +
						'<div class="index_shopCard_yuan_1">' + "￥" + '</div>' +
						'<div class="index_shopCard_yuan_2">' + _this.callback[item.id].price + '</div>' +
						'</div>' +
						'</div>'
				})

			}
			// 如果没有就输出购物车中无商品
			else {

				html +=
					'<div class="indexw_shopCard_wushangpin">' + "购物车中无商品" + '</div>'
			}
			this.show.append(html)
		}
	}
	return dist
})