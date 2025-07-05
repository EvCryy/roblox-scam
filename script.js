// script.js

// Get form elements
const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('errorMessage');

// Simulate a database of users (For demo purposes)
const users = [
    { username: 'robloxlove', password: '1234' },
    { username: 'gamingking', password: 'abcd' },
];

// Handle form submission
loginForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page refresh

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if the username and password match
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        // Successful login
        alert('Welcome to Roblox, ' + username + '!');
        window.location.href = 'https://www.roblox.com'; // Redirect to Roblox homepage or game
    } else {
        // Show error message
        errorMessage.classList.remove('hidden');
    }
});
