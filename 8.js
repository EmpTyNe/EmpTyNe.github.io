let popupOpen = false;
$(document).ready(function(){
    //Скрыть PopUp при загрузке страницы    
    PopUpHide();
});
//Функция отображения PopUp
function PopUpShow(){
    if (popupOpen) {
        window.history.back();
    }
    popupOpen = true;
    window.history.pushState("forward", null, "");
    $("#popup1").show();
}
//Функция скрытия PopUp
function PopUpHide(){
    popupOpen = false;
    $("#popup1").hide();
}


// $(".popup-link").click(function() {
//     showPopup();
// });

// $(".popup-close").click(function() {
//     window.history.back();
// });

// function showPopup() {
//     if (popupOpen) {
//         window.history.back();
//     }
//     popupOpen = true;
//     window.history.pushState("forward", null, "");
//     $(".popup").addClass("active");
// }

// function hidePopup() {
//     popupOpen = false;
//     $(".popup").removeClass("active");
// }

// $(window).on("popstate", function() {
//     hidePopup();
// });