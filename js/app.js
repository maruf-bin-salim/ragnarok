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
