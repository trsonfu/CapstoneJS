(function ($) {
    "use strict";
    // Page loading
    $(window).on('load', function() {
        $('#preloader-active').delay(450).fadeOut('slow');
        $('body').delay(450).css({
            'overflow': 'visible'
        });
        $("#onloadModal").modal('show');
    });
    /*-----------------
        Menu Stick
    -----------------*/
    var header = $('.sticky-bar');
    var win = $(window);
    win.on('scroll', function() {
        var scroll = win.scrollTop();
        if (scroll < 200) {
            header.removeClass('stick');
            $('.header-style-2 .categori-dropdown-active-large').removeClass('open');
            $('.header-style-2 .categori-button-active').removeClass('open');
        } else {
            header.addClass('stick');
        }
    });

    /*------ ScrollUp -------- */
    $.scrollUp({
        scrollText: '<i class="fi-rs-arrow-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });

    /*------ Wow Active ----*/
    new WOW().init();

    //sidebar sticky
    if ($('.sticky-sidebar').length) {
        $('.sticky-sidebar').theiaStickySidebar();
    }

    // Slider Range JS
    if ( $("#slider-range").length ) {
        $("#slider-range").slider({
            range: true,
            min: 0,
            max: 500,
            values: [130, 250],
            slide: function (event, ui) {
                $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
            }
        });
        $("#amount").val("$" + $("#slider-range").slider("values", 0) +
            " - $" + $("#slider-range").slider("values", 1));
    }

    /*------ Hero slider 1 ----*/
    $('.hero-slider-1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        loop: true,
        dots: true,
        arrows: true,
        prevArrow: '<span class="slider-btn slider-prev"><i class="fi-rs-angle-left"></i></span>',
        nextArrow: '<span class="slider-btn slider-next"><i class="fi-rs-angle-right"></i></span>',
        appendArrows: '.hero-slider-1-arrow',
        autoplay: true,
    });

    /*Carausel 6 columns*/
    $(".carausel-6-columns").each(function(key, item) {
        var id=$(this).attr("id");
        var sliderID='#'+id;
        var appendArrowsClassName = '#'+id+'-arrows'

        $(sliderID).slick({
            dots: false,
            infinite: true,
            speed: 1000,
            arrows: true,
            autoplay: true,
            slidesToShow: 6,
            slidesToScroll: 1,
            loop: true,
            adaptiveHeight: true,
            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ],
            prevArrow: '<span class="slider-btn slider-prev"><i class="fi-rs-angle-left"></i></span>',
            nextArrow: '<span class="slider-btn slider-next"><i class="fi-rs-angle-right"></i></span>',
            appendArrows:  (appendArrowsClassName),
        });
    });

    /*Carausel 4 columns*/
    $(".carausel-4-columns").each(function(key, item) {
        var id=$(this).attr("id");
        var sliderID='#'+id;
        var appendArrowsClassName = '#'+id+'-arrows'

        $(sliderID).slick({
            dots: false,
            infinite: true,
            speed: 1000,
            arrows: true,
            autoplay: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            loop: true,
            adaptiveHeight: true,
            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ],
            prevArrow: '<span class="slider-btn slider-prev"><i class="fi-rs-angle-left"></i></span>',
            nextArrow: '<span class="slider-btn slider-next"><i class="fi-rs-angle-right"></i></span>',
            appendArrows:  (appendArrowsClassName),
        });
    });

    /*Fix Bootstrap 5 tab & slick slider*/

    $('button[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
		$('.carausel-4-columns').slick('setPosition');
	});

     /*------ Timer Countdown ----*/

    $('[data-countdown]').each(function() {
        var $this = $(this), finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function(event) {
            $(this).html(
                event.strftime(''
                    + '<span class="countdown-section"><span class="countdown-amount hover-up">%d</span><span class="countdown-period"> days </span></span>'
                    + '<span class="countdown-section"><span class="countdown-amount hover-up">%H</span><span class="countdown-period"> hours </span></span>'
                    + '<span class="countdown-section"><span class="countdown-amount hover-up">%M</span><span class="countdown-period"> mins </span></span>'
                    + '<span class="countdown-section"><span class="countdown-amount hover-up">%S</span><span class="countdown-period"> sec </span></span>'
                )
            );
        });
    });

    /*------ Product slider active 1 ----*/
    $('.product-slider-active-1').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        fade: false,
        loop: true,
        dots: false,
        arrows: true,
        prevArrow: '<span class="pro-icon-1-prev"><i class="fi-rs-angle-small-left"></i></span>',
        nextArrow: '<span class="pro-icon-1-next"><i class="fi-rs-angle-small-right"></i></span>',
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    /*------ Testimonial active 1 ----*/
    $('.testimonial-active-1').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        fade: false,
        loop: true,
        dots: false,
        arrows: true,
        prevArrow: '<span class="pro-icon-1-prev"><i class="fi-rs-angle-small-left"></i></span>',
        nextArrow: '<span class="pro-icon-1-next"><i class="fi-rs-angle-small-right"></i></span>',
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    /*------ Testimonial active 3 ----*/
    $('.testimonial-active-3').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        fade: false,
        loop: true,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    /*------ Categories slider 1 ----*/
    $('.categories-slider-1').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        fade: false,
        loop: true,
        dots: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    /*----------------------------
        Category toggle function
    ------------------------------*/
    var searchToggle = $('.categori-button-active');
    searchToggle.on('click', function(e){
        e.preventDefault();
        if($(this).hasClass('open')){
           $(this).removeClass('open');
           $(this).siblings('.categori-dropdown-active-large').removeClass('open');
        }else{
           $(this).addClass('open');
           $(this).siblings('.categori-dropdown-active-large').addClass('open');
        }
    })


    /*---------------------
        Price range
    --------------------- */
    var sliderrange = $('#slider-range');
    var amountprice = $('#amount');
    $(function() {
        sliderrange.slider({
            range: true,
            min: 16,
            max: 400,
            values: [0, 300],
            slide: function(event, ui) {
                amountprice.val("$" + ui.values[0] + " - $" + ui.values[1]);
            }
        });
        amountprice.val("$" + sliderrange.slider("values", 0) +
            " - $" + sliderrange.slider("values", 1));
    });

    /*-------------------------------
        Sort by active
    -----------------------------------*/
    if ($('.sort-by-product-area').length) {
        var $body = $('body'),
            $cartWrap = $('.sort-by-product-area'),
            $cartContent = $cartWrap.find('.sort-by-dropdown');
        $cartWrap.on('click', '.sort-by-product-wrap', function(e) {
            e.preventDefault();
            var $this = $(this);
            if (!$this.parent().hasClass('show')) {
                $this.siblings('.sort-by-dropdown').addClass('show').parent().addClass('show');
            } else {
                $this.siblings('.sort-by-dropdown').removeClass('show').parent().removeClass('show');
            }
        });
        /*Close When Click Outside*/
        $body.on('click', function(e) {
            var $target = e.target;
            if (!$($target).is('.sort-by-product-area') && !$($target).parents().is('.sort-by-product-area') && $cartWrap.hasClass('show')) {
                $cartWrap.removeClass('show');
                $cartContent.removeClass('show');
            }
        });
    }

    /*-----------------------
        Shop filter active
    ------------------------- */
    $('.shop-filter-toogle').on('click', function(e) {
        e.preventDefault();
        $('.shop-product-fillter-header').slideToggle();
    })
    var shopFiltericon = $('.shop-filter-toogle');
    shopFiltericon.on('click', function() {
        $('.shop-filter-toogle').toggleClass('active');
    })

    /*-------------------------------------
        Product details big image slider
    ---------------------------------------*/
    $('.pro-dec-big-img-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        draggable: false,
        fade: false,
        asNavFor: '.product-dec-slider-small , .product-dec-slider-small-2',
    });

    /*---------------------------------------
        Product details small image slider
    -----------------------------------------*/
    $('.product-dec-slider-small').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.pro-dec-big-img-slider',
        dots: false,
        focusOnSelect: true,
        fade: false,
        arrows: false,
        responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });

    /*-----------------------
        Magnific Popup
    ------------------------*/
    $('.img-popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $('.btn-close').on('click', function(e) {
        $('.zoomContainer').remove();
    });
    $('#quickViewModal').on('show.bs.modal', function (e) {
        $(document).click(function (e) {
            var modalDialog = $('.modal-dialog');
            if (!modalDialog.is(e.target) && modalDialog.has(e.target).length === 0) {
                $('.zoomContainer').remove();
            }
        });
    });

    /*---------------------
        Select active
    --------------------- */
    $('.select-active').select2();

    /*--- Checkout toggle function ----*/
    $('.checkout-click1').on('click', function(e) {
        e.preventDefault();
        $('.checkout-login-info').slideToggle(900);
    });

    /*--- Checkout toggle function ----*/
    $('.checkout-click3').on('click', function(e) {
        e.preventDefault();
        $('.checkout-login-info3').slideToggle(1000);
    });

    /*-------------------------
        Create an account toggle
    --------------------------*/
    $('.checkout-toggle2').on('click', function() {
        $('.open-toggle2').slideToggle(1000);
    });

    $('.checkout-toggle').on('click', function() {
        $('.open-toggle').slideToggle(1000);
    });


    /*-------------------------------------
        Checkout paymentMethod function
    ---------------------------------------*/
    paymentMethodChanged();
	function paymentMethodChanged() {
		var $order_review = $( '.payment-method' );

		$order_review.on( 'click', 'input[name="payment_method"]', function() {
			var selectedClass = 'payment-selected';
			var parent = $( this ).parents( '.sin-payment' ).first();
			parent.addClass( selectedClass ).siblings().removeClass( selectedClass );
		} );
	}

    /*---- CounterUp ----*/
    $('.count').counterUp({
        delay: 10,
        time: 2000
    });

    // Isotope active
    $('.grid').imagesLoaded(function() {
        // init Isotope
        var $grid = $('.grid').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            layoutMode: 'masonry',
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.grid-item',
            }
        });
    });

    /*====== SidebarSearch ======*/
    function sidebarSearch() {
        var searchTrigger = $('.search-active'),
            endTriggersearch = $('.search-close'),
            container = $('.main-search-active');

        searchTrigger.on('click', function(e) {
            e.preventDefault();
            container.addClass('search-visible');
        });

        endTriggersearch.on('click', function() {
            container.removeClass('search-visible');
        });

    };
    sidebarSearch();

     /*====== Sidebar menu Active ======*/
    function mobileHeaderActive() {
        var navbarTrigger = $('.burger-icon'),
            endTrigger = $('.mobile-menu-close'),
            container = $('.mobile-header-active'),
            wrapper4 = $('body');

        wrapper4.prepend('<div class="body-overlay-1"></div>');

        navbarTrigger.on('click', function(e) {
            e.preventDefault();
            container.addClass('sidebar-visible');
            wrapper4.addClass('mobile-menu-active');
        });

        endTrigger.on('click', function() {
            container.removeClass('sidebar-visible');
            wrapper4.removeClass('mobile-menu-active');
        });

        $('.body-overlay-1').on('click', function() {
            container.removeClass('sidebar-visible');
            wrapper4.removeClass('mobile-menu-active');
        });
    };
    mobileHeaderActive();


   /*---------------------
        Mobile menu active
    ------------------------ */
    var $offCanvasNav = $('.mobile-menu'),
        $offCanvasNavSubMenu = $offCanvasNav.find('.dropdown');

    /*Add Toggle Button With Off Canvas Sub Menu*/
    $offCanvasNavSubMenu.parent().prepend('<span class="menu-expand"><i class="fi-rs-angle-small-down"></i></span>');

    /*Close Off Canvas Sub Menu*/
    $offCanvasNavSubMenu.slideUp();

    /*Category Sub Menu Toggle*/
    $offCanvasNav.on('click', 'li a, li .menu-expand', function(e) {
        var $this = $(this);
        if ( ($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('menu-expand')) ) {
            e.preventDefault();
            if ($this.siblings('ul:visible').length){
                $this.parent('li').removeClass('active');
                $this.siblings('ul').slideUp();
            } else {
                $this.parent('li').addClass('active');
                $this.closest('li').siblings('li').removeClass('active').find('li').removeClass('active');
                $this.closest('li').siblings('li').find('ul:visible').slideUp();
                $this.siblings('ul').slideDown();
            }
        }
    });

    /*--- language currency active ----*/
    $('.mobile-language-active').on('click', function(e) {
        e.preventDefault();
        $('.lang-dropdown-active').slideToggle(900);
    });

    /*--- Categori-button-active-2 ----*/
    $('.categori-button-active-2').on('click', function(e) {
        e.preventDefault();
        $('.categori-dropdown-active-small').slideToggle(900);
    });

    /*--- Mobile demo active ----*/
    var demo = $('.tm-demo-options-wrapper');
    $('.view-demo-btn-active').on('click', function (e) {
        e.preventDefault();
        demo.toggleClass('demo-open');
    });

    /*-----More Menu Open----*/
    $('.more_slide_open').slideUp();
    $('.more_categories').on('click', function (){
        $(this).toggleClass('show');
        $('.more_slide_open').slideToggle();
    });

    $('.modal').on('shown.bs.modal', function (e) {
        $('.product-image-slider').slick('setPosition');
        $('.slider-nav-thumbnails').slick('setPosition');
        $('.product-image-slider .slick-active img').elevateZoom({
            zoomType: "inner",
            cursor: "crosshair",
            zoomWindowFadeIn: 500,
            zoomWindowFadeOut: 750
        });
    })

    /*--- VSticker ----*/
    $('#news-flash').vTicker({
        speed: 500,
        pause: 3000,
        animation: 'fade',
        mousePause: false,
        showItems: 1
    });

})(jQuery);

