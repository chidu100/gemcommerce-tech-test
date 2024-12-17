// JavaScript to handle click events and active state
document.querySelectorAll('.circle').forEach(circle => {
    circle.addEventListener('click', function() {
        // Remove active class from all circles
        document.querySelectorAll('.circle').forEach(c => c.classList.remove('active'));
        
        // Add active class to the clicked circle
        this.classList.add('active');
        
        // Optionally, get the selected color value
        const selectedColor = this.getAttribute('data-color');
        console.log('Selected color:', selectedColor); 
    });
});

// JavaScript to handle size selection
document.querySelectorAll('.size-option').forEach(size => {
    size.addEventListener('click', function() {
        // Remove active class from all sizes
        document.querySelectorAll('.size-option').forEach(s => s.classList.remove('active'));
        
        // Add active class to the clicked size
        this.classList.add('active');
        
        // Optionally, get the selected size value
        const selectedSize = this.getAttribute('data-size');
        console.log('Selected size:', selectedSize); 
    });
});


// Initialize the quantity variable
let quantity = 1;
const quantityDisplay = document.getElementById("quantity");

// Get the buttons
const minusButton = document.getElementById("minus-btn");
const plusButton = document.getElementById("plus-btn");

// Function to handle the minus button click
minusButton.addEventListener("click", function() {
    if (quantity > 1) { // Prevent going below 1
        quantity--;
        quantityDisplay.textContent = quantity;
    }
});

// Function to handle the plus button click
plusButton.addEventListener("click", function() {
    if (quantity < 100) { // Limit the quantity to 100
        quantity++;
        quantityDisplay.textContent = quantity;
    }
});


// TABS
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
  
    // Hide all tab contents
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Remove active class from all tab links
    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab and add the active class to the clicked tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Show the default tab (Overview) on page load
  document.getElementById("overview").style.display = "block";

  
//   Reviews
  let currentSlide = 0;
const slides = document.querySelectorAll('.review-slide');

// Function to move the slides
function moveSlide(step) {
  // Hide the current slide
  slides[currentSlide].classList.remove('active');
  
  // Calculate the next slide index
  currentSlide = (currentSlide + step + slides.length) % slides.length;
  
  // Show the next slide
  slides[currentSlide].classList.add('active');
}

// Initialize the first slide
slides[currentSlide].classList.add('active');

// FAQ
document.querySelectorAll('.faq-question').forEach((button) => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;

        // Toggle active class for the clicked item
        faqItem.classList.toggle('active');

        // Close other FAQ items if any are open
        document.querySelectorAll('.faq-item').forEach((item) => {
            if (item !== faqItem) {
                item.classList.remove('active');
            }
        });
    });
});
