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

    // console log the submitted data
    console.log('Submitted data:\nName: ' + name + '\nEmail: ' + email + '\nPhone: ' + phone + '\nMessage: ' + message);

    // Reset the form
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('message').value = '';

    return false; // Prevent form submission
}

function submitNewsletter(){
    var email = document.getElementById('email-newsletter').value;
    console.log('Submitted data:\nEmail: ' + email);
    document.getElementById('email-newsletter').value = '';
    return false;
}