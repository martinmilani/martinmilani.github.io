const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav__list');
    const navLinks = document.querySelectorAll('.nav__item');
    const navLinksClick = document.querySelectorAll('.nav__link');

    burger.addEventListener('click', () => {
        //Toogle Nav
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.75}s`;
            }
        });
        //Burger Animation
        burger.classList.toggle('toggle');
    });

    navLinksClick.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.75}s`;
                }
            });
            burger.classList.toggle('toggle');
        })
    })



}



navSlide();
