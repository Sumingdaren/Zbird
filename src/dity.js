// 导航
define(["jquery","cookie"], function($) {
	function dity(ele) {

		if (dity.instance instanceof Object) {
				return dity.instance;
			}else{
				return dity.instahce = dity.prototype
			}


	}
	dity.prototype = {
		constructor: dity,
		init: function(ele,show,show2,title,price,sold,magnifier,jqzoom) {
			// 初始化 选取元素
			// console.log(ele)
			this.callback;
			//console.log(show2)
			// console.log(magnifier)
			this.mag = magnifier;
			// console.log(this.magnifier)
			this.jqzoom = jqzoom;
			var num =  $.cookie("zs");
			this.make()
			this.show = show;
			// this.magnifier = magnifier;
			this.load(ele,show,num,show2,title,price,sold)
			},
			// 加载数据
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
		},
		// 更换网站的内容
		load : function(ele,show,num,show2,title,price,sold){
			// console.log(this.callback)
			var item = this.callback;
			show.find("img:first").attr("src",item[num].bigurl1)
			//console.log(show2)
			show2.find("img").eq(0).attr("src",item[num].smallurl1)
			show2.find("img").eq(1).attr("src",item[num].smallurl2)
			show2.find("img").eq(2).attr("src",item[num].smallurl3)
			title.find("div").eq(0).html(item[num].title)
			price.find("b").eq(0).html(item[num].price)
			sold.find("b").eq(0).html(item[num].sold)
			sold.find("b").eq(1).html(item[num].comment)
			show.on("mousemove",$.proxy(this.fier,this));
			// console.log(show.find("div"),show)
			show.on("mouseover",$.proxy(this.move,this))
			// console.log(this.jqzoom)
			// show.on("mouseout",$.proxy(this.mout,this));
			// console.log(show)
			this.mag.on("mouseover",$.proxy(this.cancelBubble,this))
		},
		// 放大镜
		fier : function(event,show){
			// console.log(1)

		//	console.log(this.show)
		// var evt = e.target
		// console.log($(e.offsetX))
		// if( this.div ){
		// 	return 0;
		// }
			var left = event.offsetX - this.mag.offsetWidth/2
			console.log(left)
			var oTop = event.offsetY - this.mag.offsetHeight/2
			console.log(oTop)
			left = left <= 0 ? 0 : left;
			oTop = oTop <= 0 ? 0 : oTop;
			this.mag.css({
				left : left +"px",
				top : oTop + "px"
			})
			// this.mag.style.left = left;
			// this.mag.style.top = oTop;

		}, 
		cancelBubble : function(e){
			e.cancelBubble = true;
		}
		// mout : function(){
		// 	// this.show.remove(this.div)
		// 	 $("div#shuaibi").remove()

		// },
		// move : function(e){
		// 	this.mag.show()

		// }

		}
	
	return dity

})