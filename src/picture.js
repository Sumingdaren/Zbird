// 加入购物车
define(["jquery", "cookie"], function($) {
	function picture(ele) {}
	picture.prototype = {
		constructor: picture,
		init: function(ele, car, show,jin,x) {
			// 初始化 选取元素
			this.ele = ele;
			this.car = car;
			this.show = show;
			this.callback;
			this.x = x;
			this.jin = jin;
			this.number = 0;
			this.make()
			// 当点击加入购物车的时候把商品加入到小型购物车里
			this.ele.on("click", $.proxy(this.load, this))
			this.x.on("click",$.proxy(this.bian,this))

		},
		make: function() {
			var _this = this;
			$.ajax({
				type: "get",
				url: "scripts/commodity.json",
				// 让数据是同步
				// async: false,
				// 用callback接收返回的数据
				success: function(stm) {
					_this.callback = stm;
				}
			})
			// 调用接收的数据加载放入页面 
		},
		load: function() {
			var _this=this;
			_this.number++;
			// 拼接数据 把数据放到小型购物车里面
			var html = "";
			var scookie = JSON.parse($.cookie("zs"));
				var zm =  scookie.length -1;
				var dataid = scookie[zm].id;
				// 点击加入购物车的时候再次创建一个cookie 把 进入页面的cookie的id取出来然后在放进去
				// 判断是否有这个cookie 如果没有就放进购物车 如果有就自增 
				// 放进购物车的时候判断购物车的数量 遍历所有的数组 让里面点击的数量自增
				// 最后放入页面 
			if ( $.cookie("jrgwc")  ) {
					var scookie = $.cookie("jrgwc")
					var zs = JSON.parse($.cookie("jrgwc"))
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
					$.cookie("jrgwc", scookie)
			}else{
				$.cookie("jrgwc",'[{"id":' + dataid + ', "num" : 1}]',{path: '/dist'})
			}
			// if (zs != null) {
				// 判断是否有cookie 解析json 然后遍历
				var gwc = JSON.parse($.cookie("jrgwc"))
				// 在转成json
				var GG = 0;
				var _this = this;
				// 判断点击次数 如果大于一次就不放进购物车里挑出
				_this.car.html(gwc.length)
					var _this = this;
						html += ' <div class="indexw_shopCard_border" style="margin-top:0px;padding-top:8px; height: 70px;">' +
						'<img src=" ' + this.callback[gwc[gwc.length-1].id].src + ' " alt="" style="float:left;width:52px;height:52px">' +
						'<div class="indexw_shopCard_text" style="height: 33px;">' + this.callback[gwc[gwc.length-1].id].title + '</div>' +
						'<a href="" class="indexw_shopCard_del"></a>' +
						'<div class="indexw_shopCard_text" style="margin-top:0px;">' +
						'<div class="index_shopCard_yuan_1">' + "￥" + '</div>' +
						'<div class="index_shopCard_yuan_2">' + this.callback[gwc[gwc.length-1].id].price + '</div>' +
						'</div>' +
						'</div>'
						_this.jin.show()
						setTimeout(function(){
							window.location.reload()
						},2000)
			this.show.append(html)
			//把商品加入到购物车的时候同时刷新页面
		},
		bian : function(){
			this.jin.hide()
		}
	}
	return picture
})