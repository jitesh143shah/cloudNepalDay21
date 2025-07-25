const menu = document.getElementById("menu");
const menubar = document.getElementById("menubar");
menubar.addEventListener('click', () => {
    menu.classList.toggle(`show`);

})

const dropdown = document.querySelector(".dropdown a");
const dropdownmenu = document.querySelector(".dropdown-menu");

if (window.innerWidth <= 768) {
    dropdown.addEventListener("click", () => {
        dropdownmenu.style.display = dropdownmenu.style.display === "block" ? "none" : "block"
    })

}
else {
    dropdownmenu.style.display = "";
}