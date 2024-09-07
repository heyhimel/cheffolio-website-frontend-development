// Select the button element by its ID
function downAngle()
{
    let button = document.getElementById('collapseButton');

    // Access the third div inside the button element
    let thirdDiv = button.querySelectorAll('div')[2];

    // Find the icon element within the third div
    let icon = thirdDiv.querySelector('i');

    console.log(icon.className);
    // Change the icon from down angle to up angle
    if(icon.className == "fa fa-angle-down"){
        icon.classList.remove('fa-angle-down');
        icon.classList.add('fa-angle-up');
    }
    else{
        icon.classList.remove('fa-angle-up');
        icon.classList.add('fa-angle-down');
    }
    
}


// see more and see less text option
function seeMore()
{
    let text = document.getElementById("about-text");
    let seeBtnLess = document.getElementById("seeBtn");
    if(text.style.display != "block")
    {
        text.style.display = "block";
        seeBtnLess.innerHTML = "See less";
    }
    else
    {
        text.style.display = "none";
        seeBtnLess.innerHTML = "See more...";
    }
}