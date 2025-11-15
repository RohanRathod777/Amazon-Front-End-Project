// Get a reference to the button element
const nextPageButton = document.getElementById('signin');

// Add an event listener for the 'click' event
nextPageButton.addEventListener('click', function (e) {
      // Change the window's location to the URL of the next page
      window.location.href = 'login.html'; // Replace with your desired page
});