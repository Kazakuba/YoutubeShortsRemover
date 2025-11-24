const toggle = document.getElementById('toggle');
const statusText = document.getElementById('statusText');

chrome.storage.sync.get('enabled', (data) => {
  const isEnabled = data.enabled !== false;
  toggle.checked = isEnabled;
  updateStatus(isEnabled);
});

toggle.addEventListener('change', () => {
  const isEnabled = toggle.checked;
  
  chrome.storage.sync.set({ enabled: isEnabled }, () => {
    updateStatus(isEnabled);
    
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0] && tabs[0].url.includes("youtube.com")) {
        chrome.tabs.reload(tabs[0].id);
      }
    });
  });
});

function updateStatus(active) {
  statusText.textContent = active ? "Status: Shorts Hidden" : "Status: Shorts Visible";
  statusText.style.color = active ? "#4caf50" : "#aaa";
}