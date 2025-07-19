document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".booking-toggle .btn");
  const platforms = document.querySelectorAll(".platform");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active styling
      buttons.forEach((btn) => btn.classList.remove("active-btn"));
      platforms.forEach((pf) => pf.classList.remove("active"));

      // Add active styling to clicked button
      button.classList.add("active-btn");

      // Activate corresponding platform
      if (button.classList.contains("accomodation-button")) {
        document.querySelector(".booking-cal").classList.add("active");
      } else if (button.classList.contains("spa-button")) {
        document.querySelector(".booking-spa").classList.add("active");
      } else if (button.classList.contains("Retreats-button")) {
        document.querySelector(".booking-retreats").classList.add("active");
      }
    });
  });
});
