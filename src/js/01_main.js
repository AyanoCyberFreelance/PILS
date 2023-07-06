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


    