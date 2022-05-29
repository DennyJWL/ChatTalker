/*-------------------------*/
/* $Question 
---------------------------*/
$(document).ready(function(){
    // scrolltop
    $(window).scroll(function(){
        if($(window).scrollTop()>=80){
            $('.scrolltop').fadeIn();
        }else{
            $('.scrolltop').fadeOut();
        }
    });
    $('.scrolltop').click(function(e){
		e.preventDefault();
        $('html,body').animate({scrollTop:0},500);
    })
    // charge
    $('a.btn').click(function(){
        $(this).addClass('active');
        $(this).parents().siblings('li').find('a.btn').removeClass('active');
    })
    $('a.btn-1').click(function(e){
		e.preventDefault();
        $(this).parents().siblings('ul').find('.user').text(10000);
        $(this).parents().siblings('ul').find('.b-cost').text(600);
        $(this).parents().siblings('ul').find('.cost').text(1600);
    })
    $('a.btn-2').click(function(e){
		e.preventDefault();
        $(this).parents().siblings('ul').find('.user').text(15000);
        $(this).parents().siblings('ul').find('.b-cost').text(500);
        $(this).parents().siblings('ul').find('.cost').text(1500);
    })
    $('a.btn-3').click(function(e){
		e.preventDefault();
        $(this).parents().siblings('ul').find('.user').text(20000);
        $(this).parents().siblings('ul').find('.b-cost').text(400);
        $(this).parents().siblings('ul').find('.cost').text(1400);
    })
    $('a.btn-4').click(function(e){
		e.preventDefault();
        $(this).parents().siblings('ul').find('.user').text(25000);
        $(this).parents().siblings('ul').find('.b-cost').text(300);
        $(this).parents().siblings('ul').find('.cost').text(1300);
    })
    $('a.btn-5').click(function(e){
		e.preventDefault();
        $(this).parents().siblings('ul').find('.user').text(`>25000`);
        $(this).parents().siblings('ul').find('.b-cost').text(100);
        $(this).parents().siblings('ul').find('.cost').text(1200);
    })

    // faq
    $('button').click(function(e){
		e.preventDefault();
        $(this).find('.faq_text').slideToggle();

        $(this).find('.ques').toggleClass('faq_active');
        $(this).find('.none').toggleClass('d_none');
        $(this).find('.plus').toggleClass('r-180');

        $(this).parents().siblings().find('.faq_text').slideUp();
        $(this).parents().siblings().find('.ques').removeClass('faq_active');
        $(this).parents().siblings().find('.none').removeClass('d_none');
        $(this).parents().siblings().find('.plus').removeClass('r-180');
    })
})