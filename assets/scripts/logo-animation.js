const logo = document.querySelector("#rotating-logo");

if (logo && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    logo.animate(
        [{ transform: "rotate(-15deg)" }, { transform: "rotate(15deg)" }],
        {
            duration: 1600,
            iterations: Infinity,
            direction: "alternate",
            easing: "ease-in-out"
        }
    );
}
