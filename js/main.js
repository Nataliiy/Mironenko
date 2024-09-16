// Global JS

document.addEventListener('DOMContentLoaded', function() {
    document.body.addEventListener('click', function(event) {
        // Check if the clicked element has the class "js-form-validation"
        if (event.target.classList.contains('js-form-validation')) {
            var bookingForm = document.querySelector('.js-booking-form');

            // Check if the form is valid
            if (bookingForm.checkValidity()) {
                event.preventDefault();
                // Add 'd-none' class to the clicked element
                event.target.classList.add('d-none');

                // Remove 'd-none' class from the submit button 
                var submitButton = document.querySelector('.js-form-submit');
                submitButton.classList.remove('d-none');

                // Trigger a click on the submit button
                submitButton.click();
            }
        }

        // Check if the clicked element has the class "js-clean-form"
        if (event.target.classList.contains('js-clean-form')) {
            // Locate the form within the modal (if necessary)
            var bookingForm = document.querySelector('.js-booking-form');

            // Reset the form fields
            bookingForm.reset();

            // Hde the submit button and show validate
            var submitButton = document.querySelector('.js-form-submit');
            var validateButton = document.querySelector('.js-form-validation');
            submitButton.classList.add('d-none');
            validateButton.classList.remove('d-none');
        }

        // Handle subscription
        if (event.target.classList.contains('js-subscribe-validation')) {
            var subscribeForm = document.querySelector('.js-subscribe-form');

            // Check if the form is valid
            if (subscribeForm) {
                if (subscribeForm.checkValidity()) {
                    // Prevent default form submission behavior
                    event.preventDefault();

                    // Remove 'd-none' class from the success message 
                    var successSubscribe = document.querySelector('.js-subscribe-submitted');
                    if (successSubscribe) {
                        successSubscribe.classList.remove('d-none');
                    }
                }
            }
        }
    });
});
