document.addEventListener('DOMContentLoaded', () => {
  const textarea = document.getElementById('notepad');

  // Load saved note
  chrome.storage.local.get(['note'], (result) => {
    if (result.note !== undefined) {
      textarea.value = result.note;
    }
  });

  // Save on input
  textarea.addEventListener('input', () => {
    chrome.storage.local.set({ note: textarea.value });
  });
});
