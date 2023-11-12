$(document).ready(function(){
    //Скрыть PopUp при загрузке страницы    
    PopUpHide();
});
//Функция отображения PopUp
function PopUpShow(){
    $("#popup1").show();
}
//Функция скрытия PopUp
function PopUpHide(){
    $("#popup1").hide();
}
history.pushState({
    id : "home",
    source: "web"
    }, "Задание 8", "https://emptyne.github.io/"
);