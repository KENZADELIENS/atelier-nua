document.addEventListener('DOMContentLoaded', () => {
  console.log('ATELIER NUA chargé');
  
  const grid = document.querySelector('.gallery-grid');
  if (grid) {
    for (let i = 1; i <= 6; i++) {
      const div = document.createElement('div');
      div.className = 'gallery-item';
      div.textContent = 'Collection ' + i;
      grid.appendChild(div);
    }
  }
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({behavior: 'smooth', block: 'start'});
      }
    });
  });
});
