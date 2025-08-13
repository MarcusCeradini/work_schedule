// Save signups to localStorage whenever updated
function saveSignups() {
  localStorage.setItem('signups', JSON.stringify(signups));
}

// Load signups from localStorage on start
function loadSignups() {
  const data = localStorage.getItem('signups');
  if (data) {
    signups = JSON.parse(data);
  }
}

signups[dateStr].push({ name, startTime, endTime });
saveSignups();

openModal(dateStr); // Refresh modal
renderCalendar();   // Update calendar counts/colors

loadSignups();
renderCalendar();
