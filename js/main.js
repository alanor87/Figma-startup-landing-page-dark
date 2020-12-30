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

function onEntry(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log('HereI am');
            entry.target.style.transform = 'translateY(0)';
        }
    })
}


let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2,
};

let target = Array.from(document.getElementsByTagName('section'));
let observer = new IntersectionObserver(onEntry, options);
target.forEach(element => observer.observe(element));
