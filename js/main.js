// Main JavaScript file for ATELIER NUA
document.addEventListener('DOMContentLoaded', function() {
  const root = document.getElementById('root');
  
  // Your website content here
  root.innerHTML = `
    <header>
      <h1>ATELIER NUA</h1>
      <p>Galerie d'art haute couture</p>
    </header>
  `;
});

console.log('ATELIER NUA loaded successfully');

// Add loading animation
window.addEventListener('load', function() {
  document.body.classList.add('loaded');
});

// Gallery interaction
const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach(item => {
  item.addEventListener('click', function() {
    console.log('Gallery item clicked');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  console.log('ATELIER NUA chargé');
  
  const grid = document.querySelector('.gallery-grid');
  if (grid) {
    // Placeholder items
    for (let i = 1; i <= 3; i++) {
      const div = document.createElement('div');
      div.className = 'gallery-item';
      div.textContent = 'Œuvre ' + i;
      grid.appendChild(div);
    }
  }
  
  // Smooth scroll for navigation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});

(function injectMeta(){
  const head = document.head;
  const add = (tag, attrs) => {
    const el = document.createElement(tag);
    Object.entries(attrs).forEach(([k,v]) => el.setAttribute(k,v));
    head.appendChild(el);
    return el;
  };
  add('meta',{name:'description',content:"ATELIER NUA - Galerie d'art haute couture"});
  add('meta',{name:'keywords',content:'galerie d\'art, haute couture, mode luxe'});
  add('meta',{name:'robots',content:'index,follow'});
  add('link',{rel:'canonical',href:'https://classybrunette.github.io/atelier-nua/'});
  // Open Graph
  add('meta',{property:'og:type',content:'website'});
  add('meta',{property:'og:locale',content:'fr_FR'});
  add('meta',{property:'og:title',content:'ATELIER NUA - Galerie haute couture'});
  add('meta',{property:'og:description',content:"Galerie dédiée à la haute couture, à l'art et à l'excellence de la mode luxe."});
  add('meta',{property:'og:url',content:'https://classybrunette.github.io/atelier-nua/'});
  add('meta',{property:'og:site_name',content:'ATELIER NUA'});
  add('meta',{property:'og:image',content:'https://classybrunette.github.io/atelier-nua/images/cover.jpg'});
  add('meta',{property:'og:image:alt',content:'Visuel ATELIER NUA haute couture'});
  // Twitter
  add('meta',{name:'twitter:card',content:'summary_large_image'});
  add('meta',{name:'twitter:title',content:'ATELIER NUA - Galerie haute couture'});
  add('meta',{name:'twitter:description',content:"Galerie d'art et mode luxe."});
  add('meta',{name:'twitter:image',content:'https://classybrunette.github.io/atelier-nua/images/cover.jpg'});
  // JSON-LD
  const ld = {
    "@context":"https://schema.org",
    "@type":"WebSite",
    "name":"ATELIER NUA",
    "url":"https://classybrunette.github.io/atelier-nua/",
    "description":"Galerie d'art haute couture et mode luxe.",
    "inLanguage":"fr-FR",
    "publisher":{
      "@type":"Organization",
      "name":"ATELIER NUA",
      "logo":{
        "@type":"ImageObject",
        "url":"https://classybrunette.github.io/atelier-nua/images/logo.png"
      }
    }
  };
  const script = document.createElement('script');
  script.type='application/ld+json';
  script.textContent = JSON.stringify(ld);
  head.appendChild(script);
})();
