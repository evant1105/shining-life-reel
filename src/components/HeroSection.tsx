import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="about" className="min-h-screen pt-20 flex items-center">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Profile Card */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Background shape */}
              <div className="absolute -left-8 top-0 bottom-0 w-32 bg-secondary -z-10" />
              
              {/* Card */}
              <div className="bg-card shadow-xl p-8 max-w-sm text-center">
                {/* Profile Image */}
                <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-secondary overflow-hidden">
                  <img 
                    src="https://lxpnkhjpnwfluexbnkkl.supabase.co/storage/v1/object/public/images/EvanT.jpg.jpeg" 
                    alt="Evan Teong Jian King"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h2 className="text-xl font-bold text-foreground mb-2">
                  EVAN TEONG JIAN KING
                  <br />
                  PORTFOLIO
                </h2>
                
                <div className="w-8 h-0.5 bg-primary mx-auto my-4" />
                
                <p className="text-sm font-semibold text-foreground mb-1">
                  PROJECT ROLE:
                </p>
                <p className="text-lg font-bold text-foreground mb-4">
                  UX STRATEGIST & STAKEHOLDER LIAISON
                </p>
                
                <p className="text-xs tracking-widest text-muted-foreground">
                  PROFESSIONAL PORTFOLIO
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Introduction */}
          <div className="space-y-6">
            <div>
              <h1 className="text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                UI/UX
              </h1>
              <h1 className="text-5xl lg:text-6xl font-black text-foreground">
                DESIGNER
              </h1>
            </div>
            
            <p className="text-lg text-muted-foreground">
              Discover my work and experience
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6">
                SKILLS & TOOLS
              </Button>
              <Button variant="outline" className="border-foreground text-foreground hover:bg-foreground hover:text-background px-6">
                PROJECTS
              </Button>
            </div>
            
            <div className="pt-4">
              <p className="text-foreground leading-relaxed">
                Hi, I'm Evan Teong Jian King, a Degree student in Information Technology pursuing{" "}
                <span className="bg-highlight/30">computer-generated user experience design</span>, focusing on the interface point of artificial intelligence and human-oriented systems. With almost 5 years of{" "}
                <span className="bg-highlight/30">customer service experience in the financial sector</span>, combined with my IT knowledge, I can{" "}
                <span className="bg-highlight/30">pinpoint important needs from end users</span> and provide solutions through critical thinking. I believe good design should feel simple, intuitive, and accessible to everyone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
