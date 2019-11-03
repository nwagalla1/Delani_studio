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

document.getElementById('button').addEventListener('click', function(){
       
    document.querySelector('.popup').style.display = "flex";
})

document.querySelector('.close').addEventListener('click', function(){
    document.querySelector('.popup').style.display = "none";
})
document.getElementById('design').addEventListener('click', function(e){
    document.querySelector('#design').style.display = 'none';
    document.querySelector('.para').style.display = 'block';

    e.preventDefault();
})
document.getElementById('words1').addEventListener('click', function(){
    document.querySelector('.para').style.display = 'none';
    document.querySelector('#design').style.display = 'block';
})
document.getElementById('develop').addEventListener('click', function(e){
    document.querySelector('#develop').style.display = 'none';
    document.querySelector('.para1').style.display = 'block';

    e.preventDefault();
})
document.getElementById('words2').addEventListener('click', function(){
    document.querySelector('.para1').style.display = 'none';
    document.querySelector('#develop').style.display = 'block';
})
document.getElementById('manage').addEventListener('click', function(e){
    document.querySelector('#manage').style.display = 'none';
    document.querySelector('.para2').style.display = 'block';

    e.preventDefault();
})
document.getElementById('words3').addEventListener('click', function(){
    document.querySelector('.para2').style.display = 'none';
    document.querySelector('#manage').style.display = 'block';
})