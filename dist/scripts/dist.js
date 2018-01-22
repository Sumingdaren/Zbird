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
			this.nb;
			this.sm;
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
			var jiesuan = "";
			var html = "";
			var x= "";
			//console.log($.cookie("jrgwc"))
			if ($.cookie("jrgwc")) {
				var zs = JSON.parse($.cookie("jrgwc"))
			}
			if (zs != null ) {
				var zs = JSON.parse($.cookie("jrgwc"))
				var _this = this;
				var MM = 0;
				this.num.html(zs.length)
					for(var i = 0 ; i <= zs.length-1;i++){
							html += ' <div class="indexw_shopCard_border" style="margin-top:0px;padding-top:8px; height: 70px;">' +
						'<img src=" ' + _this.callback[zs[i].id].src + '" alt="" style="float:left;width:52px;height:52px">' +
						'<div class="indexw_shopCard_text" style="height: 33px;">' + _this.callback[zs[i].id].title + '</div>' +
						'<a href="javascript:void(0)" class="indexw_shopCard_del"></a>' +
						'<div class="indexw_shopCard_text" style="margin-top:0px;">' +
						'<div class="index_shopCard_yuan_1">' + "￥" + '</div>' +
						'<div class="index_shopCard_yuan_2">' + _this.callback[zs[i].id].price + '</div>' +
						'</div>' +
						'</div>'
						var ll = parseInt(_this.callback[zs[i].id].price)
						MM += ll;
					}
							_this.show.append(html);
						var btn = $(".indexw_shopCard_del")
						btn.each(function(index,item){
							$(btn[index]).on("click",(function(){
									// console.log(zs[index])
									zs.splice(zs[index],1)
									var acookie = JSON.stringify(zs)
									$.cookie("jrgwc",acookie,{path:'/dist'})
									window.location.reload()
									if( zs.length == 0 ){
										$.cookie("jrgwc",'',{expires:-1,path:'/dist'})
										console.log($.cookie("jrgwc"))
									}
							}))
						})
				jiesuan += '<div class="js">' +
										'<div class="jiage">' +
										 '<span class="span1">' +"价格"+ '</span>' +
										   '<span class="span2">' +"￥" + '</span>'+
										   '<span class="span3">'+MM+ '</span>'+
										 '</div>'+
										'<a class="jiesuan">' + "结算"+ '</a>'+
									'</div>'
						_this.show.append(jiesuan)
			}
			// 如果没有就输出购物车中无商品
			else {
				html +=
					'<div class="indexw_shopCard_wushangpin">' + "购物车中无商品" + '</div>'
			this.show.append(html)
			}
		},
	}
	return dist
})