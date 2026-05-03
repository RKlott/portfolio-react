import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Écrire du code maintenable et évolutif qui résiste à l’épreuve du temps.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimiser la vitesse et offrir une expérience utilisateur ultra‑fluide et rapide.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Travailler en étroite collaboration avec les équipes pour concrétiser les idées. ",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Rester à la pointe des dernières technologies et des bonnes pratiques. ",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/*Colonne de gauche*/}
          <div className="space-y-8">
            <div className="animate-fade-in ">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                A propos de moi
              </span>
            </div>
            <h2
              className=" text-4xl md:text-5xl font-bold leading-tight animate-fade-in 
                                        animation-delay-100 text-secondary-foreground"
            >
              Construisons le futur,
              <span className="font-serif italic font-normal text-white">
                {" "}
                un composant, un projet à la fois.
              </span>
            </h2>
            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                Passionné par le développement web, j'aime transformer des idées
                complexes en interfaces fluides et interactives. Mon parcours
                est guidé par une volonté constante de comprendre comment
                l'architecture du code peut améliorer l'expérience de
                l'utilisateur final.
              </p>
              <p>
                Polyvalent sur l'ensemble de ma stack, je conçois aussi bien des
                sites vitrines élégants que des applications web dynamiques et
                robustes. Mon approche repose sur une intégration soignée au
                pixel près et une gestion efficace des données, garantissant des
                solutions performantes et scalables.
              </p>
              <p>
                Toujours en veille technologique, je consacre mon temps libre à
                explorer les nouvelles avancées de l'IA et à perfectionner mes
                méthodes de développement. Mon objectif est simple : relever de
                nouveaux défis techniques tout en contribuant à des projets
                innovants.
              </p>
            </div>
            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                Ma mission est de bâtir des solutions numériques modernes,
                pensées pour être aussi agréables à parcourir pour les
                utilisateurs qu'à faire évoluer pour les équipes techniques.
              </p>
            </div>
          </div>
          {/*Colonne de droite - highligts*/}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, id) => (
              <div
                key={id}
                className="glass rounded-2xl p-6 animate-fade-in"
                style={{ animationDelay: `${id + 1 * 100}ms` }}
              >
                <div
                  className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center 
                                        mb-4 hover:bg-primary/200"
                >
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
