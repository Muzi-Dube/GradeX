export function navToggle()
    {
        const navBar = document.querySelector('.js-navbar');
        const menuBtn = document.querySelector('.js-menu-btn');

        menuBtn.addEventListener('click', () => 
            {
                navBar.classList.toggle('menu-active');
                menuBtn.classList.toggle('menu-icon-2');
            });
    }