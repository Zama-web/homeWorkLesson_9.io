let navOpen = false;

$('.navBtn').on('click', function () {
  $('.pagePoints').css('transition', 'transform 0.5s');
  $('.media').css('transition', 'transform 0.5s');

  if (!navOpen) {
    $('.pagePoints').css('transform', 'translateX(0)');
    $('.media').css('transform', 'translateX(0)');
  } else {
    $('.pagePoints').css('transform', 'translateX(-140%)');
    $('.media').css('transform', 'translateX(-100%)');
  }
  navOpen = !navOpen;

})

$(window).on('resize', function () {
  if ($(window).width() > 650) {
    $('.pagePoints').css('transition', '');
    $('.pagePoints').css('transform', '');
    $('.media').css('transition', '');
    $('.media').css('transform', '');
  }
})



// slides 

let p3_slides = $('#page3_contents');
let width = p3_slides.width();
let height = p3_slides.height();
$('.screen').width(width);
$('.screen').height(height);
$('.screen .slides li').width(width);
$('.screen .slides li').height(height);
let slide = $('.screen ul li').length;
$('.screen .slides').width(width * slide);

let page = 0;
const SPEED = 500;

function right_content() {
  if (page === slide - 1) {
    return
  }
  $('.screen .slides').animate({ 'left': `-${++page * width}px` }, SPEED);
  changeActivePoints()
}

function left_content() {
  if (page === 0) {
    return
  }
  $('.screen .slides').animate({ 'left': `-${--page * width}px` }, SPEED);
  changeActivePoints()
}

function changeActivePoints() {
  $('.points li').removeClass('active');
  $('.points li').eq(page).addClass('active');
}

$('.go-left').on('click', left_content);
$('.go-right').on('click', right_content);

$('.points li').on('click', function () {
  let cur = $(this);

  $('.points li').removeClass('active')
  cur.addClass('active');

  let index = $('.points li').index(cur);
  page = index;
  $('.screen .slides').animate({ 'left': `-${index * width}px` }, SPEED);
});


// $(window).on('resize', function () {
//   if ($(window).width() > 850) {
//     $('.slides').css({
//       width: '500px'
//     });
//   }
// })


