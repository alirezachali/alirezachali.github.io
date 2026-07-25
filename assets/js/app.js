window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".custom-navbar");

    if (window.scrollY > 40) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


new Typed("#typing",{

    strings:[

        "Backend Developer",

        "Laravel Developer",

        "PHP Programmer",

        "REST Api"

    ],

    typeSpeed:70,

    backSpeed:40,

    backDelay:1800,

    loop:true

});


const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {

            link.classList.add("active");

        }

    });

});



const cards = document.querySelectorAll(".project-card");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

            entry.target.style.transition = ".6s ease";

        }

    });

});

cards.forEach(card=>observer.observe(card));


document.querySelectorAll(".project-card").forEach(card=>{

    card.addEventListener("mousemove",e=>{

        const rect=card.getBoundingClientRect();

        card.style.setProperty("--x",(e.clientX-rect.left)+"px");

        card.style.setProperty("--y",(e.clientY-rect.top)+"px");

    });

});



const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", revealSections);

function revealSections(){

    reveals.forEach(section=>{

        const top = section.getBoundingClientRect().top;

        const visible = window.innerHeight - 120;

        if(top < visible){

            section.classList.add("active");

        }

    });

}

revealSections();