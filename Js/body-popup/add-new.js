function addImage() {
    let displayBlock = document.getElementById("add-image-popup");
    let backgroundEffect = document.getElementById("add-image-overlay");

    displayBlock.style.display = "block";
    backgroundEffect.style.display = "block";

    // Add event listener for clicks on the overlay
    backgroundEffect.addEventListener('click', function () {
        imageClose();
    });
}

function imageClose() {
    let displayBlock = document.getElementById("add-image-popup");
    let backgroundEffect = document.getElementById("add-image-overlay");

    displayBlock.style.display = "none";
    backgroundEffect.style.display = "none";
}
