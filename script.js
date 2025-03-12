let darkMode = localStorage.getItem("darkMode");
const themeSwitch = document.getElementById("theme-switch");

const enableDarkmode = () => {
    document.body.classList.add("darkMode");
    localStorage.setItem("darkMode", "active");
};

const disableDarkmode = () => {
    document.body.classList.remove("darkMode");
    localStorage.removeItem("darkMode");
};

if (darkMode === "active") {
    enableDarkmode();
}

themeSwitch.addEventListener("click", () => {
    darkMode = localStorage.getItem("darkMode");
    darkMode !== "active" ? enableDarkmode() : disableDarkmode();
});

document.addEventListener("DOMContentLoaded", function () {
    const projectCards = document.querySelectorAll(".project-card");

    const observerOptions = {
        root: null, // Use the viewport as the container
        threshold: 0.2, // Trigger when 20% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                // Optionally, stop observing once the element has become visible
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    projectCards.forEach((card) => {
        observer.observe(card);
    });
});
