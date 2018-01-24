// 列表页
define(["jquery", "cookie"], function($) {
	function details(ele) {}
	details.prototype = {
		constructor: details,
		init: function(ele) {
			// 初始化 选取元素
			this.make();
			this.load(ele)
			this.callback;
			// console.log(this.callback)
			// console.log($.cookie)
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
		// 加载事件 给元素增加dataid 方便跳转页面的时候更换数据
		load: function(ele) {
			var _this = this;
			this.item = this.callback;
			// console.log(this.item)

			ele.each(function(index) {
				// console.log(_this.item[index].id)
				// console.log(_this.item)
				ele.eq(index).attr("data_id", _this.item[index].data_id)
				ele.eq(index).on("click", $.proxy(_this.reding, this))

			})
		},
		reding: function(e) {
			var $bodyEl = $(e.target);
			var ele = $bodyEl.parent(".page_bg")
			var dataid = ele.attr("data_id");
			//当点击商品的时候存储一个cookie到详情页在取出来
			if ($.cookie("zs")) {
				var scookie = $.cookie("zs")
				var zs = JSON.parse($.cookie("zs"))
			//	console.log(zs)
				var flag = false;
				zs.forEach(function(item) {
					// console.log(item.id)
					// 判断 如果 cookie 里面的id 等于 json的id 就让 cookie里面的num自增
					if (item.id == dataid) {
						item.num++;
						flag = true;
					}
				})
				if (!flag) {
					var item = {
						"id": dataid,
						"num": "1"
					}
					zs.push(item)
				}
				scookie = JSON.stringify(zs);
				$.cookie("zs", scookie)

			} else {
				$.cookie("zs", '[{"id":' + dataid + ', "num" : 1}]', {
					expires: 7
				});
			}
			// 列表跳详情
			// ele.find("a:first").attr('href', 'http://localhost:81/dist/details.html')
			ele.find("a:first").attr('href', 'https://sumingdaren.github.io/Zbird/dist/details.html')
		}
	}
	return details
})