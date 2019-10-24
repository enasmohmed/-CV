/* global $, alert, console */


$(function () {

    'use strict';

    // Trigger nice Scroll Plugin

    // $('html').niceScroll({
    //     cursorcolor: '#ffcb8d',
    //     cursorwidth: 10,
    //     cursorborderradius: 0,
    //     cursorborder: '1px solid #ef6d6d'
    // });

   // Scroll To About Me 
   $('.header .arrow i').click(function () {
        $('html, body').animate({
            scrollTop: $('.about-me').offset().top
        }, 1000);
   });

   var elementsPerTime= 8;
	
   //Show the first group
   $(".portfolio-card").slice(0, elementsPerTime).fadeIn(); 
   
   //show more when click on the button
   $(".show-more").click(function(){ 
       // show number of sections when click on the button
       $(".portfolio-card:hidden").slice(0, elementsPerTime).fadeIn(); 
       // checking if we still have hidden sections
       if($(".portfolio-card:hidden").length === 0){
           //change the button bg and text when there is no more sections
           $(".show-more").css({'background':'#ccc', 'color': 'black'});
           $(".show-more").attr("disabled", true);
           $(".show-more").text('No More');
       }
   });
/*
   $('#contact-me').SendMassage(function (e) {
        var name = document.getElementById('inputName'),
            email = document.getElementById('inputYourEmail'),
            massage = document.getElementById('inputMassage');

        if (! name.value == !email.value == !massage.value){
            alertify.error('Please Check Your Entries')
        } else {
            $.ajax({
                url:"https://bit.ly/2lYCdFg",
                medthod: "POST",
                data: $(this).serializer(),
                dataType: "json"
            });
            e.preventDefault()
            $(this).get(0).reset()
            alertify.success('Massage Sent')
        }        
   });
   */
});

