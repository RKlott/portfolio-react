import {ArrowUpRight} from "lucide-react";
import { BsGithub } from "react-icons/bs";
import {AnimatedBorderButton} from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "Portfolio",
    description:
      "Mon portfolio personnel pour présenter mes projets et compétences.",
    image: "/projectImage",
    tags: ["React", "Tailwind CSS"],
    link: "#",
    github: "https://github.com/RKlott/portfolio-react",
  },
  {
    title: "Ecom-Shop",
    description:
      "Application Web E-Commerce développée en Symfony, réalisée pour monter en compétences sur ce framework.",
    image: "/projectImage",
    tags: ["PHP", "Symfony 6.x", "Twig", "Bootstrap", "MySQL (Doctrine ORM)"],
    link: "#",
    github: "https://github.com/RKlott/e-commerce_symfony",
  },
  {
    title: "Symf-Library",
    description:
      "Application Web fictive de gestion de bibliothèque, réalisée pour découvrir Symfony et ses capacités.",
    image: "/projectImage",
    tags: ["PHP", "Symfony 6.x", "Twig", "Bootstrap", "MySQL (Doctrine ORM)"],
    link: "#",
    github: "https://github.com/RKlott/gestionnaire_bibliotheque",
  },
  {
    title: "Globule Factory Fighters",
    description:
      "Application Web réalisée en PHP au cours de ma formation Dev. Web & Web Mobile (BAC+2) pour la section sport de combat de Globule Fitness",
    image: "/projectImage",
    tags: ["PHP", "JavaScript", "SASS", "MySQL"],
    link: "#",
    github: "https://github.com/RKlott/gestionnaire_bibliotheque",
  },
  {
    title: "Meteo Application",
    description:
      "Application Météo réalisé pour m'exercer au requêtage et à la récupération d'information d'API en JS.",
    image: "/projectImage",
    tags: ["JavaScript", "Tailwind CSS"],
    link: "#",
    github: "https://github.com/RKlott/gestionnaire_bibliotheque",
  },
  {
    title: "Swing Software",
    description:
      "L'une des premières applications que j'ai réalisé en Java pour apprendre les bases du langage.",
    image: "/projectImage",
    tags: ["Java"],
    link: "#",
    github: "https://github.com/RKlott/SwingSoftware",
  },
  {
    title: "Origins API",
    description:
      "Petite API réalisée pour servir de tronc pour le développement d'un network mini-jeux et multi-serveurs sur Minecraft.",
    image: "/projectImage",
    tags: ["Java", "MySQL"],
    link: "#",
    github: "https://github.com/RKlott/gestionnaire_bibliotheque",
  },
  {
    title: "Plugin SkyWars",
    description:
      "Plugin 'SkyWars' réalisé pour un serveur mini-jeux sur Minecraft.",
    image: "/projectImage",
    tags: ["Java", "MySQL"],
    link: "#",
    github: "https://github.com/RKlott/-MC-Plugin-Skywars",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background Brillant  */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section  */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animation-fade-in">
            Travaux vedettes
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projets
            <span className="font-serif italic font-normal text-white">
              {" "}
              qui font la différence
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Une petite sélection de travaux qui m'ont tenu à coeur et qui ont
            joué dans ma montée en compétences, du plus récent au plus ancien.
          </p>
        </div>
        {/* Projet avec grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, id) => (
            <div
              key={id}
              className="group glass rounded-2xl overflow-hidden md:row-span-1 animate-fade-in"
              style={{ animationDelay: `${id + 1 * 100}ms` }}
            >
              {/* Image des projets */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60" />

                {/* Liens overlay */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href={project.link} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                        <ArrowUpRight className="w-5 h-5"/>
                    </a>
                    <a href={project.github} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                        <BsGithub className="w-5 h-5"/>
                    </a>
                </div>

                {/* Contenu */}
                <div className="p-6 space-y-4">
                    <div className="flex items-start justify-between">
                        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                            {project.title}
                        </h3>
                        <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:translate-y-1 transition-all"/>
                    </div>
                    <p className="text-muted-foreground text-sm">
                        {project.tags.map((tag, tagId) => (
                            <span key={tagId} className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">
                                {tag}
                            </span>
                        ))}
                    </p>
                </div>
              </div>
            </div>
          ))}
        </div>
          {/* Vue de tout les projets */}
          <div className="text-center mt-12 animate-fade-in animation-delay-500">
            <a href="http://github.com/RKlott" target="_blank">
                <AnimatedBorderButton>
                Voir tous les projets
                <ArrowUpRight className="w-5 h-5"/>
            </AnimatedBorderButton>
            </a>
            
          </div>
      </div>
    </section>
  );
};
