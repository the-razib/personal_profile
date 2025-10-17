// ====================================
// PROJECTS MANAGEMENT
// ====================================

let currentEditId = null;

document.addEventListener('DOMContentLoaded', function () {
  loadProjects();

  // Form submission
  document.getElementById('projectForm').addEventListener('submit', function (e) {
    e.preventDefault();
    saveProject();
  });
});

// Load and display projects
function loadProjects() {
  const projects = JSON.parse(localStorage.getItem('projects')) || [];
  const projectsList = document.getElementById('projectsList');

  if (projects.length === 0) {
    projectsList.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-folder-open"></i>
        <h3>No Projects Yet</h3>
        <p>Start by adding your first project</p>
      </div>
    `;
    return;
  }

  let html = '<table class="data-table"><thead><tr>';
  html += '<th>Title</th><th>Technologies</th><th>Featured</th><th>Actions</th>';
  html += '</tr></thead><tbody>';

  projects.forEach(project => {
    html += `
      <tr>
        <td><strong>${project.title}</strong></td>
        <td>${project.tech ? project.tech.slice(0, 2).join(', ') : 'N/A'}</td>
        <td>${project.featured ? '<span style="color: var(--success-color);">Yes</span>' : 'No'}</td>
        <td class="table-actions">
          <button class="btn-table btn-edit" onclick="editProject(${project.id})">
            <i class="fas fa-edit"></i> Edit
          </button>
          <button class="btn-table btn-delete" onclick="deleteProject(${project.id})">
            <i class="fas fa-trash"></i> Delete
          </button>
        </td>
      </tr>
    `;
  });

  html += '</tbody></table>';
  projectsList.innerHTML = html;
}

// Open add project modal
function openAddProjectModal() {
  currentEditId = null;
  document.getElementById('modalTitle').textContent = 'Add New Project';
  document.getElementById('projectForm').reset();
  document.getElementById('projectId').value = '';
  document.getElementById('projectModal').classList.add('active');
}

// Edit project
function editProject(id) {
  const projects = JSON.parse(localStorage.getItem('projects')) || [];
  const project = projects.find(p => p.id === id);

  if (!project) return;

  currentEditId = id;
  document.getElementById('modalTitle').textContent = 'Edit Project';
  document.getElementById('projectId').value = project.id;
  document.getElementById('projectTitle').value = project.title;
  document.getElementById('projectDescription').value = project.description;
  document.getElementById('projectImage').value = project.image || '';
  document.getElementById('projectFeatured').value = project.featured ? 'true' : 'false';
  document.getElementById('projectTech').value = project.tech ? project.tech.join(', ') : '';
  document.getElementById('projectGithub').value = project.github || '';
  document.getElementById('projectPlayStore').value = project.playStore || '';
  document.getElementById('projectAppStore').value = project.appStore || '';
  document.getElementById('projectLink').value = project.link || '';

  document.getElementById('projectModal').classList.add('active');
}

// Save project
function saveProject() {
  const projects = JSON.parse(localStorage.getItem('projects')) || [];

  const projectData = {
    id: currentEditId || Date.now(),
    title: document.getElementById('projectTitle').value,
    description: document.getElementById('projectDescription').value,
    image: document.getElementById('projectImage').value,
    featured: document.getElementById('projectFeatured').value === 'true',
    tech: document.getElementById('projectTech').value.split(',').map(t => t.trim()).filter(t => t),
    github: document.getElementById('projectGithub').value,
    playStore: document.getElementById('projectPlayStore').value,
    appStore: document.getElementById('projectAppStore').value,
    link: document.getElementById('projectLink').value
  };

  if (currentEditId) {
    const index = projects.findIndex(p => p.id === currentEditId);
    if (index !== -1) {
      projects[index] = projectData;
    }
  } else {
    projects.push(projectData);
  }

  localStorage.setItem('projects', JSON.stringify(projects));
  closeProjectModal();
  loadProjects();
  showAlert('Project saved successfully!', 'success');
}

// Delete project
function deleteProject(id) {
  if (!confirm('Are you sure you want to delete this project?')) return;

  let projects = JSON.parse(localStorage.getItem('projects')) || [];
  projects = projects.filter(p => p.id !== id);
  localStorage.setItem('projects', JSON.stringify(projects));

  loadProjects();
  showAlert('Project deleted successfully!', 'success');
}

// Close modal
function closeProjectModal() {
  document.getElementById('projectModal').classList.remove('active');
  document.getElementById('projectForm').reset();
  currentEditId = null;
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
