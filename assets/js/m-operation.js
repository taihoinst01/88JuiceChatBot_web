/*
          $(document).on('click','.wx-carousel-map > div > img',function(){
	    $('#mapTitle').text($(this).next().text());
            $('.map-wrapper').show().animate({ "bottom": "1px","opacity": "1"  }, "slow" );
            $('.popMask').show();
          });
          $(document).on('click','.wc-carousel-360 > div > img',function(){
	    $('#vrTitle').text($(this).next().text());
            $('.vr-wrapper').show().animate({ "bottom": "1px","opacity": "1"  }, "slow" );
            $('.popMask').show();
          });
          $(document).on('click','.wc-carousel-360 > div > img',function(){
	    $('#movTitle').text($(this).next().text());
            $('.mov-wrapper').show().animate({ "bottom": "1px","opacity": "1"  }, "slow" );
            $('.popMask').show();
          });
*/
		//2017.06.27 수정
		$(document).on('click', '.wx-carousel-map > div > .wc-card-div', function () {
			$('.wc-carousel-360 > div').removeClass('on');
				$('.wx-carousel-map > div').removeClass('on');
				$('.wc-carousel-play > div').removeClass('on');
				$('.wc-carousel-image > div').removeClass('on');
				$("#video").attr('src','');
				$('.vr-wrapper , .mov-wrapper').fadeOut();

				$('#mapArea > div').remove();
				$('#mapArea').add( "<div id='map' style='border:1px solid #000;'></div>" ).appendTo('#mapArea');
				var mapTitle = $(this).next().text();
				$('#mapTitle').text(mapTitle);
				var latitude = $(this).children().eq(2).attr('alt');
				var longitude = $(this).children().eq(3).attr('alt');
				
				var oPoint = new nhn.api.map.LatLng(longitude, latitude);
				nhn.api.map.setDefaultPoint('LatLng');
				
				var oMap;
				var w=410, h=200;
				w = $(window).width();
				h = $(window).height()/2.5;
				oMap = new nhn.api.map.Map('map' ,{
				  point : oPoint,
				  zoom : 11,
				  enableWheelZoom : true,
				  enableDragPan : true,
				  enableDblClickZoom : false,
				  mapMode : 0,
				  activateTrafficMap : false,
				  activateBicycleMap : false,
				  minMaxLevel : [ 1, 14 ],
				  size : new nhn.api.map.Size(w,h)
				});
				var sIcon = new nhn.api.map.Icon("http://www.hyundai.com/kr/images/counsel/map_pin.png", new nhn.api.map.Size(28,37) );
				var oMarker = new nhn.api.map.Marker(sIcon, { title : mapTitle});
				oMarker.setPoint(oPoint);
				oMap.addOverlay(oMarker);
				var oLabel = new nhn.api.map.MarkerLabel();
				oMap.addOverlay(oLabel);
				oLabel.setVisible(true, oMarker);
	
				$('.map-wrapper').show().animate({ "left": "0px", "opacity": "1" }, "slow");
				$(this).parent().addClass('on');
				$('.popMask').show();
		});
		$(document).on('click', '.wc-carousel-360 > div > .wc-card-div', function () {
			$('.wc-carousel-360 > div').removeClass('on');
			$('.wx-carousel-map > div').removeClass('on');
			$('.wc-carousel-play > div').removeClass('on');
			$('.wc-carousel-image > div').removeClass('on');
			$('.map-wrapper , .mov-wrapper').fadeOut();
			$("#video").attr('src','');

			var imgPopTitle =$(this).children().eq(2).attr('alt');
			var exColor =$(this).children().eq(3).attr('alt');
			$('#vrTitle').text(imgPopTitle);
			$(".imgBox").attr("id", exColor);
			if($('.vr-wrapper').css('display', 'block')){
				$('#image').reel({
					images: "https://bottest.hyundai.com/assets/images/price/360/"+exColor+"/000##.jpg",
					frames: 60,
					cw: true,
					brake: 10,
					throwable: 10
				});
			}
				
			$(".popTxt").removeClass('wc-message-from');
			$('.vr-wrapper').show().animate({ "left": "0px", "opacity": "1" }, "fast");
			$(this).parent().addClass('on');
			
			$('.popMask').show();
			
		});
		$(document).on('click', '.wc-carousel-play > div > .wc-card-div', function () {
			$('.wc-carousel-360 > div').removeClass('on');
			$('.wx-carousel-map > div').removeClass('on');
			$('.wc-carousel-play > div').removeClass('on');
			$('.wc-carousel-image > div').removeClass('on');
			$('.map-wrapper , .vr-wrapper, .img-wrapper').fadeOut();
			var movePopTitle = $(this).children().eq(2).attr('alt');
			$('#movTitle').text(movePopTitle);

			var movePopUrl = $(this).children().eq(3).attr('alt');
			$('#video').attr('src', movePopUrl);
				
			/*
			var result = Math.floor(Math.random() * 2) + 1;
			//document.write(result);
			if(result == 1){$("#video").attr('src','https://www.youtube.com/embed/jeE_C96keCc?rel=0');}
			else if(result == 2){$("#video").attr('src','https://www.youtube.com/embed/1vpP-XWCRzA?rel=0');}
			*/
			$('.mov-wrapper').show().animate({ "bottom": "1px", "opacity": "1" }, "slow");
			$('.popMask').show();
		});
		$(document).on('click', '.wc-carousel-image > div > .wc-card-div', function () {
			$('.wc-carousel-360 > div').removeClass('on');
			$('.wx-carousel-map > div').removeClass('on');
			$('.wc-carousel-play > div').removeClass('on');
			$('.wc-carousel-image > div').removeClass('on');
			$("#video").attr('src','');
			$('.map-wrapper , .vr-wrapper, .mov-wrapper').fadeOut();
			
			
			$('#imgSlideCnt > li').remove();
			$('#imgDiv > div').remove();
			$('#imgCarousel > ol').add( "<li data-target='#imgCarousel' data-slide-to='0' class='active'></li>" ).appendTo('#imgCarousel > ol');
			$('#imgCarousel > div').add("<div class='item active'> <img id='imgTag' src='' width='100%' height='auto' alt='First slide'></div>").appendTo('#imgCarousel > div');
			var manyImg = false;
			var imgUrl = $(this).children().eq(0).attr('src');
			var imgPopTitle = $(this).children().eq(2).attr('alt');
			var imgCnt = $(this).children().eq(3).attr('alt');
				
			if(imgCnt != ''){
				manyImg = true;
				var tempImg = imgUrl.substring(0, imgUrl.lastIndexOf('-'));
				for(var i=2; i<=parseInt(imgCnt); i++){
					$('#imgCarousel > ol').add( "<li data-target='#imgCarousel' data-slide-to='1'></li>" ).appendTo('#imgCarousel > ol');
					$('#imgCarousel > div').add("<div class='item'> <img src='"+tempImg+"-"+i+"p.jpg' width='100%' height='auto'></div>").appendTo('#imgCarousel > div');
				}
			}else{
				$('#imgSlideCnt > li').remove();
			}
			
			if(manyImg){
				$('#imgCarousel > div').add("<a class='left carousel-control' href='#imgCarousel' data-slide='prev'><span class='glyphicon glyphicon-chevron-left'></span></a><a class='right carousel-control' href='#imgCarousel' data-slide='next'><span class='glyphicon glyphicon-chevron-right'></span></a>").appendTo('#imgCarousel > div');
			}
			var smallImg = $(this).children().eq(0).attr('src');
			var largeImg = smallImg.substring(0, smallImg.lastIndexOf('.'))+'p.jpg';

			$('#imgTag').attr('src',largeImg);
			$('#imgTitle').text($(this).children().eq(2).attr('alt'));
			$('.img-wrapper').show().animate({ "bottom": "1px", "opacity": "1" }, "slow");
			$('.popMask').show();
		});

		$(document).on('click', '.wc-carousel-video > div > .wc-card-div', function () {
			$('#movTitle').text($(this).next().text());
			$('.map-wrapper , .vr-wrapper').fadeOut();
			$('.mov-wrapper').show().animate({ "bottom": "1px", "opacity": "1" }, "fast");
			$('.popMask').show();
		});
		$(document).on('click', '.wc-carousel-item > .on > .wc-card-div', function () {
			$('.popupArea').animate({ "bottom": "1px", "opacity": "0" }, "fast").fadeOut("slow");
			$("#video").attr('src','');
			$('.popMask').show();
		});
		/*$(document).on('click', '.icoShaka', function () {
			viewMenu('<img src="assets/images/loading.gif"/>');
	    	});*/
		//2017.06.27 수정
		function viewMenu(v){
			$('div.wc-console').addClass('has-text');
			$('input[type="text"].wc-shellinput').attr('value',v);
			$('input[type="text"].wc-shellinput').val(v);
			$('label.wc-send').trigger('click');
			$('input[type="text"].wc-shellinput').attr('value','');
			$('input[type="text"].wc-shellinput').val('');
			$('.wc-console').removeClass('has-text');
			$('.btnMenu').removeClass('hamburgerBtnAction').addClass('hamburgerBtn');
		}

