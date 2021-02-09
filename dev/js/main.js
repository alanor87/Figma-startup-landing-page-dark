(() => {
    const refs = {
        openModalClick: document.querySelector("[open-modal]"),
        closeModalButton: document.querySelector("[close-modal]"),
        closeModalLink: document.querySelector("[close-modal-link]"),
        modal: document.querySelector("[modal]"),
    }

    const openModal = function () {
        refs.modal.classList.toggle('hidden');
    }

    const closeModal = function () {
            refs.modal.classList.toggle('hidden');
    }

    const closeModalLink = function (event) {
        const clickedElRef = event.target.nodeName;
        if (clickedElRef === 'A') closeModal();
    }

    refs.openModalClick.addEventListener('click', openModal);
    refs.closeModalButton.addEventListener('click', closeModal);
    refs.closeModalLink.addEventListener('click', closeModalLink);



})();

//#################################### Sections Intersection observer ##############################//

function onSectionEntry(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.toggle('container-shift');
            sectionObserver.unobserve(entry.target);
        }
    })
}
const sectionOptions = {
    root: null,
    threshold: 0.01,
};
const sectionsTarget = Array.from(document.getElementsByClassName('container-shift'));
const sectionObserver = new IntersectionObserver(onSectionEntry, sectionOptions);
sectionsTarget.forEach(section => sectionObserver.observe(section));

//###################################### Toggle light/dark theme  ##############################//
const themeToggleRef = document.querySelector('.js-theme-switch');
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
themeToggleRef.addEventListener('change', themeToggle);

//#################################### Images Intersection observer ##############################//


// const imagesTarget = Array.from(document.getElementsByTagName('img'));
// const onImageEntry = function (entries) {
//     console.log(entries);
//     for (entry of entries) {
//         if (entry.isIntersecting) {
//             entry.target.src = entry.target.dataset.src;
//             imageObserver.unobserve(entry.target);
//         };
//     }
// }
// const imagesOptions = {
//     root: null,
//     rootMargin: '0px 0px 20px 0px',
//     threshold: 0.01,
// }
// const imageObserver = new IntersectionObserver(onImageEntry, imagesOptions);
// imagesTarget.forEach(image => imageObserver.observe(image));

// console.log(document.getElementsByTagName('img'));