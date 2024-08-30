// Access the login form using its ID
const loginForm = document.getElementById('loginForm');
const err = document.getElementById('err');

// Add a submit event listener to the form
loginForm.addEventListener('submit', function(event) {
event.preventDefault(); // Prevents form submission and page reload
        
const email = document.getElementById('username').value;
const password = document.getElementById('password').value;


if (!email || !/^([a-z\d\.-]+)@([a-z\d]+)\.([a-z]{2,8})$/.test(email)) {
    err.innerText = "Invalid email address.";
    return 
} 
else if (password.length < 6) {
    err.innerText = "Password length must be greater than 6";
    return
} 
else {
    err.innerText = ""; // Clears the error message if all validations pass
    const data = {
        username: email,
        password: password
    };
    // Send the data using fetch
    fetch('https://jsonplaceholder.typicode.com/posts', { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
         err.innerText="Login Success"
        return response.json();
    })
    .then(data => {
        console.log('Success:', data);
       
    })
    .catch((error) => {
        console.error('Error:', error);
        err.innerText = 'An error occurred. Please try again.';
    });
}
});

//Functionality for show/hide password
document.getElementById('showPassword').addEventListener('change', function() {
const passwordField = document.getElementById('password');
//Changing the passField type based on whether the checkbox is checked  
if (this.checked) {
    passwordField.type = 'text'; 
} else {
    passwordField.type = 'password';
}
});
