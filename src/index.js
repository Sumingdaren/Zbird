// 业务逻辑 
require(["scripts/config.js"],function(){
	require(["jquery","mouseover","navigation","banner","search"],function($,mouseover,navigation,banner,search){


	new mouseover().init($("#my_cart_show"),$("#indexw_header_cart"))

	new mouseover().init($("#indexw_on"),$("#indexw_show"))

	new navigation().init($(".indexw_nav_ul_2"),$(".m_idx_snav_hide"))

	new banner().init($(".ind_focus_ul"),$(".num"),$(".prev"),$(".next"))

	new search().init($("#headCommSearchKeyword"),$("#uuuu"))

	})
})
