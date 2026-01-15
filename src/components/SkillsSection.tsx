import { Figma, Layout, Smartphone, ClipboardCheck } from "lucide-react";

const skills = [
  {
    icon: Figma,
    title: "Figma",
    description: "Wireframing, prototyping and interface design",
  },
  {
    icon: Layout,
    title: "User Flows",
    description: "Creating coherent flows from concept to development",
  },
  {
    icon: Smartphone,
    title: "Prototyping",
    description: "Interactive prototypes for user testing",
  },
  {
    icon: ClipboardCheck,
    title: "User Research",
    description: "Testing, surveys, questionnaires and interviews",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl font-black text-foreground text-center mb-4">
          SKILLS AND TOOLS
        </h2>
        
        <p className="text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
          I am proficient in wireframing, prototyping, and interface design using Figma, with a strong focus on creating coherent user flows from concept to development. My strengths lie in user research and usability methods—including testing, surveys, questionnaires, and structured interviews—shaped by hands-on customer support experience with real users. This allows me to ask the right questions, uncover genuine user needs and behaviors, and apply evidence-based insights through iterative ideation to deliver practical, user-centered design solutions.
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
