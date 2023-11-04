
(function ($) {
    "use strict";
    // PRE LOADER
    $(window).load(function(){
        $('.preloader').fadeOut(1000); // set duration in brackets
    });

    // CUSTOM LINK
    $('.custom-link').click(function(){
        var el = $(this).attr('href');
        var elWrapped = $(el);
        var header_height = $('.navbar').height() + 10;

        scrollToDiv(elWrapped,header_height);
        return false;

        function scrollToDiv(element,navheight){
            var offset = element.offset();
            var offsetTop = offset.top;
            var totalScroll = offsetTop-navheight;

            $('body,html').animate({
                scrollTop: totalScroll
            }, 300);
        }
    });
})(window.jQuery);

$(document).ready(function () {
    var date = new Date();
    var year = date.getFullYear();

    // Get year
    $('#getYear').text(year)

    // $("form").submit(function(event) {
    //     event.preventDefault();

    //     // Envoyer le formulaire à EmailJS
    //     emailjs.sendForm("dbjdNaoX2CJZyjdsO", "template_7z76but", this)
    //         .then(function(response) {
    //             console.log("E-mail envoyé avec succès", response);
    //             alert("Votre message a été envoyé avec succès.");
    //             $("form")[0].reset();
    //         }, function(error) {
    //             console.error("Erreur lors de l'envoi de l'e-mail", error);
    //             alert("Une erreur est survenue lors de l'envoi du message.");
    //         });
    // });
})


