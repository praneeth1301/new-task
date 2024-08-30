#This project is a simple, responsive login page built using HTML, CSS, and JavaScript. The page includes form field validations, an option to show or hide the password, and is integrated with a mock API to simulate the login process.

#Features
Responsive Design: The login page is fully responsive, adapting to various screen sizes including mobile devices.
Form Validations: The form includes client-side validations for the email and password fields.
Validates the email format.
Ensures the password is at least 6 characters long.
Show/Hide Password: Users can toggle the visibility of the password field.
API Integration: The form is integrated with a mock API using fetch. A successful login simulates a success message, and errors are appropriately handled.

#Technologies Used
HTML5: For structuring the web page.
CSS3: For styling and ensuring the page is visually appealing and responsive.
JavaScript (ES6): For implementing form validations, handling the show/hide password functionality, and making API requests.


#How to Use
Open the Login Page:
Enter a valid email address and a password (minimum 6 characters).
If you make a mistake (e.g., invalid email or short password), an error message will appear in red.
Use the "Show Password" checkbox to toggle the visibility of the password field.
Click "Login" to submit the form. If the validation is successful, a "Login Success" message will appear. Errors will be displayed if any occur during the API request.
Project Structure
index.html: The main HTML file containing the structure of the login page.
login.css: The CSS file that styles the login page.
login.js: The JavaScript file that handles form validation, API interaction, and other functionalities.
