/* 
Inquiry Form Validation
MDN Web Docs (2025): Form validation, DOM manipulation, and event handling. Available at: https://developer.mozilla.org/
W3Schools (2025): JavaScript HTML DOM Form Validation. Available at: https://www.w3schools.com/
*/

// Get the references to the form and its elements (using your exact HTML IDs)
const inquiryForm = document.getElementById('inquiryForm');
const fullNameInput = document.getElementById('user-name');
const emailInput = document.getElementById('user-email');
const phoneInput = document.getElementById('phone');
const inquiryTypeInput = document.getElementById('inquiryType');
const subjectInput = document.getElementById('subject');
const messageInput = document.getElementById('user-message');
const agreeTermsInput = document.getElementById('agreeTerms');

// Get references to the error span elements
const nameErrorSpan = document.getElementById('nameError');
const emailErrorSpan = document.getElementById('emailError');
const phoneErrorSpan = document.getElementById('phoneError');
const typeErrorSpan = document.getElementById('typeError');
const subjectErrorSpan = document.getElementById('subjectError');
const messageErrorSpan = document.getElementById('messageError');
const termsErrorSpan = document.getElementById('termsError');

// Add an event listener to the form's submit button
if (inquiryForm) {
    inquiryForm.addEventListener("submit", function (event) {

        // Prevent default form submission so we can validate it first
        event.preventDefault();

        // Assume the form is valid initially
        var isValid = true;

        // Clear any previous error messages
        if (nameErrorSpan) nameErrorSpan.innerHTML = '';
        if (emailErrorSpan) emailErrorSpan.innerHTML = '';
        if (phoneErrorSpan) phoneErrorSpan.innerHTML = '';
        if (typeErrorSpan) typeErrorSpan.innerHTML = '';
        if (subjectErrorSpan) subjectErrorSpan.innerHTML = '';
        if (messageErrorSpan) messageErrorSpan.innerHTML = '';
        if (termsErrorSpan) termsErrorSpan.innerHTML = '';

        // 1. Validate Full Name field
        if (fullNameInput && fullNameInput.value.trim() === '') {
            nameErrorSpan.innerHTML = 'Full Name is required.';
            isValid = false;
        }

        // 2. Validate Email field
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput && emailInput.value.trim() === '') {
            emailErrorSpan.innerHTML = 'Email Address is required.';
            isValid = false;
        } else if (emailInput && !emailPattern.test(emailInput.value.trim())) {
            emailErrorSpan.innerHTML = 'Please enter a valid email address.';
            isValid = false;
        }

        // 3. Validate Phone Number field
        var phonePattern = /^[\d\s\-\+\(\)]{10,}$/;
        if (phoneInput && phoneInput.value.trim() === '') {
            phoneErrorSpan.innerHTML = 'Phone number is required.';
            isValid = false;
        } else if (phoneInput && !phonePattern.test(phoneInput.value.trim())) {
            phoneErrorSpan.innerHTML = 'Please enter a valid phone number (at least 10 digits).';
            isValid = false;
        }

        // 4. Validate Inquiry Type selection
        if (inquiryTypeInput && inquiryTypeInput.value === '') {
            typeErrorSpan.innerHTML = 'Please select an inquiry type.';
            isValid = false;
        }

        // 5. Validate Subject field
        if (subjectInput && subjectInput.value.trim() === '') {
            subjectErrorSpan.innerHTML = 'Subject is required.';
            isValid = false;
        }

        // 6. Validate Message field
        if (messageInput && messageInput.value.trim() === '') {
            messageErrorSpan.innerHTML = 'Message is required.';
            isValid = false;
        }

        // 7. Validate Terms Checkbox
        if (agreeTermsInput && !agreeTermsInput.checked) {
            termsErrorSpan.innerHTML = 'You must agree to be contacted.';
            isValid = false;
        }

        // If the form is valid, construct mailto link and launch Outlook
        if (isValid) {
            var fullName = fullNameInput.value.trim();
            var email = emailInput.value.trim();
            var phone = phoneInput.value.trim();
            var inquiryType = inquiryTypeInput.value;
            var subject = subjectInput.value.trim();
            var message = messageInput.value.trim();

            // Specify the recipient email address
            var recipient = "ST1052098@myemeris.edu.za";

            // Create email subject
            var emailSubject = "Sportsmans Warehouse Inquiry: " + subject + " (" + inquiryType + ")";

            // Create email message body
            var body = "Good day Sportsmans Warehouse Team,\n\n" +
                "My inquiry details are as follows:\n\n" +
                "Full Name: " + fullName + "\n" +
                "Email Address: " + email + "\n" +
                "Phone Number: " + phone + "\n" +
                "Inquiry Type: " + inquiryType + "\n\n" +
                "Message:\n" + message + "\n\n" +
                "Kind regards,\n" + fullName;

            // Create the mailto link
            var mailtoLink = "mailto:" + recipient +
                "?subject=" + encodeURIComponent(emailSubject) +
                "&body=" + encodeURIComponent(body);

            // Open the user's default email application (Outlook)
            window.location.href = mailtoLink;

            // Clear the form fields after triggering Outlook
            inquiryForm.reset();
        }

    });
}