function getDataTxt () {
    var promise = axios({
        // URL tới server
    URL: ""
    })
}

function getAllSanPham() {
    var promise = axios({
      url: "https://shop.cyberlearn.vn/api/Product",
      mothod: "get",
    });
    promise.then(function (res) {
      console.log(res);
      renderSanPham(res.data.content);
    });
    promise.catch(function (err) {
      console.log(err);
    });
  }
  getAllSanPham();
  
  // Render chi tiết sản phẩm dựa trên id
  
  function getChiTietSanPham() {
    let search = window.location.search;
    let urlParams = new URLSearchParams(search);
    console.log(urlParams);
    let id = urlParams.get("id");
    var promiseChiTiet = axios({
      url: "https://shop.cyberlearn.vn/api/Product/getbyid?id=" + id,
      mothod: "get",
    });
    promiseChiTiet.then(function (res) {
      console.log(res);
      renderChiTietSanPham(res.data.content);
    });
    promiseChiTiet.catch(function (err) {
      console.log(err);
    });
  }
  getChiTietSanPham();
  
  // Render sản phẩm ra ngoài index
  function renderSanPham(arr) {
    let content = "";
    let newArrivals = "";
    for (var i = 0; i < arr.length; i++) {
      let sanPham = arr[i];
      (content += `
            <div class="col-lg-3 col-md-4 col-12 col-sm-6">
                      <div class="product-cart-wrap mb-30">
                        <div class="product-img-action-wrap">
                          <div class="product-img product-img-zoom">
                            <a href="shop-product-full.html?id=${sanPham.id}">
                              <img
                                class="default-img"
                                src="${sanPham.image}"
                                alt=""
                              />
                              <img
                                class="hover-img"
                                src="${sanPham.image}"
                                alt=""
                              />
                            </a>
                          </div>
                          <div class="product-action-1">
                            <a
                              aria-label="Quick view"
                              class="action-btn hover-up"
                              data-bs-toggle="modal"
                              data-bs-target="#quickViewModal"
                              ><i class="fi-rs-eye"></i
                            ></a>
                            <a
                              aria-label="Add To Wishlist"
                              class="action-btn hover-up"
                              href="#"
                              ><i class="fi-rs-heart"></i
                            ></a>
                            <a
                              aria-label="Compare"
                              class="action-btn hover-up"
                              href="#"
                              ><i class="fi-rs-shuffle"></i
                            ></a>
                          </div>
                          <div
                            class="product-badges product-badges-position product-badges-mrg"
                          >
                            <span class="hot">Hot</span>
                          </div>
                        </div>
                        <div class="product-content-wrap">
                          <div class="product-category">
                            <a href="shop-grid-right.html">Clothing</a>
                          </div>
                          <h2>
                            <a href="shop-product-right.html"
                              >${sanPham.name}</a
                            >
                          </h2>
                          <div class="rating-result" title="90%">
                            <span>
                              <span>90%</span>
                            </span>
                          </div>
                          <div class="product-price">
                            <span>${sanPham.price}</span>
                            <span class="old-price">$245.8</span>
                          </div>
                          <div class="product-action-1 show">
                            <a
                              aria-label="Add To Cart"
                              class="action-btn hover-up"
                              href="shop-cart.html"
                              ><i class="fi-rs-shopping-bag-add"></i
                            ></a>
                          </div>
                        </div>
                      </div>
                    </div>
            `),
        (newArrivals += `
          <div class="product-cart-wrap small hover-up">
          <div class="product-img-action-wrap">
            <div class="product-img product-img-zoom">
              <a href="shop-product-right.html">
                <img
                  class="default-img"
                  src="assets/imgs/shop/product-4-1.jpg"
                  alt=""
                />
                <img
                  class="hover-img"
                  src="assets/imgs/shop/product-4-2.jpg"
                  alt=""
                />
              </a>
            </div>
            <div class="product-action-1">
              <a
                aria-label="Quick view"
                class="action-btn small hover-up"
                data-bs-toggle="modal"
                data-bs-target="#quickViewModal"
              >
                <i class="fi-rs-eye"></i
              ></a>
              <a
                aria-label="Add To Wishlist"
                class="action-btn small hover-up"
                href="#"
                tabindex="0"
                ><i class="fi-rs-heart"></i
              ></a>
              <a
                aria-label="Compare"
                class="action-btn small hover-up"
                href="#"
                tabindex="0"
                ><i class="fi-rs-shuffle"></i
              ></a>
            </div>
            <div
              class="product-badges product-badges-position product-badges-mrg"
            >
              <span class="new">New</span>
            </div>
          </div>
          <div class="product-content-wrap">
            <h2><a href="shop-product-right.html">Aliquam posuere</a></h2>
            <div class="rating-result" title="90%">
              <span> </span>
            </div>
            <div class="product-price">
              <span>$173.85 </span>
              <span class="old-price">$185.8</span>
            </div>
          </div>
      </div>
          `);
    }
    // document.getElementById("carausel-6-columns-2").innerHTML = newArrivals;
    document.getElementById("tbodySanPham").innerHTML = content;
  }
  
  // Render chi tiết sản phẩm dựa trên id
  function renderChiTietSanPham(sanPham) {
    var content = "";
    content += `
      <h2 class="title-detail">${sanPham.name}</h2>
      <div class="product-detail-rating">
          <div class="pro-details-brand">
              <span> Brands: <a href="shop-grid-right.html">Bootstrap</a></span>
          </div>
          <div class="product-rate-cover text-end">
              <div class="product-rate d-inline-block">
                  <div class="product-rating" style="width:90%">
                  </div>
              </div>
              <span class="font-small ml-5 text-muted"> (25 reviews)</span>
          </div>
      </div>
      <div class="clearfix product-price-cover">
          <div class="product-price primary-color float-left">
              <ins><span class="text-brand">$${sanPham.price}</span></ins>
              <ins><span class="old-price font-md ml-15">$200.00</span></ins>
              <span class="save-price  font-md color3 ml-15">25% Off</span>
          </div>
      </div>
      <div class="bt-1 border-color-1 mt-15 mb-15"></div>
      <div class="short-desc mb-30">
      <p>${sanPham.shortDescription}</p></div>
      <div class="product_sort_info font-xs mb-30">
          <ul>
              <li class="mb-10"><i class="fi-rs-crown mr-5"></i> 1 Year AL Jazeera Brand Warranty</li>
              <li class="mb-10"><i class="fi-rs-refresh mr-5"></i> 30 Day Return Policy</li>
              <li><i class="fi-rs-credit-card mr-5"></i> Cash on Delivery available</li>
          </ul>
      </div>
      <div class="attr-detail attr-color mb-15">
          <strong class="mr-10">Color</strong>
          <ul class="list-filter color-filter">
              <li><a href="#" data-color="Red"><span class="product-color-red"></span></a></li>
              <li><a href="#" data-color="Yellow"><span class="product-color-yellow"></span></a></li>
              <li class="active"><a href="#" data-color="White"><span class="product-color-white"></span></a></li>
              <li><a href="#" data-color="Orange"><span class="product-color-orange"></span></a></li>
              <li><a href="#" data-color="Cyan"><span class="product-color-cyan"></span></a></li>
              <li><a href="#" data-color="Green"><span class="product-color-green"></span></a></li>
              <li><a href="#" data-color="Purple"><span class="product-color-purple"></span></a></li>
          </ul>
      </div>
      <div class="attr-detail attr-size" >
          <strong class="mr-10">Size</strong>
          <ul class="list-filter size-filter font-small" id="sizeSanPham">
          </ul>
      </div>
      <div class="bt-1 border-color-1 mt-30 mb-30"></div>
      <div class="detail-extralink">
          <div class="detail-qty border radius">
              <a href="#" class="qty-down"><i class="fi-rs-angle-small-down"></i></a>
              <span class="qty-val">1</span>
              <a href="#" class="qty-up"><i class="fi-rs-angle-small-up"></i></a>
          </div>
          <div class="product-extra-link2">
              <button type="submit" class="button button-add-to-cart">Add to cart</button>
              <a aria-label="Add To Wishlist" class="action-btn hover-up" href="#"><i class="fi-rs-heart"></i></a>
              <a aria-label="Compare" class="action-btn hover-up" href="#"><i class="fi-rs-shuffle"></i></a>
          </div>
      </div>
      <ul class="product-meta font-xs color-grey mt-50">
          <li class="mb-5">SKU: <a href="#">FWM15VKT</a></li>
          <li class="mb-5">Tags: <a href="#" rel="tag">Cloth</a>, <a href="#" rel="tag">Women</a>, <a href="#" rel="tag">Dress</a> </li>
          <li>Availability:<span class="in-stock text-success ml-5">${sanPham.quantity} items in stock</span></li>
      </ul>
            `;
    var hinhAnh = "";
    hinhAnh += `
                <img
                  src="${sanPham.image}"
                  alt="product image"
                />
                    `;
    var moTa = "";
    moTa += `
                             <p>${sanPham.description}</p>
               `;
  
    var tenSanPham = "";
    tenSanPham += `          
    <a href="index.html" rel="nofollow">Home</a>
      <span></span> Fashion <span></span> ${sanPham.name}
               `;
  
    document.getElementById("productNameTitel").innerHTML = tenSanPham;
    document.getElementById("chiTietSanPham").innerHTML = content;
    document.getElementById("tbodyHinhAnh").innerHTML = hinhAnh;
    document.getElementById("Description").innerHTML = moTa;
  
    renderRelatedProducts(sanPham.relatedProducts);
    sizeSanPham(sanPham.size);
  }
  
  function renderRelatedProducts(arrRelatedProtc) {
    var related = "";
    for (i = 0; i < arrRelatedProtc.length; i++) {
      var relatedSanPham = arrRelatedProtc[i];
      related += `
        <div class="col-lg-3 col-md-4 col-12 col-sm-6">
        <div class="product-cart-wrap small hover-up">
            <div class="product-img-action-wrap">
                <div class="product-img product-img-zoom">
                    <a href="shop-product-full.html?id=${relatedSanPham.id}" tabindex="0">
                        <img class="default-img" src="${relatedSanPham.image}" alt="">
                        <img class="hover-img" src="${relatedSanPham.image}" alt="">
                    </a>
                </div>
                <div class="product-action-1">
                    <a aria-label="Quick view" class="action-btn small hover-up" data-bs-toggle="modal" data-bs-target="#quickViewModal
    "><i class="fi-rs-search"></i></a>
                    <a aria-label="Add To Wishlist" class="action-btn small hover-up" href="#" tabindex="0"><i class="fi-rs-heart"></i></a>
                    <a aria-label="Compare" class="action-btn small hover-up" href="#" tabindex="0"><i class="fi-rs-shuffle"></i></a>
                </div>
                <div class="product-badges product-badges-position product-badges-mrg">
                    <span class="hot">Hot</span>
                </div>
            </div>
            <div class="product-content-wrap">
                <h2><a href="shop-product-right.html" tabindex="0">${relatedSanPham.name}</a></h2>
                <div class="rating-result" title="90%">
                    <span>
                    </span>
                </div>
                <div class="product-price">
                    <span>${relatedSanPham.price}</span>
                    <span class="old-price">${relatedSanPham.price}</span>
                </div>
            </div>
        </div>
    </div>
        `;
    }
    document.getElementById("relatedProducts").innerHTML = related;
  }
  
  // QuickView sản phẩm đang fix
  // function renderQuickeView(arrQuickView) {
  //   var quickViewProduct = "";
  //   for (i = 0; i < arrQuickView.length; i++) {
  //     var relatedSanPham = arrQuickView[i];
  //     quickViewProduct += `
  //   <div class="col-md-6 col-sm-12 col-xs-12">
  //   <div class="detail-gallery">
  //     <span class="zoom-icon"><i class="fi-rs-search"></i></span>
  //     <!-- MAIN SLIDES -->
  //     <div class="product-image-slider">
  //       <figure class="border-radius-10">
  //         <img
  //           src="assets/imgs/shop/product-16-2.jpg"
  //           alt="product image"
  //         />
  //       </figure>
  //       <figure class="border-radius-10">
  //         <img
  //           src="assets/imgs/shop/product-16-1.jpg"
  //           alt="product image"
  //         />
  //       </figure>
  //       <figure class="border-radius-10">
  //         <img
  //           src="assets/imgs/shop/product-16-3.jpg"
  //           alt="product image"
  //         />
  //       </figure>
  //       <figure class="border-radius-10">
  //         <img
  //           src="assets/imgs/shop/product-16-4.jpg"
  //           alt="product image"
  //         />
  //       </figure>
  //       <figure class="border-radius-10">
  //         <img
  //           src="assets/imgs/shop/product-16-5.jpg"
  //           alt="product image"
  //         />
  //       </figure>
  //       <figure class="border-radius-10">
  //         <img
  //           src="assets/imgs/shop/product-16-6.jpg"
  //           alt="product image"
  //         />
  //       </figure>
  //       <figure class="border-radius-10">
  //         <img
  //           src="assets/imgs/shop/product-16-7.jpg"
  //           alt="product image"
  //         />
  //       </figure>
  //     </div>
  //     <!-- THUMBNAILS -->
  //     <div class="slider-nav-thumbnails pl-15 pr-15">
  //       <div>
  //         <img
  //           src="assets/imgs/shop/thumbnail-3.jpg"
  //           alt="product image"
  //         />
  //       </div>
  //       <div>
  //         <img
  //           src="assets/imgs/shop/thumbnail-4.jpg"
  //           alt="product image"
  //         />
  //       </div>
  //       <div>
  //         <img
  //           src="assets/imgs/shop/thumbnail-5.jpg"
  //           alt="product image"
  //         />
  //       </div>
  //       <div>
  //         <img
  //           src="assets/imgs/shop/thumbnail-6.jpg"
  //           alt="product image"
  //         />
  //       </div>
  //       <div>
  //         <img
  //           src="assets/imgs/shop/thumbnail-7.jpg"
  //           alt="product image"
  //         />
  //       </div>
  //       <div>
  //         <img
  //           src="assets/imgs/shop/thumbnail-8.jpg"
  //           alt="product image"
  //         />
  //       </div>
  //       <div>
  //         <img
  //           src="assets/imgs/shop/thumbnail-9.jpg"
  //           alt="product image"
  //         />
  //       </div>
  //     </div>
  //   </div>
  //   <!-- End Gallery -->
  //   <div class="social-icons single-share">
  //     <ul class="text-grey-5 d-inline-block">
  //       <li><strong class="mr-10">Share this:</strong></li>
  //       <li class="social-facebook">
  //         <a href="#"
  //           ><img
  //             src="assets/imgs/theme/icons/icon-facebook.svg"
  //             alt=""
  //         /></a>
  //       </li>
  //       <li class="social-twitter">
  //         <a href="#"
  //           ><img
  //             src="assets/imgs/theme/icons/icon-twitter.svg"
  //             alt=""
  //         /></a>
  //       </li>
  //       <li class="social-instagram">
  //         <a href="#"
  //           ><img
  //             src="assets/imgs/theme/icons/icon-instagram.svg"
  //             alt=""
  //         /></a>
  //       </li>
  //       <li class="social-linkedin">
  //         <a href="#"
  //           ><img
  //             src="assets/imgs/theme/icons/icon-pinterest.svg"
  //             alt=""
  //         /></a>
  //       </li>
  //     </ul>
  //   </div>
  // </div>
  // <div class="col-md-6 col-sm-12 col-xs-12">
  //   <div class="detail-info">
  //   </div>
  //   <!-- Detail Info -->
  // </div>`;
  //   }
  //   document.getElementById("quickView").innerHTML = quickViewProduct;
  // }
  
  function sizeSanPham(arrSize) {
    var sizeList = "";
    for (i = 0; i < arrSize.length; i++) {
      var sizeListSanPham = arrSize[i];
      sizeList += `
                  <li><a href="#">${sizeListSanPham}</a></li>
                  `;
    }
    document.getElementById("sizeSanPham").innerHTML = sizeList;
  
    console.log(sizeList);
  }
  
  function addTaiKhoan() {
    event.preventDefault();
  
    var taiKhoan = new TaiKhoan();
    taiKhoan.email = document.getElementById("emailInput").value;
    taiKhoan.password = document.getElementById("passwordInput").value;
    taiKhoan.name = document.getElementById("nameInput").value;
    taiKhoan.gender = document.getElementById("genderInput").value;
    taiKhoan.phone = document.getElementById("phoneInput").value;
  
    console.log(taiKhoan);
  
    let promise = axios({
      url: "https://shop.cyberlearn.vn/api/Users/signup",
      method: "POST",
      data: taiKhoan,
    });
    promise.then(function (res) {
      console.log(res);
      alert("Bạn đã đăng ký thành công");
    });
    promise.catch(function (err) {
      console.log(err);
      
    });
  }
  
  function dangNhap() {
    event.preventDefault();
  
    var taiKhoan = new TaiKhoan();
  
    taiKhoan.email = document.getElementById("emailLoginInput").value;
    taiKhoan.password = document.getElementById("passwordLoginInput").value;
  
    console.log(taiKhoan);
  
    let promise = axios({
      url: "https://shop.cyberlearn.vn/api/Users/signin",
      method: "POST",
      data: taiKhoan,
    });
    promise.then(function (res) {
      console.log(res);
      alert("Đăng nhập thành công");
    });
    promise.catch(function (err) {
      console.log(err);
      alert("Sai tài khoản hoặc mật khẩu, vui lòng kiểm tra lại");
    });
  }
  