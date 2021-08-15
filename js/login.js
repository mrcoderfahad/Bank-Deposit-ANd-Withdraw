document.getElementById('login-submit').addEventListener('click', function() {
    // Get User MAIL
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    
    // Get User Password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    
    if(userEmail == 'gangster@gmail.com' && userPassword == 'gangster'){
    window.location.href = 'banking.html'
    }
    
});

