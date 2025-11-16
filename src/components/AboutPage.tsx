import galleryImage from '@/assets/e5ddc2e1f568b71da3a9f5267611fbdd44e6ddef.png';

export function AboutPage() {
  return (
    <div>
      {/* Page Header with Image */}
      <section className="relative">
        <div className="h-72 md:h-[500px] overflow-hidden">
          <img 
            src={galleryImage} 
            alt="Intérieur de la galerie ATELIER NUA" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-20 text-center">
          <h1 className="text-primary mb-6">À propos de l'ATELIER NUA</h1>
          <p className="text-gris-charbon max-w-3xl mx-auto italic font-accent text-lg">Une galerie d'art dédiée à la haute couture où l'excellence rencontre l'élégance intemporelle</p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-gris-perle py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-foreground mb-8 md:mb-12 text-center">Notre mission</h2>
            <div className="bg-card p-8 md:p-16">
              <div className="space-y-6 max-w-3xl mx-auto text-gris-charbon">
                <p className="text-lg leading-relaxed">
                  L'ATELIER NUA s'engage à célébrer l'art de la haute couture comme une forme d'expression artistique à part entière. Notre galerie offre un espace où la mode transcende le vêtement pour devenir œuvre d'art, où chaque pièce raconte une histoire d'excellence et de savoir-faire exceptionnel.
                </p>
                <p className="leading-relaxed">
                  Nous croyons que la haute couture incarne la quintessence de la créativité humaine — un mariage parfait entre tradition artisanale et innovation contemporaine. Notre mission est de préserver cet héritage tout en explorant les frontières de la création moderne.
                </p>
                <p className="leading-relaxed">
                  À travers des expositions soigneusement orchestrées, nous invitons nos visiteurs à découvrir l'univers fascinant des maisons de couture légendaires, à apprécier la minutie des détails et à comprendre le processus créatif derrière chaque création. L'ATELIER NUA est un sanctuaire dédié à l'élégance intemporelle et à l'art du raffinement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="container mx-auto px-4 md:px-6 py-12 md:py-20">
        <h2 className="text-primary mb-12 md:mb-16 text-center">Notre histoire</h2>
        <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
          <div className="flex flex-col sm:flex-row gap-6 md:gap-10 bg-card p-6 md:p-10 border border-gris-perle">
            <div className="w-full sm:w-32 flex-shrink-0 text-center">
              <div className="inline-block px-6 py-3 bg-primary/10 text-primary mb-2">
                <span className="text-lg">2000</span>
              </div>
            </div>
            <div className="flex-1 space-y-3">
              <h3 className="text-primary">La Genèse</h3>
              <p className="text-gris-charbon leading-relaxed">
                Fondation de l'ATELIER NUA dans le 8ème arrondissement de Paris, au cœur du Triangle d'Or. Notre vision : créer un espace dédié exclusivement à l'art de la haute couture, là où les créations des plus grands couturiers pourraient être admirées comme de véritables œuvres d'art.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 md:gap-10 bg-card p-6 md:p-10 border border-gris-perle">
            <div className="w-full sm:w-32 flex-shrink-0 text-center">
              <div className="inline-block px-6 py-3 bg-primary/10 text-primary mb-2">
                <span className="text-lg">2008</span>
              </div>
            </div>
            <div className="flex-1 space-y-3">
              <h3 className="text-primary">L'Expansion</h3>
              <p className="text-gris-charbon leading-relaxed">
                Rénovation complète de nos espaces d'exposition pour accueillir des collections de plus grande envergure. Première collaboration majeure avec la Maison Dior pour l'exposition "70 ans d'Excellence". Plus de 50 000 visiteurs découvrent notre nouvelle vision muséale de la mode.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 md:gap-10 bg-card p-6 md:p-10 border border-gris-perle">
            <div className="w-full sm:w-32 flex-shrink-0 text-center">
              <div className="inline-block px-6 py-3 bg-primary/10 text-primary mb-2">
                <span className="text-lg">2015</span>
              </div>
            </div>
            <div className="flex-1 space-y-3">
              <h3 className="text-primary">Reconnaissance Internationale</h3>
              <p className="text-gris-charbon leading-relaxed">
                L'ATELIER NUA devient une référence mondiale pour les expositions de haute couture. Partenariats établis avec les maisons Chanel, Yves Saint Laurent et Givenchy. Lancement de notre programme éducatif pour les jeunes créateurs et étudiants en mode.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 md:gap-10 bg-card p-6 md:p-10 border border-gris-perle">
            <div className="w-full sm:w-32 flex-shrink-0 text-center">
              <div className="inline-block px-6 py-3 bg-primary/10 text-primary mb-2">
                <span className="text-lg">2025</span>
              </div>
            </div>
            <div className="flex-1 space-y-3">
              <h3 className="text-primary">L'Ère Numérique</h3>
              <p className="text-gris-charbon leading-relaxed">
                Lancement de notre nouvelle identité visuelle et de notre plateforme digitale. L'ATELIER NUA continue d'innover en proposant des expositions immersives qui marient tradition et modernité, tout en maintenant son engagement envers l'excellence et l'authenticité de la haute couture française.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary text-primary-foreground py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16 max-w-5xl mx-auto">
            {[
              'Expositions',
              'Artistes',
              'Visiteurs',
              'Années'
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl mb-3 font-serif">
                  {['150+', '300+', '50K+', '25'][index]}
                </div>
                <p className="text-sm uppercase tracking-wider opacity-90">{stat}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 md:px-6 py-12 md:py-20">
        <h2 className="text-primary mb-4 text-center">Contactez-nous</h2>
        <p className="text-gris-charbon mb-12 text-center italic font-accent">Nous serions ravis d'échanger avec vous</p>
        <div className="max-w-2xl mx-auto bg-card p-8 md:p-12 shadow-sm">
          <div className="space-y-6">
            <div>
              <label className="block mb-3 text-sm uppercase tracking-wider text-gris-charbon">Nom</label>
              <input 
                type="text"
                className="w-full px-5 py-3 border border-gris-perle bg-background rounded-full focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="block mb-3 text-sm uppercase tracking-wider text-gris-charbon">Email</label>
              <input 
                type="email"
                className="w-full px-5 py-3 border border-gris-perle bg-background rounded-full focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="block mb-3 text-sm uppercase tracking-wider text-gris-charbon">Message</label>
              <textarea 
                rows={5}
                className="w-full px-5 py-4 border border-gris-perle bg-background rounded-2xl focus:outline-none focus:border-primary transition-colors resize-none"
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button className="px-10 py-3 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
                Envoyer
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
