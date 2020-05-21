let navOpen = false;

$('.navBtn').on('click', function () {
  $('.pagePoints').css('transition', 'transform 0.5s');
  $('.media').css('transition', 'transform 0.5s');

  if (!navOpen) {
    $('.pagePoints').css('transform', 'translateX(0)');
    $('.media').css('transform', 'translateX(0)');
  } else {
    $('.pagePoints').css('transform', 'translateX(-100%)');
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

// Работа с текстом на странице-1

let page2_points = $('.page2_points')
let point1 = $('#point1');
let point2 = $('#point2');
let point3 = $('#point3');
let page2_text = $('.page2_text');
let t1 = $('#t1');
let t2 = $('#t2');
let t3 = $('#t3');

page2_text.append(t1);
page2_text.append(t2);
page2_text.append(t3);

// Default page

point1.css({
  backgroundColor: '#ba46f0',
  boxShadow: 'none'
})
t2.css('display', 'none');
t3.css('display', 'none');

// Процесс при нажатии

// Нажали пункт "Цели"
point1.on('click', function () {
  $(this).css({
    boxShadow: 'none',
    backgroundColor: '#ba46f0'
  })
  point2.css({
    backgroundColor: 'white',
    boxShadow: '5px 5px 5px #858282'
  })
  point3.css({
    backgroundColor: 'white',
    boxShadow: '5px 5px 5px #858282'
  })
  t1.css('display', 'flex')
  t2.css('display', 'none');
  t3.css('display', 'none');
})

// Нажали пункт "Задачи"

point2.on('click', function () {
  $(this).css({
    boxShadow: 'none',
    backgroundColor: '#ba46f0'
  })
  point1.css({
    backgroundColor: 'white',
    boxShadow: '5px 5px 5px #858282'
  })
  point3.css({
    backgroundColor: 'white',
    boxShadow: '5px 5px 5px #858282'
  })
  t1.css('display', 'none');
  t2.css('display', 'flex');
  t3.css('display', 'none');
})

// Нажали пункт "Методы"

point3.on('click', function () {
  $(this).css({
    boxShadow: 'none',
    backgroundColor: '#ba46f0'
  })
  point1.css({
    backgroundColor: 'white',
    boxShadow: '5px 5px 5px #858282'
  })
  point2.css({
    backgroundColor: 'white',
    boxShadow: '5px 5px 5px #858282'
  })
  t1.css('display', 'none');
  t2.css('display', 'none');
  t3.css('display', 'flex')
})



// Test через массив - Не удался :-(

// let data = [
//   {
//     "title": "Цели",
//     "body": "Здоровый праздничный ужин вовсе не обязательно должен состоять из шпината, гречки и вареной куриной грудки. Самыми лучшими способами приготовления еды являются следующие: варка на пару, запекание или варка в воде. Помимо стандартных мандаринов и ананасов, отличным украшением любого стола станут необычные, экзотические фрукты. Здоровой может быть даже выпечка, если она приготовлена на пару. Практически все из нас знают, что есть полезная и вредная еда, мы делим все продукты на плохие и хорошие, и это действительно так, потому что не все они полезны для человеческого организма, и есть много таких, которые вредны, а иногда и опасны. Ни для кого не будет открытием, что овощи и фрукты принесут организму колоссальную пользу, так как являются вкусной и полезной едой, насыщенной витаминами и массой других полезных веществ. Покушать утром особо полезно тем, что этот прием пищи заряжает энергией на целый день, и запускает процесс метаболизма в организме. Голодный человек думает не о работе, а о том, что хочет покушать. Ценность яблок кроется в их составе. Почти 80% яблок составляет вода. Остальная часть приходится на клетчатку, органические кислоты, углеводы. Именно зеленое яблоко рекомендуют употреблять во время диет. Среди фруктов яблоко является очень распространенным продуктом и практически целый год присутствует в нашем рационе питания. Употребление этих плодов натощак недопустимо при гастритах с повышенной кислотностью, язвенных болезнях, желчекаменной болезни."
//   },
//   {
//     "title": "Задачи",
//     "body": "Товарищи! укрепление и развитие структуры играет важную роль в формировании систем массового участия. Идейные соображения высшего порядка, а также сложившаяся структура организации позволяет оценить значение форм развития. Задача организации, в особенности же укрепление и развитие структуры влечет за собой процесс внедрения и модернизации модели развития. Повседневная практика показывает, что новая модель организационной деятельности в значительной степени обуславливает создание направлений прогрессивного развития. Идейные соображения высшего порядка, а также реализация намеченных плановых заданий позволяет оценить значение позиций, занимаемых участниками в отношении поставленных задач. Разнообразный и богатый опыт начало повседневной работы по формированию позиции способствует подготовки и реализации систем массового участия.  Равным образом укрепление и развитие структуры представляет собой интересный эксперимент проверки модели развития. Идейные соображения высшего порядка, а также дальнейшее развитие различных форм деятельности позволяет выполнять важные задания по разработке соответствующий условий активизации. Идейные соображения высшего порядка, а также консультация с широким активом требуют от нас анализа дальнейших направлений развития. Задача организации, в особенности же реализация намеченных плановых заданий влечет за собой процесс внедрения и модернизации дальнейших направлений развития."
//   },
//   {
//     "title": "Методы",
//     "body": "Разнообразный и богатый опыт рамки и место обучения кадров требуют от нас анализа направлений прогрессивного развития. С другой стороны дальнейшее развитие различных форм деятельности позволяет выполнять важные задания по разработке дальнейших направлений развития.  Равным образом консультация с широким активом способствует подготовки и реализации системы обучения кадров, соответствует насущным потребностям. Товарищи! новая модель организационной деятельности позволяет выполнять важные задания по разработке направлений прогрессивного развития.  Разнообразный и богатый опыт консультация с широким активом позволяет выполнять важные задания по разработке новых предложений. Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Равным образом консультация с широким активом требуют определения и уточнения модели развития."
//   }
// ]

// let page2_points = $('.page2_points')
// let page2_text = $('.page2_text');
// let ul1 = $('<ul>');
// ul1.addClass('point');
// let ul2 = $('<ul>');
// ul2.addClass('head');
// page2_points.append(ul1)
// page2_text.append(ul2);


// function addText(title, body) {
//   let li1 = $('<li>');
//   let li2 = $('<li>');
//   let p1 = $('<p>');
//   let p2 = $('<p>');
//   p1.addClass('title');
//   p2.addClass('body');
//   p1.text(title);
//   p2.text(body);

//   li1.append(p1);
//   li2.append(p2);
//   ul2.append(li2);
//   ul1.append(addLi(li1));

// }

// function addLi(li) {
//   li.on('click', function () {
//     $('.point li').removeClass('active')
//                   .css({
//                       backgroundColor: 'aqua',
//                       boxShadow: 'none',
//                   })

//   $(this).addClass('active')
//           .css({
//             color: 'darkred',
//             backgroundColor: 'yellow',
//           })

//     console.log('+++')
//   })
//   return li;
// }

// for (let i = 0; i < data.length; i++) {
//   addText(data[i].title, data[i].body);

//   console.log(data);
// }
