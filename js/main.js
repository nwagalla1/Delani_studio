$(document).ready(function(){
    $('.mouse').click(function(e){
        
        var linkHref = $(this).attr('href');
        
        $('html, body').animate({
            scrollTop: $(linkHref).offset().top
        }, 800);

        e.preventDefault();

    });
});