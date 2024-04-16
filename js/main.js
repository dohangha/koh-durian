 AOS.init({
 	duration: 800,
 	easing: 'slide'
 });

(function($) {

	"use strict";

	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll',
    horizontalOffset: 0,
	  verticalOffset: 0
  });

  // Scrollax
  $.Scrollax();


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
   $.Scrollax();

	var carousel = function() {
		$('.home-slider').owlCarousel({
	    loop:true,
	    autoplay: true,
	    margin:0,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:false,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
	    responsive:{
	      0:{
	        items:1,
	        nav:false
	      },
	      600:{
	        items:1,
	        nav:false
	      },
	      1000:{
	        items:1,
	        nav:false
	      }
	    }
		});
		$('.carousel-work').owlCarousel({
			autoplay: true,
			center: true,
			loop: true,
			items:1,
			margin: 30,
			stagePadding:0,
			nav: true,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive:{
				0:{
					items: 1,
					stagePadding: 0
				},
				600:{
					items: 2,
					stagePadding: 50
				},
				1000:{
					items: 3,
					stagePadding: 100
				}
			}
		});

	};
	carousel();

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	
	var counter = function() {
		
		$('#section-counter').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();

	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();


	// navigation
	var OnePageNav = function() {
		$(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on('click', function(e) {
		 	e.preventDefault();

		 	var hash = this.hash,
		 			navToggler = $('.navbar-toggler');
		 	$('html, body').animate({
		    scrollTop: $(hash).offset().top
		  }, 700, 'easeInOutExpo', function(){
		    window.location.hash = hash;
		  });


		  if ( navToggler.is(':visible') ) {
		  	navToggler.click();
		  }
		});
		$('body').on('activate.bs.scrollspy', function () {
		  console.log('nice');
		})
	};
	OnePageNav();


	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: true,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });


  $('.appointment_date').datepicker({
	  'format': 'm/d/yyyy',
	  'autoclose': true
	});

	$('.appointment_time').timepicker();




})(jQuery);


const langu= document.querySelector('.language');
const buttons= document.querySelectorAll('.language-item');

buttons.forEach(button => {
	button.addEventListener('click', () => {
		langu.querySelector('.active').classList.remove('active');
		button.classList.add('active');
	})
})


