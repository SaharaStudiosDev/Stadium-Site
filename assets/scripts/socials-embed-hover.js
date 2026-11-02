const socialEmbeds = document.querySelectorAll("#grid a");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    socialEmbeds.forEach((embed) => {
        embed.style.display = "inline-block";
        embed.style.transition = "transform 180ms ease-in-out";

        const enlarge = () => {
            embed.style.transform = "scale(1.15)";
        };
        const restore = () => {
            embed.style.transform = "scale(1)";
        };

        embed.addEventListener("mouseenter", enlarge);
        embed.addEventListener("mouseleave", restore);
        embed.addEventListener("focus", enlarge);
        embed.addEventListener("blur", restore);
    });
}
