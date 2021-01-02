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

function onEntry(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.transform = 'translateX(0px)';
            entry.target.style.opacity = '1.0';
        }
    })
}

const options = {
    root: null,
    threshold: 0.1,
};

const target = Array.from(document.getElementsByClassName('container-shift'));
const observer = new IntersectionObserver(onEntry, options);
target.forEach(element => observer.observe(element));
