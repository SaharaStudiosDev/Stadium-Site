const navLinks = document.querySelectorAll("nav a");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    navLinks.forEach((link) => {
        link.style.display = "inline-block";
        link.style.transition = "transform 180ms ease-in-out";

        const enlarge = () => {
            link.style.transform = "scale(1.15)";
        };
        const restore = () => {
            link.style.transform = "scale(1)";
        };

        link.addEventListener("mouseenter", enlarge);
        link.addEventListener("mouseleave", restore);
        link.addEventListener("focus", enlarge);
        link.addEventListener("blur", restore);
    });
}
