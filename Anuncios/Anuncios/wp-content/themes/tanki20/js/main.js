$(function() {
    $('#cookie_stop').click(function() {
        $('.footer-cookies').slideUp();

        var nDays = 30;
        var cookieName = "cookie_TO";
        var cookieValue = true;

        var today = new Date();
        var expire = new Date();
        expire.setTime(today.getTime() + 3600000 * 24 * nDays);
        document.cookie = cookieName + "=" + escape(cookieValue) + ";expires=" + expire.toGMTString() + ";path=/";
    });

});

function getcookie(a) {
    var b = new RegExp(a + '=([^;]){1,}');
    var c = b.exec(document.cookie);
    if (c) c = c[0].split('=');
    else return false;
    return c[1] ? c[1] : false;
}

var cookiechecking = getcookie("cookie_TO");
if (cookiechecking) {
    $(".footer-cookies").remove();
} else {
    $(".footer-cookies").addClass("active-cookies");
}

// button up
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        if ($('#upbutton').is(':hidden')) {
            $('#upbutton').css({
                opacity: 1
            }).fadeIn('slow');
        }
    } else {
        $('#upbutton').stop(true, false).fadeOut('fast');
    }
});
$('#upbutton').click(function() {
    $('html, body').stop().animate({
        scrollTop: 0
    }, 300);
});

var shrinkHeader = 10;
var scroll = getCurrentScroll();
if (scroll >= shrinkHeader) {
    $('header').addClass('header-shrink');
    $('.header-sale').hide();
    $('.header-sale-controls').hide();
    $('body').removeClass('header-sale-block-active');

} else {
    $('header').removeClass('header-shrink');
}

function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
}


$(function() {
    var shrinkHeader = 100;
    $(window).scroll(function() {
        var scroll = getCurrentScroll();
        if (scroll >= shrinkHeader) {
            $('header').addClass('header-shrink');
            $('.header-tanki-mobile').addClass('header-shrink-mobile');
            $('.header-sale').hide();
            $('.header-sale-controls').hide();
            $('body').removeClass('header-sale-block-active');

        } else {
            $('header').removeClass('header-shrink');
            $('.header-tanki-mobile').removeClass('header-shrink-mobile');
        }
    });

    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }
});


$('.header-sale-close').on('click', function() {
    $('.header-sale').hide();
    $('.header-sale-controls').hide();
    $('body').removeClass('header-sale-block-active');
});
$('.date-filter-result-now').on('click', function() {
    $('.date-filter-wrap').toggleClass('active-date-filter');
    step('.date-filter-wrap', 'active-date-filter');
})
$('.date-filter-wrap span').on('click', function() {
    new_result = $(this).text();
    $('.date-filter-result-now').html(new_result);
    $('.date-filter-wrap').toggleClass('active-date-filter');
})


$(function() {
    height_size = $(window).height();
    $('.home-screen').css('height', height_size);
    $('.background-mx-video').css('height', height_size);
    $(window).resize(function() {
        height_size = $(window).height();
        $('.home-screen').css('height', height_size)
        $('.background-mx-video').css('height', height_size);
    })
})

$('.search-modal-filter span').on('click', function() {
    $('.search-modal-filter span').removeClass('active-filter');
    $(this).toggleClass('active-filter');
})

$('.header-menu-dropdown').on('click', function(e) {

    e.preventDefault();
    $(this).toggleClass('open-menu');

    $('.header-menu-dropdown ul li').on('click', function(event) {
        event.stopPropagation();
    });
    step('.header-menu-dropdown', 'open-menu')

});
$('.lang-change').on('click', function() {
    $(this).toggleClass('open-menu');
    step('.lang-change', 'open-menu')
});

// остановка блоков
function step(targetclass, removecl) {
    jQuery(function($) {
        $(document).mouseup(function(e) { // событие клика по веб-документу
            var div = $(targetclass); // тут указываем ID элемента
            if (!div.is(e.target) // если клик был не по нашему блоку
                &&
                div.has(e.target).length === 0) { // и не по его дочерним элементам
                div.removeClass(removecl); // скрываем его
            }
        });
    });
}

$('.menu-mobile').on('click', function() {
    $('.content-tanki-template').toggleClass('active-mobile-menu')
})

