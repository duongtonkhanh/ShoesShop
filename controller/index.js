var btnBuy = document.querySelectorAll(".buy")
btnBuy.forEach(element => {
    element.onclick = function(){      
            window.location.href = "detail.html"
    }
});