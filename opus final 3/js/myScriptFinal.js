
/*---------------------------------------------------------------------
                        MOBILE DEVICES MENU SCRIPT
---------------------------------------------------------------------*/

    $("span.navBtn").click(function() {

        $("#mainMenu").slideToggle();
    });


    $(window).resize(function() {

        if ( $(window).width() > 1024 ) {

            $("#mainMenu").removeAttr("style");
        }
    });

    $("#mainMenu li").on("click", function(){
        
        if ( $(window).width() < 1024 ) {
        $("span.navBtn").click();
        }
    });


/*---------------------------------------------------------------------
                        SMOOTH SCROLLING OF ALL LINKS
---------------------------------------------------------------------*/

$(function() {
        $('.navC a, a').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 100
            }, 1000);
            event.preventDefault();
        });
    });



/*---------------------------------------------------------------------
                    GOOGLE MAP SCRIPT 51.440027799999996, 0.0351658
---------------------------------------------------------------------*/
        
 function initMap() {
    
        // Creating a new variable to hold my lat and lng
          var officeLocation = {lat: 51.440027799999996, lng: 0.0351658};
    
        // Create a map object and specify the DOM element for display.
          map = new google.maps.Map(document.getElementById("map"), {
          center: officeLocation,
          scrollwheel : false,
          zoom: 16
        });
          var marker = new google.maps.Marker({
          position: officeLocation,
          map: map,
          title: 'Find us here!'
        });
    
          var popupAddress = "Opus Interior Design<br />";
              popupAddress += "Masterman House<br />";
              popupAddress += "30-33 Argle Road<br />";
              popupAddress += "London EC3N 1DD<br />";
          
              
          var infowindow = new google.maps.InfoWindow({
          content: popupAddress,
          maxWidth: 300
        });
          marker.addListener('click', function() {
          infowindow.open(map, marker);
        });

      }    


/*---------------------------------------------------------------------
                        SCROLL BACK TO TOP BUTTON
---------------------------------------------------------------------*/

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 

