define(["jquery"],function($){

	function Mouseover(ele,show){
	}
	Mouseover.prototype = {
		constructor : Mouseover,
		init : function(ele,show){
		// console.log(ele,show)
			this.ele = ele;
			this.show = show;
			var _this = this;

			this.show.on("mouseover",function(){
				_this.show.css({
					display:"block"
				})
				_this.ele.css({
					width:"100%",
					overflow : "hidden",
					borderTopColor : "#f8a89c",
					borderRightColor : "#f8a89c",
					borderLeftColor : "#f8a89c",
					backgroundColor : "#fff",
					position : "absolute",
					left : "0",
					top : "0",
					zIndex : "6",
				})
			})
			this.show.on("mouseout",function(){
				_this.show.css({
					display:"none"
				})
				_this.ele.css({
					background : "0",
					borderTopColor: "#f2f1f1",
				    borderRightColor: "#f8e3df",
				    borderLeftColor: "#f8e3df",
				})
			})

			this.ele.on("mouseover",function(show,ele){
				_this.show.css({
					display:"block",
				})
				_this.ele.css({
					width:"100%",
					overflow : "hidden",
					borderTopColor : "#f8a89c",
					borderRightColor : "#f8a89c",
					borderLeftColor : "#f8a89c",
					backgroundColor : "#fff",
					position : "absolute",
					left : "0",
					top : "0",
					zIndex : "6",
				})
			})
			this.ele.on("mouseout",function(show,ele){
				_this.show.css({
					display:"none",
				})
				_this.ele.css({
					background : "0",
					borderTopColor: "#f2f1f1",
				    borderRightColor: "#f8e3df",
				    borderLeftColor: "#f8e3df",
				})


			})

		},
		// appear : function(appear){
		// 	appear.css({
		// 		display:"block"
		// 	})
		// },
		// hide : function(appear){
		// 	appear.css({
		// 		display : "none"
		// 	})
		// }

	}

return Mouseover








})