import { Linkedin, Github, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <footer id="contact" className="py-20 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          {/* Copyright */}
          <div>
            <p className="font-display text-xl tracking-wide">© 2025 by EVAN TEONG JIAN KING</p>
            <p className="text-sm text-background/50 mt-2 tracking-widest">
              UI/UX Designer Portfolio
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap gap-12 md:gap-16">
            <div>
              <p className="text-xs font-medium mb-2 tracking-widest text-background/60">CALL</p>
              <a href="tel:+60123456789" className="text-background/80 hover:text-background transition-colors font-light">
                +60 12-345 6789
              </a>
            </div>
            
            <div>
              <p className="text-xs font-medium mb-2 tracking-widest text-background/60">WRITE</p>
              <a href="mailto:teong882@gmail.com" className="text-background/80 hover:text-background transition-colors font-light">
                teong882@gmail.com
              </a>
            </div>
            
            <div>
              <p className="text-xs font-medium mb-2 tracking-widest text-background/60">FOLLOW</p>
              <div className="flex items-center gap-5 mt-1">
                <a href="#" className="text-background/60 hover:text-background transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-background/60 hover:text-background transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="text-background/60 hover:text-background transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Figma Link */}
        <div className="mt-12 pt-8 border-t border-background/10 text-center">
          <a 
            href="https://www.figma.com/proto/Zn1x6rUYaMBmo1KuNBOjnD/AR-NAVIGATION-MAP?node-id=2-2&p=f&t=c1iHXedGDxRYHpKC-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A2"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-background/60 hover:text-background transition-colors text-sm tracking-wide"
          >
            View MyCampus AR Figma Prototype →
          </a>
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;