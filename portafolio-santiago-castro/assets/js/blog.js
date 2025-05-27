document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.read-more').forEach(button => {
        button.addEventListener('click', () => {
            const story = button.parentElement;
            const fullStory = story.querySelector('.full-story');
            const isExpanded = button.getAttribute('aria-expanded') === 'true';
            fullStory.style.display = isExpanded ? 'none' : 'block';
            button.setAttribute('aria-expanded', !isExpanded);
            button.textContent = isExpanded ? 'Leer más' : 'Ocultar';
        });
    });
});