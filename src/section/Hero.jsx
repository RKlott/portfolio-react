import Button from "@/components/button";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import {ArrowRight, Download} from "lucide-react";
import { LiaLinkedin } from "react-icons/lia";
import { BsGithub } from "react-icons/bs";

const positions = [...Array(20)].map(() => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    animationDuration: `${15 + Math.random() * 20}s`,
    animationDelay: `${Math.random() * 5}s`,
}));

export const Hero = () => {
  return (

    <section className="relative min-h-screen flex items-center overflow-hidden">
      
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
                Mes salutations, je suis William Cesto - J'exploite pleinement ma passion en vous proposant des solutions digitales adaptées à vos besoins.
              </p>
            </div>

            <div className="flex gap-4">
                <Button 
                href="#contact"
                size="lg"
                className="animate-fade-in animation-delay-800">Contactez-moi <ArrowRight className="w-5 h-5" /></Button>
                <AnimatedBorderButton>
                    <Download className="w-5 h-3"/>
                    Download CV
                </AnimatedBorderButton>
            </div>

            {/* Réseaux Sociaux */}
            <div className="flex items-center-gap-4 animate-fade-in animation-delay-400">
                <span className="text-sm text-muted-foreground">Suivez-moi :</span>
                {[
                    {icon: BsGithub, href: "https://github.com/RKlott"},
                    {icon: LiaLinkedin, href: "https://www.linkedin.com/in/wc7"},

                ].map((social, i) => {
                    <a key={i} href={social.href} className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300">
                        {<social.icon className="w-5 h-5"/>}
                    </a>
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};