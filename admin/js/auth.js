// ====================================
// AUTHENTICATION SYSTEM
// ====================================

// Demo credentials (in production, use backend authentication)
const DEMO_CREDENTIALS = {
  username: 'admin',
  password: 'admin123'
};

// Check if user is already logged in
function checkAuth() {
  const isLoggedIn = localStorage.getItem('adminLoggedIn');
  const currentPage = window.location.pathname;

  if (isLoggedIn === 'true' && currentPage.includes('index.html')) {
    window.location.href = 'dashboard.html';
  } else if (isLoggedIn !== 'true' && currentPage.includes('dashboard.html')) {
    window.location.href = 'index.html';
  }
}

// Login form handler
document.addEventListener('DOMContentLoaded', function () {
  checkAuth();

  const loginForm = document.getElementById('loginForm');
  const togglePassword = document.getElementById('togglePassword');
  const passwordInput = document.getElementById('password');
  const errorMessage = document.getElementById('errorMessage');

  // Toggle password visibility
  if (togglePassword) {
    togglePassword.addEventListener('click', function () {
      const type = passwordInput.type === 'password' ? 'text' : 'password';
      passwordInput.type = type;
      this.classList.toggle('fa-eye');
      this.classList.toggle('fa-eye-slash');
    });
  }

  // Handle login form submission
  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      const rememberMe = document.getElementById('rememberMe').checked;

      // Validate credentials
      if (username === DEMO_CREDENTIALS.username && password === DEMO_CREDENTIALS.password) {
        // Set login status
        localStorage.setItem('adminLoggedIn', 'true');
        localStorage.setItem('adminUsername', username);

        if (rememberMe) {
          localStorage.setItem('rememberMe', 'true');
        }

        // Show success and redirect
        showSuccess('Login successful! Redirecting...');
        setTimeout(() => {
          window.location.href = 'dashboard.html';
        }, 1000);
      } else {
        showError('Invalid username or password');
      }
    });
  }
});

// Show error message
function showError(message) {
  const errorMessage = document.getElementById('errorMessage');
  errorMessage.textContent = message;
  errorMessage.classList.add('show');

  setTimeout(() => {
    errorMessage.classList.remove('show');
  }, 3000);
}

// Show success message
function showSuccess(message) {
  const errorMessage = document.getElementById('errorMessage');
  errorMessage.textContent = message;
  errorMessage.style.background = 'rgba(76, 175, 80, 0.1)';
  errorMessage.style.color = '#4caf50';
  errorMessage.classList.add('show');
}

// Logout function
function logout() {
  localStorage.removeItem('adminLoggedIn');
  localStorage.removeItem('adminUsername');
  window.location.href = 'index.html';
}

// Get current user
function getCurrentUser() {
  return localStorage.getItem('adminUsername') || 'Admin';
}
