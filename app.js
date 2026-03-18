// ============================================
// EduBoard Wireframe Prototype - Interactions
// ============================================

let currentLoginRole = 'student';

// Navigate between screens
function navigateTo(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const target = document.getElementById(screenId);
  if (target) {
    target.classList.add('active');
    target.scrollTop = 0;
  }
}

// Login role toggle
function selectLoginRole(btn, role) {
  document.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  currentLoginRole = role;
  // Toggle teacher-ui class on login screen
  const loginScreen = document.getElementById('screen-login');
  if (role === 'teacher') {
    loginScreen.classList.add('teacher-ui');
  } else {
    loginScreen.classList.remove('teacher-ui');
  }
}

// Handle login
function handleLogin() {
  if (currentLoginRole === 'student') {
    navigateTo('screen-student-dashboard');
  } else {
    navigateTo('screen-teacher-dashboard');
  }
}

// Tab switching
function switchTab(tabBtn, tabId) {
  const container = tabBtn.closest('.course-page');
  container.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  container.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));
  tabBtn.classList.add('active');
  const tabContent = document.getElementById(tabId);
  if (tabContent) tabContent.classList.add('active');
}

// Modal management
function showModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.add('open');
}

function hideModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove('open');
}

// Toast notifications
function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// Chat toggle
function toggleChat() {
  const panels = document.querySelectorAll('.chat-panel');
  panels.forEach(p => p.classList.toggle('open'));
}

// Multi-mode toggle
function toggleMultiMode(btn) {
  btn.classList.toggle('active');
  const indicator = document.getElementById('multimode-indicator');
  if (indicator) {
    indicator.style.display = btn.classList.contains('active') ? 'block' : 'none';
  }
}

// Student tab selection (teacher view - Excel-style tabs)
function selectStudentTab(tab, studentId) {
  const panel = document.getElementById('student-wb-panel');
  const nameEl = document.getElementById('student-wb-name');
  const studentNames = { alice: 'Colt Seavers', bob: 'Samwise Gamgee', john: 'Davy Jones' };

  // Update active tab
  document.querySelectorAll('.student-tab').forEach(t => {
    t.classList.remove('active', 'student-active');
  });

  if (studentId) {
    // Student tab clicked — highlight green, open panel
    tab.classList.add('student-active');
    if (nameEl) nameEl.textContent = (studentNames[studentId] || studentId) + "'s Whiteboard";
    if (panel) panel.classList.add('open');
  } else {
    // "My Whiteboard" tab — highlight blue, close panel
    tab.classList.add('active');
    if (panel) panel.classList.remove('open');
  }
  if (window.lucide) lucide.createIcons();
}

// Close student panel (Go Back button)
function toggleStudentPanel() {
  const panel = document.getElementById('student-wb-panel');
  if (panel) panel.classList.remove('open');
  // Reset to "My Whiteboard" tab
  document.querySelectorAll('.student-tab').forEach(t => {
    t.classList.remove('active', 'student-active');
  });
  const myTab = document.querySelector('.student-tab');
  if (myTab) myTab.classList.add('active');
}

// Points selector
function selectPoints(btn, value) {
  document.querySelectorAll('.points-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

// Edit toggle for profile fields
function toggleEdit(btn) {
  const row = btn.closest('.field-row');
  const span = row.querySelector('span');
  if (btn.textContent.includes('Edit')) {
    const input = document.createElement('input');
    input.type = 'text';
    input.value = span.textContent;
    input.style.cssText = 'padding:8px 12px;border:2px solid #667eea;border-radius:8px;font-size:15px;outline:none;flex:1;margin-right:8px;';
    row.insertBefore(input, btn);
    span.style.display = 'none';
    btn.textContent = 'Save';
    input.focus();
  } else {
    const input = row.querySelector('input');
    const span = row.querySelector('span');
    if (input && span) {
      span.textContent = input.value;
      span.style.display = '';
      input.remove();
    }
    btn.textContent = '✏️ Edit';
    showToast('Profile updated successfully!');
  }
}

// Page tab selection (Excel-style)
function selectPageTab(tab) {
  if (tab.querySelector('input')) return; // don't switch while renaming
  tab.closest('.page-tabs-scroll').querySelectorAll('.page-tab').forEach(t => t.classList.remove('active'));
  tab.classList.add('active');
}

// Rename page tab on double-click
function renamePageTab(tab) {
  if (tab.querySelector('input')) return;
  const currentName = tab.textContent.trim();
  tab.classList.add('active');
  const input = document.createElement('input');
  input.type = 'text';
  input.value = currentName;
  tab.textContent = '';
  tab.appendChild(input);
  input.focus();
  input.select();

  function finishRename() {
    const newName = input.value.trim() || currentName;
    tab.textContent = newName;
    // Re-attach event listeners
    tab.onclick = function() { selectPageTab(tab); };
    tab.ondblclick = function() { renamePageTab(tab); };
  }

  input.addEventListener('blur', finishRename);
  input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') { input.blur(); }
    if (e.key === 'Escape') { input.value = currentName; input.blur(); }
  });
}

// Add new page tab
let pageCount = 5;
function addPageTab(addBtn) {
  pageCount++;
  const newTab = document.createElement('div');
  newTab.className = 'page-tab';
  newTab.textContent = 'Page ' + pageCount;
  newTab.onclick = function() { selectPageTab(newTab); };
  newTab.ondblclick = function() { renamePageTab(newTab); };
  // Insert before the + button so it stays adjacent
  addBtn.parentNode.insertBefore(newTab, addBtn);
  // Select the new tab
  selectPageTab(newTab);
  // Scroll to show the + button
  addBtn.scrollIntoView({ behavior: 'smooth', inline: 'end' });
  showToast('Page ' + pageCount + ' added');
}

// Close modals with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.open').forEach(m => m.classList.remove('open'));
  }
});
