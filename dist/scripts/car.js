// 跳转页面 
define(["jquery", "cookie"], function($) {
	function car(ele) {}
	car.prototype = {
		constructor: car,
// <<<<<<< HEAD
		init: function(ele, show, remove, em, jump,logo,jiesuan,dl,zc,activity,b1,b2,mo,qian,zuozhe,sho,fan,bang) {
// =======
		// init: function(ele, show, remove, em, jump,logo,jiesuan,dl,zc,activity,sho,fan,bang) {
// >>>>>>> dev
			// 初始化 选取元素
			this.ele = ele;
			this.show = show;
			this.em = em;
			this.jump = jump;
			this.remove = remove;
			this.logo = logo;
			this.sho = sho;
			this.jiesuan = jiesuan;
			this.activity = activity;
			this.dl = dl;
			this.zc = zc;
// <<<<<<< HEAD
			this.b1 = b1;
			this.b2 = b2;
			this.mo = mo;
			this.qian = qian;
			this.zuozhe = zuozhe;
			this.num = 0;
			this.nnn = 0;
// =======
			this.fan = fan;
			this.bang = bang;
// >>>>>>> dev
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
			// 点击LOGO跳转首页
			this.logo.on("click",$.proxy(this.lo,this))
			// 点击结算跳转购物车
			this.jiesuan.on("click",$.proxy(this.mm,this))
			// 点击登录跳转登录
			this.dl.on("click",$.proxy(this.mmp,this))
			// 点击注册跳转注册
			this.zc.on("click",$.proxy(this.mmm,this))
			// 点击活动跳转活动
			this.activity.on("click",$.proxy(this.hd,this))
// <<<<<<< HEAD
			this.b1.on("click",$.proxy(this.lp,this))
			this.mo.on("click",$.proxy(this.sm,this))
			this.zuozhe.on("click",$.proxy(this.zuo,this))
// =======
			// 去购物
			this.sho.on("click",$.proxy(this.ppp,this))
			// 返回首页
			this.fan.on("click",$.proxy(this.fff,this))
			// 帮助
			this.bang.on("click",$.proxy(this.bbb,this))
// >>>>>>> dev
		},
		move: function() {
			window.location.href = 'http://localhost:81/dist/shopping.html';
			// window.location.href = 'https://sumingdaren.github.io/Zbird/dist/shopping.html';
			// https://sumingdaren.github.io/Zbird/dist/activit.html
		},
		link: function() {
			// 点击清除购物车的时候把所有的cookie删除然后刷新页面
			$.cookie("jrgwc", null,{expires: -1,path: '/dist'})
			window.location.reload()
		},
		bind: function() {
			// 跳转购物车页面
			window.location.href = 'http://localhost:81/dist/shopping.html';
			// window.location.href = 'https://sumingdaren.github.io/Zbird/dist/shopping.html';
		},
		jp: function() {
			// 跳转列表页
			window.location.href = 'http://localhost:81/dist/list.html';
			// window.location.href = 'https://sumingdaren.github.io/Zbird/dist/list.html';
		},
		jp2: function() {
			// 首页跳转主页
			window.location.href = 'http://localhost:81/dist/index.html';
			// window.location.href = 'https://sumingdaren.github.io/Zbird/dist/index.html';
		},
		lo : function(){
			// LOGO跳转主页
			window.location.href = 'http://localhost:81/dist/index.html';
			// window.location.href = 'https://sumingdaren.github.io/Zbird/dist/index.html';
		},
		mm : function(){
			// 小购物车跳主页
			window.location.href = 'http://localhost:81/dist/shopping.html';
			// window.location.href = 'https://sumingdaren.github.io/Zbird/dist/shopping.html';
		},
		mmp : function(){
			// 注册页
			window.location.href = 'http://localhost:81/dist/sign.html';
			// window.location.href = 'https://sumingdaren.github.io/Zbird/dist/sign.html';
		},
		mmm : function(){
			// 登录页
			window.location.href = 'http://localhost:81/dist/register.html';
			// window.location.href = 'https://sumingdaren.github.io/Zbird/dist/register.html';
		},
		hd : function(){
// <<<<<<< HEAD
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
		},
// =======
			// 活动页
			// window.location.href = 'http://localhost:81/dist/activit.html';
			// window.location.href = 'https://sumingdaren.github.io/Zbird/dist/activit.html';
		// },
		ppp : function(){
			// 列表页
			window.location.href = 'http://localhost:81/dist/list.html';
			// window.location.href = 'https://sumingdaren.github.io/Zbird/dist/list.html';
		},
		fff : function(){
			// 返回首页
			window.location.href = 'http://localhost:81/dist/index.html';
			// window.location.href = 'https://sumingdaren.github.io/Zbird/dist/index.html';
		},
		bbb : function(){
			alert("没有帮助再点就打死你")
// >>>>>>> dev
		}

	}
	return car
})