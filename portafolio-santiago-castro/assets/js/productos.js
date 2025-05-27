document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.product-item a').forEach(link => {
        link.addEventListener('click', () => {
            console.log('Producto comprado: ' + link.textContent);
        });
    });
});