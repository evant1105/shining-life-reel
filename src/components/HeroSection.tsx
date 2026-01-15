import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="about" className="min-h-screen pt-24 flex items-center bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Profile Card */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Elegant border frame */}
              <div className="absolute -inset-4 border border-foreground/10" />
              
              {/* Card */}
              <div className="bg-card border border-border p-10 max-w-sm text-center relative">
                {/* Profile Image */}
                <div className="w-44 h-44 mx-auto mb-8 overflow-hidden border border-border">
                  <img 
                    src="https://lxpnkhjpnwfluexbnkkl.supabase.co/storage/v1/object/public/images/EvanT.jpg.jpeg" 
                    alt="Evan Teong Jian King"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                
                <h2 className="font-display text-2xl text-foreground mb-2 tracking-wide">
                  EVAN TEONG JIAN KING
                </h2>
                <p className="text-xs tracking-[0.3em] text-muted-foreground mb-6">
                  PORTFOLIO
                </p>
                
                <div className="w-12 h-px bg-foreground mx-auto my-6" />
                
                <p className="text-xs tracking-widest text-muted-foreground mb-2">
                  PROJECT ROLE
                </p>
                <p className="font-display text-lg text-foreground tracking-wide">
                  UX Strategist & Stakeholder Liaison
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Introduction */}
          <div className="space-y-8">
            <div>
              <p className="text-xs tracking-[0.4em] text-muted-foreground mb-4">
                CREATIVE PROFESSIONAL
              </p>
              <h1 className="font-display text-6xl lg:text-7xl text-foreground leading-[0.95] tracking-tight">
                UI/UX
                <br />
                <span className="font-display italic">Designer</span>
              </h1>
            </div>
            
            <p className="text-muted-foreground font-light tracking-wide">
              Discover my work 
            </p>
            
            {/* Buttons Removed Here */}
            
            <div className="pt-6 border-t border-border">
              <p className="text-foreground/80 leading-relaxed font-light">
                Hi, I'm Evan Teong Jian King, a Degree student in Information Technology pursuing{" "}
                <span className="text-foreground font-medium">computer-generated user experience design</span>, focusing on the interface point of artificial intelligence and human-oriented systems. With almost 5 years of{" "}
                <span className="text-foreground font-medium">customer service experience in the financial sector</span>, combined with my IT knowledge, I can{" "}
                <span className="text-foreground font-medium">pinpoint important needs from end users</span> and provide solutions through critical thinking. I believe good design should feel simple, intuitive, and accessible to everyone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;