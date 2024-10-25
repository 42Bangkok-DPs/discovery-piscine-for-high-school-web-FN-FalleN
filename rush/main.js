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

    $('#hamburgerBar').click(function () {
        $('.navbar-link-vertical').slideToggle();
    })

    function skillBar() {
        if (document.documentElement.scrollTop > 700) {
            percentBar();
        }
    }


    function percentBar() {
        let width = 0;
        kseedaHTMLBar = setInterval(function () {
            if (width >= 60) {
                clearInterval(kseedaHTMLBar)
            } else {
                width++;
                $('.kseeda-html-skill-percent').css('width', width + '%');
            }
        }, 10)

        kseedaCSSBar = setInterval(function () {
            if (width >= 50) {
                clearInterval(kseedaCSSBar)
            } else {
                width++;
                $('.kseeda-css-skill-percent').css('width', width + '%');
            }
        }, 10)

        kseedaJSBar = setInterval(function () {
            if (width >= 15) {
                clearInterval(kseedaJSBar)
            } else {
                width++;
                $('.kseeda-js-skill-percent').css('width', width + '%');
            }
        }, 10)

        tmaneeonHTMLBar = setInterval(function () {
            if (width >= 40) {
                clearInterval(tmaneeonHTMLBar)
            } else {
                width++;
                $('.tmaneeon-html-skill-percent').css('width', width + '%');
            }
        }, 10)

        tmaneeonCSSBar = setInterval(function () {
            if (width >= 30) {
                clearInterval(tmaneeonCSSBar)
            } else {
                width++;
                $('.tmaneeon-css-skill-percent').css('width', width + '%');
            }
        }, 10)

        tmaneeonJSBar = setInterval(function () {
            if (width >= 5) {
                clearInterval(tmaneeonJSBar)
            } else {
                width++;
                $('.tmaneeon-js-skill-percent').css('width', width + '%');
            }
        }, 10)
    }

})