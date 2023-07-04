function delNode(adress){adress.parentNode.parentNode.remove()}

function delNode(prod){prod.parentNode.parentNode.remove()}

document.getElementById("btn").addEventListener("click", () => {
    document.getElementById("rmv").remove()
})

$(document).ready(function() {
$("#show_bar").click(function() {
$("#bar_block").slideToggle();
if ($("#show_bar").html() == 'Показать штрихкод') {
$("#show_bar").html('Скрыть штрихкод');
} else {
$("#show_bar").html('Показать штрихкод');
}
});
});
