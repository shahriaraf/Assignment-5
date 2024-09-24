document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('modal');
    const openModalButton = document.getElementById('openModal-1');
    const closeModalButton = document.getElementById('closeModal');
    // const inputAmount = parseFloat(document.getElementById('input-1').value);
    // console.log(inputAmount)
    

    // Open modal
    openModalButton.addEventListener('click', function () {
        modal.classList.remove('hidden');
    

    });

    // Close modal
    closeModalButton.addEventListener('click', function () {
        modal.classList.add('hidden');
    });

});



      document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('modal');
    const openModalButton = document.getElementById('openModal-2');
    const closeModalButton = document.getElementById('closeModal');

    // Open modal
    openModalButton.addEventListener('click', function () {
        modal.classList.remove('hidden');
    });

    // Close modal
    closeModalButton.addEventListener('click', function () {
        modal.classList.add('hidden');
    });

});




      document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('modal');
    const openModalButton = document.getElementById('openModal-3');
    const closeModalButton = document.getElementById('closeModal');

    // Open modal
    openModalButton.addEventListener('click', function () {
        modal.classList.remove('hidden');
    });

    // Close modal
    closeModalButton.addEventListener('click', function () {
        modal.classList.add('hidden');
    });

});
