
import { LiaLinkedin } from "react-icons/lia";
import { BsGithub } from "react-icons/bs";

const socialLinks = [
  { icon: BsGithub, href: "https://github.com/RKlott", label: "Github" },
  { icon: LiaLinkedin, href: "https://www.linkedin.com/in/wc7", label: "Linkedin" },

];

const footerLinks = [
  { href: "#about", label: "À propos" },
  { href: "#projects", label: "Projets" },
  { href: "#experience", label: "Expérience" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/*Logo et copyright*/}
            <div className="text-center md:text-left">
              <a href="#" className="text-xl font-bold tracking-tight">
                William Cesto<span className="text-primary">.</span>
              </a>
              <p className="text-sm text-muted-foreground mt-2">
                © {currentYear} William Cesto. Tous droit réservé
              </p>
            </div>
            {/*Liens*/}
            <nav className="flex flex-wrap justify-center gap-6">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            {/*Réseau sociaux*/}
            <div className=" flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    );
}