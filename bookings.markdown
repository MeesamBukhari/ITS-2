---
title: Book Now
permalink: "/book-now/"
layout: default
---

<section id="book-now">
  <div class="about">
    <h2>{{ page.title }}</h2>
  </div>

  <!-- Toggle Buttons -->
  <div class="booking-toggle flex">
    <div class="btn accomodation-button btn-active">Accommodation</div>
    <div class="btn spa-button">Spa Days</div>
    <div class="btn retreats-button">Retreats</div>
  </div>

  <!-- Accommodation Calendar -->
  <div class="platform booking-cal" style="display: block;">
    <div
      data-calendar-key="E55755E8B4F2753BF0525E801AA3DDE4932565249BE8DE0E1A4179AD7D69345D170EEF11BFBC38B3A7A51585C16A08CFEC6525BEA3AB1235"
      data-calendar-departure-picker="true"
      data-calendar-mobile-grid="true"
    >
      Your widget will appear here.
    </div>
    <script src="https://secure.supercontrol.co.uk/components/embed.js"></script>
  </div>

  <!-- Spa Days iFrame -->
  <div class="platform booking-spa" style="display: none;">
    <iframe
      src="https://www.supersaas.com/schedule/IntheStix/Spa_Days?view=free"
      width="100%"
      height="800"
    ></iframe>
  </div>

  <!-- Retreats iFrame -->
  <div class="platform booking-retreats" style="display: none;">
    <iframe
      src="https://www.supersaas.com/schedule/IntheStix/retreats?view=free"
      width="100%"
      height="800"
    ></iframe>
  </div>
</section>

<script>
  document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".booking-toggle .btn");
    const platforms = {
      "accomodation-button": document.querySelector(".booking-cal"),
      "spa-button": document.querySelector(".booking-spa"),
      "retreats-button": document.querySelector(".booking-retreats"),
    };

    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        // Remove btn-active from all buttons
        buttons.forEach((btn) => btn.classList.remove("btn-active"));

        // Hide all platform sections
        Object.values(platforms).forEach((el) => (el.style.display = "none"));

        // Add active class to clicked button
        this.classList.add("btn-active");

        // Show the matching platform section
        for (const key in platforms) {
          if (this.classList.contains(key)) {
            platforms[key].style.display = "block";
            break;
          }
        }
      });
    });
  });
</script>
