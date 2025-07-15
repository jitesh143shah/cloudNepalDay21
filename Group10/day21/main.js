{
    const navdesign = document.getElementById("nav-design");
    const openIcon = document.getElementById("openIcon")
    const closeIcon = document.getElementById("closeIcon")

    const menu = document.getElementById("menu");
    navdesign.addEventListener("click", function () {
        menu.classList.toggle("show");
        const isMenuOpen = menu.classList.contains("show");
        if (isMenuOpen) {
            openIcon.classList.add("hidden");
            closeIcon.classList.remove("hidden")
        }
        else {
            openIcon.classList.remove("hidden");
            closeIcon.classList.add("hidden")
        }
    })


}
document.getElementById("year").innerText = new Date().getFullYear();
