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
    alert("마지막 수정 4.20 - 인생에서 원하는 것을 엇기 위한 첫번째 단계는 내가 무엇을 원하는지 결정하는 것이다");
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
