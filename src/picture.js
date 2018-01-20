// 加入购物车
define(["jquery", "cookie"], function($) {
	function picture(ele) {}
	picture.prototype = {
		constructor: picture,
		init: function(ele, car, show) {
			// 初始化 选取元素
			this.ele = ele;
			this.car = car;
			this.show = show;
			this.callback;
			this.make()
			// 当点击加入购物车的时候把商品加入到小型购物车里
			this.ele.on("click", $.proxy(this.load, this))

		},
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
		load: function() {
			// 拼接数据 把数据放到小型购物车里面
			var html = "";
			var scookie = $.cookie("zs");
			if ($.cookie("zs")) {
				// 判断是否有cookie 解析json 然后遍历
				var zs = JSON.parse($.cookie("zs"))
				zs.forEach(function(item, index) {
					zm = zs.length;
				})
				// 在转成json
				scookie = JSON.stringify(zs)
				this.car.html(zm)
				html += ' <div class="indexw_shopCard_border" style="margin-top:0px;padding-top:8px; height: 70px;">' +
					'<img src=" ' + this.callback[zs[0].id].src + ' " alt="" style="float:left;width:52px;height:52px">' +
					'<div class="indexw_shopCard_text" style="height: 33px;">' + this.callback[zs[0].id].title + '</div>' +
					'<a href="" class="indexw_shopCard_del"></a>' +
					'<div class="indexw_shopCard_text" style="margin-top:0px;">' +
					'<div class="index_shopCard_yuan_1">' + "￥" + '</div>' +
					'<div class="index_shopCard_yuan_2">' + this.callback[zs[0].id].price + '</div>' +
					'</div>' +
					'</div>'
			}
			// 把商品加入到购物车的时候同时刷新页面
			this.show.append(html)
			// window.location.reload()
		}
	}
	return picture
})