function setCookie(name, value, options = {}) {

    options = {
        path: '/',
        ...options
    };

    if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
    }

    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
        }
    }

    document.cookie = updatedCookie;
}

// detect OS & update button
var OSName = false;
if (navigator.appVersion.indexOf("Win") != -1) {
    OSName = "Win";
}
if (navigator.appVersion.indexOf("Mac") != -1) {
    OSName = "Mac";
}


var tankiGlobalURL = {
    Win: 'https://tankionline.com/desktop/TankiOnlineSetup.exe',
    Mac: 'https://tankionline.com/desktop/TankiOnlineSetup.dmg'
};

if (OSName) {
    $(".download-play-game").attr('href', tankiGlobalURL[OSName]);
} else {
    $(".download-play-game").hide();
}


document.addEventListener('DOMContentLoaded', function() {
    const playButton = document.querySelector('.home-screen-play-bt')
    playButton && playButton.addEventListener('click', () => {
        if (typeof ym !== "undefined") ym(10288858, 'reachGoal', 'playButtonPressed')
        if (typeof gtag !== "undefined") gtag('event', 'play_button_click')
    })

    const downloadButton = document.querySelector('.home-screen-download')
    downloadButton && downloadButton.addEventListener('click', () => {
        if (typeof ym !== "undefined") ym(10288858, 'reachGoal', 'downloadButtonPressed')
    })

    const footerDownload = document.querySelector('footer a[href="https://tankionline.com/desktop/TankiOnlineSetup.exe"]')
    footerDownload && footerDownload.addEventListener('click', () => {
        if (typeof ym !== "undefined") ym(10288858, 'reachGoal', 'downloadButtonPressed')
    })

    const gplayMainButton = document.querySelector('.home-screen-gpay')
    gplayMainButton && gplayMainButton.addEventListener('click', () => {
        if (typeof ym !== "undefined") ym(10288858, 'reachGoal', 'googlePlayButtonPressed')
    })
    const gplayFooterButton = document.querySelector('.g-play')
    gplayFooterButton && gplayFooterButton.addEventListener('click', () => {
        if (typeof ym !== "undefined") ym(10288858, 'reachGoal', 'googlePlayButtonPressed')
    })
})



function watchAnchorLinks(headings) {
    const menuLinks = document.querySelectorAll(".sidebar_table_of_contents a");
    window.addEventListener("scroll", () => {
        headings.forEach((heading, index) => {
            const rect = heading.getBoundingClientRect();
            if (rect.top <= 160) {
                menuLinks.forEach((link) => {
                    link.classList.remove("active");
                });
                menuLinks[index].classList.add("active");
            }
        });
    });
}

function tableOfContents() {
    const headings = document.querySelectorAll(".description_single_post h2");
    const tableOfContents = document.querySelector(".sidebar_table_of_contents");
    if (!tableOfContents) return
    if (headings.length < 1) return tableOfContents.remove();
    headings.forEach((heading, index) => {
        const hiddenLink = document.createElement("a");
        hiddenLink.href = `#${heading.cloneNode(true).textContent}`;
        hiddenLink.classList.add("anchor-link");
        hiddenLink.setAttribute("name", heading.cloneNode(true).textContent);
        heading.appendChild(hiddenLink);
        const menuLink = hiddenLink.cloneNode(true);
        menuLink.classList.remove("anchor-link");
        menuLink.classList.add("menu-anchor-link");
        menuLink.textContent = `${index + 1}. ${
      heading.cloneNode(true).textContent
    }`;
        tableOfContents.append(menuLink);
    });
    watchAnchorLinks(headings);
}
tableOfContents();

const searchParams = new URLSearchParams(window.location.search);

function sendPostMessage(e) {
    e.preventDefault();
    window.parent.postMessage(searchParams.get('button_action'), "*")
}

function watchGameLinks() {
    const links = document.querySelectorAll('a[data-link-iframe="iframe-message-link"]')
    if (searchParams.get('is_android')) return links.forEach(link => {
        link.style.display = "none"
    })
    links.forEach(link => {
        link.addEventListener('click', sendPostMessage)
    })
}
(searchParams.get('button_action') || searchParams.get('is_android')) && watchGameLinks();