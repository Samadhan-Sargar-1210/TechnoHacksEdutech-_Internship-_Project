function validateForm() {
    // Reset error messages
    resetErrors();

    // Get input values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validate username
    if (username.length < 3) {
        displayError('usernameError', 'Username must be at least 3 characters');
        return;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        displayError('emailError', 'Invalid email format');
        return;
    }

    // Validate password
    if (password.length < 6) {
        displayError('passwordError', 'Password must be at least 6 characters');
        return;
    }

    // Validate confirmPassword
    if (confirmPassword !== password) {
        displayError('confirmPasswordError', 'Passwords do not match');
        return;
    }

    // If all validations pass, show success prompt
    showSuccessPrompt();
}

function displayError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.style.height = '20px';
}

function resetErrors() {
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(element => {
        element.textContent = '';
        element.style.height = '0';
    });
}

function showSuccessPrompt() {
    const successPrompt = document.getElementById('successPrompt');
    successPrompt.style.display = 'block';
    setTimeout(() => {
        successPrompt.style.display = 'none';
    }, 5000);
}
