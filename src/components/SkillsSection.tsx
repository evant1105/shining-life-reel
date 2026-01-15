import { Figma, Layout, Smartphone, ClipboardCheck } from "lucide-react";

const skills = [
  {
    icon: Figma,
    title: "Figma Design",
    description: "Wireframing, prototyping, and interface design",
  },
  {
    icon: Layout,
    title: "User Flows",
    description: "Creating coherent flows from concept to development",
  },
  {
    icon: Smartphone,
    title: "Prototyping",
    description: "Interactive mobile and web prototypes",
  },
  {
    icon: ClipboardCheck,
    title: "User Research",
    description: "Testing, surveys, questionnaires and interviews",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-28 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.4em] text-muted-foreground mb-4">
            EXPERTISE
          </p>
          <h2 className="font-display text-3xl lg:text-4xl text-foreground tracking-tight">
            Skills & Tools
          </h2>
          <div className="w-16 h-px bg-foreground mx-auto mt-8 mb-12" />
        </div>
        
        <p className="text-center text-muted-foreground mb-20 max-w-3xl mx-auto font-light leading-relaxed">
          I am proficient in wireframing, prototyping, and interface design using Figma, with a strong focus on creating coherent user flows from concept to development. My strengths lie in user research and usability methods—including testing, surveys, questionnaires, and structured interviews—shaped by hands-on customer support experience with real users. This allows me to ask the right questions, uncover genuine user needs and behaviors, and apply evidence-based insights through iterative ideation to deliver practical, user-centered design solutions.
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="bg-card border border-border p-8 text-center group hover:border-foreground transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-6 border border-border flex items-center justify-center group-hover:border-foreground group-hover:bg-foreground transition-all duration-300">
                <skill.icon className="w-7 h-7 text-foreground group-hover:text-background transition-colors duration-300" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-3 tracking-wide">
                {skill.title}
              </h3>
              <p className="text-muted-foreground text-sm font-light">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;