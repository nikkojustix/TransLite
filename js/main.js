$(function () {

  $('.projects__slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/prev-arrow.svg" alt="prev arrow" /></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/next-arrow.svg" alt="next arrow" /></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '10%',
          slidesToShow: 1
        }
      }
    ]
  });

  $('.brands__titles').on('click', 'a:not(.active)', function(){
    $(this).addClass('active').siblings().removeClass('active')
    .closest('.brands').find('.brands__content').find('.brands__items')
    .removeClass('active').eq($(this).index()).addClass("active");
  })

  $('.slider__inner').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-arrow rent-arrow slick-prev"><img src="images/prev-arrow.svg" alt="prev arrow" /></button>',
    nextArrow: '<button type="button" class="slick-arrow rent-arrow slick-next"><img src="images/next-arrow.svg" alt="next arrow" /></button>',
  });

  $('.header__menu-btn').on('click', () => {
    $('.header__menu-btn').addClass('active');
    $('.header__menu-list').slideToggle();
  })
});