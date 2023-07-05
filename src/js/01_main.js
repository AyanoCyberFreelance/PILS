// Удаление некоторых пунктов корзины товаров или другой страницы

function delNode(adress){adress.parentNode.parentNode.remove()}

function delNode(prod){prod.parentNode.parentNode.remove()}

document.getElementById("btn").addEventListener("click", () => {
    document.getElementById("rmv").remove();
})

// Отображение и исчезновение категорий на странице товара

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
var splashInput = document.querySelector(".cart_left_num");
var splashVal = parseFloat(splashInput.value);
document.querySelector(".cart_left_plus").onclick = function() {
  splashInput.value = ++splashVal;
}
document.querySelector(".cart_left_minus").onclick = function() {
  if (splashVal > 1) {
    splashInput.value = --splashVal;
  } 
} 

var splashInput = document.querySelector(".cart_left_num--3");
var splashVal = parseFloat(splashInput.value);
document.querySelector(".cart_left_plus--3").onclick = function() {
  splashInput.value = ++splashVal;
}
document.querySelector(".cart_left_minus--3").onclick = function() {
  if (splashVal > 1) {
    splashInput.value = --splashVal;
  } 
}

var splashInput = document.querySelector(".cart_left_num--2");
var splashVal = parseFloat(splashInput.value);
document.querySelector(".cart_left_plus--2").onclick = function() {
  splashInput.value = ++splashVal;
}
document.querySelector(".cart_left_minus--2").onclick = function() {
  if (splashVal > 1) {
    splashInput.value = --splashVal;
  } 
}
    