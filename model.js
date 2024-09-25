

// Reuseable Function 2
// This is a reuseable function

document.addEventListener('DOMContentLoaded', function () {
    // Reusable function to handle modals
    function setupModal(openButtonId, closeButtonId, modalId) {
        const modal = document.getElementById('modal');
        const openModalButton = document.getElementById(openButtonId);
        const closeModalButton = document.getElementById('closeModal');

        // Open modal
        openModalButton.addEventListener('click', function () {
            modal.classList.remove('hidden');
        });

        // Close modal
        closeModalButton.addEventListener('click', function () {
            modal.classList.add('hidden');
        });
    }

    // Setup modals
    setupModal('openModal-1');
    setupModal('openModal-2');
    setupModal('openModal-3');
});