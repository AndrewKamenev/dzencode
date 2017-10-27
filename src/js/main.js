
function validateForm()
      {
      	if($('#inputName').val() === ''){
				$('#inputName').addClass('input-invalid');
      			alert("Please enter your name");
	            return false;
      		}
      	else $('#inputName').removeClass('input-invalid');

         var phone = $('#inputPhone').val();
         var reg = /\d{10}/;
          
          if(phone.match(reg)){
            
            $('#inputPhone').removeClass('input-invalid');
         	}
         	else {
         		 $('#inputPhone').addClass('input-invalid');
	         	alert("Please enter correct phone number (10 numbers)")
	            return false;
        	}	
        	

        	if($('#inputClass').val() === '1'){
        		$('#inputClass').addClass('input-invalid');
      			alert("Please choose your yoga class")
	            return false;
      		}
      		else $('#inputClass').removeClass('input-invalid');
      		return true;
      }


      $(document).ready(function(){
      	$('#btnTryIt').on('click', validateForm);
      	$("#sliderAbout").owlCarousel({
	    	items: 1,
	    	margin: 0,
	    	nav: true,
	    	navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
	    	dots: false,
	        loop: true,
	        responsiveClass: true
	    
	    });
	    $("#sliderReviews").owlCarousel({
	    	items: 1,
	    	margin: 0,
	    	nav: true,
	    	navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
	    	dots: true,
	        loop: true
	    });
	    $('.btnBuy').hover(function(){
	    	$(this).parent().siblings('.price-box-header').addClass('highlight-bg');
	    	$(this).addClass('highlight-bg');
	    }, 
	    	function(){
	    		$(this).parent().siblings('.price-box-header').removeClass('highlight-bg');
	    		$(this).removeClass('highlight-bg');
	    	});
	    //mobile buttons
  $( ".mobile-close" ).hide();
		$( ".mobile" ).click(function() {
			$( ".collapse" ).slideToggle( "slow", function() {
			$( ".mobile" ).hide();
			$( ".mobile-close" ).show();
		});
});

$( ".mobile-close" ).click(function() {
	$( ".collapse" ).slideToggle( "slow", function() {
		$( ".mobile-close" ).hide();
		$( ".mobile" ).show();
	});
});



	    // script for smooth scrolling
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
      });
  });
