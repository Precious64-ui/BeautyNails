// 1. Setup the Login popup
  document.getElementById('loginBtn').addEventListener('click', function(event) {
    event.preventDefault();
    alert("Login portal opening...");
  });

  // 2. Setup the Book Now popup
  document.getElementById('bookBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevents the page from jumping
    alert("Booking form loading...");
    // You can add logic here to show your booking form div
    // e.g., document.getElementById('myBookingForm').style.display = 'block';
  });
