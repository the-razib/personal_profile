// ====================================
// DASHBOARD FUNCTIONALITY
// ====================================

document.addEventListener('DOMContentLoaded', function () {
  // Set user name
  const userName = getCurrentUser();
  const userNameElement = document.getElementById('userName');
  if (userNameElement) {
    userNameElement.textContent = userName;
  }

  // Load dashboard stats
  loadDashboardStats();
});

// Load dashboard statistics
function loadDashboardStats() {
  // Get data from localStorage or use defaults
  const projects = JSON.parse(localStorage.getItem('projects')) || getDefaultProjects();
  const skills = JSON.parse(localStorage.getItem('skills')) || getDefaultSkills();
  const messages = JSON.parse(localStorage.getItem('messages')) || [];

  // Update stats
  document.getElementById('totalProjects').textContent = projects.length;
  document.getElementById('totalSkills').textContent = skills.length;
  document.getElementById('totalMessages').textContent = messages.length;
}

// Default projects data
function getDefaultProjects() {
  return [
    {
      id: 1,
      title: 'Real Convert – Currency Companion',
      description: 'Ultimate currency conversion app with 160+ currencies',
      image: 'assets/images/real_convert.png',
      tech: ['Flutter', 'Dart', 'API Integration', 'Offline Storage'],
      playStore: 'https://play.google.com/store/apps/details?id=com.solank.currencyconverter',
      appStore: 'https://apps.apple.com/in/app/real-convert/id6748574890',
      featured: true
    },
    {
      id: 2,
      title: 'Crafty Bay E-commerce',
      description: 'Full-featured e-commerce app with user authentication',
      image: 'assets/images/crafty-bay.jpg',
      tech: ['Flutter', 'GetX', 'E-commerce', 'API Integration'],
      github: 'https://github.com/the-razib/crafty_bay_ecommerce',
      featured: false
    },
    {
      id: 3,
      title: 'Task Manager',
      description: 'Flutter-based task management app using GetX',
      image: 'assets/images/task-manager.png',
      tech: ['Flutter', 'GetX', 'Authentication'],
      github: 'https://github.com/the-razib/task_manager',
      featured: false
    },
    {
      id: 4,
      title: 'Mosque Finder App',
      description: 'Location-based app to find nearby mosques',
      image: 'assets/images/mosque-finder.png',
      tech: ['Google Maps', 'Places API', 'Location Services'],
      github: 'https://github.com/the-razib/mosque_finder',
      featured: false
    },
    {
      id: 5,
      title: 'Step Indicator Package',
      description: 'Customizable step progress indicators for Flutter',
      image: 'assets/images/pub-dev.png',
      tech: ['Flutter Package', 'Pub.dev', 'Open Source'],
      link: 'https://pub.dev/packages/step_indicator_package',
      featured: false
    }
  ];
}

// Default skills data
function getDefaultSkills() {
  return [
    { category: 'Mobile Development', skills: ['Flutter & Dart', 'Cross-platform Development', 'Native Android (Java)', 'State Management (GetX)'] },
    { category: 'Backend & APIs', skills: ['RESTful APIs', 'Firebase Suite', 'JWT Authentication', 'Cloud Messaging (FCM)'] },
    { category: 'Storage & Database', skills: ['Firestore', 'Shared Preferences', 'Hive Database', 'Secure Storage'] },
    { category: 'Tools & Services', skills: ['Git & GitHub', 'Google Maps SDK', 'Stripe Payments', 'App Store Deployment'] }
  ];
}

// Initialize default data if not exists
function initializeDefaultData() {
  if (!localStorage.getItem('projects')) {
    localStorage.setItem('projects', JSON.stringify(getDefaultProjects()));
  }
  if (!localStorage.getItem('skills')) {
    localStorage.setItem('skills', JSON.stringify(getDefaultSkills()));
  }
}

// Call initialization
initializeDefaultData();
