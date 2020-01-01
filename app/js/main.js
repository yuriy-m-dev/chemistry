$(function(){
  /* Slider */
    $('.slider__holder').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        appendArrows: $('.slider__inner'),
        prevArrow: '<button type="button" class="slick-prev"><span class="icon-arrow_back_ios"></span></button>',
        nextArrow: '<button type="button" class="slick-next"><span class="icon-arrow_forward_ios"></span></button>'
    });

  /* Accordion */
    ! function(i) {
        var o, n;
        i(".catalog__aside-title").on("click", function() {
          o = i(this).parents(".catalog__aside-item"), n = o.find(".catalog__aside-list"),
            o.hasClass("active-block") ? (o.removeClass("active-block"),
              n.slideUp()) : (o.addClass("active-block"), n.stop(!0, !0).slideDown(),
              o.siblings(".active-block").removeClass("active-block").children(
                ".catalog__aside-list").stop(!0, !0).slideUp())
        })
      }(jQuery);

  /* card-product calc */
    $('.quantity-plus').on('click', function(){
      let value = parseInt($(this).next().val()) + 1;
      $(this).next().val(value);
      return false;
    });
    $('.quantity-minus').on('click', function(){
      let value = parseInt($(this).prev().val()) - 1;
      if (value < 1) {
        value = 1
      }
      $(this).prev().val(value);
      return false;
    });   

  /* card-product tabs */
    $('.wrapper-tabs .tab').on('click', function(event) {
      var id = $(this).attr('data-id');
      $('.wrapper-tabs').find('.tab-item').removeClass('active-tab').hide();
      $('.wrapper-tabs .tabs').find('.tab').removeClass('active');
      $(this).addClass('active');
      $('#'+id).addClass('active-tab').fadeIn();
      return false;
    });  

  /* Mixitup */
      var mixer = mixitup('.catalog__items-products');
});