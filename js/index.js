document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if(!username || !password) {
            alert("Invalid credentials");
            return;
        }

        const xhr = new XMLHttpRequest();

        xhr.open('POST', './includes/users.inc.php', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        xhr.onload = function() {
            const response = JSON.parse(xhr.responseText);
            if(xhr.status === 200) {
                window.location.href = "./pages/dashboard.php";
            }else {
                alert(response.message);    
            }
        }

        xhr.send('username=' + encodeURIComponent(username) + '&password=' + encodeURIComponent(password));

    });
});