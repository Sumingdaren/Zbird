// 跳转页面 
define(["jquery", "cookie"], function($) {
	function car(ele) {}
	car.prototype = {
		constructor: car,
		init: function(ele, show, remove, em, jump,logo,jiesuan,dl,zc,activity,b1,b2,mo,qian,zuozhe) {
			// 初始化 选取元素
			this.ele = ele;
			this.show = show;
			this.em = em;
			this.jump = jump;
			this.remove = remove;
			this.logo = logo;
			this.jiesuan = jiesuan;
			this.activity = activity;
			this.dl = dl;
			this.zc = zc;
			this.b1 = b1;
			this.b2 = b2;
			this.mo = mo;
			this.qian = qian;
			this.zuozhe = zuozhe;
			this.num = 0;
			this.nnn = 0;
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
			this.dl.on("click",$.proxy(this.mmp,this))
			this.zc.on("click",$.proxy(this.mmm,this))
			this.activity.on("click",$.proxy(this.hd,this))
			this.b1.on("click",$.proxy(this.lp,this))
			this.mo.on("click",$.proxy(this.sm,this))
			this.zuozhe.on("click",$.proxy(this.zuo,this))
		},
		move: function() {
			window.location.href = 'http://localhost:81/dist/shopping.html';
		},
		link: function() {
			$.cookie("jrgwc", null,{expires: -1,path: '/dist'})
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
		},
		mmp : function(){
			window.location.href = 'http://localhost:81/dist/sign.html';
		},
		mmm : function(){
			window.location.href = 'http://localhost:81/dist/register.html';
		},
		hd : function(){
			window.location.href = 'http://localhost:81/dist/activit.html';
		},
		lp : function(){
			this.num++;
			if( this.num % 2 == 0 ){
				this.b2.hide()
			}else{
				this.b2.show()
			}
		},
		sm : function(){	
			this.qian.show()
			var nb = confirm("点击确定扫码向我付款")
			if( nb == false ){
				alert("取消也要扫码")
			}
		},
		zuo : function(){
			this.nnn++
			if( this.nnn == 20 ){
				this.qian.hide()
			}
		}

	}
	return car
})