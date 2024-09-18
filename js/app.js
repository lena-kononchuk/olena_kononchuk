// Initially steps
document.addEventListener('DOMContentLoaded', function () {
   const steps = document.querySelectorAll('.section__step');
   const charactersStep1 = document.querySelector('.section__characters--step-1');
   const charactersStep3 = document.querySelector('.section__characters--step-3');
   const noThanksButton = document.getElementById('no-thanks');

   function showStep(stepNumber) {
      // Remove active classes from all steps
      steps.forEach(step => step.classList.remove('section__step--active'));
      // Add active class to the current step
      document.querySelector(`.section__step--${stepNumber}`).classList.add('section__step--active');

      // Hide characters for all steps
      charactersStep1.style.display = 'none';
      charactersStep3.style.display = 'none';

      // Show characters for the current step
      if (stepNumber === 1) {
         charactersStep1.style.display = 'flex';
         noThanksButton.disabled = true; // Disable button on the first step
      } else if (stepNumber === 2) {
         noThanksButton.disabled = false; // Enable button on the second step
      } else if (stepNumber === 3) {
         charactersStep3.style.display = 'flex';
         noThanksButton.disabled = true; // Disable button on the third step
      }
   }

   // Event listeners for step navigation buttons
   document.getElementById('next-1').addEventListener('click', () => showStep(2));
   document.getElementById('no-thanks').addEventListener('click', () => showStep(2));
   document.getElementById('next-2').addEventListener('click', () => showStep(3));
   document.getElementById('continue-3').addEventListener('click', () => alert('Continue button clicked'));

   // Initially show the first step
   showStep(1);
});




// Sound icon toggle
document.addEventListener('DOMContentLoaded', function () {
   const soundIcon = document.querySelector('.sound-icon');

   soundIcon.addEventListener('click', function () {
      soundIcon.classList.toggle('active');
   });
});





// Swiper initialization
document.addEventListener('DOMContentLoaded', function () {
   // Initialize Swiper with keyboard support enabled
   const swiper = new Swiper('.mySwiper', {
      loop: true,  // Enables looping of slides
      speed: 500,  // Transition speed between slides
      pagination: {
         clickable: true,  // Makes pagination bullets clickable
      },
      // Enable keyboard navigation
      keyboard: {
         enabled: true,  // Enable keyboard control
         onlyInViewport: true,  // Only activate keyboard control if swiper is visible in the viewport
      },
   });

   // Event listeners for custom navigation arrows
   const nextButton = document.querySelector('.custom-swiper-button-next');
   const prevButton = document.querySelector('.custom-swiper-button-prev');

   // Move to the next slide when the custom "next" button is clicked
   nextButton.addEventListener('click', function () {
      swiper.slideNext();  // Go to the next slide
   });

   // Move to the previous slide when the custom "prev" button is clicked
   prevButton.addEventListener('click', function () {
      swiper.slidePrev();  // Go to the previous slide
   });

   // Additional keyboard event handler to capture arrow key presses
   document.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') {
         swiper.slideNext();  // Navigate to the next slide with the right arrow key
      } else if (e.key === 'ArrowLeft') {
         swiper.slidePrev();  // Navigate to the previous slide with the left arrow key
      }
   });
});

