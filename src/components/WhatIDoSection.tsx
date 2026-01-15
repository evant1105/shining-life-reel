const responsibilities = [
  "Conduct basic user research to understand needs and pain points",
  "Delegate all the tasks to my team members",
  "Create project website",
  "Create high fidelity prototypes to communicate ideas",
  "Improve usability through testing and iteration",
  "Design clean, structured, and user-friendly interfaces",
];

const WhatIDoSection = () => {
  return (
    <section className="py-24 bg-dark text-dark-foreground">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Title */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              What I Do /
              <br />
              UX Roles I
              <br />
              Take
            </h2>
            <div className="w-12 h-1 bg-primary mt-6" />
          </div>

          {/* Right - List */}
          <div>
            <h3 className="text-lg font-semibold mb-6">What I Do</h3>
            <ul className="space-y-3">
              {responsibilities.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-dark-foreground/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIDoSection;
