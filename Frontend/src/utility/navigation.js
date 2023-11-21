const SCROLL_OFFSET = 100;

document.documentElement.style.scrollBehavior = 'smooth';

export function initScroll({ menuIsToggled, setMenuIsToggled }) {
    const smoothScrollLinks = document.querySelectorAll('.navigation-scroll');

    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            event.stopPropagation();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            const targetPx = targetElement.getBoundingClientRect().top - document.body.getBoundingClientRect().top - SCROLL_OFFSET;
            window.scrollTo({ behavior: 'smooth', top: targetPx });

            if (menuIsToggled) {
                setMenuIsToggled(false);
            }
        });
    });

}