function horizontalTabs() {
    const wrappers = document.querySelectorAll(".horizontal-tabs-wrapper");
    wrappers.forEach((wrapper) => {
        const tabs = wrapper.querySelectorAll(".horizontal-tab");
        const heading = wrapper.querySelector(".horizontal-tabs-heading");
        tabs.forEach((tab, index) => {
            const name = tab.querySelector(".tab-name");
            name.addEventListener("click", () => changeTab(tabs, heading, index));
            heading.append(name);
        });
        heading.querySelector(".tab-name").classList.add("active");
        tabs[0].classList.add("active");
    });

    function changeTab(tabs, heading, index) {
        heading.querySelector(".tab-name.active").classList.remove("active");
        heading.querySelectorAll(".tab-name")[index].classList.add("active");
        tabs.forEach((tab) => tab.classList.remove("active"));
        tabs[index].classList.add("active");
    }
}

function verticalTabs() {
    const wrappers = document.querySelectorAll(".vertical-tabs-wrapper");
    wrappers.forEach((wrapper) => {
        const tabs = wrapper.querySelectorAll(".vertical-tab");
        const heading = wrapper.querySelector(".vertical-tabs-heading");
        tabs.forEach((tab, index) => {
            const name = tab.querySelector(".tab-name");
            name.addEventListener("click", () => changeTab(tabs, heading, index));
            heading.append(name);
        });
        heading.querySelector(".tab-name").classList.add("active");
        tabs[0].classList.add("active");
    });

    function changeTab(tabs, heading, index) {
        heading.querySelector(".tab-name.active").classList.remove("active");
        heading.querySelectorAll(".tab-name")[index].classList.add("active");
        tabs.forEach((tab) => tab.classList.remove("active"));
        tabs[index].classList.add("active");
    }
}

function spoilers() {
    const spoilers = document.querySelectorAll(".spoiler-wrapper");
    spoilers.forEach((spoiler) => {
        const button = spoiler.querySelector(".spoiler-button");
        button.addEventListener("click", () => {
            spoiler.classList.toggle("active");
        });
    });
}

function sliders() {
    const sliders = document.querySelectorAll(".gallery");
    sliders.forEach(function(gallery) {
        const slider = gallery.querySelector(".gallery-slider");
        const slides = [...slider.querySelectorAll(".wp-block-image")];
        const thumbnails = gallery.querySelector(".gallery-thumbnails");
        const counter = gallery.querySelector(".slides-counter");

        counter.querySelector(".all").innerHTML = slides.length;
        slides.forEach((slide) => {
            thumbnails
                .querySelector(".gallery-thumbnails-inner")
                .append(slide.cloneNode(true));
        });
        const thumbnailsSlider = new Swiper(thumbnails, {
            wrapperClass: "gallery-thumbnails-inner",
            slideClass: "wp-block-image",
            slidesPerView: 4,
            spaceBetween: 10,
            breakpoints: {
                768: {
                    slidesPerView: 6,
                    spaceBetween: 10,
                },
            },
        });
        new Swiper(slider, {
            wrapperClass: "gallery-inner",
            slideClass: "wp-block-image",
            thumbs: {
                swiper: thumbnailsSlider,
                slideThumbActiveClass: "active",
            },
            on: {
                slideChange: (sl) => {
                    counter.querySelector(".current").innerHTML = sl.activeIndex + 1;
                },
            },
        });
    });
}

function specialOffers() {
    const offers = document.querySelectorAll(".special-offer");
    offers.forEach((offer) => {
        const {
            start,
            end
        } = offer.dataset;
        const subtitle = offer.querySelector(".special-offer-subtitle");
        if (new Date() > new Date(start)) {
            timer_count(start, end, subtitle);
        } else {
            const date = new Date().setDate(new Date().getDate() - 1);
            timer_count(date, start, subtitle);
        }
    });
}

function init() {
    horizontalTabs();
    verticalTabs();
    spoilers();
    sliders();
    specialOffers();
}

document.addEventListener("DOMContentLoaded", () => {
    init();
});