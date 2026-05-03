import {Button} from "../components/button";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import {ArrowRight, Download, ChevronDown} from "lucide-react";
import { LiaLinkedin } from "react-icons/lia";
import { BsGithub } from "react-icons/bs";

const skills = [
  "Java",
  "Symfony",
  "PHP",
  "JavaScript",
  "React",
  "React Native",
  "Node.js",
  "Tailwind CSS",
  "SASS",
  "Figma",
  "Git",
  "GitHub Actions",
  "MongoDB",
  "SQL"
];

const positions = [...Array(20)].map(() => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    animationDuration: `${15 + Math.random() * 20}s`,
    animationDelay: `${Math.random() * 5}s`,
}));

export const Hero = () => {
  return (

    <section className="relative min-h-screen flex flex-col items-center overflow-hidden">
      
      {/* BACKGROUND : On l'isole avec w-full h-full */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="/projectImage/hero-banner.jpg" // Note: retire ../../public en mode dev (Vite/Next)
          alt="Hero Banner"
          className="w-full h-full object-cover opacity-40" 
        />
        {/* Gradient de recouvrement */}
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background"></div>

        {/* Particules */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {positions.map((pos, index) => (
            <div
              key={index}
              className="absolute w-5 h-5 opacity-50"
              style={{
                backgroundColor: "#0a970a",
                top: pos.top,
                left: pos.left,
                animation: `slow-drift ${pos.animationDuration} ease-in-out infinite`,
                animationDelay: pos.animationDelay,
              }}
            />
          ))}
        </div>
      </div>

      {/* CONTENU PRINCIPAL : Il est au même niveau que le background, pas dedans */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"/>
                Software
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-right animate-fade-in">
                Développeur <span className="text-primary glow-text">Fullstack</span>
                <br />
                passionné par le code 
                <br />
                <span className="font-serif italic font-normal text-white">
                  et les défis web.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-800">
                Mes salutations, je m'appelle William Cesto - Je mets ma passion pleinement à votre profit en vous proposant des solutions digitales adaptées à vos besoins.
              </p>
            </div>

            <div className="flex gap-4">
              <a href="#contact">
                <Button 
                size="lg"
                className="animate-fade-in animation-delay-800">Contactez-moi <ArrowRight className="w-5 h-5" /></Button>
                </a>
                <AnimatedBorderButton>
                    <Download className="w-5 h-3"/>
                    Download CV
                </AnimatedBorderButton>
            </div>

            {/* Réseaux Sociaux */}
             <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                <span className="text-sm text-muted-foreground">
                  Suivez-moi :{" "}
                </span>
                {[
                  { icon: BsGithub, href: "https://github.com/RKlott" },
                  {
                    icon: LiaLinkedin,
                    href: "https://www.linkedin.com/in/wc7/",
                  },

                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  >
                    {<social.icon className="w-5 h-5" />}
                  </a>
                ))}
              </div>
            </div>
          {/* Colonne de droite image de profil */}
          <div className="relative animate-fade-in animation-delay-300">
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/30 via-transparent to primary/10 blur-2xl animate-pulse" />
            
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img src="/projectImage/my-picture.png" alt="" className="w-full aspect-4/5 object-cover rounded-2xl" />
                {/* Badge Flottant */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-2 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Disponible pour de nouvelles opportunités !
                    </span>
                  </div>
                </div>

                {/* Stats du badge */}
                <div className="absolute -top-2.5 -left-0.5 glass rounded-xl px-3 py-2 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">Dev.</div>
                  <div className="text-xs text-muted-foreground">Junior</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technologies */}
      <div className="mt-20 animate-fade-in animation-delay-600">
        <p className="text-sm text-muted-foreground mb-6 text-center">
          Technologies pratiquées
        </p>
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee">
            {[...skills, ...skills].map((skill, id) => (
              <div key={id} className="shrink-0 px-8 py-4">
                <span className="text-xl font-semibold text-muted-foreground/50 hover:text-secondary-foreground transition-colors">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
            <a href="#about" className="flex flex-col items-centerr gap-2 text-secondary-foreground hover:text-primary transition-colors">
              <span className="text-xs uppercase tracking-wider">Scroll</span>
              <ChevronDown className="w-6 h-6  animate-bounce" />
            </a>
      </div>
     
    </section>
  );
};