// Save signups object to localStorage
function saveSignups() {
  localStorage.setItem('signups', JSON.stringify(signups));
}

// Load signups object from localStorage
function loadSignups() {
  const saved = localStorage.getItem('signups');
  if (saved) {
    signups = JSON.parse(saved);
  }
}

loadSignups();
renderCalendar();

signups[dateStr].push({ name, startTime, endTime });
saveSignups();

openModal(dateStr);
renderCalendar();
