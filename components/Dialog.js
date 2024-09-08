// Dialog.js
export function setupDialog() {
    const dialogDiv = document.getElementById("dialog");

    document.addEventListener("DOMContentLoaded", function () {
        dialogDiv.classList.add('show');
        dialogDiv.showModal();
    });

    const newBookButton = document.getElementById("newBookButton");
    newBookButton.addEventListener('click', () => {
        dialogDiv.showModal();
    });
}
