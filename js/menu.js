document.addEventListener("DOMContentLoaded", function() {
    // Variables for reviews
    var reviews = document.querySelectorAll(".review");
    var currentIndex = 0;
    var reviewsToShow = 6;

    // Cache tous les avis sauf les trois premiers
    function updateReviews() {
        reviews.forEach((review, index) => {
            if (index >= currentIndex && index < currentIndex + reviewsToShow) {
                review.classList.remove("hidden");
                review.classList.add("visible");
            } else {
                review.classList.remove("visible");
                review.classList.add("hidden");
            }
        });
    }

    // Afficher les trois premiers avis au chargement de la page
    updateReviews();

    // Gérer le clic sur le bouton "prev-review"
    document.getElementById("prev-review").addEventListener("click", function() {
        if (currentIndex > 0) {
            currentIndex -= reviewsToShow;
            updateReviews();
        }
    });

    // Gérer le clic sur le bouton "next-review"
    document.getElementById("next-review").addEventListener("click", function() {
        if (currentIndex + reviewsToShow < reviews.length) {
            currentIndex += reviewsToShow;
            updateReviews();
        }
    });

    // Variables for modal
    var modal = document.getElementById("reservationModal");
    var btn = document.getElementById("openModal");
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal
    btn.onclick = function(event) {
        modal.style.display = "block";
        var rect = btn.getBoundingClientRect();
        modal.style.top = rect.bottom + window.scrollY + "px";
        modal.style.left = rect.left + window.scrollX + "px";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // When the form is submitted
    document.getElementById("reservationForm").onsubmit = function(event) {
        event.preventDefault();
        var datetime = document.getElementById("datetime").value;
        if(datetime) {
            window.location.href = "reservation.html?datetime=" + encodeURIComponent(datetime);
        }
    }

    // Variables for popups
    var horairesLink = document.getElementById("horairesLink");
    var horairesPopup = document.getElementById("horairesPopup");
    var connexionLink = document.getElementById("connexionLink");
    var connexionPopup = document.getElementById("connexionPopup");
    var connexionForm = document.getElementById("connexionForm");
    var errorMessage = document.getElementById("errorMessage");
    var defaultPassword = "123456"; // Définir le mot de passe par défaut

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

    connexionLink.addEventListener("click", function(event) {
        event.preventDefault();
        if (connexionPopup.style.display === "block") {
            connexionPopup.style.display = "none";
        } else {
            var rect = connexionLink.getBoundingClientRect();
            connexionPopup.style.top = (rect.bottom + window.scrollY) + "px";
            connexionPopup.style.left = Math.min(rect.left + window.scrollX, window.innerWidth - connexionPopup.offsetWidth - 10) + "px";
            connexionPopup.style.display = "block";
        }
    });

    connexionForm.addEventListener("submit", function(event) {
        event.preventDefault();
        var enteredPassword = document.getElementById("password").value;
        if (enteredPassword === defaultPassword) {
            window.location.href = "connexion.html"; // Rediriger vers la page de connexion
        } else {
            errorMessage.style.display = "block"; // Afficher le message d'erreur
        }
    });

    // Hide the popups when clicking outside of them
    document.addEventListener("click", function(event) {
        if (!horairesPopup.contains(event.target) && !horairesLink.contains(event.target)) {
            horairesPopup.style.display = "none";
        }
        if (!connexionPopup.contains(event.target) && !connexionLink.contains(event.target)) {
            connexionPopup.style.display = "none";
            errorMessage.style.display = "none"; // Cacher le message d'erreur
        }
    });
});
