document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const sectionId = event.target.getAttribute('href').substring(1);
            const section = document.getElementById(sectionId);
            if (section) {
                alert(`'${section.querySelector('h2').textContent}' 섹션으로 이동합니다.`);
                window.scrollTo(0, section.offsetTop);
            }
        });
    });
});
