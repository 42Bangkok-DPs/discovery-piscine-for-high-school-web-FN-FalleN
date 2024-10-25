$(function () {

    window.onscroll = () => {
        skillBar()
        navbarStyle()
    }

    function navbarStyle() {
        if (document.documentElement.scrollTop > 20) {
            $('.navbar').css('padding', '1rem 3rem');
            $('.navbar').css('background', '#fff');
            $('.navbar, .navbar-link a').css('color', 'var(--blue)');
            $('.navbar').css('border-bottom', '2px solid rgba(0,0,0,0.15)');
        } else {
            $('.navbar').css('padding', '1.5rem 3rem');
            $('.navbar').css('background', 'transparent');
            $('.navbar, .navbar-link a').css('color', '#000');
            $('.navbar').css('border-bottom', 'none');
        }
    }

    $('#hamburgerBar').click(function() {
        $('.navbar-link-vertical').slideToggle();
    })


    function skillBar() {
        if (document.documentElement.scrollTop > 1050) {
            percentBar();
        }
    }


    function percentBar() {
        let width = 0;
        HTMLBar = setInterval(function () {
            if (width >= 40) {
                clearInterval(HTMLBar)
            } else {
                width++;
                $('.html-skill-percent').css('width', width + '%');
            }
        }, 5)

        CSSBar = setInterval(function () {
            if (width >= 30) {
                clearInterval(CSSBar)
            } else {
                width++;
                $('.css-skill-percent').css('width', width + '%');
            }
        }, 5)

        JSBar = setInterval(function () {
            if (width >= 5) {
                clearInterval(JSBar)
            } else {
                width++;
                $('.js-skill-percent').css('width', width + '%');
            }
        }, 5)
    }
})

