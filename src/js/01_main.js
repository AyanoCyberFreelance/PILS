function delNode(adress){adress.parentNode.parentNode.remove()}

function delNode(prod){prod.parentNode.parentNode.remove()}

document.getElementById("btn").addEventListener("click", () => {
    document.getElementById("rmv").remove();
})

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
    