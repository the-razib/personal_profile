// ====================================
// PROFILE MANAGEMENT
// ====================================

document.addEventListener('DOMContentLoaded', function () {
  loadProfileData();

  // Form submissions
  document.getElementById('heroForm').addEventListener('submit', function (e) {
    e.preventDefault();
    saveHeroData();
  });

  document.getElementById('aboutForm').addEventListener('submit', function (e) {
    e.preventDefault();
    saveAboutData();
  });

  document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    saveContactData();
  });
});

// Load profile data from localStorage
function loadProfileData() {
  const profile = JSON.parse(localStorage.getItem('profileData')) || getDefaultProfile();

  // Hero section
  document.getElementById('fullName').value = profile.hero.name;
  document.getElementById('jobTitle').value = profile.hero.title;
  document.getElementById('heroDescription').value = profile.hero.description;

  // About section
  document.getElementById('aboutIntro').value = profile.about.intro;
  document.getElementById('professionalJourney').value = profile.about.journey;

  // Contact section
  document.getElementById('email').value = profile.contact.email;
  document.getElementById('phone').value = profile.contact.phone;
  document.getElementById('location').value = profile.contact.location;
  document.getElementById('githubUrl').value = profile.contact.github;
  document.getElementById('linkedinUrl').value = profile.contact.linkedin;
}

// Save hero data
function saveHeroData() {
  const profile = JSON.parse(localStorage.getItem('profileData')) || getDefaultProfile();

  profile.hero = {
    name: document.getElementById('fullName').value,
    title: document.getElementById('jobTitle').value,
    description: document.getElementById('heroDescription').value
  };

  localStorage.setItem('profileData', JSON.stringify(profile));
  showAlert('Hero section updated successfully!', 'success');
}

// Save about data
function saveAboutData() {
  const profile = JSON.parse(localStorage.getItem('profileData')) || getDefaultProfile();

  profile.about = {
    intro: document.getElementById('aboutIntro').value,
    journey: document.getElementById('professionalJourney').value
  };

  localStorage.setItem('profileData', JSON.stringify(profile));
  showAlert('About section updated successfully!', 'success');
}

// Save contact data
function saveContactData() {
  const profile = JSON.parse(localStorage.getItem('profileData')) || getDefaultProfile();

  profile.contact = {
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    location: document.getElementById('location').value,
    github: document.getElementById('githubUrl').value,
    linkedin: document.getElementById('linkedinUrl').value
  };

  localStorage.setItem('profileData', JSON.stringify(profile));
  showAlert('Contact information updated successfully!', 'success');
}

// Default profile data
function getDefaultProfile() {
  return {
    hero: {
      name: 'MD Razib',
      title: 'Flutter Developer',
      description: 'Passionate Flutter developer with expertise in cross-platform mobile app development.'
    },
    about: {
      intro: 'Flutter developer with published apps on Google Play and App Store.',
      journey: 'Currently working at Softvence Agency in Mohakhali, Dhaka.'
    },
    contact: {
      email: 'mdrazib.cse@gmail.com',
      phone: '+8801644-556056',
      location: 'Monipur, Mirpur 2, Dhaka',
      github: 'https://github.com/the-razib',
      linkedin: 'https://linkedin.com/in/md-razib'
    }
  };
}

// Show alert message
function showAlert(message, type) {
  const alertDiv = document.getElementById('alertMessage');
  alertDiv.className = `alert alert-${type}`;
  alertDiv.innerHTML = `<i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i> ${message}`;
  alertDiv.style.display = 'flex';

  setTimeout(() => {
    alertDiv.style.display = 'none';
  }, 3000);
}
