import { Mail, Phone, Linkedin, Github } from "lucide-react";

const ContactSection = () => {
  return (
    <footer id="contact" className="py-16 bg-dark text-dark-foreground">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Copyright */}
          <div>
            <p className="font-semibold">© 2025 by EVAN TEONG JIAN KING</p>
            <p className="text-sm text-dark-foreground/60 mt-1">
              UI/UX Designer Portfolio
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap gap-8 md:gap-12">
            <div>
              <p className="text-sm font-semibold mb-1">Call</p>
              <a href="tel:+60123456789" className="text-dark-foreground/80 hover:text-primary transition-colors">
                +60 12-345 6789
              </a>
            </div>
            
            <div>
              <p className="text-sm font-semibold mb-1">Write</p>
              <a href="mailto:teong882@gmail.com" className="text-dark-foreground/80 hover:text-primary transition-colors">
                teong882@gmail.com
              </a>
            </div>
            
            <div>
              <p className="text-sm font-semibold mb-1">Follow</p>
              <div className="flex items-center gap-4 mt-1">
                <a href="#" className="text-dark-foreground/80 hover:text-primary transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-dark-foreground/80 hover:text-primary transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="text-dark-foreground/80 hover:text-primary transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Figma Link */}
        <div className="mt-8 pt-8 border-t border-dark-foreground/20 text-center">
          <a 
            href="https://www.figma.com/proto/Zn1x6rUYaMBmo1KuNBOjnD/AR-NAVIGATION-MAP?node-id=2-2&p=f&t=c1iHXedGDxRYHpKC-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A2"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            View MyCampus AR Figma Prototype →
          </a>
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;
