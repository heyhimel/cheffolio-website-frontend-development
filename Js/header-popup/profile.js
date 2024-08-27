$(document).ready(function () {
  // Toggle profile on button click
  $(".open-profile").on("click", function (e) {
      e.preventDefault();
      if (!$(this).hasClass("opened")) {
          // Open the profile pop-up
          $(".overlay").fadeIn(200); // Show the overlay
          $("#profile-body").show().animate({ width: "270px" }, 300); // Slide in the pop-up
          $(this).toggleClass("opened closed");
      }
  });

  // Close profile when clicking outside the pop-up
  $(document).click(function (e) {
      if (!$(e.target).closest("#profile-body, .open-profile").length) {
          if ($("#profile-body").is(":visible") && $(".open-profile").hasClass("opened")) {
              $("#profile-body").animate({ width: "0" }, 300, function () {
                  $(this).hide(); // Hide the pop-up after the animation completes
              });
              $(".overlay").fadeOut(200); // Hide the overlay
              $(".open-profile").removeClass("opened").addClass("closed");
          }
      }
  });
});



