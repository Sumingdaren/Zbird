// 活动页
define(["jquery"], function($) {
	function show() {}
	show.prototype = {
		constructor: show,
		init:function(ele,show) {
			// 初始化 选取元素
			this.ele = ele;
			this.show = show;
			// console.log(this.ele,this.show)
			this.logo = this.ele.children()
			this.new = this.show.children()
			// 点击第一个活动列跳转
			this.logo.eq(0).on("click",$.proxy(this.load,this))
			// 点击第二个活动列跳转
			this.logo.eq(1).on("click",$.proxy(this.load1,this))
			// 点击第三个活动列跳转
			this.logo.eq(2).on("click",$.proxy(this.load2,this))
		},
		load : function(){
			// 点击第一个的时候改变class同事清除其他的class
			this.logo.eq(0).addClass("nav1_hover")
			this.logo.eq(1).removeClass("nav2_hover")
			this.logo.eq(2).removeClass("nav3_hover")
			// console.log(this.new)
			// 改变父元素的高
			this.show.height("2294px")
			// 改变属于第一块的透明度和z-index，同时让别的清除
			this.new.eq(0).css({
				opacity: 1,
				zIndex : 10
			})
			this.new.eq(1).css({
				opacity: 0,
				zIndex : 2
			})
			this.new.eq(2).css({
				opacity: 0,
				zIndex : 2
			})

		},
		load1 : function(){
			this.logo.eq(0).removeClass("nav1_hover")
			this.logo.eq(1).addClass("nav2_hover")
			this.logo.eq(2).removeClass("nav3_hover")
			this.show.height("2015px")

			this.new.eq(0).css({
				opacity: 0,
				zIndex : 2
			})
			this.new.eq(1).css({
				opacity: 1,
				zIndex : 10
			})
			this.new.eq(2).css({
				opacity: 0,
				zIndex : 2
			})
		},
		load2 : function(){
			this.logo.eq(0).removeClass("nav1_hover")
			this.logo.eq(1).removeClass("nav2_hover")
			this.logo.eq(2).addClass("nav3_hover")
			this.show.height("2454px")
			this.new.eq(0).css({
				opacity: 0,
				zIndex : 2
			})
			this.new.eq(1).css({
				opacity: 0,
				zIndex : 2
			})
			this.new.eq(2).css({
				opacity: 1,
				zIndex : 10
			})
		}
	}
	return show
})