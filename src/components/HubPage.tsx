import { Link } from 'react-router-dom';
import { Card } from './ui/card';

const navigationItems = [
  {
    title: "Expositions",
    description: "Découvrez nos expositions actuelles et à venir",
    icon: "🎨",
    path: "/exhibitions",
    color: "bg-rose-nua",
  },
  {
    title: "Visiter",
    description: "Informations pratiques et horaires d'ouverture",
    icon: "🏛️",
    path: "/visit",
    color: "bg-beige-rose",
  },
  {
    title: "À Propos",
    description: "L'histoire et la mission de l'Atelier Nua",
    icon: "✨",
    path: "/about",
    color: "bg-gris-perle",
  },
  {
    title: "Collections",
    description: "Explorez nos collections permanentes",
    icon: "👗",
    path: "/collections",
    color: "bg-ivoire-satine",
  },
];

export function HubPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="container mx-auto px-4 pt-20 pb-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-4">
          Atelier Nua
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl font-accent italic">
          Art, Mode & Élégance
        </p>
      </header>

      {/* Navigation Grid */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {navigationItems.map((item) => (
            <Link to={item.path} key={item.title}>
              <Card className={`${item.color} hover:shadow-lg transition-shadow duration-300 h-full`}>
                <div className="p-6 flex flex-col items-center text-center space-y-4">
                  <span className="text-4xl">{item.icon}</span>
                  <h2 className="text-2xl font-serif text-primary">{item.title}</h2>
                  <p className="text-gris-charbon">{item.description}</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </main>

      {/* Featured Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-primary/5">
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-serif text-primary">Exposition en Vedette</h2>
              <p className="text-gris-charbon">
                Découvrez notre exposition actuelle mettant en lumière l'élégance intemporelle
              </p>
              <Link 
                to="/exhibitions/current"
                className="inline-block px-8 py-3 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
              >
                En savoir plus →
              </Link>
            </div>
          </Card>
        </div>
      </section>

      {/* Quick Links */}
      <footer className="container mx-auto px-4 py-12">
        <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
          <Link to="/press" className="hover:text-primary transition-colors">Presse</Link>
          <Link to="/newsletter" className="hover:text-primary transition-colors">Newsletter</Link>
          <Link to="/mentions-legales" className="hover:text-primary transition-colors">Mentions Légales</Link>
        </div>
      </footer>
    </div>
  );
}