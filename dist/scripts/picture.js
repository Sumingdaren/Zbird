// 导航
define(["jquery", "cookie"], function($) {
	function picture(ele) {}
	picture.prototype = {
		constructor: picture,
		init: function(ele,car,show) {
			// 初始化 选取元素
			// this.load(ele)
			this.ele = ele;
			this.car = car;
			this.show = show;
			// this.num = 1;
			this.callback;
		//	console.log(this.ele)
		//console.log(car.text())
			this.make()
			// console.log($.cookie)
			this.ele.on("click",$.proxy(this.load,this))
		
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
			// console.log(this.callback)
			// this.num++;
			var html = "";
			var scookie = $.cookie("zs");
			// var zs = $.cookie("zs");
			if( $.cookie("zs")){
				var zs =  JSON.parse($.cookie("zs"))
				// zs[0].num = this.num;
				// console.log(zs[0].num++)
				zs[0].num += 1;
				console.log(zs[0].num)
				scookie = JSON.stringify(zs)
				$.cookie("zs",scookie,{expires: 7})
				this.car.html(zs[0].num)

				console.log($.cookie("zs"))
					html +=' <div class="indexw_shopCard_border" style="margin-top:0px;padding-top:8px; height: 70px;">'+
					'<img src=" '+ this.callback[zs[0].id].src +' " alt="" style="float:left;width:52px;height:52px">'+
					'<div class="indexw_shopCard_text" style="height: 33px;">' + this.callback[zs[0].id].title + '</div>'+
					'<a href="" class="indexw_shopCard_del"></a>'+
					'<div class="indexw_shopCard_text" style="margin-top:0px;">'+
						'<div class="index_shopCard_yuan_1">'+ "￥" + '</div>'+
						'<div class="index_shopCard_yuan_2">'+ this.callback[zs[0].id].price + '</div>'+
					'</div>'+
				'</div>'
				}
			// console.log(this.callback)
			this.show.append(html)
			// window.location.href= 'http://localhost:81/dist/shopping.html';
			// console.log(this.car)
			// console.log(this.show)
			
			
			// console.log($.cookie("zs"))
			
		}
	}
	return picture
})