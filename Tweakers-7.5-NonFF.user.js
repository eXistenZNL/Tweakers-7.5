// ==UserScript==
// @name Tweakers 7.5 - Non FF
// @namespace tweakers.net
// @description Make tweakers.net usable again
// @include http://tweakers.net/*
// @include https://tweakers.net/*
// @include http://*.tweakers.net/*
// @include https://*.tweakers.net/*
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js
// @version 1.1.1
// @run-at document-start
// ==/UserScript==
(function() {
var hidesearchandtruelogo = false;
var css = "/* \
 * Global styles \
 */ \
 \
body { \
	background: #444; \
} \
 \
#layout { \
	min-height: 100%; \
} \
 \
h1, h2, h3, p { \
	margin: 0 0 10px; \
} \
 \
#menubar { \
	width: 1020px; \
	border-radius: 8px 8px 0 0; \
	height: 32px; \
	margin-bottom: 36px; \
	z-index: 2; \
} \
 \
#searchbar { \
	width: 1020px; \
	height: 0px; \
	margin: 0 auto; \
	background: none; \
	position: relative; \
	z-index: 1; \
} \
 \
	#search { \
		position: absolute; \
		width: 320px; \
		right: 20px; \
		top: 22px; \
		padding: 0; \
	} \
 \
		#search .keywordSearch { \
			width: 176px; \
			height: 24px; \
			margin-top: 4px; \
			float: right; \
			margin-right: 10px; \
		} \
 \
		#search input.text { \
			width: 174px; \
			height: 16px; \
			font-size: 12px; \
			padding: 5px 10px 3px; \
		} \
 \
		#search input.text.small { \
			width: 88px; \
		} \
 \
		#search input.submit { \
			float: right; \
			background-position: -3px -75px; \
			height: 24px; \
			width: 26px; \
		} \
 \
		.mainSearchSuggest { \
			margin-left: -311px; \
		} \
 \
		#streamone { \
			position: absolute; \
			left: -15px; \
		} \
 \
		#detailedSearchListing { \
			width: 85px; \
			line-height: 16px; \
			height: 24px; \
			font-size: 12px; \
		} \
 \
		#search .keywordSearch { \
			width: 220px; \
		} \
 \
.galleryHeadingContainer, /* High header content */ \
.pageTabsContainer, \
.notificationsContainer, \
#tabs, \
#tweakbase { \
	position: relative; \
	margin: 0 auto; \
	width: 1020px; \
} \
 \
.notificationsContainer { \
	padding-top: 62px; \
} \
 \
#b_tb { /* Top banner */ \
	margin-left: 0; \
} \
 \
#contentArea { \
	background: #fff; \
	border-radius: 0 0 8px 8px; \
	margin-bottom: 20px; \
	padding: 24px 20px 20px; \
	box-shadow: 0 0 10px 7px #222; \
} \
 \
#bottom { \
	position: relative; \
} \
 \
	#bottom .hr { \
		display: none; \
	} \
 \
/* \
 * End of Global styles \
 */ \
 \
/* \
 * Frontpage \
 */ \
 \
#contentArea >  #fpaItems { \
	margin-bottom: 10px; \
	float: right; \
	width: 330px; \
	border: 1px solid #dddede; \
	background: linear-gradient(#F5F6F6, #EDEEEE) repeat scroll 0 0 #EDEEEE; \
	background: -ms-linear-gradient(#F5F6F6, #EDEEEE) repeat scroll 0 0 #EDEEEE; \
	background: -webkit-linear-gradient(#F5F6F6, #EDEEEE) repeat scroll 0 0 #EDEEEE; \
	background: -o-linear-gradient(#F5F6F6, #EDEEEE) repeat scroll 0 0 #EDEEEE; \
	padding: 2px; \
} \
 \
		#contentArea >  #fpaItems .fpaItem { \
			float: left; \
			width: 161px; \
			margin: 1px !important; \
			height: 122px; \
			border: 1px solid #dddede; \
			position: relative; \
		} \
 \
			#contentArea >  #fpaItems .fpaItem div.imageContainer { \
				width: 100%; \
			} \
 \
				#contentArea >  #fpaItems .fpaItem img { \
					margin-left: -42px; \
				} \
 \
			#contentArea >  #fpaItems .fpaItem div.textContainer { \
				background-color: rgba(0,0,0, 0.5); \
				color: #fff; \
				width: 100%; \
				height: auto; \
				font-size: 12px; \
				line-height: 1.4em; \
				padding: 4px; \
				position: absolute; \
				bottom: 0; \
			} \
 \
#fp_tabs_container { \
	margin-bottom: 10px; \
	height: 31px; \
} \
 \
#fp_tabs { \
	padding-top: 0; \
} \
 \
table.highlights { \
	margin-bottom: 15px; \
} \
 \
	table.highlights td { \
		padding: 3px 0; \
	} \
 \
.secondColumn .fpItem { \
	margin-bottom: 10px; \
} \
 \
.secondColumn .fpItem:last-child { \
	margin-bottom: 0; \
} \
 \
#inlineTracker { \
	background: linear-gradient(#F5F6F6, #EDEEEE) repeat scroll 0 0 #EDEEEE; \
	background: -o-linear-gradient(#F5F6F6, #EDEEEE) repeat scroll 0 0 #EDEEEE; \
	background: -ms-linear-gradient(#F5F6F6, #EDEEEE) repeat scroll 0 0 #EDEEEE; \
	background: -webkit-linear-gradient(#F5F6F6, #EDEEEE) repeat scroll 0 0 #EDEEEE; \
	border: 1px solid #DDDEDE; \
	border-radius: 1px 1px 1px 1px; \
	box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.33) inset; \
	padding: 15px 15px 17px; \
} \
 \
	#inlineTracker h4{ \
		margin: 7px 0; \
	} \
 \
	#inlineTracker ul{ \
		padding-left: 0; \
		margin: 0; \
	} \
 \
	#inlineTracker .time{ \
		margin-right: 10px; \
	} \
 \
/* \
 * End of frontpage \
 */ \
 \
/* \
 * Article detail page \
 */ \
  \
.articleColumn { \
	line-height: 1.4em; \
} \
  \
/* \
 * End of article detail page \
 */ \
 \
/* \
 * User galleries \
 */ \
  \
.galleryHeading .karma { \
	padding-top: 0; \
} \
 \
	.galleryHeading .karma p { \
		display: inline; \
		margin-right: 5px; \
	} \
  \
/* \
 * End of user galleries \
 */ \
 \
/* \
 * Direct Messages \
 */ \
 \
#title .actionbutton.sendreply, \
#title .actionbutton.newmessage { \
	position: relative; \
	top: 14px; \
} \
  \
/* \
 * End of Direct Message \
 */ \
 \
/* \
 * News articles \
 */ \
 \
.newsArticleColumn .newsSubmitButton { \
	position: relative; \
	top: 34px; \
} \
  \
/* \
 * End of news articles \
 */ \
  \
/* \
 * GoT \
 */ \
 \
#forum_tabs { \
	padding-top: 0; \
} \
 \
.reactie { \
	line-height: 1.4em; \
} \
 \
#community li { \
	padding: 5px 0; \
} \
 \
#content .forumList:last-child table.listing { \
	border: 10px solid #fc0; \
	color: #65f; \
	margin-bottom: 0; \
} \
	table.listing td, \
	table.listing th { \
		padding: 2px 5px; \
	} \
 \
	table.listing td.tags { \
		overflow: hidden; \
		white-space: nowrap; \
	} \
 \
.channelHeader { \
	display: none; \
} \
 \
#messages, .topic_actions {  \
	overflow: hidden; \
} \
	div.message .messageheader { \
		background-color: #ddd; \
	} \
 \
	div.message { \
		margin-bottom: 0px; \
		line-height: 1.4em; \
		border-top: 0; \
		border-radius: 0; \
	}	 \
  \
#title {  \
	height: 50px; \
} \
 \
	#title p.mods { \
		display: none;  \
	} \
 \
.pagecounter { \
	margin-top: 10px; \
} \
 \
#footer .breadcrumb { \
	margin-bottom: 0; \
} \
 \
div.message.topicstarter .messageheader { \
	background-color: #ccc; \
} \
 \
/* Background colors on the right categories */ \
.forumList:nth-child(3) table.listing th { \
	background: linear-gradient(#db2252, #b5012e) repeat scroll 0 0 #c20c3b; \
	background: -ms-linear-gradient(#db2252, #b5012e) repeat scroll 0 0 #c20c3b; \
	background: -webkit-linear-gradient(#db2252, #b5012e) repeat scroll 0 0 #c20c3b; \
	background: -o-linear-gradient(#db2252, #b5012e) repeat scroll 0 0 #c20c3b; \
} \
.forumList:nth-child(4) table.listing th { \
	background: linear-gradient(#673c87, #4c2a66) repeat scroll 0 0 #553070; \
	background: -ms-linear-gradient(#673c87, #4c2a66) repeat scroll 0 0 #553070; \
	background: -webkit-linear-gradient(#673c87, #4c2a66) repeat scroll 0 0 #553070; \
	background: -o-linear-gradient(#673c87, #4c2a66) repeat scroll 0 0 #553070; \
} \
.forumList:nth-child(5) table.listing th { \
	background: linear-gradient(#24b635, #1c8c29) repeat scroll 0 0 #21a931; \
	background: -ms-linear-gradient(#24b635, #1c8c29) repeat scroll 0 0 #21a931; \
	background: -webkit-linear-gradient(#24b635, #1c8c29) repeat scroll 0 0 #21a931; \
	background: -o-linear-gradient(#24b635, #1c8c29) repeat scroll 0 0 #21a931; \
} \
.forumList:nth-child(6) table.listing th { \
	background: linear-gradient(#ff6d26, #ff4800) repeat scroll 0 0 #ff560e; \
	background: -ms-linear-gradient(#ff6d26, #ff4800) repeat scroll 0 0 #ff560e; \
	background: -webkit-linear-gradient(#ff6d26, #ff4800) repeat scroll 0 0 #ff560e; \
	background: -o-linear-gradient(#ff6d26, #ff4800) repeat scroll 0 0 #ff560e; \
} \
.forumList:nth-child(7) table.listing th { \
	background: linear-gradient(#00b689, #14a985) repeat scroll 0 0 #0fad85; \
	background: -ms-linear-gradient(#00b689, #14a985) repeat scroll 0 0 #0fad85; \
	background: -webkit-linear-gradient(#00b689, #14a985) repeat scroll 0 0 #0fad85; \
	background: -o-linear-gradient(#00b689, #14a985) repeat scroll 0 0 #0fad85; \
} \
.forumList:nth-child(9) table.listing { \
	margin-bottom: 0 !important; \
} \
 \
/* \
 * End of GoT \
 */ \
  \
/* \
 * About tweakers page \
 */ \
  \
.article #fpaItems:last-child { \
	margin-bottom: 0; \
} \
 \
/* \
 * End of about tweakers page \
 */";
 
 if(hidesearchandtruelogo){css+="#mainSearch {display: none !important} #true {display: none !important}";}

if (typeof GM_addStyle != "undefined") {GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {addStyle(css);
} else {var heads = document.getElementsByTagName("head");if (heads.length > 0) { var node = document.createElement("style"); node.type = "text/css"; node.appendChild(document.createTextNode(css)); heads[0].appendChild(node); }
}
}
)();