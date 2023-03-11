var typed = new Typed(".animated-text", {
    strings: ["Data Science Enthusiast", "App Development Learner", "Singer"], typeSpeed: 100,
    backSpeed: 150,
    backdelay: 1000,
    loop: true
})

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top>=offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /*-----------------sticky navbar---------------*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*-------------remove toggle icon and navbar----------------------*/
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');



};

/*-------about-----*/

var tablinks = document.getElementsByClassName("tab_links")
var tabcontents = document.getElementsByClassName("tab_contents")

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active_link")
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active_tab")
    }
    event.currentTarget.classList.add("active_link")
    document.getElementById(tabname).classList.add("active_tab")
}


let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}


var sidemeu = document.getElementById("sidemenu")

function openmenu() {
    sidemeu.style.right = "0"
}
function closemenu() {
    sidemeu.style.right = "-200px"
}
