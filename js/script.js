const video1 = document.getElementById('projectvid1');
const video2 = document.getElementById('projectvid2');
const video3 = document.getElementById('projectvid3');
// const video4 = document.getElementById('projectvid4');
const hoverSign = document.querySelector(".hover-sign");

const sideBar = document.querySelector('.sidebar');
const openMenu = document.querySelector('.menu-icon');
const closeMenu = document.querySelector('.close-icon');

const toTop = document.querySelector('.scroll-up');

const videoList = [video1, video2, video3];

$(document).ready(function () {

    //Typed
    new Typed('#type-it', {
        strings: ['Web Designer', 'Web Developer', 'Freelancer'],
        typeSpeed: 100,
        loop: true
    })
});

videoList.forEach(function (video) {
    video.addEventListener('mouseover', function () {
        video.play()
        hoverSign.classList.add("active")
    })
    video.addEventListener('mouseout', function () {
        video.pause()
        hoverSign.classList.remove("active")

    })
});

openMenu.addEventListener("click", function () {
    sideBar.classList.remove("close-sidebar")
    sideBar.classList.add("open-sidebar")
});

closeMenu.addEventListener("click", function () {
    sideBar.classList.remove("open-sidebar")
    sideBar.classList.remove("close-sidebar")
});

// Top Top
window.addEventListener("scroll", () =>{
    if(window.pageYOffset > 100){
        toTop.classList.add("active")
    }else{
        toTop.classList.remove("active")
    }
});

//Email JS
function sendEmail() {
    const templateParams = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    }

    emailjs.send("service_59esgog", "template_121hkrg", templateParams).then(() => alert("Email Sent Successfully!"));
}