---
title: Book Now
permalink: "/book-now/"
layout: default
---

<section id="book-now">
  <div class="about">
    <h2>{{ page.title }}</h2>
  </div>

  <div class="booking-toggle flex">
    <div class="btn accomodation-button active-btn">Accommodation</div>
    <div class="btn spa-button">Spa Days</div>
    <div class="btn Retreats-button">Retreats</div>
  </div>

  <div class="platform booking-cal active">
    <div
      data-calendar-key="E55755E8B4F2753BF0525E801AA3DDE4932565249BE8DE0E1A4179AD7D69345D170EEF11BFBC38B3A7A51585C16A08CFEC6525BEA3AB1235"
      data-calendar-departure-picker="true"
      data-calendar-mobile-grid="true"
    >
      Your widget will appear here.
    </div>
    <script src="https://secure.supercontrol.co.uk/components/embed.js"></script>
  </div>

  <div class="platform booking-spa">
    <iframe
      src="https://www.supersaas.com/schedule/IntheStix/Spa_Days?view=free"
      width="100%"
      height="800"
    ></iframe>
  </div>

  <div class="platform booking-retreats">
    <iframe
      src="https://www.supersaas.com/schedule/IntheStix/retreats?view=free"
      width="100%"
      height="800"
    ></iframe>
  </div>
</section>

{% raw %}

<script>
  document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".booking-toggle .btn");
    const platforms = document.querySelectorAll(".platform");

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        buttons.forEach((btn) => btn.classList.remove("active-btn"));
        platforms.forEach((pf) => pf.classList.remove("active"));

        button.classList.add("active-btn");

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
</script>

<style>
  .platform {
    display: none;
  }
  .platform.active {
    display: block;
  }
</style>

{% endraw %}
