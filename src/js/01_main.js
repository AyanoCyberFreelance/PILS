// Удаление некоторых пунктов корзины товаров или другой страницы
function delNode(adress){adress.parentNode.parentNode.remove()}

function delNode(prod){prod.parentNode.parentNode.remove()}

// Замена некоторых пунктов корзины товаров или другой страницы
function switchVisible() {
            if (document.getElementById('rmv')) {

                if (document.getElementById('rmv').style.display == 'block') {
                    document.getElementById('act').style.display = 'none';
                    document.getElementById('btnS').style.display = 'block';
                }
                else {
                    document.getElementById('act').style.display = 'block';
                    document.getElementById('rmv').style.display = 'none';
                    document.getElementById('btnS').style.display = 'none';
                }
            }

            if (document.getElementById('adress5')) {

                if (document.getElementById('adress5').style.display == 'block') {
                    document.getElementById('closed_page').style.display = 'none';
                }
                else {
                    document.getElementById('closed_page').style.display = 'block';
                    document.getElementById('adress5').style.display = 'none';
                }
            }
}


// Отображение и исчезновение пунктов описание\отзыв на странице товара
 function viewdiv(id) {
        var el = document.getElementById(id);
        var link = document.getElementById('btn1');
        if (el.style.display == "block") {
            el.style.display = "none";
        } else {
            el.style.display = "block";
        }
    }

     function viewdiv(id) {
        var el = document.getElementById(id);
        var link = document.getElementById('btn2');
        if (el.style.display == "block") {
            el.style.display = "none";
        } else {
            el.style.display = "block";
        }
    }


// Избавление ссылок от функции перехода по ним
document.querySelectorAll("a[href='#']").forEach(el => { el.addEventListener("click", () => 0); })


// Счётчик числа добавленных товаров
$('.cart_left_count').click(function(e) {
  const change = +e.target.dataset.change;
  if (change) {
    $('.cart_left_number', this).text((i, text) => `${parseInt(text, 10) + change} шт`);
  } else {
    $('.cart_left_money', this).text((i, text) => `${parseInt(text, 10) + change} сум`);
  }
});

// Аккорден для страницы с товаром чтобы описание\отзыв выпадали при нажатии на кнопку
function findElements(object, element) {
	const instance = object;
	instance.element = element;
	instance.target = element.nextElementSibling;
}

function hideElement(object) {
	const instance = object;
	const { target } = instance;
	target.style.height = null;
	instance.isActive = false;
}

function showElement(object) {
	const instance = object;
	const { target, height } = instance;
	target.style.height = `${height}px`;
	instance.isActive = true;
}

function changeElementStatus(instance) {
	if (instance.isActive) {
		hideElement(instance);
	} else {
		showElement(instance);
	}
}

function measureHeight(object) {
	const instance = object;
	instance.height = object.target.firstElementChild.clientHeight;
}

function subscribe(instance) {
	instance.element.addEventListener('click', (event) => {
		event.preventDefault();
		changeElementStatus(instance);
	});
	window.addEventListener('resize', () => measureHeight(instance));
}

function accordion(element) {
	const instance = {};
		
	function init() {
		findElements(instance, element);
		measureHeight(instance);
		subscribe(instance);
	}
	
	init();
}

const elements = [...document.querySelectorAll('.js-accordion')];
elements.forEach(accordion);


// Счётчик увеличения итоговой суммы добавленных товаров
$(document).ready(function() {
  var current = 170000;
  $('.cart_left_plus--1').click(function() {
    current += 170000;
    $('.cart_left_money--1').html(current + 'сум');
  });
  $('.cart_left_minus--1').click(function() {
    current -= 170000;
    $('.cart_left_money--1').html(current + 'сум');
  });
});

$(document).ready(function() {
  var current = 170000;
  $('.cart_left_plus--2').click(function() {
    current += 170000;
    $('.cart_left_money--2').html(current + 'сум');
  });
  $('.cart_left_minus--2').click(function() {
    current -= 170000;
    $('.cart_left_money--2').html(current + 'сум');
  });
});

