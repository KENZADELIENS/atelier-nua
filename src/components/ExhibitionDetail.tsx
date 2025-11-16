import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import exhibitions from '@/data/exhibitions';

export function ExhibitionDetail() {
  const { id } = useParams();
  const expo = exhibitions.find((e) => String(e.id) === id);

  if (!expo) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-primary">Exposition introuvable</h2>
        <p className="mt-4">Cette exposition n'existe pas ou a été déplacée.</p>
        <div className="mt-6">
          <Link to="/exhibitions" className="text-primary underline">Retour aux expositions</Link>
        </div>
      </div>
    );
  }

  useEffect(() => {
    if (!expo) return;

    const prevTitle = document.title;
    document.title = `${expo.title} — ATELIER NUA`;

    const setMeta = (attr: 'name' | 'property', name: string, content: string) => {
      let el = document.head.querySelector(`meta[${attr}="${name}"][data-expo-meta]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('data-expo-meta', 'true');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
      return el;
    };

    try {
      setMeta('name', 'description', expo.description);
      setMeta('property', 'og:title', `${expo.title} — ATELIER NUA`);
      setMeta('property', 'og:description', expo.description);
      setMeta('property', 'og:image', expo.image);
      setMeta('property', 'og:url', window.location.href);
      setMeta('name', 'twitter:card', 'summary_large_image');
      setMeta('name', 'twitter:title', `${expo.title} — ATELIER NUA`);
      setMeta('name', 'twitter:description', expo.description);
      setMeta('name', 'twitter:image', expo.image);

      // canonical link
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
      };
      ld.textContent = JSON.stringify(ldObj);
      document.head.appendChild(ld);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn('Failed to set meta tags for exhibition', e);
    }

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
      </div>
    </div>
  );
}
