$(document).ready(function(){
    $('.slide .titles').on('click', function(){
        $(this).toggleClass('activator');
        if($(this).hasClass('activator')){
            $(this).next().stop().slideDown('slow');
        }else{$(this).next().stop().slideUp('slow');}
    })
});

$(window).load(function(){

});

$(window).resize(function(){

});