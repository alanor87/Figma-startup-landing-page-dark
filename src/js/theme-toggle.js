
 function themeToggle() {
    document.querySelector('body').classList.toggle('light-theme');
    const heroRef = document.querySelector('.section-hero');
    const bgImage = window.getComputedStyle(heroRef).backgroundImage;
    if (!bgImage.includes('-inverse@')) {
        const newImage = bgImage.replace('@', '-inverse@');
        heroRef.style.backgroundImage = newImage;
        return;
    }
    const newImage = bgImage.replace('-inverse@', '@');
    heroRef.style.backgroundImage = newImage;
}

const themeToggleRef = document.querySelector('.js-theme-switch');
themeToggleRef.addEventListener('change', themeToggle);