jQuery.noConflict();

jQuery(function ($) {   
        var $boxOpened = parseInt($('#boxOpened').css('top'));
        
//box accordion Animation + Header Effects

$('#drop').click(
    function toggleBox () {
        if ($boxOpened) {
            $(this).toggleClass('boxopened');
			  
             $('#accordion').stop(true, true).slideUp(240);  
			  $('#fade_titles, #logo img').css('opacity','1');
              $('#rw-banner-image, #fade_titles').removeClass('css_filter');
              $('#rw-banner-image, #fade_titles').addClass('css_filter_2');              
              $('#fade_titles, #logo img').removeClass('css_padding-top');
              $('body,html').animate({ scrollTop: 0, }, 0);
                                
            $boxOpened = 0;
            
        } else {
        
            $(this).toggleClass('boxopened');
            	
            $('#accordion').stop(true, true).slideDown(240);
             $('#fade_titles, #logo img').css('opacity','0');
             $('#rw-banner-image, #fade_titles').addClass('css_filter');
             $('#rw-banner-image, #fade_titles').removeClass('css_filter_2');              
             $('#fade_titles, #logo img').addClass('css_padding-top');
             $('body,html').animate({ scrollTop: 0, }, 0); 
                                             
            $boxOpened = 1;
        }
    }
);
         
 //  Reset animation
 
//        	$(function () {
        		$(window).scroll(function () {
        		if ($(this).scrollTop() > 0) { 
        		$('#rw-banner-image, #fade_titles').addClass('css_filter_off');     				
        			} else {
        		$('#rw-banner-image, #fade_titles').removeClass('css_filter_off');  	
        			}
        	});    		    
 
//   });
   
            
     });