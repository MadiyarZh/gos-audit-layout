$(".publication--item").click(function() { 
   
    //use a class, since your ID gets mangled

    if ($(this).hasClass('active')) {
        $(this).removeClass("active"); 
    } else {
        $(".publication--item").removeClass('active');
        $(this).addClass("active");
    }
         //add the class to the clicked element
});