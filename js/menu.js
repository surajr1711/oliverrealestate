window.onload = function(){
    var menu = document.querySelector("#menu");
    document.querySelector("#burger-nav").addEventListener("click", function(){
        menu.classList.toggle("open");
    });
};