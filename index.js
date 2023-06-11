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
    alert("마지막 수정 6.11 - 언제나 현재에 집중할수 있다면 행복할것이다.");
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
