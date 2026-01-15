const PhilosophySection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 text-center max-w-4xl">
        <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-8">
          MY DESIGN PHILOSOPHY
        </h2>
        
        <p className="text-muted-foreground leading-relaxed text-lg italic">
          My design philosophy is{" "}
          <span className="underline decoration-primary decoration-2 underline-offset-4">evidence-based</span> and{" "}
          <span className="underline decoration-primary decoration-2 underline-offset-4">outcome-driven</span>,{" "}
          combining deep user research, empathy, and holistic systems thinking to create clear, accessible, 
          and practical solutions that balance innovation with real-world usability.
        </p>
      </div>
    </section>
  );
};

export default PhilosophySection;
