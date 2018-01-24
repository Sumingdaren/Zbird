// 活动页吸顶
define(["jquery","cookie"], function($) {
	function rem(ele) {}
	rem.prototype = {
		constructor: rem,
		init: function(ele,show) {
			// 初始化 选取元素
			this.ele = ele;
			this.show = show;
			// 判断是否有删除按钮如果有运行下面代码防止报错
			if( this.ele ){
				this.load()
			}
		},
		load : function(){
			// 遍历所有的按钮获取下标
			this.ele.each(function(index,item){
				this.index = index
				var _this= this;
				// 点击每一个删除的时候获取商品的cookie
				$(item).on("click",function(index){
					// 把cookie转成可操作的数组
					var acookie = JSON.parse($.cookie("jrgwc"))
					// 对点击的index下标的项分割
					acookie.splice(acookie[_this.index],1)
					// 在把分割好的数组转成字符串
					var scookie = JSON.stringify(acookie)
					// 最后赋值给cookie让cookie重新加载
					$.cookie("jrgwc",scookie,{path:'/dist'})
					// 同时刷新页面
					window.location.reload()
					// 判断如果所有的cookie都消失的话就清空cookie
					if( acookie.length == 0 ){
						$.cookie("jrgwc",'',{expires:-1,path:'/Zbird/dist'})
					}
				})
			})
		}
	}
	return rem

})