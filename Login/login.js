document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    // Process the login form data (e.g., send it to a server)
    console.log('Form submitted:', { email, password, confirmPassword });
});
