import mapImage from '@/assets/5b6a581430eb1e05becc5c2dff6f385b5acb4cf2.png';

export function VisitPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-gris-perle py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-primary mb-4">Planifiez votre visite</h1>
          <p className="text-gris-charbon max-w-2xl mx-auto italic font-accent">Toutes les informations essentielles pour profiter pleinement de votre expérience</p>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="container mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-20">
          <div className="bg-card p-8 md:p-10 text-center group hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 md:w-20 md:h-20 border-2 border-primary rounded-full mx-auto mb-6 flex items-center justify-center text-primary">
              <span className="text-2xl">🕐</span>
            </div>
            <h3 className="text-foreground mb-4">Horaires</h3>
            <div className="space-y-2 text-gris-charbon mt-4">
              <p>Mardi - Dimanche</p>
              <p className="text-foreground">11h - 19h</p>
              <p className="text-sm">Fermé le lundi</p>
            </div>
          </div>
          <div className="bg-card p-8 md:p-10 text-center group hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 md:w-20 md:h-20 border-2 border-primary rounded-full mx-auto mb-6 flex items-center justify-center text-primary">
              <span className="text-2xl">🎫</span>
            </div>
            <h3 className="text-foreground mb-4">Tarifs</h3>
            <div className="space-y-2">
              <div>
                <p className="text-gris-charbon">Entrée générale</p>
                <p className="text-foreground">25€</p>
              </div>
              <div>
                <p className="text-gris-charbon">Étudiants</p>
                <p className="text-foreground">11€</p>
              </div>
            </div>
          </div>
          <div className="bg-card p-8 md:p-10 text-center group hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 md:w-20 md:h-20 border-2 border-primary rounded-full mx-auto mb-6 flex items-center justify-center text-primary">
              <span className="text-2xl">📍</span>
            </div>
            <h3 className="text-foreground mb-4">Localisation</h3>
            <div className="space-y-1 text-gris-charbon mt-4">
              <p>11 Rue François 1er</p>
              <p>75008 Paris</p>
            </div>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
          {/* Left Column - Info */}
          <div>
            <h2 className="text-foreground mb-8">Informations pratiques</h2>
            <div className="space-y-6">
              <div className="bg-card p-6 md:p-8">
                <h3 className="text-foreground mb-4">Accessibilité</h3>
                <div className="space-y-2 text-gris-charbon">
                  <p>La galerie est entièrement accessible aux personnes à mobilité réduite.</p>
                  <p>Ascenseur disponible pour accéder à tous les étages.</p>
                  <p>Fauteuils roulants disponibles sur demande à l'accueil.</p>
                </div>
              </div>
              <div className="bg-card p-6 md:p-8">
                <h3 className="text-foreground mb-4">Services</h3>
                <div className="space-y-2 text-gris-charbon">
                  <p>Vestiaire gratuit disponible à l'entrée</p>
                  <p>Audioguides disponibles en français et anglais (5€)</p>
                  <p>Visites guidées sur réservation</p>
                  <p>Boutique et café sur place</p>
                </div>
              </div>
              <div className="bg-card p-6 md:p-8">
                <h3 className="text-foreground mb-4">Règlement</h3>
                <div className="space-y-2 text-gris-charbon">
                  <p>Photographies sans flash autorisées</p>
                  <p>Les grands sacs doivent être déposés au vestiaire</p>
                  <p>Groupes de plus de 10 personnes : réservation obligatoire</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Map */}
          <div>
            <h2 className="text-foreground mb-8">Localisation & accès</h2>
            <div className="h-72 md:h-96 overflow-hidden">
              <img 
                src={mapImage} 
                alt="Carte de localisation Gallerie NUA" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-rose-nua py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-primary mb-4">Prêt à nous rendre visite ?</h2>
          <p className="text-gris-charbon mb-8 md:mb-10 max-w-xl mx-auto italic font-accent">Réservez vos billets dès maintenant pour une expérience inoubliable</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 md:px-10 py-3 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
              Réserver
            </button>
            <button className="px-8 md:px-10 py-3 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all">
              Visite de groupe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
