// open / close ticket modal
var buyBtns = document.getElementsByClassName('js-buy-ticket');
var modal = document.getElementById('js-modal')
var modalcontainer = document.querySelector(".js-modal-container")
var closeBtn = document.getElementById('js-modal-close')

buyBtns[0].addEventListener('click', openModal)
buyBtns[1].addEventListener('click', openModal)
closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', closeModal)
modalcontainer.addEventListener('click', function(e) {
    e.stopPropagation();
})
function openModal (e) {
    modal.classList.add('open')
}
function closeModal (e) {
    modal.classList.remove('open')
}

// Mobile menu
var header = document.getElementById('header');
var menu = document.getElementById('mobile-menu');
var currentHeight = header.clientHeight
menu.addEventListener('click', openMenu);
function openMenu (e) {
    var isClose = header.clientHeight === currentHeight
    if (isClose) {
        header.style.height = "auto";
    } else {
        header.style.height = null;
    }
}

// Auto close menu when clicked
var menuItems = document.querySelectorAll('#nav li a[href*="#"]')
for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];
    if (menuItem.id !== "more") {
        menuItem.addEventListener("click", function(e) {
            header.style.height = null;
        })
    } else {
        e.preventDefault();
    }
}