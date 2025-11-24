function hideShorts() {
  chrome.storage.sync.get('enabled', (data) => {
    if (data.enabled === false) {
      showShorts();
      return;
    }

    const shortsShelves = document.querySelectorAll(`
      ytd-rich-section-renderer[is-shorts], 
      ytd-reel-shelf-renderer, 
      ytd-rich-shelf-renderer[is-shorts]
    `);
    
    shortsShelves.forEach(el => {
      el.style.display = 'none';
      el.classList.add('ytd-shorts-hidden');
    });

    const shortsLinks = document.querySelectorAll('a[href^="/shorts"]');
    
    shortsLinks.forEach(link => {
      const container = link.closest('ytd-rich-item-renderer, ytd-video-renderer, ytd-grid-video-renderer');
      
      if (container && !container.classList.contains('ytd-shorts-hidden')) {
        container.style.display = 'none';
        container.classList.add('ytd-shorts-hidden'); 
      }
    });

    const gridRows = document.querySelectorAll('ytd-rich-grid-row');
    gridRows.forEach(row => {
      const contents = row.querySelector('#contents');
      if (!contents) return;

      const allChildren = Array.from(contents.children);
      
      const visibleChildren = allChildren.filter(child => {
        return child.tagName.includes('RENDERER') && child.style.display !== 'none';
      });

      if (visibleChildren.length === 0) {
        row.style.display = 'none';
        row.classList.add('ytd-shorts-hidden');
      }
    });

    const sidebarItems = document.querySelectorAll('ytd-guide-entry-renderer a[title="Shorts"], ytd-mini-guide-entry-renderer a[title="Shorts"]');
    sidebarItems.forEach(item => {
      const renderer = item.closest('ytd-guide-entry-renderer, ytd-mini-guide-entry-renderer');
      if (renderer) renderer.style.display = 'none';
    });
  });
}

function showShorts() {
  const hidden = document.querySelectorAll('.ytd-shorts-hidden, [style*="display: none"]');
  hidden.forEach(el => {
    if (el.matches('ytd-rich-section-renderer, ytd-reel-shelf-renderer, ytd-rich-item-renderer, ytd-video-renderer, ytd-rich-grid-row, ytd-guide-entry-renderer')) {
      el.style.display = '';
      el.classList.remove('ytd-shorts-hidden');
    }
  });
}

hideShorts();

const observer = new MutationObserver((mutations) => {
  const shouldRun = mutations.some(m => m.addedNodes.length > 0);
  if (shouldRun) hideShorts();
});

observer.observe(document.body, { childList: true, subtree: true });