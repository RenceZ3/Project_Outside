let path = window.location.search;

document.addEventListener('DOMContentLoaded', function() {
    const addMovie = document.getElementById("addMovie-form");

    addMovie.addEventListener("submit", function(event) {
        event.preventDefault();

        const formData = new FormData(addMovie);

        const xhr = new XMLHttpRequest();
        xhr.open('POST', '../includes/add-movie.inc.php', true);

        xhr.onload = function() {
            const response = xhr.response;
            console.log(response);
            window.location.href = `../pages/admin-dashboard.php${path}`;
        }

        xhr.send(formData);
    });
});

const cancelBtn = document.getElementById("cancel");

cancelBtn.addEventListener("click", function() {
    window.location.href = `../pages/admin-dashboard.php${path}`;
});