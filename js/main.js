(function($) {
	$(document).ready(function() {

		var $window = $(window);



		/*******  SCROLLING BUTTONS  *******/


		var scrollBtn = $(".scrolling button");

		scrollBtn.click(function() {

			var data_id = $(this).data('id');

			$('html, body').animate({
				scrollTop: $( '#' + data_id).offset().top
			}, 2000);

		});

		scrollBtn.hover(function() {
			$(this).siblings('div').fadeToggle(300);

		});


		/******  SCROLL ON CLICK GET STARTED  ******/


		$(".started").click(function(){
			$('html, body').animate({
				scrollTop: $( '#pricing_plans').offset().top
			}, 2000);
		});



		/******  SCROLL ON TOP BUTTON  ******/


		$(".top-btn_wrapper").click(function() {
			$('html, body').animate({
				scrollTop: $( "#header").offset().top
			}, 2000);

		});


		/***** ROTATION ARROW IN PERSONAL_MENAGER_WRAPPER DIV *****/


		$('.personal_menager_title i').click(function () {
			$('.personal_menager_content').slideToggle(600);
			$('.personal_menager_title i').toggleClass("rotate");

		});


		/********  INCREASE BORDER WIDTH ON SCROLLING  ********/

		$window.scroll(function() {

			scrollingEffect();

		});

		/*******  READ MORE BUTTON  *******/

		$(".read_more").click(function(){

			$(this).prev("p").slideToggle(600);
			$(this).find("span").toggleClass('no-display');

		});


		/************  SLIDER  **************/

		var activeSlider = 0;

		$('.squares_content li').click(function() {

			var $this = $(this);
			activeSlider = $this.index();

			//call slide function
			slide($this, activeSlider);

		});

		$('.slide-buttons button').click(function() {

			var type = $(this).data('type');
			var slideLength = $('.testimonial_content').length;

			if(type == 'next') {
				if(activeSlider == slideLength - 1) {
					activeSlider = 0;
				} else {
					activeSlider = activeSlider + 1;
				}

			} else {
				if(activeSlider == 0) {
					activeSlider = slideLength - 1;
				} else {
					activeSlider = activeSlider - 1;
				}
			}

			var $dot = $('.squares_content li').eq(activeSlider);
			slide($dot, activeSlider);

		});


		/************  GALLERY **************/

		var $galleryButtonImg = $('#carousel').find(".gallery_img");

		slickSlider();

		$(".transbox").click(function(){

			var $img = $(this).closest('.gallery_thumb').find('img');
			var src = $img.attr('src');
			var alt = $img.attr('alt');

			$(".gallery_view").addClass("active");
			$galleryButtonImg.filter('[src="'+src+'"]').trigger('click');
		});

		$(".exit").click(function() {
			$('.gallery_view').removeClass("active");
		});


		$galleryButtonImg.click(function(){

			var $this = $(this);
			var src = $this.attr('src');
			var alt = $this.attr('alt');

			$('.gallery_header').find('h3').text(alt);
			$(".gallery_img").removeClass('border');
			$this.addClass('border');

			$this.closest('#gallery').find("#big_img").html('<img class="gallery_img" src="'+src+'" alt="'+alt+'"/>');

		});

		/************  SCROLL EFFECT **************/


		var execute = true;

		function scrollingEffect() {

			var windowTop = $window.scrollTop();
			var windowBottom = windowTop + $window.outerHeight();

			$('.scroll-effect').each(function () {

				var $this = $(this);

				var elemTop = $this.offset().top;
				var elemBottom = elemTop + $this.height() + $window.outerHeight()/4;

				var $borderSpan = $this.siblings('.max_border').find('span');

				// If the object is completely visible in the window, fade it in
				if (elemBottom <= windowBottom && elemTop >= windowTop) {
					$borderSpan.width('25%');
				} else {
					$borderSpan.width('2%');
				}

			});

			skillsEffect(windowTop, windowBottom);
		}


		/************  SKILLS EFFECTS **************/


		function skillsEffect(windowTop, windowBottom) {
			var $skills = $('.skills');
			var skillsTop = $skills.offset().top;
			var skillsBottom = skillsTop + $skills.height() + $window.outerHeight()/4;


			if (skillsTop <= windowBottom && skillsBottom >= windowTop && execute) {
				skillsIncreasing($skills.find('[data-type="graphic"]'), 75);
				skillsIncreasing($skills.find('[data-type="develop"]'), 100);
				skillsIncreasing($skills.find('[data-type="brand"]'), 80);
				skillsIncreasing($skills.find('[data-type="marketing"]'), 80);
				execute = false;
				console.log('visible');
			}
		}

		/********  RESPONSIVE CHANGES  ********/


		var windowSize = $(window).width();

		$(window).resize(function() {
			searchResponsive(windowSize);
		});

		function searchResponsive(width) {

			if (width <= 480) {
				$(".responsive_menu_btn").addClass('active');

			}else{
				$(".responsive_menu_btn").removeClass('active');
			}
		}

		$(".responsive_menu_btn").click(function () {
			$("#nav_menu").slideToggle(600);
		});

		$(function() {

			$("#js_contact_form").validate();

		});


	});

	function slickSlider() {
		$('.carousel_content').slick({
			speed: 300,
			slidesToShow: 4,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
						infinite: true
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});

	}

	function skillsIncreasing(element, value) {
		element.next().find('.percentage').animate({width: value+"%"}, 1500);

		var number = 0;
		var interval = setInterval(function(){
			number++;
			if(number == value) {
				clearInterval(interval);
			}
			element.find('strong').text(number);
		}, 15);
	}

	function slide(dot, activeSlider) {
		//squares
		dot.addClass('active');
		dot.siblings().removeClass('active');

		//slider
		var $slide = $('.testimonial_content').eq(activeSlider);
		$slide.addClass('active');
		$slide.siblings().removeClass('active');
	}




})(jQuery);