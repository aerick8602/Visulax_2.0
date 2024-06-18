document.addEventListener("DOMContentLoaded", function () {
    const nQueenLink = document.getElementById("nQueenLink");
    const ratInMazeLink = document.getElementById("ratInMazeLink");
    const nQueenContent = document.getElementById("nQueenContent");
    const ratInMazeContent = document.getElementById("ratInMazeContent");

    nQueenLink.addEventListener("click", function (event) {
        event.preventDefault();
        nQueenContent.style.display = "block";
        ratInMazeContent.style.display = "none";
        nQueenLink.classList.add("active");
        ratInMazeLink.classList.remove("active");
    });

    ratInMazeLink.addEventListener("click", function (event) {
        alert("This feature is not yet available. Please check back later.")
        event.preventDefault();
        ratInMazeContent.style.display = "block";
        nQueenContent.style.display = "none";
        ratInMazeLink.classList.add("active");
        nQueenLink.classList.remove("active");
    });
});
function support() {
    Swal.fire({
        imageUrl: '../../../images/Ty.png',
        imageHeight: 230,
        imageWidth: 380,
        padding: 0,
        width: 380,
        height: 230,
        showConfirmButton: false, // Hide the OK button
        showCloseButton: true, // Show the close (cross) button
        customClass: {
            popup: 'custom-popup',
            title: 'custom-title'
        },
    });
}

