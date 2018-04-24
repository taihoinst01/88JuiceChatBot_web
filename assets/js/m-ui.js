$(function(){

	$('#wrapper').css({'height':($(window).height()-86)+'px'});
    $('.wc-message-groups').css({'height':($(window).height()-98)+'px'});

    $(window).resize(function(){
        $('#wrapper').css({'height':($(window).height()-86)+'px'});
        $('.wc-message-groups').css({'height':($(window).height()-98)+'px'});
        $(".wc-message-groups").scrollTop($(".wc-message-groups")[0].scrollHeight);
    });

//	$('.aa').css({'height':($(document).height())+'px'});


	$('.btnPopRight').click(function(){
		$('.wc-carousel-360 > div').removeClass('on');
		$('.wx-carousel-map > div').removeClass('on');
		$('.wc-carousel-play > div').removeClass('on');
		$('.wc-carousel-image > div').removeClass('on');
		$("#video").attr('src','');
		$(this).parent().parent().animate({ "bottom": "1px","opacity": "0" }, "slow" ).fadeOut( "slow" );
		$('.popMask').hide();
	});

	$('.btnTopClose').click(function(){
		$('.wc-carousel-360 > div').removeClass('on');
		$('.wx-carousel-map > div').removeClass('on');
		$('.wc-carousel-play > div').removeClass('on');
		$('.wc-carousel-image > div').removeClass('on');
		$("#video").attr('src','');
		$(this).parent().parent().animate({ "bottom": "1px","opacity": "0" }, "fast" ).fadeOut( "fast" );
		$('.popMask').hide();
	});

	$('.popClose').click(function(){
		$(this).parent().parent().animate({ "bottom": "-100px","opacity": "0" }, "slow" ).fadeOut( "slow" );
		$('.popMask').hide();
	});

	$( ".btnMenu" ).add( "<button class='btnMenu hamburgerBtn'></button>" ).appendTo(".wc-console" );
	$( ".wc-header > span" ).add( "<span class='chatTitle'></span><span class='chatVersion'></span><button class='btnClose'></button>" ).appendTo(".wc-header" );

	$('.btnMenu').click(function(){
		//$('.menuBox').show();
		if($('.menuBox').hasClass('on')){
			$('.menuBox').removeClass('on');
			$('.menuBoxDepth').removeClass('on');
			$('.menuBox').hide();
		}else if($('.menuBoxDepth').hasClass('on')){
			$('.menuBox').removeClass('on');
			$('.menuBoxDepth').removeClass('on');
			$('.menuBox').hide();
			$('.menuBoxDepth').hide();
		}else{
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

	$('.btnClose').click(function(){
		//2017.06.21 수정 START -- x표시 눌렀을때 모든 것 초기 상태로 돌아감
	    $('.btnPopRight').click();
	    $('.wc-chatview-panel').css({ "overflow": "hidden" })
	    $('.wc-chatview-panel').animate({ "height": "32px" }, "fast");
	    $('.wc-console, wc-message-pane, .menuBox, .menuBoxDepth').hide();
	    $('.wc-header [class*=btnM]').removeClass('btnMax').addClass('btnMin');
        //수정 END
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
	$('.popMask').hide();


	//Mobile Touch Slide
	var sx = 0;
	$(document).on("touchstart", '.mobileTouch',this, function(e){
		var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
		tax = touch.clientX;
	});
	$(document).on("touchmove", '.mobileTouch',this, function(e){
		var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
		tmx = touch.clientX;
		var tmx_gap = touch.clientX - tax;
		sx -= tmx_gap;
		var deviceWid = $(document).width()-70;
		var contentCnt = $('ul li.wc-carousel-item', this).length;
		var contentWid = $('ul li.wc-carousel-item', this).width();
		tax = tmx;

		if(deviceWid + sx >= contentWid * contentCnt){
			sx = contentWid * contentCnt - deviceWid;
		}

		if(-sx >= 0){
			sx = 0;
		}

		$('ul', this).css('transform', 'translateX('+(-sx)+'px)');
		$('ul.wc-card-buttons').css('transform', 'translateX(0)');
	});

	$(document).on("touchstart", '.recommend',this, function(e){
		$('.recommend').css({"background":"#c3c6cc"});
	});
	$(document).on("touchend", '.recommend',this, function(e){
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
	
	$(document).on("focus",'.wc-shellinput', function(){
		this.placeholder='';
	});
	$(document).on("blur",'.wc-shellinput', function(){
		this.placeholder='메세지를 입력해주세요..';
	});
	
});
