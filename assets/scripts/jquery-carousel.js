$(function () {
    const slides = [
        {
            src: "assets/images/screenshots/Screenshot 2026-11-02 131952.png",
            title: "Mobster Metro Scene 2 Max",
            caption: "Mobster Metro Scene 2 Max"
        },
        {
            src: "assets/images/screenshots/Screenshot 2026-11-02 132015.png",
            title: "Crystal Chisel Scene 1 Max",
            caption: "Crystal Chisel Scene 1 Max"
        },
        {
            src: "assets/images/screenshots/Screenshot 2026-11-02 132109.png",
            title: "Mobster Metro Scene 1 Scout",
            caption: "Mobster Metro Scene 1 Scout"
        },
        {
            src: "assets/images/screenshots/Screenshot 2026-11-02 132220.png",
            title: "Harmony Hallow Scene 1 Scout",
            caption: "Harmony Hallow Scene 1 Scout"
        },
        {
            src: "assets/images/screenshots/Screenshot 2026-11-02 132252.png",
            title: "Mobster Metro Scene SHF",
            caption: "Mobster Metro Scene SHF"
        },
        {
            src: "assets/images/screenshots/Screenshot 2026-11-02 132314.png",
            title: "Testing Tides Scene SHF",
            caption: "Testing Tides Scene SHF"
        }
    ];

    let currentIndex = 0;
    let timer;
    const $image = $("#screenshot-image");
    const $title = $("#screenshot-title");
    const $caption = $("#screenshot-caption");
    const $count = $("#screenshot-count");

    $.each(slides, function (_, slide) {
        slide.preloadedImage = new Image();
        slide.preloadedImage.onerror = function () {
            console.error("Failed to preload screenshot:", slide.src);
        };
        slide.preloadedImage.src = slide.src;
    });

    function showSlide(index) {
        currentIndex = (index + slides.length) % slides.length;
        const slide = slides[currentIndex];

        $image.attr({
            src: slide.src,
            alt: slide.title
        });
        $title.text(slide.title);
        $caption.text(slide.caption);
        $count.text(`${currentIndex + 1} of ${slides.length}`);
    }

    function resetTimer() {
        window.clearInterval(timer);
        timer = window.setInterval(function () {
            showSlide(currentIndex + 1);
        }, 5000);
    }

    $("#screenshot-previous").on("click", function () {
        showSlide(currentIndex - 1);
        resetTimer();
    });

    $("#screenshot-next").on("click", function () {
        showSlide(currentIndex + 1);
        resetTimer();
    });

    showSlide(currentIndex);
    resetTimer();
});
