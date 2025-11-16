import { useParams, Link } from 'react-router-dom';
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

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="max-w-4xl mx-auto">
        <div className="h-72 md:h-[500px] overflow-hidden mb-6">
          <img src={expo.image} alt={expo.title} className="w-full h-full object-cover" />
        </div>
        <h1 className="text-primary mb-4">{expo.title}</h1>
        <p className="text-gris-charbon mb-6">{expo.description}</p>
        <p className="italic font-accent text-gris-charbon">{expo.dates}</p>
      </div>
    </div>
  );
}