/*function changeLanguage(lang) {
	let element = document.querySelector('.nav-1');
    if (lang == "en") {
       element.innerHTML = "Home";
    } else if (lang == "cn") {
       element.innerHTML = "首页";
    }
    let element1 = document.querySelector('.nav-2');
    if (lang == "en") {
       element1.innerHTML = "About";
    } else if (lang == "cn") {
       element1.innerHTML = "公司简介";
    }
    let element2 = document.querySelector('.nav-3');
    if (lang == "en") {
       element2.innerHTML = "Services";
    } else if (lang == "cn") {
       element2.innerHTML = "服务项目";
    }
    let element3 = document.querySelectorAll('.nav-4');
    for (let i = 0; i < element3.length; i++)
        if (lang == "en") {
        element3[i].innerHTML = "Products";
        } else if (lang == "cn") {
        element3[i].innerHTML = "产品";
        }
    let element4 = document.querySelector('.nav-5');
    if (lang == "en") {
       element4.innerHTML = "Contact";
    } else if (lang == "cn") {
       element4.innerHTML = "联系";
    }
    let element5 = document.querySelectorAll('.subheading1');
    for (let i = 0; i < element5.length; i++)
        if (lang == "en") {
        element5[i].innerHTML = "Welcome";
        } else if (lang == "cn") {
        element5[i].innerHTML = "欢迎";
        }
    let element8 = document.querySelector('.sub1');
    if (lang == "en") {
       element8.innerHTML = "100% fresh & organic durian in Pahang.";
    } else if (lang == "cn") {
       element8.innerHTML = "彭亨州 100% 新鲜有机榴莲";
    }
    let element9 = document.querySelector('.title2');
    if (lang == "en") {
       element9.innerHTML = "Authentic Taste & Desired Place";
    } else if (lang == "cn") {
       element9.innerHTML = "正宗的口味以及理想的地点。";
    }
    let element10 = document.querySelector('.sub2');
    if (lang == "en") {
       element10.innerHTML = "Enjoy the hand-picked, fresh selection of the best durians in Pahang.";
    } else if (lang == "cn") {
       element10.innerHTML = "品尝彭亨州的顶级榴莲。";
    }
    let element11 = document.querySelectorAll('.order');
    for (let i = 0; i < element11.length; i++)
        if (lang == "en") {
        element11[i].innerHTML = "Order Now";
        } else if (lang == "cn") {
        element11[i].innerHTML = "现在下单";
        }
    let element12 = document.querySelectorAll('.view');
    for (let i = 0; i < element12.length; i++)
        if (lang == "en") {
        element12[i].innerHTML = "View Products";
        } else if (lang == "cn") {
        element12[i].innerHTML = "查看产品";
        }
    let element13 = document.querySelector('.title3');
    if (lang == "en") {
       element13.innerHTML = "A Premier Durian Destination";
    } else if (lang == "cn") {
       element13.innerHTML = "顶级榴莲目的地";
    }
    let element14 = document.querySelector('.sub3');
    if (lang == "en") {
       element14.innerHTML = "We stay true to our brand by sourcing and cultivating durians from our farm.";
    } else if (lang == "cn") {
       element14.innerHTML = "我们通过从农场采购和种植榴莲来忠于我们的品牌.";
    }
    let element15 = document.querySelector('.info1');
    if (lang == "en") {
       element15.innerHTML = "Freshness & Highest Quality pick from own durian farm";
    } else if (lang == "cn") {
       element15.innerHTML = "从自己的榴莲农场采摘的新鲜度和最高品质";
    }
    let element16 = document.querySelector('.add1');
    if (lang == "en") {
       element16.innerHTML = "No 406 & 407";
    } else if (lang == "cn") {
       element16.innerHTML = "406 号和 407 号";
    }
    let element17 = document.querySelector('.hour1');
    if (lang == "en") {
       element17.innerHTML = "Open Everyday";
    } else if (lang == "cn") {
       element17.innerHTML = "每天开放";
    }
    let element18 = document.querySelector('.contact1');
    if (lang == "en") {
       element18.innerHTML = "Contact Us";
    } else if (lang == "cn") {
       element18.innerHTML = "联系我们";
    }
    let element19 = document.querySelector('.email1');
    if (lang == "en") {
       element19.innerHTML = "Email Us: kohdurian18@gmail.com";
    } else if (lang == "cn") {
       element19.innerHTML = "给我们发电子邮件：kohdurian18@gmail.com";
    }
    let element20 = document.querySelector('.call1');
    if (lang == "en") {
       element20.innerHTML = "Call Us: 012-977 8288";
    } else if (lang == "cn") {
       element20.innerHTML = "致电我们：012-977 8288";
    }
    let element21 = document.querySelector('.whatsapp1');
    if (lang == "en") {
       element21.innerHTML = "Whatsapp Us";
    } else if (lang == "cn") {
       element21.innerHTML = "Whatsapp 我们";
    }
    let element22 = document.querySelectorAll('.subheading2');
    for (let a = 0; a < element22.length; a++)
        if (lang == "en") {
        element22[a].innerHTML = "Discover";
        } else if (lang == "cn") {
        element22[a].innerHTML = "发现";
        }
    let element23 = document.querySelector('.subheading3');
    if (lang == "en") {
       element23.innerHTML = "Our Story";
    } else if (lang == "cn") {
       element23.innerHTML = "我们的故事";
    }
    let element24 = document.querySelector('.des');
    if (lang == "en") {
       element24.innerHTML = "Established in 2010, our development began on 1,100-acre durian plantation in Raub Pahang. Our passion lies in introducing the exquisite flavours of Malaysian tropical fruits, particularly Musang King durians, to the market. We stay true to our brand by sourcing and cultivating durians exclusively from Pahang. We firmly believe it is this specific region where the best durians are cultivated.";
    } else if (lang == "cn") {
       element24.innerHTML = "我们成立于 2010 年，在劳勿彭亨 (Raub Pahang) 拥有占地 1,100 英亩的榴莲园。 我们致力将马来西亚热带水果（尤其是猫山王榴莲）的精致风味引入市场。 我们只从彭亨州采购和种植榴莲，以忠于我们的品牌。 我们坚信，正是这个特定地区种植出最好的榴莲。";
    }
    let element25 = document.querySelector('.headingservice1');
    if (lang == "en") {
       element25.innerHTML = "Unlimited Quantity";
    } else if (lang == "cn") {
       element25.innerHTML = "数量不限";
    }
    let element26 = document.querySelector('.subservice1');
    if (lang == "en") {
       element26.innerHTML = "You can have as many as you want. This is unlimited!";
    } else if (lang == "cn") {
       element26.innerHTML = "你想要多少就可以有多少。 这是无限的！";
    }
    let element27 = document.querySelector('.headingservice2');
    if (lang == "en") {
       element27.innerHTML = "Fastest Delivery";
    } else if (lang == "cn") {
       element27.innerHTML = "最快的交货期";
    }
    let element28 = document.querySelector('.subservice2');
    if (lang == "en") {
       element28.innerHTML = "We will support you with the fastest courier & delivery services.";
    } else if (lang == "cn") {
       element28.innerHTML = "我们将为您提供最快的快递和送货服务。";
    }
    let element29 = document.querySelector('.headingservice3');
    if (lang == "en") {
       element29.innerHTML = "Highest Quality";
    } else if (lang == "cn") {
       element29.innerHTML = "最好的质量";
    }
    let element30 = document.querySelector('.subservice3');
    if (lang == "en") {
       element30.innerHTML = "We will deliver the finest durians for you to enjoy.";
    } else if (lang == "cn") {
       element30.innerHTML = "我们将为您提供最好的榴莲供您享用。";
    }
    let element31 = document.querySelector('.subproduct');
    if (lang == "en") {
       element31.innerHTML = "What We Have";
    } else if (lang == "cn") {
       element31.innerHTML = "我们有什么";
    }
    let element32 = document.querySelector('.desproduct');
    if (lang == "en") {
       element32.innerHTML = "Koh Authentic Durian Taste provides the top-graded fresh and frozen premium durians from the durian orchard in Pahang, Malaysia. We strive to deliver the best and most fresh durians to our consumers.";
    } else if (lang == "cn") {
       element32.innerHTML = "Koh Authentic Durian Taste 提供来自马来西亚彭亨州榴莲园的顶级新鲜和冷冻优质榴莲。 我们致力为消费者提供最好、最新鲜的榴莲。";
    }
    let element33 = document.querySelector('.viewproduct');
    if (lang == "en") {
       element33.innerHTML = "View Products";
    } else if (lang == "cn") {
       element33.innerHTML = "查看产品";
    }
    let element34 = document.querySelector('.branch');
    if (lang == "en") {
       element34.innerHTML = "Durian Branches";
    } else if (lang == "cn") {
       element34.innerHTML = "榴莲枝";
    }
    let element35 = document.querySelector('.award');
    if (lang == "en") {
       element35.innerHTML = "Number of Awards";
    } else if (lang == "cn") {
       element35.innerHTML = "获奖次数";
    }
    let element36 = document.querySelector('.happy');
    if (lang == "en") {
       element36.innerHTML = "Happy Customer";
    } else if (lang == "cn") {
       element36.innerHTML = "顾客的满意度";
    }
    let element37 = document.querySelector('.staff1');
    if (lang == "en") {
       element37.innerHTML = "Staff";
    } else if (lang == "cn") {
       element37.innerHTML = "职员";
    }
    let element38 = document.querySelector('.subproduct1');
    if (lang == "en") {
       element38.innerHTML = "Our Products";
    } else if (lang == "cn") {
       element38.innerHTML = "我们的产品";
    }
    let element39 = document.querySelector('.desproduct1');
    if (lang == "en") {
       element39.innerHTML = "We have a wide variety of products including fresh durian, nitrogen frozen durian, nitrogen frozen pulp and durian paste in Malaysia.";
    } else if (lang == "cn") {
       element39.innerHTML = "我们拥有马来西亚有各种各样的产品，包括新鲜榴莲、氮气冷冻榴莲、氮气冷冻果肉和榴莲酱。";
    }
    let element40 = document.querySelectorAll('.freshdurian');
    for (let b = 0; b < element40.length; b++)
        if (lang == "en") {
        element40[b].innerHTML = "Fresh Durian";
        } else if (lang == "cn") {
        element40[b].innerHTML = "新鲜榴莲";
        }
    let element41 = document.querySelector('.desfresh');
    if (lang == "en") {
       element41.innerHTML = "Durians are fresh and handpicked from our orchard.";
    } else if (lang == "cn") {
       element41.innerHTML = "最新鲜的榴莲，来自我们的果园手工采摘。";
    }
    let element42 = document.querySelectorAll('.contactus1');
    for (let b = 0; b < element42.length; b++)
        if (lang == "en") {
        element42[b].innerHTML = "Contact Us";
        } else if (lang == "cn") {
        element42[b].innerHTML = "联系我们";
        }
    let element43 = document.querySelectorAll('.frozendurian');
    for (let b = 0; b < element43.length; b++)
        if (lang == "en") {
        element43[b].innerHTML = "Frozen Durian";
        } else if (lang == "cn") {
        element43[b].innerHTML = "冷冻榴莲";
        }
    let element44 = document.querySelector('.desfrozen');
    if (lang == "en") {
       element44.innerHTML = "Taste the freshness of frozen durian like never before.";
    } else if (lang == "cn") {
       element44.innerHTML = "品尝冷冻榴莲前所未有的新鲜度。";
    }
    let element45 = document.querySelectorAll('.durianpulp');
    for (let b = 0; b < element45.length; b++)
        if (lang == "en") {
        element45[b].innerHTML = "Durian Pulp";
        } else if (lang == "cn") {
        element45[b].innerHTML = "榴莲果肉";
        }
    let element46 = document.querySelector('.despulp');
    if (lang == "en") {
       element46.innerHTML = "Grade A durian pulps are collected daily from our farm.";
    } else if (lang == "cn") {
       element46.innerHTML = "我们的农场每天都会收集 A 级榴莲果肉.";
    }
    let element47 = document.querySelectorAll('.durianpaste');
    for (let b = 0; b < element47.length; b++)
        if (lang == "en") {
        element47[b].innerHTML = "Durian Paste";
        } else if (lang == "cn") {
        element47[b].innerHTML = "榴莲酱";
        }
    let element48 = document.querySelector('.despaste');
    if (lang == "en") {
       element48.innerHTML = "Our durian paste is made from premium quality durians.";
    } else if (lang == "cn") {
       element48.innerHTML = "我们的榴莲酱是由优质榴莲提炼而成的。";
    }
    let element49 = document.querySelector('.subheadtasty');
    if (lang == "en") {
       element49.innerHTML = "The Tastiest Durian";
    } else if (lang == "cn") {
       element49.innerHTML = "最美味的榴莲";
    }
    let element50 = document.querySelector('.destasty');
    if (lang == "en") {
       element50.innerHTML = "With years of experience in durians & a dedicated team of Pickers & Packer, we are able to provide the best quality durians to all our customers.";
    } else if (lang == "cn") {
       element50.innerHTML = "凭借多年的榴莲经验以及专业的采摘和包装团队，我们能够为所有客户提供最优质的榴莲。";
    }
    let element51 = document.querySelector('.productfresh');
    if (lang == "en") {
       element51.innerHTML = "Fresh Durian";
    } else if (lang == "cn") {
       element51.innerHTML = "新鲜榴莲";
    }
    let element52 = document.querySelector('.productfrozen');
    if (lang == "en") {
       element52.innerHTML = "Frozen Durian";
    } else if (lang == "cn") {
       element52.innerHTML = "冷冻榴莲";
    }
    let element53 = document.querySelector('.productpulp');
    if (lang == "en") {
       element53.innerHTML = "Durian Pulp";
    } else if (lang == "cn") {
       element53.innerHTML = "榴莲果肉";
    }
    let element54 = document.querySelector('.productpaste');
    if (lang == "en") {
       element54.innerHTML = "Durian Paste";
    } else if (lang == "cn") {
       element54.innerHTML = "榴莲酱";
    }
    let element55 = document.querySelector('.productname1');
    if (lang == "en") {
       element55.innerHTML = "Musang King";
    } else if (lang == "cn") {
       element55.innerHTML = "猫山王";
    }
    let element56 = document.querySelectorAll('.desname1');
    for (let d = 0; d < element56.length; d++)
        if (lang == "en") {
        element56[d].innerHTML = "Musang King is the most popular variety of durian in both Malaysia and Singapore.";
        } else if (lang == "cn") {
        element56[d].innerHTML = "猫山王是马来西亚和新加坡最受欢迎的榴莲品种。";
        }
    let element57 = document.querySelector('.productname2');
    if (lang == "en") {
       element57.innerHTML = "D24 Durian";
    } else if (lang == "cn") {
       element57.innerHTML = "D24 榴莲";
    }
    let element58 = document.querySelectorAll('.desname2');
    for (let c = 0; c < element58.length; c++)
        if (lang == "en") {
        element58[c].innerHTML = "Durian D24 is one of the most popular durian before the Musang King takeover.";
        } else if (lang == "cn") {
        element58[c].innerHTML = "榴莲D24是猫山王接管之前最受欢迎的榴莲之一。";
        }
    let element59 = document.querySelectorAll('.productname3');
    for (let c = 0; c < element59.length; c++)
        if (lang == "en") {
        element59[c].innerHTML = "Others";
        } else if (lang == "cn") {
        element59[c].innerHTML = "其他的";
        }
    let element60 = document.querySelectorAll('.desname3');
    for (let c = 0; c < element60.length; c++)
        if (lang == "en") {
        element60[c].innerHTML = "We have a various type of fresh durians. Contact us to know more.";
        } else if (lang == "cn") {
        element60[c].innerHTML = "我们有各种类型的新鲜榴莲。 联系我们了解更多。";
        }
    let element61 = document.querySelector('.frozenmsk');
    if (lang == "en") {
       element61innerHTML = "Frozen Musang King";
    } else if (lang == "cn") {
       element61.innerHTML = "冷冻猫山王";
    }
    let element62 = document.querySelector('.frozend24');
    if (lang == "en") {
       element62innerHTML = "Frozen D24";
    } else if (lang == "cn") {
       element62.innerHTML = "冷冻D24";
    }
    let element63 = document.querySelector('.mskpulp');
    if (lang == "en") {
       element63innerHTML = "Musang King Pulp";
    } else if (lang == "cn") {
       element63.innerHTML = "猫山王纸浆";
    }
    let element64 = document.querySelector('.d24pulp');
    if (lang == "en") {
       element64.innerHTML = "D24 Pulp";
    } else if (lang == "cn") {
       element64.innerHTML = "D24纸浆";
    }
    let element65 = document.querySelector('.mskpaste');
    if (lang == "en") {
       element65.innerHTML = "Musang King Paste";
    } else if (lang == "cn") {
       element65.innerHTML = "猫山王酱";
    }
    let element66 = document.querySelector('.d24paste');
    if (lang == "en") {
       element66.innerHTML = "D24 Paste";
    } else if (lang == "cn") {
       element66.innerHTML = "D24膏体";
    }
    let element67 = document.querySelector('.subheading4');
    if (lang == "en") {
       element67.innerHTML = "Testimony";
    } else if (lang == "cn") {
       element67.innerHTML = "见证";
    }
    let element68 = document.querySelector('.customersay');
    if (lang == "en") {
       element68.innerHTML = "Customers Say";
    } else if (lang == "cn") {
       element68.innerHTML = "客户说";
    }
    let element69 = document.querySelector('.customerreview');
    if (lang == "en") {
       element69.innerHTML = "Read our customer reviews to know more about us.";
    } else if (lang == "cn") {
       element69.innerHTML = "阅读我们的客户评论以了解更多关于我们的信息。";
    }
    let element70 = document.querySelector('.customer1');
    if (lang == "en") {
       element70.innerHTML = "Durians came in a well sealed container arranged in a very pretty box.Very clean and hygenic with no smell at all until you open the box. All types of durians were so good and fresh. Very tasty, very satisfied. Excellent service.";
    } else if (lang == "cn") {
       element70.innerHTML = "榴莲装在一个密封良好的容器中，装在一个非常漂亮的盒子里。干净又卫生，在打开盒子之前没有任何气味。 所有类型的榴莲都非常美味和新鲜。 非常好吃，非常满意。 服务至上。。";
    }
    let element71 = document.querySelector('.customer2');
    if (lang == "en") {
       element71.innerHTML = "Love the way they packed their durian is it seal and delivered to me safe and nicely. Durians taste good is fresh and not those frozen in the freezer type.";
    } else if (lang == "cn") {
       element71.innerHTML = "喜欢专业密封包装榴莲的方式，安全又精致。 新鲜榴莲味道好，而不像那些冷冻的榴莲。";
    }
    let element72 = document.querySelector('.customer3');
    if (lang == "en") {
       element72.innerHTML = "Very tasty n good quality Worth your money. Koh Durian really cares abt customer satisfaction. Highly recommended and will buy again. Thanks.";
    } else if (lang == "cn") {
       element72.innerHTML = "非常好吃，质量好，物有所值。 榴莲岛非常注重客户满意度。 强烈推荐并且会期待再次购买。 谢谢。";
    }
    let element73 = document.querySelector('.customer4');
    if (lang == "en") {
       element73.innerHTML = "Excellent musang king. Our musang king is by far the best that i have eaten. The bitter sweet taste is superb. It came in a tightly sealed bag. The durian is dry without much condensation.";
    } else if (lang == "cn") {
       element73.innerHTML = "优秀的猫山王。 我们的猫山王是迄今为止我吃过的最好的。 苦甜的味道非常棒。 它装在一个密封的袋子里。 榴莲是干的，没有太多凝结。";
    }
    let element74 = document.querySelector('.customer5');
    if (lang == "en") {
       element74.innerHTML = "Durian delivered was very good quality, very nice & neat packaging and punctual on time delivery. The service & products were excellent 👍🏻👍🏻👍🏻. 5 Stars ";
    } else if (lang == "cn") {
       element74.innerHTML = "提供优质榴莲，完美整洁包装，并且准时交货。 服务和产品都很棒👍🏻👍🏻👍🏻。 5 星";
    }
    let element75 = document.querySelectorAll('.position');
    for (let c = 0; c < element75.length; c++)
        if (lang == "en") {
        element75[c].innerHTML = "Durian Consumer";
        } else if (lang == "cn") {
        element75[c].innerHTML = "榴莲消费者";
        }
    let element76 = document.querySelector('.ordernow');
    if (lang == "en") {
       element76.innerHTML = "Order Now";
    } else if (lang == "cn") {
       element76.innerHTML = "现在下单";
    }
    let element77 = document.querySelector('.emailus');
    if (lang == "en") {
       element77.innerHTML = "Email Us: kohdurian18@gmail.com";
    } else if (lang == "cn") {
       element77.innerHTML = "给我们发电子邮件：kohdurian18@gmail.com";
    }
    let element78 = document.querySelector('.callus');
    if (lang == "en") {
       element78.innerHTML = "Call Us: 012-977 8288";
    } else if (lang == "cn") {
       element78.innerHTML = "联系我们：012-977 8288";
    }
    let element79 = document.querySelector('.aboutus');
    if (lang == "en") {
       element79.innerHTML = "About Us";
    } else if (lang == "cn") {
       element79.innerHTML = "关于我们";
    }
    let element80 = document.querySelector('.desabout');
    if (lang == "en") {
       element80.innerHTML = "Koh Authentic Durian Taste guarantees Freshness & Highest quality durians which are hand-picked from our own management durian farm. Our passion lies in introducing the exquisite flavours of Malaysian tropical fruits, particularly Musang King -durians, to the market.";
    } else if (lang == "cn") {
       element80.innerHTML = "Koh 正宗榴莲口味保证新鲜和最高品质的榴莲，这些榴莲是从我们自己管理的榴莲农场手工采摘的。 热衷于马来西亚热带水果（尤其是猫山王榴莲）的精致风味引入市场。";
    }
    let element81 = document.querySelector('.question');
    if (lang == "en") {
       element81.innerHTML = "Have a Questions?";
    } else if (lang == "cn") {
       element81.innerHTML = "有疑问吗？";
    }
    let element82 = document.querySelector('.copyright');
    if (lang == "en") {
       element82.innerHTML = "Made by Koh Authentic Durian Taste";
    } else if (lang == "cn") {
       element82.innerHTML = "由 Koh 制作 正宗榴莲口味";
    }
 }
*/

