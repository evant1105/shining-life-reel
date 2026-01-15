const PhilosophySection = () => {
  return (
    <section className="py-28 bg-foreground text-background">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <p className="text-xs tracking-[0.4em] text-background/60 mb-4">
          APPROACH
        </p>
        <h2 className="font-display text-3xl lg:text-4xl mb-10 tracking-tight">
          Design Philosophy
        </h2>
        
        <div className="w-16 h-px bg-background/30 mx-auto mb-10" />
        
        <p className="text-background/80 leading-relaxed text-lg font-light italic">
          My design philosophy is{" "}
          <span className="text-background font-medium not-italic">evidence-based</span> and{" "}
          <span className="text-background font-medium not-italic">outcome-driven</span>,{" "}
          combining deep user research, empathy, and holistic systems thinking to create clear, accessible, 
          and practical solutions that balance innovation with real-world usability.
        </p>
      </div>
    </section>
  );
};

export default PhilosophySection;