$(document).ready(function() {
  var current = 170000;
  $('.cart_left_plus--3').click(function() {
    current += 170000;
    $('.cart_left_money--3').html(current + 'сум');
  });
  $('.cart_left_minus--3').click(function() {
    current -= 170000;
    $('.cart_left_money--3').html(current + 'сум');
  });
});

$(document).ready(function() {
  var current = 510000;
  $('.cart_left_plus').click(function() {
    current += 170000;
    $('.item__cor__final').html(current + 'сум');
  });
  $('.cart_left_minus').click(function() {
    current -= 170000;
    $('.item__cor__final').html(current + 'сум');
  });
});

$(document).ready(function() {
  var current = 510000;
  $('.cart_left_plus').click(function() {
    current += 170000;
    $('.item__cor__som').html(current + 'сум');
  });
  $('.cart_left_minus').click(function() {
    current -= 170000;
    $('.item__cor__som').html(current + 'сум');
  });
});

// Функции увеличения фото на странице товара при наведении или нажатии
$('#zoom_04').ezPlus({
    zoomType: 'lens',
    lensShape: 'round',
    lensSize: 150
});

// Кнопка для скролла на начало страницы при нажатии
const btnUp = {
  el: document.querySelector('.btn-up'),
  scrolling: false,
  show() {
    if (this.el.classList.contains('btn-up_hide') && !this.el.classList.contains('btn-up_hiding')) {
      this.el.classList.remove('btn-up_hide');
      this.el.classList.add('btn-up_hiding');
      window.setTimeout(() => {
        this.el.classList.remove('btn-up_hiding');
      }, 300);
    }
  },
  hide() {
    if (!this.el.classList.contains('btn-up_hide') && !this.el.classList.contains('btn-up_hiding')) {
      this.el.classList.add('btn-up_hiding');
      window.setTimeout(() => {
        this.el.classList.add('btn-up_hide');
        this.el.classList.remove('btn-up_hiding');
      }, 300);
    }
  },
  addEventListener() {
    // при прокрутке окна (window)
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      if (this.scrolling && scrollY > 0) {
        return;
      }
      this.scrolling = false;
      // если пользователь прокрутил страницу более чем на 200px
      if (scrollY > 400) {
        // сделаем кнопку .btn-up видимой
        this.show();
      } else {
        // иначе скроем кнопку .btn-up
        this.hide();
      }
    });
    // при нажатии на кнопку .btn-up
    document.querySelector('.btn-up').onclick = () => {
      this.scrolling = true;
      this.hide();
      // переместиться в верхнюю часть страницы
      window.scrollTo({
        top: 0, behavior: 'smooth'
      });
    }
  }
}

btnUp.addEventListener();

// Затемнение общего фона при нажатии на input
$('#form_bg').on('click', function() {
  $(".d2").toggleClass("shadow");
});
$('#main_bg').on('click', function() {
  $(this).removeClass("shadow");
});

$('#main_bg').on('click', function() {
  $(".d2").removeClass("shadow");
});

// Функция всплывающего предупреждения
$(document).on('click', '.add-to-cart', function (e) {
  var tekst = $('<div style="display:flex; margin-top: 10px;" id="message-success1"><i class="fa fa-exclamation-circle" aria-hidden="true"></i><p style="padding-left:5px;">Пожалуйста, заполните все формы для оформления заказа!</p></div>'),
      linc = $('#jGrowl');
  linc.html(tekst).fadeIn(); 
  setTimeout(function() {linc.fadeOut();}, 6000);
});

$(document).on('click', '.add-to-cart', function (e) {
  var tekst = $('<div style="display:flex; justify-content:center; margin-top: -20px;margin-bottom: 20px; padding-right: 70px;" id="message-success2"><i class="fa fa-exclamation-circle" aria-hidden="true"></i><p style="padding-left:5px; font-size: 13.5px;color: #ff0000;">Пожалуйста, заполните все формы для оформления заказа!</p></div>'),
      linc = $('#jGrowl1');
  linc.html(tekst).fadeIn(); 
  setTimeout(function() {linc.fadeOut();}, 6000);
});