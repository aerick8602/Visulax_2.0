let previousY = null;
const firstOpenStates = {
    preOrder: true,
    inOrder: true,
    postOrder: true
};

function toggleContent(id) {
    const element = document.getElementById(id);
    const contentContainer = document.getElementById(id + 'Content');

    const onMouseMove = (event) => {
        const currentY = event.clientY;

        if (firstOpenStates[id] && previousY !== null && currentY > previousY) {
            console.log('Mouse is moving downwards over ' + id);
            contentContainer.classList.add('active');
            firstOpenStates[id] = false;
            element.removeEventListener('mousemove', onMouseMove); // Remove listener after activation
        }

        previousY = currentY;
    };

    if (firstOpenStates[id]) {
        element.addEventListener('mousemove', onMouseMove);

        element.addEventListener('mouseleave', () => {
            previousY = null; // Reset the previousY when the mouse leaves the element
            element.removeEventListener('mousemove', onMouseMove); // Cleanup listener on leave
        });
    }
}

function toggleClick(id) {
    const contentContainer = document.getElementById(id + 'Content');
    if (contentContainer.classList.contains('active')) {
        contentContainer.classList.remove('active');
    } else {
        contentContainer.classList.add('active');
    }
}


document.getElementById('txt').addEventListener('input', calculateArrayLength);

function calculateArrayLength() {
    // Get the value from the textarea
    let input = document.getElementById('txt').value;

    // Remove the brackets and whitespace, then split the string into an array
    let array = input.replace(/\[|\]/g, '').split(',').map(item => item.trim());

    // Get the length of the array
    let arrayLength = array.length;
    const maxNodes = 30; // Set your limit here
    if (arrayLength > maxNodes) {
        alert(`The array is too large. Please limit the array to ${maxNodes} items.`);
        return; // Stop the process
    }
    console.log(arrayLength);
}

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
