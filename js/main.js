$(document).ready(function(){
    $('.mouse').click(function(e){
        
        let linkHref = $(this).attr('href');
        
        $('html, body').animate({
            scrollTop: $(linkHref).offset().top
        }, 800);

        e.preventDefault();

    });

    $('.single-box').tilt({
        glare: true,
        scale: 1.1,
        hover: true,
    });
});