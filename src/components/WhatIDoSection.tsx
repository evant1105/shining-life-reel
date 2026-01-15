import { Check } from "lucide-react";

const responsibilities = [
  "Acted as the primary communication bridge between the design team and stakeholders",
  "Led front-end strategy with a focus on refining user feedback and cross-channel reasoning",
  "Took full ownership as the project spokesperson, preparing all pitch decks and guiding presentation delivery",
  "Ensured presentations went beyond visual overviews, framing them as tactical, sales-oriented narratives",
  "Clearly articulated app functionality and positioned the AR solution as a simple, effective answer to complex navigation challenges",
];

const WhatIDoSection = () => {
  return (
    <section className="py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] text-muted-foreground mb-4">
              CONTRIBUTIONS
            </p>
            <h2 className="font-display text-3xl lg:text-4xl text-foreground tracking-tight">
              What I Do
            </h2>
            <div className="w-16 h-px bg-foreground mx-auto mt-8" />
          </div>

          <ul className="space-y-6">
            {responsibilities.map((item, index) => (
              <li key={index} className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-6 h-6 border border-foreground/20 flex items-center justify-center mt-0.5 group-hover:border-foreground group-hover:bg-foreground transition-all duration-300">
                  <Check className="w-3 h-3 text-muted-foreground group-hover:text-background transition-colors duration-300" />
                </div>
                <span className="text-muted-foreground font-light leading-relaxed group-hover:text-foreground transition-colors duration-300">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhatIDoSection;