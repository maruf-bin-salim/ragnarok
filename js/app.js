// Sliding functionality
const reviewGrids = document.querySelectorAll('.review-grid');

reviewGrids.forEach((grid) => {
    const slider = grid.querySelector('.slider-inner');
    const sliderItems = grid.querySelectorAll('.slider-item');
    const dots = grid.querySelectorAll('.dot');

    let currentIndex = 0;

    const showSlide = (index) => {
        slider.style.transform = `translateX(-${index * 100}%)`;
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    };

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            currentIndex = i;
            showSlide(currentIndex);
        });
    });
});



function submitForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;

    // You can perform further validation here if needed

    // Create the JSON payload
    var payload = {
        name: name,
        email: email,
        phone: phone,
        message: message
    };

    // Send the form data to the endpoint
    fetch('https://ragnarok-backend.netlify.app/api/send-form-data-mail', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
    })
        .then(function (response) {
            if (response.ok) {
                console.log('Form data submitted successfully');
                // Reset the form
                document.getElementById('name').value = '';
                document.getElementById('email').value = '';
                document.getElementById('phone').value = '';
                document.getElementById('message').value = '';
            } else {
                console.log('Failed to submit form data');
            }
        })
        .catch(function (error) {
            console.error('Error:', error);
        });

    return false; // Prevent form submission
}

function submitNewsletter() {
    var email = document.getElementById('email-newsletter').value;
    console.log('Submitted data:\nEmail: ' + email);


    // you can perform further validation here if needed

    // Create the JSON payload
    var payload = {
        email: email
    };

    // Send the form data to the endpoint
    fetch('https://ragnarok-backend.netlify.app/api/send-newsletter-mail', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
    })
        .then(function (response) {
            if (response.ok) {
                console.log('Form data submitted successfully');
                // Reset the form
                document.getElementById('email-newsletter').value = '';
            } else {
                console.log('Failed to submit form data');
            }
        }
        )
        .catch(function (error) {
            console.error('Error:', error);
        }
        );
    return false; // Prevent form submission
}