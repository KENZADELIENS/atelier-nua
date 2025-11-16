import { useEffect } from 'react';
import expo1 from '@/assets/8bf368da1fdcfe53953f05698442e0a99577f3e5.png';
import expo2 from '@/assets/7166cc1fd85092987888c984c630d6d9a1742d58.png';
import expo3 from '@/assets/9e2dd313be55c7ba9c93fedfa68209361f708168.png';
import expo4 from '@/assets/a1b61531356be3491695e077958b10f5a615c4b8.png';

const exhibitions = [
  {
    id: 1,
    image: expo1,
    title: "Dior New Look : L'Élégance Intemporelle",
    description: "Découvrez l'héritage du New Look de Christian Dior à travers une collection exceptionnelle de silhouettes iconiques des années 1947 à nos jours.",
    dates: "15 Mars - 30 Juin 2025"
  },
  {
    id: 2,
    image: expo2,
    title: "Bijoux & Accessoires : L'Art du Détail",
    description: "Une exposition immersive consacrée aux créations joaillières et accessoires de luxe qui ont défini l'élégance Dior à travers les décennies.",
    dates: "1er Avril - 15 Juillet 2025"
  },
  {
    id: 3,
    image: expo3,
    title: "Lady Dior : Icône Dorée",
    description: "Célébration du sac Lady Dior, symbole intemporel de raffinement et savoir-faire artisanal, présenté dans ses versions les plus prestigieuses et rares.",
    dates: "10 Mai - 31 Août 2025"
  },
  {
    id: 4,
    image: expo4,
    title: "Couture Retrospective : 75 Ans d'Excellence",
    description: "Un voyage chronologique à travers les créations les plus emblématiques de la Maison Dior, célébrant trois quarts de siècle d'innovation en haute couture.",
    dates: "1er Juin - 30 Septembre 2025"
  }
  ,
  {
    id: 5,
    image: expo1,
    title: "Collections Permanentes",
    description: "Une sélection de pièces emblématiques provenant de nos archives permanentes.",
    dates: "Permanent"
  }
];

export function ExhibitionsPage() {
  // set simple page meta for SEO
  useEffect(() => {
    const prevTitle = document.title;
    document.title = 'Expositions — ATELIER NUA';

    let desc = document.head.querySelector('meta[name="description"][data-expo-list]') as HTMLMetaElement | null;
    if (!desc) {
      desc = document.createElement('meta');
      desc.setAttribute('name', 'description');
      desc.setAttribute('data-expo-list', 'true');
      document.head.appendChild(desc);
    }
    desc.setAttribute('content', 'Découvrez les expositions actuelles et à venir d\'ATELIER NUA.');

    let canonical = document.head.querySelector('link[rel="canonical"][data-expo-list]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      canonical.setAttribute('data-expo-list', 'true');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://kenzadeliens.github.io/atelier-nua/exhibitions');

    return () => {
      document.title = prevTitle;
      document.head.querySelectorAll('[data-expo-list]').forEach((n) => n.remove());
    };
  }, []);
  return (
    <div>
      {/* Page Header */}
      <section className="bg-gris-perle py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-primary">Expositions</h1>
          <p className="text-gris-charbon mt-6 italic font-accent max-w-2xl mx-auto">
            Explorez nos expositions actuelles et à venir célébrant l'art de la haute couture
          </p>
        </div>
      </section>

      {/* Exhibitions Grid */}
      <section className="container mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10 mb-12 md:mb-16 max-w-6xl mx-auto">
          {exhibitions.map((expo) => (
            <div key={expo.id} id={`expo-${expo.id}`} className="group cursor-pointer">
              <div className="bg-card overflow-hidden mb-5 border border-gris-perle">
                <div className="h-72 md:h-96 overflow-hidden">
                  <img 
                    src={expo.image} 
                    alt={expo.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-primary group-hover:text-accent transition-colors">{expo.title}</h3>
                <p className="text-gris-charbon leading-relaxed">{expo.description}</p>
                <div className="flex gap-3 items-center flex-wrap text-sm text-gris-charbon pt-2">
                  <span className="italic font-accent">{expo.dates}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
