function scrollToElement(elementSelector, instance = 0) {
    const elements = document.querySelectorAll(elementSelector);
    if (elements.length > instance) {
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");
const link4 = document.getElementById("link4");

link1.addEventListener('click', () => {
    scrollToElement('#Services');
});

link2.addEventListener('click', () => {
    scrollToElement('#about');
});

link3.addEventListener('click', () => {
    scrollToElement('#contact');
});

link4.addEventListener('click', () => {
    scrollToElement('#portfoy');
});

const menu = document.querySelector('.hamburger-menu');
let menuState = false ;
menu.addEventListener('click',showMenu)
function showMenu()
{
    if(!menuState)
    {
        menu.id = "active";
        document.querySelector("#navigasyon").classList.add("open")
        menuState=true
    }
    else{
        menu.id = "";
        document.querySelector("#navigasyon").classList.remove("open")
        menuState=false
    }
}