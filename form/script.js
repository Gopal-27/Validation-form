
document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();
    validateForm();
});

const formInputs = document.querySelectorAll('#registrationForm input');
formInputs.forEach(input => {
    input.addEventListener('change', function () {
        validateInput(this);
    });
});

function validateForm() {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (fullName.length < 5) {
        showError('Name must be at least 5 characters long.');
        return;
    }
    if (!email.includes('@')) {
        showError('Enter a valid email address.');
        return;
    }
    if (!/^\d{10}$/.test(phoneNumber) || phoneNumber === '123456789') {
        showError('Enter a valid 10-digit phone number.');
        return;
    }
    if (password.length < 8 || password === 'password' || password === fullName) {
        showError('Password must be at least 8 characters long and should not be "password" or your name.');
        return;
    }
    if (password !== confirmPassword) {
        showError('Passwords do not match.');
        return;
    }
    // if all are correct then this will be displayed
    alert('Registration successful!');
}

function validateInput(input) {
    const inputValue = input.value;
    const inputId = input.id;
    switch (inputId) {
        case 'fullName':
            if (inputValue.length >= 5) {
                hideError();
            }
            break;
        case 'email':
            if (inputValue.includes('@')) {
                hideError();
            }
            break;
        case 'phoneNumber':
                if (/^\d{10}$/.test(inputValue) && inputValue !== '123456789') {
                    hideError();
                } else {
                    showError('Enter a valid 10-digit phone number.');
                }
        case 'password':
            if (inputValue.length >= 8 && inputValue !== 'password') {
                hideError();
            }
            break;
        case 'confirmPassword':
            if (inputValue === document.getElementById('password').value) {
                hideError();
            }
            break;
    }
}

function showError(message) {
    alert(message); //to show error
}

function hideError() { 
}
