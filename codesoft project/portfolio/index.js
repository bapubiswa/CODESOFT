// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};








/* scroll section active links */


let section= document.querySelectorAll('section');
let navlinks= document.querySelectorAll('header nav a');

window.onscroll=() =>{
    section.forEach(sec =>{
        let top=Window.scrollY;
        let offset=sec.offsetTop-150;
        let height = sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(Links =>{
                Links.classList.remove('active');
                document.querySelector('header nav a[href*=' + ']').classList.add('active');
            });
        };
    });
    // Sticky nav bar
    let header=document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY >100);
    
};
