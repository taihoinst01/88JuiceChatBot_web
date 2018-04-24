$(function(){
	/*
 	$('.aaaa > a').click(function(){
 		//	setInterval(time,2000);
		$('.aaaa > a').not($(this)).next().slideUp().parent().removeClass('on')
		$(this).next().slideToggle().parent().toggleClass('on');
		return false;
	});

*/

	$('#wrapper').css({'height':($(document).height())+'px'});
	$(window).resize(function(){
		$('#wrapper').css({'height':($(document).height())+'px'});
	});

	$('.aa').click(function(){
		console.log('1111')
		$('.map-wrapper , .mov-wrapper').fadeOut();
		$('.vr-wrapper').show().animate({ "left": "0px","opacity": "1"  }, "fast" );
	});
	$('.bb').click(function(){
		$('.map-wrapper , .vr-wrapper').fadeOut();
		$('.mov-wrapper').show().animate({ "left": "0px","opacity": "1"  }, "fast" );
	});
	$('.cc').click(function(){
		$('.vr-wrapper , .mov-wrapper').fadeOut();
		$('.map-wrapper').show().animate({ "left": "0px","opacity": "1"  }, "fast" );
	});

/*
	$(document).on('click','.wx-carousel-map > div > img',function(){
	    $('.vr-wrapper , .mov-wrapper').fadeOut();
	    $('.map-wrapper').show().animate({ "left": "0px","opacity": "1"  }, "fast" );
	});
	  $(document).on('click','.wc-carousel-360 > div > img',function(){
	    $('.map-wrapper , .mov-wrapper').fadeOut();
	    $('.vr-wrapper').show().animate({ "left": "0px","opacity": "1"  }, "fast" );
	});
	$(document).on('click','.wc-carousel-360 > div > img',function(){
	    $('.map-wrapper , .vr-wrapper').fadeOut();
	    $('.mov-wrapper').show().animate({ "left": "0px","opacity": "1"  }, "fast" );
	});
*/
	$('.btnPopRight').click(function(){
		$('.wc-carousel-360 > div').removeClass('on');
		$('.wx-carousel-map > div').removeClass('on');
		$('.wc-carousel-play > div').removeClass('on');
		$('.wc-carousel-image > div').removeClass('on');
		$('#video').attr('src','');
		$(this).parent().parent().animate({ "left": "310px","opacity": "0" }, "fast" ).fadeOut("fast");
		
	});

	$('.btnTopClose').click(function () {
		$('.wc-carousel-360 > div').removeClass('on');
		$('.wx-carousel-map > div').removeClass('on');
		$('.wc-carousel-play > div').removeClass('on');
		$('.wc-carousel-image > div').removeClass('on');
		$('#video').attr('src','');
		$(this).parent().parent().animate({ "left": "310px", "opacity": "0" }, "fast").fadeOut("fast");
	
	});
	
	/*$( ".btnMenu" ).add( "<button class='btnMenu hamburgerBtn'></button><button class='recommend'></button>" ).appendTo(".wc-console" );*/
	$( ".btnMenu" ).add( "<button class='btnMenu hamburgerBtn'></button>" ).appendTo(".wc-console" );
	$( ".wc-header > span" ).add( "<span class='chatTitle'></span><span class='chatVersion'></span>"+
		"<button class='btnMin'></button>"+
		"<button class='btnLayer btnLayerFull'></button>"+
		"<button class='btnClose'></button>" ).appendTo(".wc-header" );

	$('.btnMenu').click(function(){
	   if ($('.menuBox').hasClass('on')) {
           	 $('.menuBox').removeClass('on');
           	 $('.menuBoxDepth').removeClass('on');
            	 $('.menuBox').hide();
           } else if ($('.menuBoxDepth').hasClass('on')) {
            	$('.menuBox').removeClass('on');
            	$('.menuBoxDepth').removeClass('on');
            	$('.menuBox').hide();
            	$('.menuBoxDepth').hide();
           } else {
            	$('.menuBox').addClass('on');
            	$('.menuBoxDepth').removeClass('on');
            	$('.menuBox').show();
           }
	   if($('.btnMenu').hasClass('hamburgerBtn')){
		$('.btnMenu').removeClass('hamburgerBtn').addClass('hamburgerBtnAction');
	   }else{
		$('.btnMenu').removeClass('hamburgerBtnAction').addClass('hamburgerBtn');
	   }
	});

	$('.wc-message-groups').click(function(){
	    $('.menuBox').removeClass('on');
        $('.menuBoxDepth').removeClass('on');
        $('.menuBox').hide();
        $('.menuBoxDepth').hide();
	    $('.btnMenu').removeClass('hamburgerBtnAction').addClass('hamburgerBtn');
	});

	$(document).on('click','.wc-header [class*=btnM]',function(){
      if($(this).hasClass('btnMax')){
         //$('.wc-chatview-panel').reset();
		$('.btnPopRight').click();
        $('.wc-chatview-panel').css({ "overflow": "hidden" })
        $('.wc-chatview-panel').animate({ "height": "32px" }, "fast" );
        $('.wc-console, wc-message-pane').hide();
		$(".menuBox, .menuBoxDepth, .popupArea" ).hide();
		$('.btnLayer').css({'display':'none'});
		$('.btnMax').css({'right':'32px'});
         $(this).removeClass('btnMax').addClass('btnMin');
      }else{
        $('.wc-chatview-panel').css({ "overflow": "visible" })
        $('.wc-chatview-panel').animate({ "height": "528px"}, "fast" );
        $('.wc-console, wc-message-pane').show();
		$('.btnLayer').css({'display':'inline-block'}).removeClass('btnLayerMid').addClass('btnLayerFull');
		$('.btnMin').css({'right':'57px'});
		$('.popupArea').css({'bottom':'176px'});
        $(this).removeClass('btnMin').addClass('btnMax');
      }
      return false;
   });

	$('.btnClose').click(function () {
        //2017.06.21 ¼öÁ¤ START -- xÇ¥½Ã ´­·¶À»¶§ ¸ðµç °Í ÃÊ±â »óÅÂ·Î µ¹¾Æ°¨
	    $('.btnPopRight').click();
	    $('.wc-chatview-panel').css({ "overflow": "hidden" })
	    $('.wc-chatview-panel').animate({ "height": "32px" }, "fast");
	    $('.wc-console, wc-message-pane, .menuBox, .menuBoxDepth, .popupArea').hide();
	    $('.wc-header [class*=btnM]').removeClass('btnMax').addClass('btnMin');
        //¼öÁ¤ END
		$('.wc-chatview-panel').hide();	
	});

	$('.depthMenu').click(function(){
		$('.menuBox').removeClass('on');
        $('.menuBoxDepth').addClass('on');
		$('.menuBox').fadeOut( "fast" );
		$('.menuBoxDepth').fadeIn( "fast" );
	});
	$('.depthMenuLink').click(function(){
		$('.menuBoxDepth').fadeOut( "fast" );
		$('.menuBox').fadeIn( "fast" );
	});

	$('.menuInner a').click(function(){
		$('.menuBox').removeClass('on');
        $('.menuBoxDepth').removeClass('on');
		$('.menuBoxDepth, .menuBox').hide();
	});


	
	$('.wc-chatview-panel').css({ "height": "32px" });

	$('.menuBox').hide();
	$('.vr-wrapper').hide();
	$('.mov-wrapper').hide();
	$('.map-wrapper').hide();
	$('.img-wrapper').hide();
	$('.lifestyle-wrapper').hide();
	$('.wc-console, wc-message-pane').hide();

	$('.btnLayer').click(function(){
		if($('.wc-chatview-panel').height() == '528'){
			$('.wc-chatview-panel').animate({ "height": $(window).height()}, "fast" );
			$('.popupArea').animate({'bottom':($(window).height()-352)+'px'}, "fast" );
			$('.btnLayer').removeClass('btnLayerFull').addClass('btnLayerMid');
		}else{
			$('.wc-chatview-panel').animate({ "height": "528px"}, "fast" );
			$('.popupArea').animate({'bottom':'176px'}, "fast");
			$('.btnLayer').removeClass('btnLayerMid').addClass('btnLayerFull');
		}
	});

	$('.recommend').mousedown(function(){
		$('.recommend').css({"background":"#c3c6cc"});
	});
	$('.recommend').mouseup(function(){
		$('.recommend').css({"background":"#00aad2"});
	});

	$('.recommend').click(function(){
		//$('.lifestyle-wrapper').show();
		$('div.wc-console').addClass('has-text');
		$('input[type="text"].wc-shellinput').attr('value','코나 추천!');
		$('input[type="text"].wc-shellinput').val('코나 추천!');
		$('label.wc-send').trigger('click');
		$('input[type="text"].wc-shellinput').attr('value','');
		$('input[type="text"].wc-shellinput').val('');
		$('.wc-console').removeClass('has-text');
	});

	//추천 옵션 이미지 오버 효과
	$(document).on('mouseover', '#option_slider > ul > li > img', function(){
		var optionSelectImg = $(this).parent().html().substring(0, $(this).parent().html().lastIndexOf('.')) + '_R.jpg">';
		$('#option_detail').append(optionSelectImg);
		$('#option_detail').show();
	});
	$(document).on('mouseout', '#option_slider > ul > li > img', function(){
		$('#option_detail').children().remove();
		$('#option_detail').hide();
	});
	//추천 옵션 'prev, next' 버튼
	$(document).on('click', '#optionSlide_prev', function () {
		$('#option_slider ul').animate({
			left: 0
		}, 500);
		$('#optionSlide_prev').hide();
		$('#optionSlide_next').show();
	});
	$(document).on('click', '#optionSlide_next', function () {
		$('#option_slider ul').animate({
			left: - $('#option_slider li').width()
		}, 500);
		$('#optionSlide_prev').show();
		$('#optionSlide_next').hide();
	});
	//추천 360 'prev next' 버튼
	$(document).on('click', '#optionVR_prev', function () {
		var recommendColors = new Array();
		recommendColors = $(this).attr("alt").split(",");
		var korNames = new Array();
		korNames = $(this).attr("name").split(",");
		var colorNum = "";
		var colorName = "";
		var prevColorName = "";
		var chkColor = "";
		var chk = false;
		var prevKorName = "";
		for(var i=0; i<recommendColors.length; i++){
			chkColor = recommendColors[i].substring(1, recommendColors[i].length);
			if($("#slider > div").attr("id") == chkColor){
				colorNum = recommendColors[i].substring(0, 1);
				colorName = recommendColors[i].substring(1, recommendColors[i].length);
				prevColorName = recommendColors[i-1].substring(1, recommendColors[i-1].length);
				prevKorName = korNames[i-1];
				if(Number(colorNum)-1 == 0){
					$('#optionVR_prev').attr('disabled', true).css('opacity', '0.4');
				}else{
					$('#optionVR_next').attr('disabled', false).css('opacity', '0.8');
					$('#optionVR_prev').attr('disabled', false).css('opacity', '0.8');
				}
				chk = true;
			}
		}
		if(chk){
			$(".recommendColor").text(prevKorName);
			$(".imgBox").attr("id", prevColorName);
			$('#imageRecommend').reel({
				images: "https://bottest.hyundai.com/assets/images/price/360/"+prevColorName+"/000##.jpg",
				frames: 60,
				cw: true,
				brake: 10,
				throwable: 10
			});
		}
	});
	$(document).on('click', '#optionVR_next', function () {
		var recommendColors = new Array();
		recommendColors = $(this).attr("alt").split(",");
		var korNames = new Array();
		korNames = $(this).attr("name").split(",");
		var colorNum = "";
		var colorName = "";
		var nextColorName = "";
		var chkColor = "";
		var chk = false;
		var nextKorName = "";
		for(var i=0; i<recommendColors.length-1; i++){
			chkColor = recommendColors[i].substring(1, recommendColors[i].length);
			if($("#slider > div").attr("id") == chkColor){
				colorNum = recommendColors[i].substring(0, 1);
				colorName = recommendColors[i].substring(1, recommendColors[i].length);
				nextColorName = recommendColors[i+1].substring(1, recommendColors[i+1].length);
				nextKorName = korNames[i+1];
				if(Number(colorNum)+1 == recommendColors.length-1){
					$('#optionVR_next').attr('disabled', true).css('opacity', '0.4');
				}else{
					$('#optionVR_prev').attr('disabled', false).css('opacity', '0.8');
					$('#optionVR_next').attr('disabled', false).css('opacity', '0.8');
				}
				chk = true;
			}
		}
		if(chk){
			$(".recommendColor").text(nextKorName);
			$(".imgBox").attr("id", nextColorName);
			$('#imageRecommend').reel({
				images: "https://bottest.hyundai.com/assets/images/price/360/"+nextColorName+"/000##.jpg",
				frames: 60,
				cw: true,
				brake: 10,
				throwable: 10
			});
		}
	});

});
