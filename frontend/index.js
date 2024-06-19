
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('fade-in');
});

// Get the current URL
var url = window.location.href;
// Use URLSearchParams to extract query parameters
var params = new URLSearchParams(url.split('?')[1]);
// Get the value of the 'email' parameter
var email = params.get('email');
// Output the extracted email
console.log(email);


// Handle the link click to add fade-out effect
function handleLinkClick(event) {
    event.preventDefault(); // Prevent the default link behavior
    const link = event.currentTarget;

    // Add the fade-out class to the body
    document.body.classList.add('fade-out');

    // Wait for the animation to complete before navigating
    setTimeout(() => {
        if (email != null) {
            window.location.href = link.href;
        }
        else {

            // alert("Oops! It looks like you're not logged in yet.\n\nTo access this feature, please log in first.\n\nClick OK to proceed to the login page.");
            alert("Oops! It looks like you're not logged in yet.\n\nTo access this feature, please log in first.");
            window.location.href = './Container/Login/login.html';
        }

    }, 500); // Duration should match the animation duration (0.5s)
}
function support() {
    Swal.fire({
        imageUrl: './images/Ty.png',
        imageHeight: 230,
        imageWidth: 380,
        width: 380,
        height: 230,
        padding: 0,
        showConfirmButton: false, // Hide the OK button
        showCloseButton: true, // Show the close (cross) button
        customClass: {
            popup: 'custom-popup',
            title: 'custom-title'
        },
    });
}


window.addEventListener('pageshow', function (event) {
    // Check if the page is being loaded from the cache
    if (event.persisted) {
        // Reload the page to ensure fresh content
        window.location.reload();
    }
});

