function msgShow() {
    let displayBlock = document.getElementById("msg-popup");
    let backgroundEffect = document.getElementById("msg-overlay");

    displayBlock.style.display = "block";
    backgroundEffect.style.display = "block";

    // Add event listener for clicks on the overlay
    backgroundEffect.addEventListener('click', function () {
        msgClose();
    });
}

function msgClose() {
    let displayBlock = document.getElementById("msg-popup");
    let backgroundEffect = document.getElementById("msg-overlay");

    displayBlock.style.display = "none";
    backgroundEffect.style.display = "none";
}
