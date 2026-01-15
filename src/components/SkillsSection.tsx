import { Figma, Layout, Smartphone, ClipboardCheck } from "lucide-react";

const skills = [
  {
    icon: Figma,
    title: "Figma",
    description: "Wireframing, prototyping and interface design",
  },
  {
    icon: Layout,
    title: "Wireframing",
    description: "Low to high fidelity layout designs",
  },
  {
    icon: Smartphone,
    title: "Prototyping",
    description: "Interactive prototypes for user testing",
  },
  {
    icon: ClipboardCheck,
    title: "Usability Testing",
    description: "Surveys, interviews and task analysis",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl font-black text-foreground text-center mb-4">
          SKILLS AND TOOLS
        </h2>
        
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          These are the core UI/UX tools and design practices I use when working on projects, 
          from ideation to testing.
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="bg-card p-8 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-secondary rounded-lg flex items-center justify-center">
                <skill.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{skill.title}</h3>
              <p className="text-sm text-muted-foreground">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
