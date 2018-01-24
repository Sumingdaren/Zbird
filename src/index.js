// 业务逻辑 
require(["scripts/config.js"], function() {
	require(["jquery", "mouseover", "navigation", "banner", "search", "design", "shine", "carousel", "seamless", "yqlink", "product", "display", "details", "cookie", "dity", "picture", "shoppingcar", "dist", "car","register","sign","tab","mmp","switch","figure","tabs","top","coping","rem"], function($, mouseover, navigation, banner, search, design, shine, carousel, seamless, yqlink, product, display, details, cookie, dity, picture, shoppingcar, dist, car,register,sign,tab,mmp,show,see,tabs,otop,coping,rem) {

		// 鼠标划过购物车
		new mouseover().init($("#my_cart_show"), $("#indexw_header_cart"))

		// 鼠标划过我的鸟巢
		new mouseover().init($("#indexw_on"), $("#indexw_show"))

		// 导航二级菜单
		new navigation().init($(".indexw_nav_ul_2"), $(".m_idx_snav_hide"))

		// 轮播图
		new banner().init($(".ind_focus_ul"), $(".num"), $(".prev"), $(".next"))

		// 模糊搜索
		new search().init($("#headCommSearchKeyword"),$("#uuuuu"))

		// 轮播钻石
		new design().init($("#div_focus_jq"))
			
		// 鼠标划过有亮光
		new shine().init($(".g_diy_shw_pic"))

		// 鼠标划过有亮光
		new shine().init($(".g_tab_cnt span a:first"))

		// 鼠标划过有亮光
		new shine().init($(".g_tab_cnt span a:last-child"))

		// 鼠标划过图片亮光
		new shine().init($(".g_tab_cnt a:last-of-type"))

		// 选项卡
		new navigation().init($(".g_tab_wp"), $(".gggg"))

		// 钻石小轮播图
		new carousel().init($(".f_rng_focus"), $("#u_rngs_prev"), $("#u_rngs_next"))

		// 鼠标滑过图片亮光
		new shine().init($(".f_ad_wp span a:first"))

		// 鼠标滑过图片亮光
		new shine().init($(".f_ad_wp span a:last-child"))

		// 鼠标滑过图片亮光
		new shine().init($(".f_ad_wp a:last-of-type"))

		// 小型轮播图
		new navigation().init($(".tab_alist"), $(".wwwww"))

		// 左右轮播
		new seamless().init($(".ani_ul"), $(".disc_border"))

		// 左右轮播
		new seamless().init($(".ani_ull"), $(".disc_borderr"))

		// 友情链接滚动
		new yqlink().init($(".indexw_friend_link"))

		// 动态生成列表页的数据
		new product().init($(".page_list"))

		// 导航出现与隐藏
		new display().init($(".button_border"), $(".search_all_list"))

		// 列表跳转详情页存储cookie
		new details().init($(".page_bg"))

		// 动态生成详情页的数据
		new dity().init($(".page_detlnow"), $(".loadImgWithTransEffect"), $(".list_small_pic"), $(".g_pro_sys"), $(".u_psys_pri"), $(".u_psys_sale"), $(".magnifier"), $("#imgMove_change"), $(".styleImg"), $(".fire"), $(".fireimg"))

		// 点击加入购物车动态生成小购物车的数据
		new picture().init($("#buyNowPopBtn"), $(".indexw_shop_num"), $(".indexw_header_show"),$("#commonPromptPop"),$("#commonPromptPopClose"))
		// 购物车界面 动态生出数据
		new shoppingcar().init($(".shopcar_bg"), $(".indexw_shop_text"), $(".f_car_lst_tlt"),$(".shopcar_content_shop_border_close"))


		new rem().init($(".shopcar_content_shop_border_close"))
		// 小购物车动态生成数据
		new dist().init($(".indexw_header_show"), $(".indexw_shop_num"))

		// 所有的跳转页面
		new car().init($(".indexw_header_div_1"), $(".shopcar_footer_left_2"), $(".shopcar_show_menu_all"), $(".ser_lnk2"), $(".indexw_nav_ul_2"),$(".indexw_header_middleL"),$(".jiesuan"),$(".dl"),$(".zc"),$(".activity"),$(".a_shopping"),$(".fanhui"),$(".bangzhu"))

		// 注册
		new register().init($("#phone"),$(".input_code"),$(".phone_mi"),$(".phone_mi2"),$(".p_pMsg1"),$(".p_pMsg2"),$(".p_pMsg3"),$(".p_pMsg4"),$("#get_checknum"),$("#regphone_submit"))

		// 登录验证
		new sign().init($(".btn_login_6"),$("#user"),$("#pass"),$(".dl"),$(".zc"),$(".headerwelcome"))

		// 详情页吸顶
		new tab().init($(".f_sys_tab"))

		// 判断登录是否成功
		new mmp().init($(".dl"),$(".zc"),$(".headerwelcome"))

		// 活动页鼠标点击更换元素
		new show().init($(".navflow"),$(".opabor"))

		//  活动页轮播图1
		new see().init($(".slider1"),$(".bx_prev"),$(".bx_next"))

		// 活动页轮播图2
		new see().init($(".slider2"),$(".bx-prev"),$(".bx-next"))

		// 活动页选项卡
		new tabs().init($(".bb_bimg"),$(".bb_img"))

		// 活动页回到顶部
		new otop().init($(".f_icon_top"))

		// 回到顶部
		new coping().init($(".navflow"),$(".nav1"))
	})

})