document.querySelectorAll('.button-saiba-mais').forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.showModal();
    });
});

document.querySelectorAll('.modal-close').forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('dialog');
        modal.close();
    });
});