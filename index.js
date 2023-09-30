const observer = new IntersectionObserver((e) => {
    e.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

const hiddenelements = document.querySelectorAll(".skillHidden");
hiddenelements.forEach((el) => observer.observe(el));

function easteregg() {
    alert("Last edited 10/1-Love is infectious and greatest healing energy.");
}
function discordLink() {
    var discord = "https://discord.com/users/958582255159214132";
    window.open(discord);
}

const mobile_nav = document.querySelector(".mobile_nav_icon");
mobile_nav.onclick = function() {
    navBar = document.querySelector(".nav_links");
    navBar.classList.toggle("mobile")
}
