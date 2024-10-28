$(document).ready(function() {
    $('#contactButton').click(function() {
        $('#contactForm').slideToggle();
    });

    // Smooth scroll to sections when clicking on links (if added)
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
});
