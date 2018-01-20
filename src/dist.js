// 购物车
define(["jquery", "cookie","picture"], function($) {
	function dist(ele) {}
	dist.prototype = {
		constructor: dist,
		init: function(show,num) {
			// 初始化 选取元素
			// this.load(ele)
			this.show = show;
			this.callback;
			this.num = num;
			this.make()
			this.load()
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
		load : function(){
			// var zs = $.cookie("zs");
			var html = "";
		//	console.log(this.callback)
			if( $.cookie("zs")){
				var zs =  JSON.parse($.cookie("zs"))
				this.num.html(zs[0].num)
				// console.log($.cookie("zs"))
				for(var i = 0;i< zs[0].num;i++){
					html +=' <div class="indexw_shopCard_border" style="margin-top:0px;padding-top:8px; height: 70px;">'+
					'<img src=" '+this.callback[zs[0].id].src +'" alt="" style="float:left;width:52px;height:52px">'+
					'<div class="indexw_shopCard_text" style="height: 33px;">' + this.callback[zs[0].id].title + '</div>'+
					'<a href="" class="indexw_shopCard_del"></a>'+
					'<div class="indexw_shopCard_text" style="margin-top:0px;">'+
						'<div class="index_shopCard_yuan_1">'+ "￥" + '</div>'+
						'<div class="index_shopCard_yuan_2">'+ this.callback[zs[0].id].price + '</div>'+
					'</div>'+
				'</div>'
				}
				
			}else{
			
				html +=
					'<div class="indexw_shopCard_wushangpin">'+ "购物车中无商品"+'</div>'
			}
			this.show.append(html)
		}
	}
	return dist
})