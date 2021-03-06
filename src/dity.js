// 导航
define(["jquery", "cookie"], function($) {
	function dity(ele) {

		if (dity.instance instanceof Object) {
			return dity.instance;
		} else {
			return dity.instahce = dity.prototype
		}
	}
	dity.prototype = {
		constructor: dity,
		// 传入参数动态生成页面的所有元素
		init: function(ele, show, show2, title, price, sold, magnifier, picture, img, fire, fireimg) {
			// 初始化 选取元素
			this.callback;
			this.mag = magnifier;
			this.picture = picture;
			this.fireimg = fireimg;
			this.make()
			this.show = show;
			this.fire = fire;
			this.magnifier = magnifier;
			// 传参数 动态生成页面的数据
			this.load(ele, show, show2, title, price, sold)
			// 判断如果有cookie 解析cookie 调用下面的方法
			if ($.cookie("zs")) {
				var num = JSON.parse($.cookie("zs"));
				this.location(num, img)
			}
		},
		// 加载数据 ajax 获取json
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
		load: function(ele, show, show2, title, price, sold, picture) {
			if ($.cookie("zs")) {
				var num = JSON.parse($.cookie("zs"));
				var item = this.callback;
				// 这里是点击当时的数组最后一项为想要的商品 最后拼接到页面
				var n = num.length - 1;
				show.find("img:first").attr("src", item[num[n].id].bigurl1)
				show2.find("img").eq(0).attr("src", item[num[n].id].smallurl1)
				show2.find("img").eq(1).attr("src", item[num[n].id].smallurl2)
				show2.find("img").eq(2).attr("src", item[num[n].id].smallurl3)
				title.find("div").eq(0).html(item[num[n].id].title)
				price.find("b").eq(0).html(item[num[n].id].price)
				sold.find("b").eq(0).html(item[num[n].id].sold)
				sold.find("b").eq(1).html(item[num[n].id].comment)

				// 放大镜鼠标移入 移动  移除
				show.on("mouseover", $.proxy(this.move, this));
				show.on("mousemove", $.proxy(this.fier, this));
				show.on("mouseout", $.proxy(this.out, this));
			}
		},
		// 鼠标移入事件
		move: function() {
			// 鼠标移入到图片上 放大镜出现 蒙版也出现
			this.magnifier.show();
			this.fire.show()
			var _this = this;
			// 计算 大图与小图的比例 
			this.ox = this.fireimg.width() / this.show.width();
			this.oy = this.fireimg.height() / this.show.height();
			// 给大图按照比例设置宽高
			this.fireimg.css({
				width: this.show.width() * this.ox,
				height: this.show.height() * this.oy
			})
		},
		// 放大镜
		fier: function(e, show, fire) {
			var e = e || window.e;
			// 获取蒙板到父元素的距离 到达鼠标正中心的位置
			var left = e.offsetX - this.magnifier.width() / 2;
			var oTop = e.offsetY - this.magnifier.height() / 2;
			// 边距检测
			var right = this.show.width() - this.magnifier.width();
			var bottom = this.show.height() - this.magnifier.height();
			// 判断边距
			left = left < 0 ? 0 : left;
			oTop = oTop < 0 ? 0 : oTop;
			left = left > right ? right : left;
			oTop = oTop > bottom ? bottom : oTop;
			// 让蒙板跟随鼠标的位置改变 并且永远是正中心
			this.magnifier.css({
				left: left,
				top: oTop
			})
			// 防止事件冒泡
			e.stopPropagation();
			this.fireimg.css({
				left: -left * this.ox,
				top: -oTop * this.oy
			})
		},
		// 鼠标移除 让蒙板和放大镜消失
		out: function() {
			this.magnifier.hide()
			this.fire.hide()
		},
		// 鼠标移动到对应的图片的时候让大图跟着改变
		location: function(num, img) {
			var _this = this;
			this.picture.children().each(function(index) {
				let jj = index;
				// 鼠标移入到大图下面的小图 让对应的大图也开始变化 右边的放大镜也跟着变
				_this.picture.find("img").eq(index).on("mouseover", function() {
					for(var i = 0 ; i < 3;i++){
					_this.picture.find("li").addClass("off")
					_this.picture.find("li").removeClass("on")
					}
					_this.picture.find("li").eq(index).addClass("on")
					var lk = eval(`_this.callback[num[0].id].bigpicture${jj}`)
					img.attr("src", lk)
					_this.fireimg.attr("src", lk)
				})
			})

		}
	}
	return dity
})