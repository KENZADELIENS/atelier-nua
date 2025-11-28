import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import exhibitions from '@/data/exhibitions';

export function ExhibitionDetail() {
  const params = useParams();
  const id = Number(params.id);
  const expo = (Array.isArray(exhibitions) ? exhibitions : []).find((e: any) => e.id === id) || (exhibitions as any)[0];

  useEffect(() => {
    const prevTitle = document.title;
    const schedule = (cb: () => void) =>
      (('requestIdleCallback' in window)
        ? (window as any).requestIdleCallback(cb)
        : setTimeout(cb, 1));

    schedule(() => {
      document.title = `${expo.title} — ATELIER NUA`;

      try {
        let desc = document.head.querySelector('meta[name="description"][data-expo-meta]') as HTMLMetaElement | null;
        if (!desc) {
          desc = document.createElement('meta');
          desc.setAttribute('name', 'description');
          desc.setAttribute('data-expo-meta', 'true');
          document.head.appendChild(desc);
        }
        desc.setAttribute('content', expo.description);

        let canonical = document.head.querySelector('link[rel="canonical"][data-expo-meta]') as HTMLLinkElement | null;
        if (!canonical) {
          canonical = document.createElement('link');
          canonical.setAttribute('rel', 'canonical');
          canonical.setAttribute('data-expo-meta', 'true');
          document.head.appendChild(canonical);
        }
        canonical.setAttribute('href', window.location.href);

        const ld = document.createElement('script');
        ld.type = 'application/ld+json';
        ld.setAttribute('data-expo-meta', 'true');
        const ldObj = {
          '@context': 'https://schema.org',
          '@type': 'ExhibitionEvent',
          name: expo.title,
          description: expo.description,
          image: expo.image,
          url: window.location.href,
          location: {
            '@type': 'Place',
            name: 'ATELIER NUA',
            url: 'https://kenzadeliens.github.io/atelier-nua/'
          }
        } as any;
        ld.textContent = JSON.stringify(ldObj);
        document.head.appendChild(ld);
      } catch (e) {
        // ignore
      }
    });

    return () => {
      document.title = prevTitle;
      document.head.querySelectorAll('[data-expo-meta]').forEach((n) => n.remove());
    };
  }, [expo]);

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="max-w-4xl mx-auto">
        <div className="h-72 md:h-[500px] overflow-hidden mb-6">
          <img src={expo.image} alt={expo.title} loading="lazy" decoding="async" className="w-full h-full object-cover" />
        </div>
        <h1 className="text-primary mb-4">{expo.title}</h1>
        <p className="text-gris-charbon mb-6">{expo.description}</p>
        <p className="italic font-accent text-gris-charbon">{expo.dates}</p>
        <div className="mt-8">
          <Link to="/exhibitions" className="px-8 py-3 rounded-full border border-gris-perle hover:border-primary hover:text-primary transition-colors">← Retour aux expositions</Link>
        </div>
      </div>
    </div>
  );
}
