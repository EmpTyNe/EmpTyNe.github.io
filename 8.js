function freezeHistory() {
    window.history.pushState({}, window.document.title, window.location.href);
  }
  
  function goBack() {
    /*
      Custom history back actions: close panel, close popup, close drop-down menu
    */
    var popupOpen = $(".popup.active").length > 0;
    if(popupOpen) {
      hidePopup();
      return false;
    }
    window.history.back();
    return true;
  }
  
  function showPopup() {
    $('.popup').addClass('active');
    freezeHistory();
  }
  
  function hidePopup() {
    $('.popup').removeClass('active');
  }
  
  $(window).on("popstate", function(e) {
    /* 
       Browsers tend to handle the popstate event differently on page load. 
       Chrome (prior to v34) and Safari always emit a popstate event on page load, 
       but Firefox doesn’t.
    */
    goBack();
  })