const experiences = [
  {
    period: "Début 2026 (12 Mois)",
    role: "Formation Concepteur Développeur d'Applications",
    company: "AFPA Bègles",
    description:
      "En formation pour passer le Titre Professionnel Concepteur Développeur d'Applications (BAC+3/4).",
    technologies: [
      "HTML5",
      "CSS3",
      "Php",
      "Symfony",
      "React",
      "React Native",
      "TypeScript",
      "JavaScript",
      "MySQL",
      "MongoDB",
      "Firebase",
      "Docker",
      "Git",
      "GitHub Actions",
      "IA",
      "Tailwind CSS",
      "SASS",
      "Bootstrap",
    ],
    current: true,
  },
  {
    period: "2025 (2 Mois)",
    role: "Stage Développeur FullStack",
    company: "Globule Fitness",
    description:
      "Réalisation d'une application web pour la section sport de combat de cette salle de sport.",
    technologies: [
      "HTML5",
      "CSS3",
      "Php",
      "Javascript",
      "MySQL",
      "Git",
      "SASS",
    ],
    current: false,
  },
  {
    period: "2024 - 2025",
    role: "Formation Développeur Web & Web Mobile",
    company: "AFPA Bègles",
    description:
      "En formation pour passer le Titre Professionnel Développeur Web & Web Mobile (BAC+2).",
    technologies: [
      "HTML5",
      "CSS3",
      "Php",
      "JavaScript",
      "MySQL",
      "MongoDB",
      "Tailwind CSS",
      "SASS",
      "Git",
      "Docker",
    ],
    current: false,
  },
  {
    period: "Février 2022 - Septembre 2022",
    role: "Formation Développeur Web",
    company: "Openclassrooms",
    description:
      "Formation de quelques mois en Développement Web réalisée à distance sans obtention de titre/diplôme.",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "MySQL",
      "MongoDB",
      "React",
      "SASS",
      "Git",
    ],
    current: false,
  },
  {
    period: "2020 - 2022",
    role: "Auto-formation Développeur Java",
    company: "Autodidacte",
    description:
      "Formation continue en autodidacte pour monter en compétences en Java.",
    technologies: ["Java", "MySQL", "Git"],
    current: false,
  },
  {
    period: "2016 - 2019",
    role: "Bac Professionnel Systèmes Numériques",
    company: "Lycée Professionnel de Chateauboeuf (Martinique)",
    description:
      "Bac Professionnel choisi pour me sensibiliser au développement tout en élargissant ma vision des métiers et systèmes numériques.",
    technologies: ["HTML5", "CSS3", "C++", "C", "C#"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full 
                           blur-3xl -translate-y-1/2"
      />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-sm font-medium tracking-wider 
                                   uppercase animate-fade-in"
          >
            Parcours professionnel
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100
               text-secondary-foreground"
          >
            Expérience{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              pertinentes
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Le parcours de mon évolution pro : du débutant curieux au
            développeur que je suis en train de devenir !
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div
            className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0
                    w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent
                    md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]"
          />
          
        </div>
      </div>
    </section>
  );
};
