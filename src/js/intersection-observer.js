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