import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import bannerImage1 from '@/assets/c78f50749baacae6135ece7238683ff93f4df028.webp';
import bannerImage2 from '@/assets/8aa6508c3d3ec9554057bec1d5f34a701809157a.webp';
import bannerImage3 from '@/assets/7a2752457eae20e59808d72b21ed53c3ec485d64.webp';
import bannerImage4 from '@/assets/ce1e711710eac0b7440a68ba115e78614269c050.webp';
import exhibition1 from '@/assets/7166cc1fd85092987888c984c630d6d9a1742d58.webp';
import exhibition2 from '@/assets/9e2dd313be55c7ba9c93fedfa68209361f708168.webp';
import exhibition3 from '@/assets/a1b61531356be3491695e077958b10f5a615c4b8.webp';
import content1 from '@/assets/8bf368da1fdcfe53953f05698442e0a99577f3e5.webp';
import content2 from '@/assets/e5ea3ee51df71932950750bedc5f36be075fc84e.webp';

const bannerImages = [bannerImage1, bannerImage2, bannerImage3, bannerImage4];

export function HomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    const prevTitle = document.title;
    document.title = 'ATELIER NUA';

    let desc = document.head.querySelector('meta[name="description"][data-home-meta]') as HTMLMetaElement | null;
    if (!desc) {
      desc = document.createElement('meta');
      desc.setAttribute('name', 'description');
      desc.setAttribute('data-home-meta', 'true');
      document.head.appendChild(desc);
    }
    desc.setAttribute('content', "ATELIER NUA — Expositions, actualités et événements autour de la haute couture.");

    let canonical = document.head.querySelector('link[rel="canonical"][data-home-meta]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      canonical.setAttribute('data-home-meta', 'true');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://kenzadeliens.github.io/atelier-nua/');

    return () => {
      document.title = prevTitle;
      document.head.querySelectorAll('[data-home-meta]').forEach((n) => n.remove());
    };
  }, []);

  // No carousel: display a horizontal row of images like the initial design

  const scrollToActuellement = () => {
    const section = document.getElementById('actuellement-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div>
      {/* Hero Section: horizontal images row */}
      <section className="relative border-b border-border">
        <div className="container mx-auto px-4 md:px-6 py-6 md:py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {bannerImages.map((image, index) => (
              <div key={index} className="overflow-hidden">
                <img
                  src={image}
                  alt={`Gallery Exhibition ${index + 1}`}
                  className="w-full h-40 md:h-56 lg:h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-center justify-center">
            <div className="text-center">
              <div className="inline-block px-8 md:px-14 py-6 md:py-8 bg-ivoire-satine/95 backdrop-blur-sm">
                <div
                  className="text-noir-onyx mb-6"
                  style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.9rem, 2vw, 1.5rem)', letterSpacing: '-0.02em', fontWeight: 400 }}
                >
                  ATELIER NUA
                </div>
                <button
                  onClick={scrollToActuellement}
                  className="px-8 md:px-10 py-3 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
                >
                  Découvrir
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Exhibitions */}
      <section id="actuellement-section" className="container mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 md:mb-12 gap-4">
          <h2 className="text-foreground">Actuellement</h2>
          <button className="px-6 md:px-8 py-2 rounded-full border border-gris-perle text-gris-charbon hover:border-primary hover:text-primary transition-all">
            Tout voir →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            { id: 1, img: exhibition1, title: 'Éclats Précieux', desc: "Une collection raffinée de bijoux contemporains", dates: "Jusqu'au 15 mars 2026" },
            { id: 2, img: exhibition2, title: "L'Or de la Maison", desc: "Maroquinerie d'exception et savoir-faire artisanal", dates: "Jusqu'au 28 février 2026" },
            { id: 3, img: exhibition3, title: 'Silhouettes Intemporelles', desc: "L'élégance de la haute couture revisitée", dates: "Jusqu'au 10 avril 2026" }
          ].map((expo) => (
            <Link key={expo.id} to={`/exhibitions/${expo.id}`} className="group cursor-pointer">
              <div className="bg-card overflow-hidden mb-4">
                <div className="h-64 md:h-80 overflow-hidden">
                    <img
                      src={expo.img}
                      alt={expo.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-primary">{expo.title}</h3>
                <p className="text-gris-charbon">{expo.desc}</p>
                <p className="text-muted-foreground italic font-accent">{expo.dates}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Content */}
      <section className="bg-gris-perle py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-foreground mb-8 md:mb-12 text-center">À découvrir</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
            <Link to={`/exhibitions/4`} className="group cursor-pointer bg-card block">
              <div className="h-64 md:h-96 overflow-hidden">
                <img 
                  src={content1} 
                  alt="Mannequin en manteau vintage avec haut-de-forme" 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                  // fallback navigation in case Link isn't handling the click for any reason
                  onClick={(e) => { e.preventDefault(); navigate('/exhibitions/4'); }}
                />
              </div>
              <div className="p-6 md:p-8 space-y-3">
                <h3 className="text-primary">L'Élégance Androgyne</h3>
                <p className="text-gris-charbon">Découvrez une mode féminine audacieuse inspirée du vestiaire masculin classique, où le raffinement intemporel rencontre l'audace contemporaine.</p>
              </div>
            </Link>
            <Link to={`/exhibitions/5`} className="group cursor-pointer bg-card block">
              <div className="h-64 md:h-96 overflow-hidden">
                  <img 
                    src={content2} 
                    alt="Collection de robes haute couture avec fresques classiques" 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                    onClick={(e) => { e.preventDefault(); navigate('/exhibitions/5'); }}
                  />
              </div>
              <div className="p-6 md:p-8 space-y-3">
                <h3 className="text-primary">Art & Couture</h3>
                <p className="text-gris-charbon">Plongez dans l'univers où l'art rencontre la haute couture. Une exposition exceptionnelle célébrant la beauté des silhouettes dans un cadre architectural d'exception.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="container mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-primary mb-3">Restez informé</h3>
          <p className="text-gris-charbon mb-8 italic font-accent">Recevez nos actualités et invitations exclusives</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Votre adresse email"
              className="flex-1 px-5 py-3 rounded-full border border-gris-perle bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <button className="px-8 py-3 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity whitespace-nowrap">
              S'inscrire
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
