const btn = document.querySelector(".burger-menu")
const links = document.querySelector(".header-burger-menu-links")
btn.addEventListener("click", () => {
    if (links.style.top == "-3000px") {
        links.style.top = "95px"
    } else {
        links.style.top = "-3000px"
    }
})