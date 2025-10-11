
export function showActiveLink(links) {

    const navLinks = document.querySelectorAll('.nav-links');

    navLinks.forEach(link => {
        if(link.href === window.location.href)
        {
            link.classList.add('active-nav');
        }
    });
}