// 导航
define(["jquery", "cookie"], function($) {
	function shoppingcar(ele) {}
	shoppingcar.prototype = {
		constructor: shoppingcar,
		init: function(ele,car,show) {
			// 初始化 选取元素
			// this.load(ele)
			this.callback;
			this.ele = ele;
		//	console.log(this.ele)
			// console.log($.cookie)
			// console.log($.cookie("zs"))
			// console.log(show)
			this.make()
			this.load(this.callback)
			this.car = car;
		//	console.log(car)
			this.car.on("click",$.proxy(this.move,this))
			
			//console.log(this.callback)
		},
		move : function(){},
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
		load : function(){
			// var _this = this;
			// /console.log(this.callback)
			var item = this.callback;
			var html = "";
			if($.cookie("zs") ){
				var zs =  JSON.parse($.cookie("zs"))
			}
			// var zs = $.cookie("zs");
		//	console.log(item[zs])
			if($.cookie("zs")){
					// console.log(zs[0].num)
				html += 
			'<div class="shopcar_title">'+
				'<div class="shopcar_title_left">'+
					'<div class="shopcar_title_left_text">'+
						"现在" +
						'<a href="">登录</a>'
						+"，您购物车中的商品将被保留"+
					'</div>'+
				'</div>'+
			'</div>'+
			'<div class="shopcar_content">'+
				'<div class="shopcar_content_shop_border">'+
					'<div class="shopcar_show_menu_all">'+
						'<div class="shopcar_show_menu_all_text">'+"确定要删除购物车中所有的产品吗？"+'</div>'+
						'<div class="shopcar_show_menu_all_btn_1">'+"确定"+'</div>'+
						'<div class="shopcar_show_menu_all_btn_2">'+"取消"+'</div>'+
					'</div>'+
					'<div class="f_car_lst_tlt">'+
						'<span class="f_car_lst_tlt_01">'+"商品"+'</span>'+
						'<span class="f_car_lst_tlt_02">'+"戒臂内圈刻字"+'</span>'+
						'<span class="f_car_lst_tlt_02">'+"时光环刻字"+'</span>'+
						'<span class="f_car_lst_tlt_04">'+"手寸"+'</span>'+
						'<span class="f_car_lst_tlt_05">'+"原价"+'</span>'+
						'<span class="f_car_lst_tlt_05">'+"小计"+'</span>'+
						'<span class="f_car_lst_tlt_06">'+"操作"+'</span>'+
					'</div>'
			this.ele.append(html)
					
					

			var shuai = "";
			for(var i = 0 ; i < zs[0].num;i++){
				shuai+= '<div class="shopcar_content_shop_list">'+
						'<div class="shopcar_content_shop_list_1">'+
							'<a href="">'+
								'<img class="shopcar_content_pic" src=" '+ item[zs[0].id].src+ ' "></img>'+
							'</a>'+
							'<div class="shopcar_content_shop_list_text vert_wrap">'+
								'<div class="vert_subwrap">'+
									'<div class="vert_cont">'+
									'	<a href=""> '+ item[zs[0].id].title +'</a>'+
								'</div>'+
							'</div>'+
							'</div>'+
						'</div>'+
						'<div class="add_row_02 vert_wrap">'+
							'<div class="vert_subwrap"></div>'+
						'</div>'+
						'<div class="add_row_02 vert_wrap">'+
							'<div class="vert_subwrap"></div>'+
						'</div>'+
						'<div class="add_row_01 vert_wrap">'+
							'<div class="vert_subwrap">'+
								'<div class="vert_cont">'+"11.0"+'</div>'+
							'</div>'+
					'	</div>'+
						'<div class="shopcar_content_shop_list_2 vert_wrap">'+
							'<div class="vert_subwrap">'+
								'<div class="vert_cont">'+ "￥" + item[zs[0].id].price +'</div>'+
						'	</div>'+
						'</div>'+
						'<div class="shopcar_content_shop_list_4 vert_wrap">'+
							'<div class="vert_subwrap">'+
								'<div class="vert_cont">'+
									"￥" + item[zs[0].id].price +
								'</div>'+
							'</div>'+
						'</div>'+
						'<div class="shopcar_content_shop_list_3 vert_wrap">'+
							'<div class="vert_subwrap">'+
								'<div class="vert_cont">'+
									'<div class="shopcar_content_shop_border_close">'+"删除"+'</div>'+
							'	</div>'+
							'</div>'+
						'</div>'+
					'</div>'
			this.ele.append(shuai)


}

					var niu = "";
					niu += '<div class="shopcar_footer">'+
						'<div class="shopcar_footer_left">'+
							'<div class="shopcar_footer_left_2">'+"清空购物车"+'</div>'+
						'</div>'+
						'<div class="shopcar_footer_right">'+
							'<div class="shopcar_footer_right_2">'+
								'<span style="color:#666">'+"订单总额"+'</span>'+
								'<span class="shopcar_content_yuan" style="padding-top:1px; margin-left:8px;">'+"￥"+'</span>'+
							'	<span style="font-size:12px;">'+ item[zs[0].id].price *zs[0].num +'</span>'+
							'</div>'+
							'<div class="shopcar_footer_right_1">'+
								'<span style="color:#666">'+"本次应付"+'</span>'+
								'<span class="shopcar_content_yuan" style="padding-top:1px; margin-left:8px; color:#ff8a81;">'+"￥"+'</span>'+
							'	<span style="color:#ff8a81;font-size:18px;font-weight: bold;">'+ item[zs[0].id].price *zs[0].num +'</span>'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div style="text-align:right; margin:0 auto;width: 1180px">'+
						'<button class="shopcar_footer_total"">'+"去结算"+'</button>'+
					'</div>'+
				'</div>'+
			'</div>'
			this.ele.append(niu)

			


			}else{
					'<div class="shopcar_content">'+
				'<div class="shopcarbgpic">'+
					'<div class="shopcar_content_no_pic_1_border">'+
						'<div class="shopcarspan1">'+"我的购物车"+'</div>'+
						'<div class="shopcarspanline"></div>'+
						'<div class="shopcarspan2">'+"登录账号，将喜爱的宝贝收入囊中吧！"+'</div>'+
						'<div class="clearHeight"></div>'+
						'<a class="btn_pink_126x34">'+"登录"+'</a>'
						'<a class="btn_pink_126x34hover">'+"去首页"+'</a>'
					'</div>'
				'</div>'
			this.ele.append(html)

			}
		}
	}
	return shoppingcar
})