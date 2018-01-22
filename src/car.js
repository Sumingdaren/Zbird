// 跳转页面 
define(["jquery", "cookie"], function($) {
	function car(ele) {}
	car.prototype = {
		constructor: car,
		init: function(ele, show, remove, em, jump,logo,jiesuan) {
			// 初始化 选取元素
			this.ele = ele;
			this.show = show;
			this.em = em;
			this.jump = jump;
			this.remove = remove;
			this.logo = logo;
			this.jiesuan = jiesuan;
			// 点击页面最上面的小购物车跳转到购物车
			this.ele.on("click", $.proxy(this.move, this))
			// 点击清空购物车把所有商品清空
			this.show.on("click", $.proxy(this.link, this))
			// 点击页面最右侧的购物车 跳转到购物车
			this.em.on("click", $.proxy(this.bind, this))
			// 点击列表页 跳转到列表页
			this.jump.find("li").eq(2).on("click", $.proxy(this.jp, this))
			// 点击首页跳转到首页
			this.jump.find("li").eq(0).on("click", $.proxy(this.jp2, this))

			this.logo.on("click",$.proxy(this.lo,this))
			this.jiesuan.on("click",$.proxy(this.mm,this))
		},
		move: function() {
			window.location.href = 'http://localhost:81/dist/shopping.html';
		},
		link: function() {
			$.cookie("jrgwc", '')
			window.location.reload()
		},
		bind: function() {
			window.location.href = 'http://localhost:81/dist/shopping.html';
		},
		jp: function() {
			window.location.href = 'http://localhost:81/dist/list.html';
		},
		jp2: function() {
			window.location.href = 'http://localhost:81/dist/index.html';
		},
		lo : function(){
			window.location.href = 'http://localhost:81/dist/index.html';
		},
		mm : function(){
			window.location.href = 'http://localhost:81/dist/shopping.html';
		}
	}
	return car
})