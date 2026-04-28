/* COUNTDOWN TIMER */
function startCountdown() {
    let time = 3600; // 1 hour

    setInterval(() => {
        let h = Math.floor(time / 3600);
        let m = Math.floor((time % 3600) / 60);
        let s = time % 60;

        document.querySelector(".countdown").textContent =
            `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;

        time--;
    }, 1000);
}

startCountdown();

/* MOBILE NAV */
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});
