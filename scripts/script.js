// JavaScript Document
$(window).load(function(){
	$(".page_loader").fadeOut(500);
});
$(document).ready(function() {
	
	var screenWidth = window.innerWidth;
	var screenHeight = window.innerHeight;
	$(window).on('resize',function(){
		screenWidth = window.innerWidth;
		screenHeight = window.innerHeight;
	});

	var medrixo = {
		menuDropdown : {
			open : function(currdrop){
				currdrop.addClass('open');
			},
			close : function(currdrop) {
				currdrop.removeClass('open');
			},
			toggle : function(currdrop) {
				currdrop.toggleClass('open');
			}
		},
		sideMenu : {
			open : function() {
				$('.prod-container').removeClass('sm-aside');
			},
			close: function() {
				$('.prod-container').addClass('sm-aside');
			},
			toggle: function() {
				$('.prod-container').toggleClass('sm-aside');
			}
		},
		chatMenu : {
			open : function() {
				$('.right-panel').addClass('open');
			},
			close: function() {
				$('.right-panel').removeClass('open');
			},
			toggle: function() {
				$('.right-panel').toggleClass('open');
			}
		},
		chatScreen : {
			open : function() {
				$('.chat-window').addClass('open');
			},
			close: function() {
				$('.chat-window').removeClass('open');
			},
			toggle: function() {
				$('.chat-window').toggleClass('open');
			}
		},
		appointment : {
			leftMenu : {
				open : function(){
					$('.cal-appoint-container').addClass('active-left-menu');
				},
				close : function(){
					$('.cal-appoint-container').removeClass('active-left-menu');
				},
				toggle : function(){
					$('.cal-appoint-container').toggleClass('active-left-menu');
				}
			},
			rightMenu : {
				open : function(){
					$('.cal-appoint-container').addClass('active-right-menu');
				},
				close : function(){
					$('.cal-appoint-container').removeClass('active-right-menu');
				},
				toggle : function(){
					$('.cal-appoint-container').toggleClass('active-right-menu');
				}
			}
		}
	}







// Menu Bar Functions
	var menuClass = {
		init: function(){
			this.dropdownMenu();
			this.sideMenu();
			this.rightMenu();
			this.chatScreen();
			this.defaultClick();
		},
		dropdownMenu : function(){
			$('.drop-down>a').on('click', function(e){
				e.preventDefault;
				e.stopPropagation();
				var dptoggle = $(this).parent('.drop-down');
				medrixo.menuDropdown.close($('.drop-down').not(dptoggle));	
				medrixo.menuDropdown.toggle(dptoggle);
			});
		},
		sideMenu : function(){
			$('.nav-aside').on('click',function(e){
				e.stopPropagation();
			});
			$('#side-menu').on('click',function(e){
				e.stopPropagation();
				medrixo.sideMenu.toggle();
			});
		},
		rightMenu : function(){
			$('.right-menu').on('click',function(e){
				e.preventDefault;
				e.stopPropagation();
				medrixo.chatMenu.toggle();
			});
			$('.chat-window, .right-panel').on('click',function(e){
				e.stopPropagation();
			});
		},
		chatScreen : function(){
			$('.chat-user').on('click',function(e){
				e.preventDefault;
				e.stopPropagation();
				medrixo.chatScreen.toggle();
			});
			$('#btn-chat-back').on('click',function(e){
				e.stopPropagation();
				medrixo.chatScreen.close();
			});
		},
		defaultClick : function(){
			$('body').not('.head-dropdown-menu').on('click', function(){
				if($('.drop-down').is('.open')) {
					medrixo.menuDropdown.close($('.drop-down'));
				}
				else {
					return
				}
			});
			$('body').not('.chat-window,.right-panel').on('click', function(){
				if($('.right-panel').is('.open')) {
					medrixo.chatMenu.close();
				}
				if($('.chat-window').is('.open')) {
					medrixo.chatScreen.close();
				}
			});
		}
	}
	menuClass.init();
	

	//appointment screen
	var appointment = {
		init : function(){
			this.leftMenu();
			this.rightMenu();
		},
		leftMenu : function(){
			$('.appoint-select-box .side-min-btn').on('click','button',function(e) {
				medrixo.appointment.leftMenu.toggle();
			});
			$('.calapp-lists .calapp-detail').on('click',function(e){
				e.preventDefault;
				$(this).parent('.calapp-list-box').toggleClass('active');
			});
		},
		rightMenu : function(){
			$('.appoint-list-box .side-min-btn').on('click','button',function(e) {
				medrixo.appointment.rightMenu.toggle();
			});
		}
	}
	appointment.init();

	//Media Query
	var mediaQuery = {
		init : function(){
			this.leftMenu();
			this.appointMenu();
		},
		leftMenu : function(){
			$('body').not('.nav-aside').on('autoHide', function(){
				medrixo.sideMenu.close();
			});
			if(screenWidth<=1400){
				$('body').not('.nav-aside').on('click', function(){
					$('body').trigger('autoHide');
				})
			}
			else{
				$('body').off('autoHide');
			}
		},
		appointMenu : function(){
			if(screenWidth<=1200){
				$('.appoint-select-box, .appoint-list-box').on('click', function(e){
					e.stopPropagation();
				});
				$('.applist-tab-box>ul.nav-tabs>li>a').click(function(e){
					e.preventDefault();
					var tab_hash =this.hash;
					$(this).parent('li').addClass('active').siblings('li').removeClass('active');
					$('.appoint-tab-content').find(tab_hash).addClass('active').siblings('.tab-pane').removeClass('active');	
				});
				$('.cal-appoint-container').on('closeMenu', function(){
					medrixo.appointment.leftMenu.close();
					medrixo.appointment.rightMenu.close();
				});
				$('.cal-appoint-container').not('.appoint-select-box, .appoint-list-box').on('click', function(e){
					$('.cal-appoint-container').trigger('closeMenu');
				});
			}
			else{
				$('.cal-appoint-container').off('closeMenu');
			}
		}
	};
	mediaQuery.init();

	/*$(window).on('resize', function(){
		mediaQuery.init();
	});*/


	$('#med-menu>li>a').on('click',function(e){
		e.preventDefault();
		var hash_el = this.hash;
		if(hash_el === ''){
			var href_adr = $(this).attr('href');
			window.location.href = href_adr;
		} else if(hash_el !== ""){
			$(this).parents('#med-menu>li').siblings().removeClass('active');
			medrixo.sideMenu.open();
			$(this).parent('li').addClass('active');
			$('#med-submenu').find('>li').removeClass('active').hide();
			$('#med-submenu').find(hash_el).addClass('active').fadeIn();
		} else {
			return
		}
	});

	


	var inputBox = {
		init: function() {
			this.defaultFunc();
			this.loadEvent();
		},
		focus: function(select) {
			$(select).parent('.input-box').addClass('focus');
		},
		active: function(select) {
			$(select).parent('.input-box').addClass('active');
		},
		unfocus: function(select) {
			$(select).parent('.input-box').removeClass('focus');
		},
		inactive: function(select) {
			$(select).parent('.input-box').removeClass('active');
		},
		defaultFunc: function() {
			var input = $('.input-box>input.input-text-box');
			var inpleng = input.length;
			for(var i=1;i<=inpleng;i++){
				if($(input[i]).val()==''){
					inputBox.inactive($(input[i]));
				} else {
					inputBox.active($(input[i]));
				}
			}
		},
		loadEvent: function() {
			$('.input-box').on('focus','input.input-text-box, textarea.input-text-box', function (){
				inputBox.focus($(this));
			});
			$('.input-box').on('blur','input.input-text-box, textarea.input-text-box', function (){
				inputBox.unfocus($(this));
				if($(this).val()==''){
					inputBox.inactive($(this));
				} else {
					inputBox.active($(this));
				}
			});
		}
	}
	inputBox.init();
	


	var searchBox = {
		init: function(){
			this.open($('.edit-change-box a.add-new-search'));
			this.loadEvent();
		},
		open: function(sbox) {
			var sboxleng = sbox.length;
			for(var i=0;i<sboxleng;i++){
				if($(sbox[i]).is('.open')){
					$(sbox[i]).parent('.edit-change-box').siblings('.search-box').fadeIn(200);
				}else {
					$(sbox[i]).parent('.edit-change-box').siblings('.search-box').fadeOut(200)
				}
			};
		},
		loadEvent: function(){
			var thisevent = this;
			$('.edit-change-box').on('click','a.add-new-search', function(e){
				e.preventDefault();
				$(this).toggleClass('open');
				thisevent.open($(this));
			});
		}
	}
	searchBox.init();
	

	$('#app-search-input').on('focus', function(){
		$(this).parent('.app-search').addClass('open');
	});
	$('#app-search-input').on('blur', function(){
		$(this).parent('.app-search').removeClass('open');
	});
	
	


	//Calendar 
	var cal_data = [
			{
				title: 'Akshay Kumar',
				start: '2017-03-21T10:30:00',
				end: '2017-03-21T10:35:00',
				className:'appcolor1'
			},
			{
				title: 'Manigandan',
				start: '2017-03-21T10:35:00',
				end: '2017-03-21T10:40:00',
				className:'appcolor1'
			},
			{
				title: 'Praveen',
				start: '2017-03-21T10:36:00',
				end: '2017-03-21T10:41:00',
				className:'appcolor3'
			},
			{
				title: 'Niyaz',
				start: '2017-03-22T09:15:00',
				end: '2017-03-22T09:20:00',
				className:'appcolor4'
			},
			{
				title: 'Phanee',
				start: '2017-03-22T10:00:00',
				end: '2017-03-22T10:10:00',
				className:'appcolor6'
			},
			{
				title: 'Phanee',
				start: '2017-03-24T09:00:00',
				end: '2017-03-24T09:10:00',
				className:'appcolor2'
			}];
	
	var event_detail = '<div class="cal-event-popup" style="display:none;">'+
        '<div class="cal-app-box">'+
            '<div class="pat-img-id">'+
                '<img src="images/user-img.jpg">'+
                '<h5>ID00340</h5>'+
            '</div>'+
            '<h4>Akshay Kumar</h4>'+
            '<h5>+91 9456386368</h5>'+
            '<h5>akshay.kumar@gmail.com</h5>'+
        '</div>'+
        '<div class="pat-update-box">'+
            '<div class="pat-short-link">'+
                '<a href="#"><i class="fa fa-heartbeat" aria-hidden="true"></i> EMR</a>'+
                '<a href="#"><i class="fa fa-user-o" aria-hidden="true"></i> Profile</a>'+
                '<a href="#"><i class="fa fa-file-text-o" aria-hidden="true"></i> Billing</a>'+
            '</div>'+
            '<div class="app-status-update">'+
                '<p><i class="fa fa-clock-o" aria-hidden="true"></i> Visited 2 days back</p>'+
                '<p><i class="fa fa-clock-o" aria-hidden="true"></i> waiting for 5min</p>'+
            '</div>'+
            '<div class="pat-app-schedule">'+
                '<span class="pat-schedule-time">10.00AM</span>'+
                '<h4>Dr.Niyaz Hussain</h4>'+
            '</div>'+
        '</div>'+
        '<div class="pat-app-status">'+
            '<button class="btn btn-xs btn-danger checkin-btn pull-right">Checkin</button>'+
            '<span class="appointment-status-box" style="background: #14bb00;">03</span>'+
        '</div>'+
    '</div>'
	$('#calendar').fullCalendar({
		header: { left:'prev,next today',center:'title', right: 'month,agendaWeek,agendaDay' },
		defaultView: 'agendaWeek',
		buttonText:{
			prev:'Prev',
			next:'Next',
			month:'Month',
			agendaWeek:'Week',
			agendaDay:'Day',
			today:'Today'
		},
		allDaySlot:false,
		slotDuration:'00:15:00',
		slotLabelInterval :'00:15:00',
		minTime:'08:00:00',
		maxTime:'20:00:00',
		events: cal_data,
		height:(screenHeight-115),
		eventRender: function(event, element) {
			element.append(event_detail);
		},
		eventClick: function(calEvent, jsEvent, view) {
			jsEvent.stopPropagation();
			$(this).find('.cal-event-popup').fadeIn(200);
		}
	});



	$('.profile-tab>.nav-tabs').on('click','>li>a', function(){
		var navWidth = $(this).parents('ul.nav-tabs').width();
		var navLeng = $(this).parents('ul.nav-tabs').find('li').length;
		var navIndex = $(this).parent('li').index();
		var navLiLeng = navWidth/navLeng;

		$('.tab-select-rheostat').css('right',navLiLeng*(navLeng-(navIndex+1)));
		$('.tab-select-rheostat').find('.nav-tabs').css({'width':navWidth,'left':-(navLiLeng*navIndex)});
	});

	
	
       
    $("#leftMenu").niceScroll();

});

