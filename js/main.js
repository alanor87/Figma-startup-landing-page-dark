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


//#################################### Intersection observer ##############################//
const thresholdArray = [];
for (let i = 0; i <= 100; i += 1) thresholdArray.push(i / 100);

function onEntry(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.transform = 'translateX(0px)';
            entry.target.style.opacity = entry.intersectionRatio + 0.3;
        }
    })
}
const options = {
    root: null,
    threshold: thresholdArray,
};

const target = Array.from(document.getElementsByClassName('container-shift'));
const observer = new IntersectionObserver(onEntry, options);
target.forEach(element => observer.observe(element));
