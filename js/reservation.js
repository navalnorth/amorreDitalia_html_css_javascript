document.addEventListener("DOMContentLoaded", function() {
    // Récupérer les paramètres d'URL
    const urlParams = new URLSearchParams(window.location.search);
    const datetime = urlParams.get('datetime');
    
    // Afficher le message avec la date et l'heure choisies
    if (datetime) {
        const messageElement = document.getElementById('reservationMessage');
        const formattedDatetime = new Date(datetime).toLocaleString('fr-FR', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric'
        });
        messageElement.textContent = `Vous avez réservé pour ${formattedDatetime}.`;
    }
});