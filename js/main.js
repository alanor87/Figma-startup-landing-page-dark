(() => {
    const toggleModal = function () {
        refs.modal.classList.toggle('is-hidden');
    }
    const refs = {
        openModalClick: document.querySelector("[open-modal]"),
        closeModalClick: document.querySelectorAll("[close-modal]"),
        modal: document.querySelector("[modal]"),
    }

    refs.openModalClick.addEventListener('click', toggleModal);
    for (ref of refs.closeModalClick) {
        ref.addEventListener('click', toggleModal);
    };


})();

//#################################### Sections Intersection observer ##############################//

function onSectionEntry(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.transform = 'translateX(0px)';
            entry.target.style.opacity = '1.0';
        }
    })
}
const sectionOptions = {
    root: null,
    threshold: 0.1,
};
const sectionsTarget = Array.from(document.getElementsByClassName('container-shift'));
const sectionObserver = new IntersectionObserver(onSectionEntry, sectionOptions);
sectionsTarget.forEach(section => sectionObserver.observe(section));


//#################################### Images Intersection observer ##############################//

// const onImageEntry = function (entries) {
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
// const imagesTarget = Array.from(document.getElementsByTagName('img'));
// const imageObserver = new IntersectionObserver(onImageEntry, imagesOptions);
// imagesTarget.forEach(image => imageObserver.observe(image));

// console.log(document.getElementsByTagName('img'));