function projectOpen() {
    let displayBlock = document.getElementById("project-popup");
    let backgroundEffect = document.getElementById("project-overlay");

    displayBlock.style.display = "block";
    backgroundEffect.style.display = "block";

    // Add event listener for clicks on the overlay
    backgroundEffect.addEventListener('click', function () {
        projectClose();
    });
}

function projectClose() {
    let displayBlock = document.getElementById("project-popup");
    let backgroundEffect = document.getElementById("project-overlay");

    displayBlock.style.display = "none";
    backgroundEffect.style.display = "none";
}
