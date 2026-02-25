// CONTACT FORM FUNCTIONALITY (if any form added later)
document.addEventListener("DOMContentLoaded", function(){

  // ABOUT US ACCORDION
  var acc = document.querySelectorAll(".about-us .accordion");
  acc.forEach(function(button) {
    button.addEventListener("click", function() {
      // Close others
      acc.forEach(function(other) {
        if(other !== button){
          other.classList.remove("active");
          other.nextElementSibling.style.display = "none";
        }
      });
      // Toggle this panel
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if(panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  });

});
