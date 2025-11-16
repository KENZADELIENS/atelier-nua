import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, Outlet, useLocation } from 'react-router-dom';

export function Layout() {
  const navItems = [
    { path: '/', label: 'Accueil' },
    { path: '/exhibitions', label: 'Expositions' },
    { path: '/visit', label: 'Visiter' },
    { path: '/about', label: 'À propos' }
  ];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleMobileMenuClose = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 md:px-6 py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
                        <Link to="/" className="flex items-center justify-center lg:justify-start">
              <h1 className="text-primary mb-0" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', letterSpacing: '0.1em' }}>ATELIER NUA</h1>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex gap-6 xl:gap-10">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`py-2 text-sm uppercase tracking-wider transition-colors relative ${
                    location.pathname === item.path
                      ? 'text-primary'
                      : 'text-gris-charbon hover:text-primary'
                  }`}
                >
                  {item.label}
                  {location.pathname === item.path && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"></div>
                  )}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 border border-border hover:border-primary transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} className="text-primary" /> : <Menu size={24} className="text-primary" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
              <nav className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={handleMobileMenuClose}
                    className={`px-6 py-3 text-left text-sm uppercase tracking-wider transition-colors ${
                      location.pathname === item.path
                        ? 'text-primary bg-primary/5'
                        : 'text-gris-charbon hover:text-primary hover:bg-gris-perle/50'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card mt-auto">
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
            <div className="space-y-4">
              <h4 className="text-primary mb-4">Visiter</h4>
              <div className="space-y-2 text-sm text-gris-charbon">
                <p>11 Rue François 1er</p>
                <p>75008 Paris</p>
                <p className="pt-2">Mardi - Dimanche</p>
                <p>11h - 19h</p>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-primary mb-4">Explorer</h4>
              <div className="space-y-2 text-sm text-gris-charbon">
                <Link 
                  to="/exhibitions"
                  className="hover:text-primary transition-colors block text-left"
                >
                  Expositions
                </Link>
                <Link 
                  to="/visit"
                  className="hover:text-primary transition-colors block text-left"
                >
                  Informations pratiques
                </Link>
                <Link 
                  to="/"
                  className="hover:text-primary transition-colors block text-left"
                >
                  Actualités
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-primary mb-4">À propos</h4>
              <div className="space-y-2 text-sm text-gris-charbon">
                <Link 
                  to="/about"
                  className="hover:text-primary transition-colors block text-left"
                >
                  Notre mission
                </Link>
                <Link 
                  to="/about"
                  className="hover:text-primary transition-colors block text-left"
                >
                  Notre histoire
                </Link>
                <Link 
                  to="/about"
                  className="hover:text-primary transition-colors block text-left"
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-primary mb-4">Suivez-nous</h4>
              <div className="space-y-2 text-sm text-gris-charbon">
                <a href="#" className="hover:text-primary transition-colors block">Instagram</a>
                <a href="#" className="hover:text-primary transition-colors block">Facebook</a>
                <a href="#" className="hover:text-primary transition-colors block">Twitter</a>
              </div>
            </div>
          </div>
          <div className="text-center border-t border-gris-perle pt-8">
            <p className="text-gris-charbon text-sm italic font-accent">© 2025 ATELIER NUA. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
