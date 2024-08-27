
const clickBtn = document.getElementById("clickBtn");
const popup = document.getElementById("noti-popup");
const overlay = document.getElementById("overlay-noti");

// Show popup and overlay-noti
clickBtn.addEventListener('click', () => {
    popup.classList.add('active');
    overlay.classList.add('active');
});

// Close popup when clicking outside of it or on the overlay-noti
overlay.addEventListener('click', () => {
    popup.classList.remove('active');
    overlay.classList.remove('active');
});

// Prevent closing when clicking inside the popup content
popup.addEventListener('click', (e) => {
    e.stopPropagation();
});
