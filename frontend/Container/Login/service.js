
const showLoader = () => {
    document.querySelector('.loader').style.display = 'block';
    document.querySelector('.main-container').classList.add('blurred');
};

const hideLoader = () => {
    document.querySelector('.loader').style.display = 'none';
    document.querySelector('.main-container').classList.remove('blurred');
};

const signup = async () => {
    const name = document.querySelector('.name').value;
    const email = document.querySelector('.mail').value;
    const password = document.querySelector('.password').value;

    showLoader();

    try {
        const response = await axios.post(`${BASE_URL}/signUp`, {
            name: name,
            email: email,
            password: password
        });

        console.log('Details uploaded successfully', response.data);
        alert('Sign Up Successful');
        window.location.href = `../../index.html?email=${email}`;

    } catch (error) {
        console.error('Error uploading Detail:', error.response ? error.response.data : error.message);
        const errorMsg = error.response && error.response.data && error.response.data.msg
            ? error.response.data.msg
            : error.message;
        alert(`Sign Up Failed: ${errorMsg}`);
    } finally {
        hideLoader();
    }
};

const signin = async () => {
    const email = document.getElementById('emailInput').value;
    const password = document.getElementById('passwordInput').value;

    showLoader();

    try {
        const response = await axios.post(`${BASE_URL}/signIn`, {
            email: email,
            password: password
        });

        console.log('Signing in successfully', response.data);
        alert('Sign In Successful');
        window.location.href = `../../index.html?email=${email}`;

    } catch (error) {
        console.error('Error signing in:', error.response ? error.response.data : error.message);
        const errorMsg = error.response && error.response.data && error.response.data.msg
            ? error.response.data.msg
            : error.message;
        alert(`Sign In Failed: ${errorMsg}`);
    } finally {
        hideLoader();
    }
};
