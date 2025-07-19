document.addEventListener("DOMContentLoaded", function () {
  const accommodationButton = document.querySelector(".accomodation-button");
  const spaButton = document.querySelector(".spa-button");
  const retreatsButton = document.querySelector(".Retreats-button");

  const bookingCal = document.querySelector(".booking-cal");
  const bookingSpa = document.querySelector(".booking-spa");
  const bookingRetreats = document.querySelector(".booking-retreats");

  const urlHash = window.location.hash;

  // Utility to remove 'active' and 'active-btn' from all sections and buttons
  function clearActiveStates() {
    [bookingCal, bookingSpa, bookingRetreats].forEach((el) =>
      el.classList.remove("active")
    );
    [accommodationButton, spaButton, retreatsButton].forEach((btn) =>
      btn.classList.remove("active-btn")
    );
  }

  // Main toggle logic
  function activateBooking(section, button) {
    clearActiveStates();
    section.classList.add("active");
    button.classList.add("active-btn");
  }

  // Add event listeners
  if (
    accommodationButton &&
    spaButton &&
    retreatsButton &&
    bookingCal &&
    bookingSpa &&
    bookingRetreats
  ) {
    accommodationButton.addEventListener("click", function () {
      activateBooking(bookingCal, accommodationButton);
    });

    spaButton.addEventListener("click", function () {
      activateBooking(bookingSpa, spaButton);
    });

    retreatsButton.addEventListener("click", function () {
      activateBooking(bookingRetreats, retreatsButton);
    });

    // Hash-based routing
    if (urlHash === "#spa") {
      activateBooking(bookingSpa, spaButton);
    } else if (urlHash === "#retreats") {
      activateBooking(bookingRetreats, retreatsButton);
    } else {
      activateBooking(bookingCal, accommodationButton); // default
    }
  }
});
