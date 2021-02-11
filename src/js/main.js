
import "../sass/main.scss";
import "./theme-toggle";
import "./intersection-observer";


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
