// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const messageField = document.getElementById('message');
    const successMessage = document.getElementById('success-message');
    const errorMessage = document.getElementById('error-message');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Clear previous messages
        successMessage.textContent = '';
        errorMessage.textContent = '';

        // Validate form inputs
        const name = nameField.value.trim();
        const email = emailField.value.trim();
        const message = messageField.value.trim();

        if (name === '' || email === '' || message === '') {
            errorMessage.textContent = 'All fields are required.';
            return;
        }

        if (!validateEmail(email)) {
            errorMessage.textContent = 'Please enter a valid email address.';
            return;
        }

        // Simulate form submission
        sendFormData(name, email, message);
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    function sendFormData(name, email, message) {
        // Simulate AJAX form submission
        setTimeout(() => {
            successMessage.textContent = 'Thank you for contacting us, ' + name + '! We will get back to you soon.';
            contactForm.reset();
        }, 1000);
    }

    // Menu toggle functionality
    const menuToggle = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');

    menuToggle.addEventListener('click', () => {
        navList.classList.toggle('showing');
    });
});
