jQuery(document).ready(function() {
    // Add smooth scrolling to all links
    jQuery("#main-nav a.nav-link, .footer-links a").on('click', function(event) {
  
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
                event.preventDefault();
        
            // Store hash
            var hash = this.hash;
        
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            jQuery('html, body').animate({
                scrollTop: jQuery(hash).offset().top
            }, 800, function() {    
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });  

    if (jQuery('#phonemic_chart_container').length) {
        // Sound text click event
        jQuery('.sound-box .text').on('click', function() {
            // Get the parent object
            var parent = jQuery(this).closest('.sound-box');

            // Get the audio object
            var audio = parent.find('.text-sound')[0];

            // Play the audio
            audio.play();
        });

        // Sound word click event
        jQuery('.sound-box .word').on('click', function() {
            // Get the parent object
            var parent = jQuery(this).closest('.sound-box');

            // Get the audio object
            var audio = parent.find('.word-sound')[0];

            // Play the audio
            audio.play();
        });
    }

    if (jQuery('.banner-main').length) {        
        // the current banner index
        var bannerInx = 0;

        // banner text length
        var bannerLength = jQuery('.banner-main li').length;

        function changeBannerText() {            
            var newBannerInx = bannerInx + 1;            

            // old banner fade out
            jQuery('.banner-main li:eq(' + bannerInx + ')').fadeOut(1000);

            if (newBannerInx >= bannerLength)
                newBannerInx = 0;

            // new banner fade in
            jQuery('.banner-main li:eq(' + newBannerInx + ')').fadeIn(1000);

            // replace the current banner index
            bannerInx = newBannerInx;
        }

        // Interval to change banner text
        setInterval(function() { 
            changeBannerText(); 
        }, 2000);
    }
});
