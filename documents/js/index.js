$(document).ready(function(){

        
    $('.fa-bars').click(function(){

        // $('aside').addClass('show');
        $('aside').toggleClass('show');
    })
    $('section').click(function(){
        $('aside').removeClass('show');
            
        })

        $('aside li').on('click' , function(){
            $(this).addClass('active').siblings().removeClass('active');
        $('aside').removeClass('show');

        })

        $('aside li a').click(function(){

            let Atrr = $(this).attr('id');

                
            $("." + Atrr).addClass('section-active').siblings().removeClass('section-active');

        })
        $('#About').click(function(){

            $('.project').addClass('section-active').siblings().removeClass('section-active');
        })
})