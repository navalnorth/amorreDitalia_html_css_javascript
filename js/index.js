document.addEventListener("DOMContentLoaded", function() {
    // Variables for modal
    var modal = document.getElementById("reservationModal");
    var btn = document.getElementById("openModal");
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal
    btn.onclick = function(event) {
        event.preventDefault();
        modal.style.display = "block";
        var rect = btn.getBoundingClientRect();
        modal.style.top = rect.bottom + window.scrollY + "px";
        modal.style.left = rect.left + window.scrollX + "px";
    };

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    // When the form is submitted
    document.getElementById("reservationForm").onsubmit = function(event) {
        event.preventDefault();
        var datetime = document.getElementById("datetime").value;
        if (datetime) {
            window.location.href = "reservation.html?datetime=" + encodeURIComponent(datetime);
        }
    };

    // Variables for popups
    var horairesLink = document.getElementById("horairesLink");
    var horairesPopup = document.getElementById("horairesPopup");

    horairesLink.addEventListener("click", function(event) {
        event.preventDefault();
        if (horairesPopup.style.display === "block") {
            horairesPopup.style.display = "none";
        } else {
            var rect = horairesLink.getBoundingClientRect();
            horairesPopup.style.top = (rect.bottom + window.scrollY) + "px";
            horairesPopup.style.left = Math.min(rect.left + window.scrollX, window.innerWidth - horairesPopup.offsetWidth - 10) + "px";
            horairesPopup.style.display = "block";
        }
    });

    // Hide the popups when clicking outside of them
    document.addEventListener("click", function(event) {
        if (!horairesPopup.contains(event.target) && !horairesLink.contains(event.target)) {
            horairesPopup.style.display = "none";
        }
        if (!modal.contains(event.target) && event.target != btn) {
            modal.style.display = "none";
        }
    });
});

let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    const slidesContainer = document.querySelector('.slides');
    if (index >= totalSlides) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }
    slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}


setInterval(nextSlide, 5000);

