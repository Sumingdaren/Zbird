// 业务逻辑 
require(["scripts/config.js"],function(){
	require(["jquery","mouseover","navigation","banner","search","design","shine","carousel","seamless","yqlink","product","display","details","cookie","dity"],function($,mouseover,navigation,banner,search,design,shine,carousel,seamless,yqlink,product,display,details,cookie,dity){

		// 鼠标划过购物车
	new mouseover().init($("#my_cart_show"),$("#indexw_header_cart"))

	// 鼠标划过我的鸟巢
	new mouseover().init($("#indexw_on"),$("#indexw_show"))

	// 导航二级菜单
	new navigation().init($(".indexw_nav_ul_2"),$(".m_idx_snav_hide"))

	// 轮播图
	new banner().init($(".ind_focus_ul"),$(".num"),$(".prev"),$(".next"))

	// 模糊搜索
	new search().init($("#headCommSearchKeyword"),$("#uuuu"))

	// 轮播钻石
	new design().init($("#diy_focus_jq"))

	// 鼠标划过有亮光
	new shine().init($(".g_diy_shw_pic"))
	// 鼠标划过有亮光

	new shine().init($(".g_tab_cnt span a:first"))
	// 鼠标划过有亮光

	new shine().init($(".g_tab_cnt span a:last-child"))

	// 鼠标划过有亮光
	new shine().init($(".g_tab_cnt a:last-of-type"))

	// 选项卡 可以使用导航的js
	new navigation().init($(".g_tab_wp"),$(".gggg"))

	// 钻石小轮播图
	new carousel().init($(".f_rng_focus"),$("#u_rngs_prev"),$("#u_rngs_next"))

	// 鼠标滑过有亮光
	new shine().init($(".f_ad_wp span a:first"))

	// 鼠标滑过有亮光
	new shine().init($(".f_ad_wp span a:last-child"))

	// 鼠标滑过有亮光
	new shine().init($(".f_ad_wp a:last-of-type"))

	// 小型轮播图
	new navigation().init($(".tab_alist"),$(".wwwww"))

	// 左右轮播
	new seamless().init($(".ani_ul"),$(".disc_border"))

	// 左右轮播
	new seamless().init($(".ani_ull"),$(".disc_borderr"))

	// 友情链接滚动
	new yqlink().init($(".indexw_friend_link"))


	// 动态生成
	new product().init($(".page_list"))
	// console.log($(".page_bg"))
	// 导航 出现与隐藏
	new display().init($(".button_border"),$(".search_all_list"))

	// 跳转列表详情页
	new details().init($(".page_bg"))
	// console.log($(".page_bg"))


	new dity().init($(".page_detlnow"),$(".loadImgWithTransEffect"),$(".list_small_pic"),$(".g_pro_sys"),$(".u_psys_pri"),$(".u_psys_sale"),$(".magnifier"),$(".jqzoom"))






	})

})