$(document).on('click', '.wc-card > .wc-card-buttons > li > button:contains("현재 위치 사용 승인")', function () {
	//viewMenu('<img src="assets/images/03_chat_recommend_btn_OV_v2@1x.png"/>');
	// 형식 : 반드시 src 속성만 쌍따옴표(")로 묶어야함. 나머지는 작은따옴표(') -> \'
	// 악의적인 사용자가 채팅창 img 태그를 사용한다면 막을 방법이 아직 없음. 
	navigator.geolocation.getCurrentPosition(function(position){
		let pos = { lat: position.coords.latitude, lng: position.coords.longitude };
		//alert("현재 위치: 위도(" + pos.lat + "), 경도(" + pos.lng + ")");
		var directLineUrl = "https://directline.botframework.com";
		//var secretKey = "uFP2fO--bII.cwA.-Ek.VOSBeAGNrhPCwtW61T-9fTnWHhYlkOKbt-Ju6bzZ1b0";
		var secretKey = "ESs67wQuHEU.cwA.n68.mCn3MxOGn6n-RdKewUGycdCoH0cNesHS0hCcpVFswbs";
		var info = JSON.stringify({
		  type: 'message',
		  text: 'current location:'+pos.lat+':'+pos.lng,
		  from: { id: 'userid' },
		})
		$.ajax({      
			type : "POST",  
			url : directLineUrl + "/v3/directline/conversations/" + $('#conversationId').val() + "/activities",      
			data : info,
			//dataType : "json",
			headers: {
				"Authorization": "Bearer " + secretKey,
				'Content-Type': 'application/json'
			},						
			success : function(data){   								
			},    
			error : function(e){ 
			}  
		});	
	}, function(error){
		alert("에러: " + error.message);
		var directLineUrl = "https://directline.botframework.com";
				var secretKey = "ESs67wQuHEU.cwA.n68.mCn3MxOGn6n-RdKewUGycdCoH0cNesHS0hCcpVFswbs";
				//var secretKey = "g1-wUK1BHJ8.cwA.hJM.C2hxJgvoj50OaqqF_ZW4B44A4jrr1Lbrm92qt9z4c4g";
				//var secretKey = "VvL1saGXIWY.cwA.rcg.E8K7RyD7MbSwqBBNHBAxic-SC_unVCTqFfqkxZ_D6Wc";
				var info = JSON.stringify({
				  type: 'message',
				  text: 'current location:'+pos.lat+':'+pos.lng,
				  from: { id: 'userid' },
				})
				$.ajax({      
					type : "POST",  
					url : directLineUrl + "/v3/directline/conversations/" + $('#conversationId').val() + "/activities",      
					data : info,
					//dataType : "json",
					headers: {
						"Authorization": "Bearer " + secretKey,
						'Content-Type': 'application/json'
					},						
					success : function(data){   								
					},    
					error : function(e){ 
					}  
				});
	});
});