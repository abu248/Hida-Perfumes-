// Search functionality
document.getElementById('search-btn').addEventListener('click', function() {
    const searchInput = document.getElementById('search-input').value;
    if (searchInput) {
        alert('Searching for: ' + searchInput);
        // Here you can add the actual search functionality, like filtering products
    } else {
        alert('Please enter a search term');
    }
});

// Form submission
document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Feedback submitted successfully! Thank you, ' + name);
        // Here you can add functionality to actually send the feedback
        document.getElementById('feedback-form').reset();
    } else {
        alert('Please fill in all fields');
    }
});
