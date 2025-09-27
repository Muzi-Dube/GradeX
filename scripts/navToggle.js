export function navToggle()
    {
        const navBar = document.querySelector('.js-navbar');
        const menuBtn = document.querySelector('.menu-icon');

        menuBtn.addEventListener('click', () => 
            {
                navBar.classList.toggle('menu-active');
            });
    }