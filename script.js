var typed = new Typed(".animated-text", {
    strings: ["Data Science Enthusiast", "App Development Learner", "Singer"], typeSpeed: 100,
    backSpeed: 150,
    backdelay: 1000,
    loop: true
})

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



/*-------project load more------*/
// let loadMoreBtn = document.querySelector('#load_more');
// let currentItem = 3;

// loadMoreBtn.onclick = () => {
//     let boxes = [...document.querySelectorAll(".project")];
//     for (var i = currentItem; i < currentItem + 3; i++) {
//         boxes[i].style.display = 'inline-block';
//     }
//     currentItem += 3;
// }


var sidemeu = document.getElementById("sidemenu")

function openmenu() {
    sidemeu.style.right = "0"
}
function closemenu() {
    sidemeu.style.right = "-200px"
}
